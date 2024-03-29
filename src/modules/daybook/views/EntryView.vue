<template lang="">
    <template v-if="entry">

        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{day}}</span>
                <span class="mx-1 fs-3">{{month}}</span>
                <span class="mx-2 fs-4 fw-light">{{yearDay}}</span>
            </div>
            <div>
                <input 
                    type="file" 
                    @change="onSelectedImage" 
                    ref="imageSelector"
                    v-show="false"
                    accept="image/png, image/jpeg"/>
                <button v-if="entry.id" @click="onDeleteEntry" class="btn btn-danger mx-2">
                    <i class="fa fa-trash-alt"></i>                
                    Delete
                </button>
                <button class="btn btn-primary mx-2" @click="onSelectImage">
                    <i class="fa fa-upload"></i>                
                    Subir foto
                </button>            
            </div>
        </div>
        <hr>
        <div class="d-flex flex-column px-3 h-75">
            <textarea
                v-model="entry.text" 
                placeholder="¿Que sucedio hoy?"
            ></textarea>
        </div>
        <img v-if="entry.picture && !localImage" :src="entry.picture" alt="entry-picture" class="img-thumbnail"/>
        <img v-if="localImage" :src="localImage" alt="entry-picture" class="img-thumbnail"/>
    
    </template>
    <FabComponent 
    icon="fa-save"
    @on:click="saveEntry()"

    />
</template>
<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex';
import Swal from 'sweetalert2'

import getDayMonthYear from '../helpers/getDayMonthYear';
import uploadImages from '../helpers/uploadImage';
export default {
    props: {
        //received the prop from the router
        id: {
            type: String,
            required: true
        }
    },
    components: {
        FabComponent: defineAsyncComponent(() => import('../components/FabComponent.vue'))
    },
    data() {
        return {
            entry: null,
            localImage: null,
            file: null
        }
    },
    computed: {
        ...mapGetters('journal', ['getEntryById']),
        day() {
            const { day } = getDayMonthYear(this.entry.date);
            return day;
        },
        month() {
            const { month } = getDayMonthYear(this.entry.date);
            return month;
        },
        yearDay() {
            const { yearDay } = getDayMonthYear(this.entry.date);
            return yearDay;
        }
    },
    methods: {
        loadEntry() {

            let entry
            if (this.id === 'new') {
                entry = {
                    date: new Date().getTime(),
                    text: ""
                }
            } else {
                entry = this.getEntryById(this.id)
                if (!entry) return this.$router.push({ name: 'no-entry' })
            }
            this.entry = entry;
            this.localImage = this.entry.picture
            this.file = this.entry.picture
        },
        /**
         * This method is dispached when the fab button is click activating the on:event
         */
        ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),
        async saveEntry() {
            new Swal({
                title: 'Please wait',
                allowOutsideClick: false
            });
            
            Swal.showLoading()
            
            // Use the helpers funtion to save the image in a cloud
            const picture = await uploadImages(this.file)
            
            // saving the image in the entry
            this.entry.picture = picture
            
            if (this.entry.id) {
                // Call update entry action
                await this.updateEntry(this.entry);
            } else {
                // Call create entry action
                const id = await this.createEntry(this.entry)
                // Redirect to a entry view
                this.$router.push({ name: 'entry', params: { id } })
            }
            this.localImage = null
            this.file = null
            Swal.fire('Saved', 'The register was saved', 'success')
            this.loadEntry()
        },
        async onDeleteEntry() {
            const { isConfirmed } = await Swal.fire({
                title: ' Are you sure?',
                text: 'If you delete this content, you can not recovery it after',
                showDenyButton: true,
                confirmButtonText: 'Yes, I am sure!'

            });

            if (isConfirmed) {
                new Swal({
                    title: 'Please wait',
                    allowOutsideClick: false
                });

                Swal.showLoading()
                await this.deleteEntry(this.entry.id)
                //Redirect the user to entry 
                this.$router.push({ name: 'no-entry' })
                Swal.fire('Deleted', '', 'success')
            }
        },
        onSelectedImage(event) {
            const file = event.target.files[0];

            // Validate is a image was sended
            if (!file) {
                // If the send of the image was cnacel the picture will be null
                this.localImage = null;
                this.file = this.entry.picture;
                return
            }
            this.file = file

            // This is a javascript built-in object to manage files
            const fr = new FileReader()
            // 1. wait for the element charge the save he result in the localImage
            // 2. Use the method readAsDataURL() and send the file to save
            fr.onload = () => this.localImage = fr.result
            fr.readAsDataURL(file)

        },
        onSelectImage() {
            // Using refs we can manage an node and use the events or fn that we need
            this.$refs.imageSelector.click()
        }
    },
    created() {

        this.loadEntry();
    },
    watch: {
        id() {
            this.loadEntry();
        }
    }
}
</script>
<style lang="scss" scoped>
textarea {
    border: none;
    font-size: 20px;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: .2);
}
</style>