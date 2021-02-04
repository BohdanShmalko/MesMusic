export type RootStackParamList = {
    Home: undefined
    Dialogs: undefined
    ForgetPassword: undefined
    Music: undefined
    News: undefined
    Profile: undefined
    Registration: undefined
    Settings: undefined
    Training: undefined
    Users: undefined
    Likes : undefined
    Message : undefined
};

export type ChoiceType = {
    title : string
    selector : string
}

export type UserType = {
    id : string
    photoUri : string
    name : string
    about : string
    isFriend : boolean
}