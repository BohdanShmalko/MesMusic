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
    Likes: undefined
    Message: undefined
    Comments: undefined
    Test : undefined
};

export type DialogType = {
    id: string
    uriAvatar: string,
    name: string,
    lastMessage: string,
    lastMessageTime: string,
    howManyNotRead: number
}

export type ChoiceType = {
    title: string
    callback : () => void
}

export type UserType = {
    id: string
    photoUri: string
    name: string
    lastName?: string
    about: string
    isFriend: boolean
}

export type MessageType = {
    id: string
    userId: string
    message: string
    isMyMessage: boolean
    status: 'in process' | 'sent' | 'revised'
}

export type PostType = {
    id: string
    uris: Array<{ id: string, uri: string }>
    name: string
    likeCount: number
    description: string
    publicationTime: string
    isLike: boolean
    userUri: string
    isAdded: boolean
    useMenu?: boolean
    isMy ?: boolean
}

export type UserUriType = {
    id: string
    uri: string
}

export type WhoType = {
    id: string
    name: string
    photo: string
}

export type LikeType = {
    id: string
    type : 'like' | 'comment' | 'complain'
    whoLiked: WhoType
    whatLiked: PostType
    date: string
}

export type CommentType = {
    id: string
    whoComment: WhoType
    text: string
    isMy : boolean
    isComplain ?: boolean
}

export type ProfileType = {
    userInf: {
        name: string
        lastName: string
        about: string
        uri: string
        isFriend?: boolean
    }
    isMyProfile?: boolean
    photos: Array<{ id: string, uri: string }>
    isShowMusic?: boolean
    isShowTrainings?: boolean
    posts: Array<PostType>
}

export type SettingsThemeType = {
    firstMainColor: string
    secondMainColor: string
    firstPrimaryFont: string
    secondPrimaryFont: string
    pictureOnBackground: {
        isActive: boolean
        singlePicture: {
            isActive: boolean
            uri?: string
        }
        screensPicture: {
            commentsPicture?: string
            dialogsPicture?: string
            likePicture?: string
            messagePicture?: string
            musicPicture?: string
            newsPicture?: string
            profilePicture?: string
            settingsPicture?: string
            trainingPicture?: string
            userPicture?: string
        }
    }
}

export type ScreenNameType =
    'commentsPicture'
    | 'dialogsPicture'
    | 'likePicture'
    | 'messagePicture'
    | 'musicPicture'
    | 'newsPicture'
    | 'profilePicture'
    | 'settingsPicture'
    | 'trainingPicture'
    | 'userPicture'
    | undefined

export type UsersIdType = { id: string }

export type SettingsConfidentialityType = {
    blockForUnsigned: boolean
    prohibitComments: Array<UsersIdType>
    forbidMusicFor: Array<UsersIdType>
    forbidTrainingsFor: Array<UsersIdType>
    blockUsers: Array<UsersIdType>
}

export type SettingsType = {
    theme: SettingsThemeType
    confidentiality: SettingsConfidentialityType
}


export type navigationType = StackNavigationProp<RootStackParamList, "Home" | "Dialogs" | "ForgetPassword" | "Music" | "News" | "Profile" | "Registration" | "Settings" | "Training" | "Users" | "Likes" | "Message" | "Comments" | "Test">