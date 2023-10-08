import axios from 'axios'

const AuthApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyBtT5P93lQvu-1u6p0UeYw8lByXhrbyG0s'
    }
})
export default AuthApi;