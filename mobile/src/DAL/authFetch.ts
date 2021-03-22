import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const baseURL = 'http://192.168.0.103:3001/mobile/'

export default async function authFetch(url : string, config : any = undefined) {
    let token
    try{
        token = await AsyncStorage.getItem('token')

        const body = config && config.body || null
        const headers = config && config.headers || {}
        const method = config && config.method || 'get'

        const finalConfig = {
            ...config,
            headers : {
                ...headers,
                'X-Access-Token' : token
            },
            data : body,
            method
        }
        return axios(baseURL + url, finalConfig)
    }catch (e){
        console.log(e)
    }
}