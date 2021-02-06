import {StackNavigationProp} from "@react-navigation/stack";

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

export type MessageType = {
    id: string
    isMyMessage: boolean
    status : 'in process' | 'sent' | 'revised'
}

export type navigationType = StackNavigationProp<RootStackParamList, "Home" | "Dialogs" | "ForgetPassword" | "Music" | "News" | "Profile" | "Registration" | "Settings" | "Training" | "Users" | "Likes" | "Message">