<template lang="">
    <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name:'entry', params:{id:10}})"
    >
        <!-- title -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">19 </span>
            <span class="mx-1 fs-5">Julio </span>
            <span class="mx-2 fs-6 fw-light">2023, Lunes.</span>
        </div>
        <div class="entry-description fs-6">
            {{entry.text}}
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            entry:{
                type: Object,
                required: true,
            }
        }
    }
</script>

<style lang="scss" scoped>
$primary: #41b883;

.entry-container {
    border-bottom: 1px solid $primary;
    transition: .2s all ease-in;

    &:hover {
        // lighten  is a built in function of scss to be more clear a color
        background-color: lighten($color: grey, $amount: 45);
        transition: .2s all ease-in;
    }
}

.entry-description {
    text-align: start;
}
</style>