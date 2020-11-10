import axios from 'axios'

const instance = axios.create({
    baseURL : 'http://localhost:3001/'
})

export const profileAPI = {
    getStatus(id) {
        return instance.get(`status/${id}`).then(response => response.data)
    }
}