<template>
    <NavbarComponent/>
    <template v-if="isLoading">
        <IsLoadingComponent />
    </template>
    <template v-else>
        <div class="d-flex">
            <div class="col-4">
                <EntryList/>
            </div>
            <div class="col">
                <router-view></router-view>
            </div>
        </div>
    </template>
</template>
<script>
    import {defineAsyncComponent} from 'vue'
    import {mapActions, mapState} from 'vuex'
    export default {
    components:{
        NavbarComponent: defineAsyncComponent(()=> import('../components/NavbarComponent.vue')),
        EntryList: defineAsyncComponent(()=> import('../components/EntryListComponent.vue')),
        IsLoadingComponent: defineAsyncComponent(()=>import('../components/IsLoadingComponent.vue'))             
    },

    computed:{
        //Getting the state of vuex using mapState
        ...mapState('journal',['isLoading'])
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

<style scoped>
    .component-animation {
        transition: all 3s ease-out;
    }
</style>