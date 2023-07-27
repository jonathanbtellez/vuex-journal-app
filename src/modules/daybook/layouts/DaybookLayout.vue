<template>
    <NavbarComponent/>
    <div class="d-flex">
        <div class="col-4">
            <EntryList/>
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import {defineAsyncComponent} from 'vue'
    import {mapActions} from 'vuex'
    export default {
    components:{
        NavbarComponent: defineAsyncComponent(()=> import('../components/NavbarComponent.vue')),
        EntryList: defineAsyncComponent(()=> import('../components/EntryListComponent.vue'))             
    },
    methods: {
        // Fetching the actions of jounarl module
        ...mapActions('journal', ['loadEntries'])
    },
    created() {
        this.loadEntries()
    },
}
</script>