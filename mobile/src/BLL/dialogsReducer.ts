import {ActionsType, StateType} from "./storeRedux";
import {ThunkAction} from "redux-thunk";
import {DialogType} from "../types/types";

const CREATE_NEW_CHAT = '/dialogs/CREATE_NEW_CHAT'
const DELETE_CHAT = '/dialogs/DELETE_CHAT'
const LOAD_CHATS = '/dialogs/LOAD_CHATS'
const CHANGE_CHAT_NAME = '/dialogs/CHANGE_CHAT_NAME'
const CHANGE_CHAT_PHOTO = '/dialogs/CHANGE_CHAT_PHOTO'

type InitialStateType = {
    dialogs: Array<DialogType>
}

const initialState = {
    dialogs: [
        {
            id: '1',
            uriAvatar: 'https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg',
            name: 'Iakov',
            lastMessage: 'kdkdk kdskdk dkdkkd dkdkkd kdkkdk kdkdkd dkkdkd dkdkkd kdkdkdk dkdkdk kdkdk',
            lastMessageTime: 'mon 22:31',
            howManyNotRead: 10
        },
        {
            id: '2',
            uriAvatar: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
            name: 'Klava',
            lastMessage: 'kdkdk kdskdk dkdkkd dkdkkd kdkkdk kdkdkd dkkdkd dkdkkd kdkdkdk dkdkdk kdkdk',
            lastMessageTime: 'mon 23:00',
            howManyNotRead: 5
        },
        {
            id: '3', uriAvatar: 'https://upload.wikimedia.org/wikipedia/ru/a/a7/Head.cj.jpg',
            name: 'Carl Johnson', lastMessage: 'Ah shit, here we go again.',
            lastMessageTime: 'mon 1:31',
            howManyNotRead: 0
        },
        {
            id: '4',
            uriAvatar: 'https://tutby.gcdn.co/n/lady.tut.by/01/3/ubit_zhaby_02.jpg',
            name: '?¿infinity. .sadness ¿?',
            lastMessage: 'one of my friends',
            lastMessageTime: 'mon 23:00',
            howManyNotRead: 5
        },
        {
            id: '5',
            uriAvatar: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
            name: 'Klava',
            lastMessage: '1',
            lastMessageTime: 'mon 23:00',
            howManyNotRead: 15
        },
        {
            id: '6',
            uriAvatar: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
            name: 'Klava',
            lastMessage: '2',
            lastMessageTime: 'mon 23:00',
            howManyNotRead: 20
        },
        {
            id: '7',
            uriAvatar: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
            name: 'Klava',
            lastMessage: '3',
            lastMessageTime: 'mon 23:00',
            howManyNotRead: 0
        },
        {
            id: '8',
            uriAvatar: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
            name: 'Klava',
            lastMessage: '4',
            lastMessageTime: 'mon 23:00',
            howManyNotRead: 0
        },
        {
            id: '9',
            uriAvatar: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
            name: 'Klava',
            lastMessage: 'kdkdk kdskdk dkdkkd dkdkkd kdkkdk kdkdkd dkkdkd dkdkkd kdkdkdk dkdkdk kdkdk',
            lastMessageTime: 'mon 23:00',
            howManyNotRead: 0
        },
        {
            id: '10',
            uriAvatar: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
            name: 'Klava',
            lastMessage: 'last',
            lastMessageTime: 'mon 23:00',
            howManyNotRead: 0
        },
    ]
}

export const dialogsReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case CREATE_NEW_CHAT :
            return {
                ...state,
                dialogs: [action.dialog, ...state.dialogs]
            }
        case LOAD_CHATS :
            return {
                ...state,
                dialogs: action.dialogs
            }
        case DELETE_CHAT : return {...state,
            dialogs : state.dialogs.filter(dialog => dialog.id !== action.id)
        }
        case CHANGE_CHAT_NAME : return {...state,
            dialogs : state.dialogs.map(dialog => {
                if(dialog.id === action.id) return {...dialog, name: action.name}
                return dialog
            })
        }
        case CHANGE_CHAT_PHOTO : return {...state,
            dialogs : state.dialogs.map(dialog => {
                if(dialog.id === action.id) return {...dialog, uriAvatar: action.uri}
                return dialog
            })
        }
        default :
            return state
    }
}

type ActionType = ActionsType<typeof dialogsAC>
type DispatchType = ThunkAction<Promise<void>, StateType, unknown, ActionType>

export const dialogsAC = {
    createChat: (dialog: DialogType) => ({type: CREATE_NEW_CHAT, dialog} as const),
    loadDialogs: (dialogs: Array<DialogType>) => ({type: LOAD_CHATS, dialogs} as const),
    deleteChat : (id : string) => ({type : DELETE_CHAT, id} as const),
    changeChatName : (id : string, name : string) => ({type : CHANGE_CHAT_NAME, name, id} as const),
    changeChatPhoto : (id : string, uri : string) => ({type : CHANGE_CHAT_PHOTO, uri, id} as const),
}

//TODO thunk search
//TODO thunk add chat
//TODO thunk change name
//TODO thunk change uri photo