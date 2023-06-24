<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text" class="form-control" placeholder="Search entries" 
                v-model="term"
            />
        </div>
        <div class="entry-scrollarea">
            <h2 v-for="entry in entriesByTerm" :key="entry.id"><EntryComponent :entry=entry /></h2>
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
export default {
    components: {
        EntryComponent: defineAsyncComponent(()=> import("../components/EntryComponent.vue"))
    },
    data() {
        return {
            term: ""
        }
    },
    computed: {
        // Use the journal store to get the entries
        // When we use mapGetters, we use first the name of the module and second list of maps
        ...mapGetters("journal",["getEntriesByTerm"]),
        // Applying the filter to the entries
        entriesByTerm (){
            // Using the mrthod maped to get the filtered entries
            return this.getEntriesByTerm(this.term);
        }
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
    height: calc(100vh - 119px);
    overflow: scroll;
}
</style>