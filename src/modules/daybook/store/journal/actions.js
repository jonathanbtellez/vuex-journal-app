// Actions received the commit of the context the are use to drive info the api
// and they can call a mutation of the state
// export const myActions = async ({commit})=>{

import journalApi from "@/api/journalApi"

// }

/**
 * Modify the state through mutation set entry
 * @param {Vuex commit} commit 
 */
export const loadEntries = async ({commit})=>{
    // With the get method we can obtain the info set in the journalApi and use this to do a get request
    //To drive the answer received to axios we are going to await the promise to be drive then
    // To get easier the information we are going to destructure the info received and only be focus in the data
    const {data} = await journalApi.get('/entries.json')
    const entries = [] 

    // Loop the data received an creating and arry 
    for(let id of Object.keys(data)){


        // Saving data into the array as indivual elements
        entries.push({
            // Saving id information
            id,
            // Spreading the data save in the other information 
            ...data[id]
        })
    }
    //Execute the mutation
    commit('setEntries', entries);

}

export const updateEntry = async (/*commit*/)=>{

}

export const createEntry = async (/*commit*/)=>{

}