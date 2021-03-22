import {ActionsType, StateType} from "./storeRedux";
import {ThunkAction} from "redux-thunk";
import {MessageType, UserUriType} from "../types/types";

const LOAD_MESSAGES = '/messages/LOAD_MESSAGES'
const ADD_MESSAGE = '/messages/ADD_MESSAGE'
const DELETE_MESSAGE = '/messages/DELETE_MESSAGE'
const CHANGE_MESSAGE_STATUS = '/messages/CHANGE_MESSAGE_STATUS'

export type InitialStateType = {
    dialogId : string
    groupUri : string
    usersUris : Array<UserUriType>
    last_action : string
    name : string
    messages : Array<MessageType>
}

const initialState : InitialStateType = {
    dialogId : '1',
    groupUri : 'https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg',
    usersUris : [{id : '1', uri : 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80'},
        {id : '2', uri : 'https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-superJumbo.jpg'}
    ],
    last_action : 'be online 22:10',
    name : 'some name',
    messages : [{id: '1', isMyMessage: true, status: 'in process', message : 'some msg', userId : '1'},
        {id: '2', isMyMessage: false, status: 'sent', message : 'some msg', userId : '2'},
        {id: '3', isMyMessage: true, status: 'revised', message : 'some msg', userId : '1'},
        {id: '4', isMyMessage: false, status: 'in process', message : 'some msg', userId : '2'},
        {id: '5', isMyMessage: true, status: 'revised', message : 'some msg', userId : '1'},
        {id: '6', isMyMessage: true, status: 'revised', message : 'some msg', userId : '1'},
        {id: '7', isMyMessage: true, status: 'revised', message : 'some msg', userId : '1'},
        {id: '8', isMyMessage: true, status: 'revised', message : 'some msg', userId : '1'},
        {id: '9', isMyMessage: true, status: 'revised', message : 'some msg', userId : '1'},
        {id: '10', isMyMessage: true, status: 'revised', message : 'some msg', userId : '1'},
        {id: '11', isMyMessage: true, status: 'revised', message : 'some msg', userId : '1'},
        {id: '12', isMyMessage: true, status: 'revised', message : 'some msg', userId : '1'},
        {id: '13', isMyMessage: true, status: 'revised', message : 'some msg', userId : '1'},
        {id: '14', isMyMessage: true, status: 'revised', message : 'some msg', userId : '1'},
        {id: '15', isMyMessage: true, status: 'revised', message : 'some msg', userId : '1'},
        {id: '16', isMyMessage: true, status: 'revised', message : 'some msg', userId : '1'},
        {id: '17', isMyMessage: true, status: 'revised', message : 'some msg', userId : '1'},]
}

export const messageReducer = (state = initialState, action : ActionType) : InitialStateType => {
    switch (action.type){
        // case SOME : return {...state
        //
        // }
        default : return state
    }
}

type ActionType = ActionsType<typeof messageAC>
type DispatchType = ThunkAction<Promise<void>, StateType, unknown, ActionType>

export const messageAC = {

}