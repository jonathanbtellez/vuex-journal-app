
// The getters are functions that can be used to get data from the state.
// export const myGetters = (state)=>{
    // return state
// }

/**
 * Get entries by term
 */
// export const getEntriesByTerm = (state)=>{
//     return state.entries;
// }

// We can return a function using the following syntax:
// name = (state) => (parameter) => {}
export const getEntriesByTerm = (state) => (term = "") => {
    console.log(term);
    console.log(state.entries)
    if(term.length === 0)return state.entries;
    
    return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLowerCase()));
}

export const getEntryById = (/*state*/)=>{

}