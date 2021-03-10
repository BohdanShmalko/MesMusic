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

export type ErrorType = {error : string}

export type CreateUserResponseType = SimpleUserInfType | ErrorType