import axios from 'axios'

// import bogDaxios from "./bogDaxios"

const instance = axios.create({
    baseURL : 'https://localhost:3001/',
    withCredentials: true,
})

//const instance = new bogDaxios('http://localhost:3001/')

export const profileAPI = {
    getStatus(id) {
        return instance.get(`status/:${id}`).then(response => response.data)
    },
    setStatus(status) {
        return instance.post(`status`, {status}).then(response => response.data)
    },
    getProfile(id) {
        return instance.get(`getProfile/:${id}`).then(response => response.data)
    },
    getUserPhotos(id) {
        return instance.get(`getUserPhotos/:${id}`).then(response => response.data)
    },
}

export const authorizationAPI = {
    getToken() {
        return instance.get(`setTestUser`).then(response => response.data)
    },
    authorise(data) {
        return instance.post(`authorise`, data).then(response => response.data)
    },
    logOut() {
        return instance.post(`logOut`).then(response => response.data)
    },
}
