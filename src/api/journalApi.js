import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demo-31a59-default-rtdb.firebaseio.com'
})
export default journalApi;