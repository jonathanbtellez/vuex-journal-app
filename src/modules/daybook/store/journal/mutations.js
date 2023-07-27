
// the mutations are use to update the state in vuex
// export const myMutations = (state)=>{
// }

/**
 * This method do a mutation that set the new entries to the state
 * @param {Vuex state} state 
 * @param {Array} entries 
 */
export const setEntries = (state, entries)=>{
    // Get the entries attribute and update in a new array 
    // Spreading the state.entries including the new array entries
    state.entries= [...state.entries, ...entries]
    
    // state.isLoading = false
    updateLoading(state)
}

export const updateEntry = (/*state*/)=>{
    
}

export const addEntry = (/*state*/)=>{
    
}

/**
 * Update the value of the state where will be need
 * @param {vuex state} state 
 * @param {Boolean} isLoading 
 */
export const updateLoading = (state)=>{
    state.isLoading = !state.isLoading;
}