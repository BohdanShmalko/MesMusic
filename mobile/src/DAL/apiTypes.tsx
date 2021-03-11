export type SimpleUserInfType = {
    id?: number
    name: string
    nickname : string
    lastName: string
    email: string
    password: string
    repeatPassword?: string
    error?: string
}

export type AuthType = {
    email : string
    password : string
}