// import axios from 'axios'

import bogDaxios from "./bogDaxios"

// const instance = axios.create({
//     baseURL : 'http://localhost:3001/',
//     withCredentials: true,
// })

const instance = new bogDaxios('http://localhost:3001/')

export const profileAPI = {
    getStatus(id) {
        return instance.get(`status/${id}`).then(response => response.json())
    },
    setStatus(status) {
        return instance.post(`status`, {status}).then(response => response.json())
    }
}

export const authorizationAPI = {
    getToken() {
        return instance.get(`user`).then(response => response.json())
    }
}
