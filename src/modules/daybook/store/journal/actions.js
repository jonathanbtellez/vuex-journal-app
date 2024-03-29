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
    if(!data) return commit('setEntries', entries);
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

export const updateEntry = async ({commit}, entry)=>{
    // TODO: 
    // Extract info
    const { date, text, picture} = entry 

    const dataToSave = {
        date,
        text,
        picture
    }
    // await journalApi.put(PATH.json, dataToSave)
    await journalApi.put(`/entries/${entry.id}.json`, dataToSave )
    // console.log(data);
    // commit a mutation => updateEntry
    commit('updateEntry', {...entry});
}

export const createEntry = async ({commit}, entry)=>{
    const { date, text, picture} = entry 

    const dataToSave = {
        date,
        text,
        picture
    }
    const {data} = await journalApi.post(`/entries.json`, dataToSave )
    entry.id = data.name

    commit('addEntry',entry)
    return entry.id
}

export const deleteEntry = async ({commit}, id)=>{
    await journalApi.delete(`/entries/${id}.json`)
    commit('deleteMutation', id)
}   
