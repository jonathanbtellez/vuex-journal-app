<template lang="">
    <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name:'entry', params:{id:entry.id}})"
    >
        <!-- title -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">{{day}} </span>
            <span class="mx-1 fs-5">{{month}} </span>
            <span class="mx-2 fs-6 fw-light">{{yearDay}}</span>
        </div>
        <div class="entry-description fs-6">
            {{shortText}}
        </div>
    </div>
</template>
<script>
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
export default {
    props: {
        entry: {
            type: Object,
            required: true,
        }
    },
    computed: {
        shortText() {
            return (this.entry.text.length > 130) ? this.entry.text.substring(0, 130) + '...' : this.entry.text;
        },
        day(){
            const date = new Date(this.entry.date);
            return date.getDate();
        },
        month(){
            const date = new Date(this.entry.date);
            return months[date.getMonth()];
        },
        yearDay(){
            const date = new Date(this.entry.date);
            return `${ date.getFullYear() }, ${ days[date.getDay()] }`;
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