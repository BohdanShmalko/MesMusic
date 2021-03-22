import axios from 'axios'
import {AuthType, SimpleUserInfType} from "./apiTypes";
import authFetch from "./authFetch";

const instance = axios.create({
    baseURL : 'http://192.168.0.103:3001/mobile/',
    // headers : {
    //     "X-Access-Token" : "sometest"
    // }
})

export const authAPI = {
    createUser(userInf : SimpleUserInfType, setError : React.Dispatch<React.SetStateAction<string>>) {
        const resData = {...userInf}
        delete resData.repeatPassword
        return authFetch('createuser', {
            body : resData,
            method : 'post'
        }).then((res : any) => res.data).catch(err => {
            console.log(err)
            setError(err.response.data.error)
        })
    },
    logout() {
        return authFetch('logout', {
            method : 'put'
        }).then((res : any) => res.data).catch((err) => {
            console.log(err)
        })
    },
    login(authInf : AuthType, setError : React.Dispatch<React.SetStateAction<string>>) {
        return authFetch('login', {
            body : authInf,
            method : 'post'
        }).then((res : any) => res.data).catch(err => {
            setError(err.response.data.error)
        })
    }
}