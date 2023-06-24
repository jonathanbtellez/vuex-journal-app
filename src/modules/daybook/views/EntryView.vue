<template lang="">
    <template v-if="entry">

        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{day}}</span>
                <span class="mx-1 fs-3">{{month}}</span>
                <span class="mx-2 fs-4 fw-light">{{yearDay}}</span>
            </div>
            <div>
                <button class="btn btn-danger mx-2">
                    Delete
                    <i class="fa fa-trash-alt"></i>                
                </button>
                <button class="btn btn-primary mx-2">
                    Subir foto
                    <i class="fa fa-upload"></i>                
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
        <img src="https://www.hindustantimes.com/ht-img/img/2023/04/07/1600x900/jujutsu-kaisen_1680853025638_1680853037810_1680853037810.jpeg" alt="entry-picture" class="img-thumbnail"/>
    </template>
    <FabComponent 
    icon="fa-save"
    />
</template>
<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex';
import getDayMonthYear from '../helpers/getDayMonthYear';
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
            entry: null
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
            const entry = this.getEntryById(this.id)
            if (!entry) return this.$router.push({ name: 'no-entry' })
            this.entry = entry;
        }
    },
    created() {
        this.loadEntry();
        console.log(this.id)
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