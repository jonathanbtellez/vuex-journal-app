<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text" class="form-control" placeholder="Search entries" />
        </div>
        <div class="entry-scrollarea">
            <h2 v-for="item in 100" :key="item"><EntryComponent/></h2>
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
    components: {
        EntryComponent: defineAsyncComponent(()=> import("../components/EntryComponent.vue"))
    }
}
</script>
<style lang="scss" scoped>
$primary: #35495e;

input {
    height: 55px;
}

.entry-list-container {
    color: $primary;
    border-right: 1px solid $primary;
    height: calc(100vh - 56px);
}

.entry-scrollarea {
    height: calc(100vh - 115px);
    overflow: scroll;
}
</style>