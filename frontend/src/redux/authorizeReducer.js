import {authorizationAPI} from '../DAL/API'

const CHANGE_AUTHORIZE_STATUS = '/authorize/CHANGE_AUTHORIZE_STATUS'
const BECOME_AUTHORIZED = '/authorize/BECOME_AUTHORIZED'
const LOG_OUT = '/authorize/LOG_OUT'
const SET_NICKNAME = '/authorize/SET_NICKNAME'
const SET_ID = '/authorize/SET_ID'

const initialState = {
    isAuthorize : false,
    nickname: null,
    id: null
}

export const authorizeReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_AUTHORIZE_STATUS : return {
            ...state,
            isAuthorize : action.status
        }
        case BECOME_AUTHORIZED: return {
            ...state,
            isAuthorize: true
        }
        case LOG_OUT: return {
            ...state,
            isAuthorize: false
        }
        case SET_NICKNAME: return {
            ...state,
            nickname: action.nickname
        }
        case SET_ID: return {
            ...state,
            id: action.id
        }
        default : return state
    }
}

export const authorizeAC = {
    changeAuthorizeStatus(status) { return {type : CHANGE_AUTHORIZE_STATUS, status} },
    becomeAuthorized: () => ({type: BECOME_AUTHORIZED}),
    logOut: () => ({type: LOG_OUT}),
    setNickname(nickname) { return {type : SET_NICKNAME, nickname} },
    setId(id) { return {type : SET_ID, id} }
}

export const authorise = data => async dispatch => {
    const {nickname, id} = await authorizationAPI.authorise(data)
    dispatch(authorizeAC.becomeAuthorized())
    dispatch(authorizeAC.setNickname(nickname))
    dispatch(authorizeAC.setId(id))
}

export const logOut = () => async dispatch => {
    const promise = await authorizationAPI.logOut()
    dispatch(authorizeAC.logOut())
    return promise
}