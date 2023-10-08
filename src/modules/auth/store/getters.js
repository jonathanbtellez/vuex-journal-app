
// The getters are functions that can be used to get data from the state.
// export const myGetters = (state)=>{
// return state
// }

export const currentState = (state) => {
    return state.status
}

export const userName = (state) => {
    return state.user?.name || 'Daybook'
}