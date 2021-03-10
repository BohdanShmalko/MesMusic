import axios from 'axios'
import {CreateUserResponseType, SimpleUserInfType} from "./apiTypes";

const instance = axios.create({
    baseURL : 'https://192.168.0.105:3001/',
    withCredentials: true
})

// export enum CheckAuthStatusEnum {
//     CaptchaInRequired = 10,
//     LoginSuccess = 0
// }
//
// type LoadUsersResponceType = { resUsers : any, howManyUsers : {numbers : number} }
// type CheckAuthResponceType = {
//     message : string
//     email: string
//     isAutorize: boolean
//     login: string
//     responceCode: CheckAuthStatusEnum
//     userId: number
// }

export const API = {
    // loadUsers(setAllUsers : boolean, howManyNow : number, howManySet : number) {
    //     return instance.get<LoadUsersResponceType>(`users/${setAllUsers}/${howManyNow}/${howManySet}/`).then(responce => responce.data)
    // },
    // changeFriendStatus() {
    //     return instance.get<string>(`changeFriendStatus/`)
    // }
}

export const authAPI = {
    createUser(userInf : SimpleUserInfType, setError : React.Dispatch<React.SetStateAction<string>>) {
        const resData = {...userInf}
        delete resData.repeatPassword
        return instance.post('users', resData).then(response => console.log(response)).catch(err => console.log(err))
    }
    // checkAuth() {
    //     return instance.get<CheckAuthResponceType>(`login`).then(responce => responce.data)
    // },
    // getCaptcha() {
    //     return instance.get<boolean>(`randomCaptcha`).then(responce => responce.data)
    // }
}

export const profileAPI = {
    // loadProfile(id : number) {
    //     return instance.get<any>(`profile/${id}/`).then(response => response.data)
    // },
    // updateProfileInf(inf : any) {
    //     return instance.post<any>('updateProfile', inf).then(responce => responce.data)
    // }
}