import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:56362/api/' })
export default instance