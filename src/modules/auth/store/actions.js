// Actions received the commit of the context the are use to drive info the api
// and they can call a mutation of the state
// export const myActions = async ({commit})=>{
// }

import AuthApi from "@/api/AuthApi";

export const createUser = async ({ commit }, user) => {
    const { name, email, password } = user
    console.log(commit);
    try {
        const { data } = await AuthApi.post(':signUp', { email, password, returnSecureToken: true })

        const { idToken, refreshToken } = data
        await AuthApi.post(':update', { idToken, displayName: name, returnSecureToken: true })

        delete user.password
        commit('loginUser', { user, idToken, refreshToken })

        return { status: true }
    } catch (error) {
        return { status: false, message: error.response.data.error.message }
    }
}

export const signInUser = async ({ commit }, user) => {
    const { email, password } = user
    try {
        const { data } = await AuthApi.post(':signInWithPassword', { email, password, returnSecureToken: true })

        const { displayName, idToken, refreshToken } = data

        user.name = displayName

        delete user.password

        commit('loginUser', { user, idToken, refreshToken })

        return { status: true }

    } catch (error) {
        return { status: false, message: error.response.data.error.message }
    }
}

export const checkAuthentication = async ({ commit }) => {
    const idToken = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if (!idToken) {
        commit('logout')
        return { status: false, message: 'There is not token in the request' }
    }

    try {
        const { data } = await AuthApi.post(':lookup', { idToken })
        const { displayName, email } = data.users[0]

        const user = {
            name: displayName,
            email
        }

        commit('loginUser', { user, idToken, refreshToken })

        return { status: true }

    } catch (error) {
        commit('logout')
        return { status: false, message: error.response.data.error.message }
    }

}