<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">There are not nothing selected</h1>
    </div>
    <FabComponent 
        @on:click="goToNewEntry"
    />
</template>
<script>
import { defineAsyncComponent } from 'vue';
export default {
    components: {
        FabComponent: defineAsyncComponent(() => import('../components/FabComponent.vue'))
    },
    methods:{
        goToNewEntry(){
            this.$router.push({name: 'entry', params: {id:'new'}});
        }
    }
}
</script>
<style lang="scss" scoped>
div {
    height: 100%;
}
</style>