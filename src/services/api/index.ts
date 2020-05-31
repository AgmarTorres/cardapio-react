import axios from "axios"

const api = axios.create({
    baseURL: "http://tecprime.com.br/api" 
})

export default api;