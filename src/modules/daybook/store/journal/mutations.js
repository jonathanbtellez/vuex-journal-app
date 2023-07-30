
// the mutations are use to update the state in vuex
// export const myMutations = (state)=>{
// }


/**
 * This method do a mutation that set the new entries to the state
 * @param {Vuex state} state 
 * @param {Array} entries 
 */
export const setEntries = (state, entries) => {
    // Get the entries attribute and update in a new array 
    // Spreading the state.entries including the new array entries
    state.entries = [...state.entries, ...entries]

    // state.isLoading = false
    updateLoading(state)
}

export const updateEntry = (state, entry) => {//entry updated
    // state.entries =>  find in an array and id
    // Find the index of the new entry
    const idx = state.entries.map(e => e.id).indexOf(entry.id)
    // state.entry => ...update
    // update the reactive object
    state.entries[idx] = entry

}


export const addEntry = (state, entry) => {
    state.entries = [entry, ...state.entries]
}
/**
 * Update the value of the state where will be need
 * @param {vuex state} state 
 * @param {Boolean} isLoading 
 */
export const updateLoading = (state) => {
    state.isLoading = !state.isLoading;
}

export const deleteMutation = (state, id) => {
    // TODO: delete entry

    const newEntryList = state.entries.filter(e => e.id !== id);
    console.log(newEntryList);
    state.entries = newEntryList
}