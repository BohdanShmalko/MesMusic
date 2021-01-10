import {authorizationAPI} from '../DAL/API'

const CHANGE_AUTHORIZE_STATUS = '/authorize/CHANGE_AUTHORIZE_STATUS'
const BECOME_AUTHORIZED = '/authorize/BECOME_AUTHORIZED'
const LOG_OUT = '/authorize/LOG_OUT'

const initialState = {
    isAuthorize : false
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
        default : return state
    }
}

export const authorizeAC = {
    changeAuthorizeStatus(status) { return {type : CHANGE_AUTHORIZE_STATUS, status} },
    becomeAuthorized: () => ({type: BECOME_AUTHORIZED}),
    logOut: () => ({type: LOG_OUT})
}

export const authorise = data => async dispatch => {
    await authorizationAPI.authorise(data)
    dispatch(authorizeAC.becomeAuthorized())
}

export const logOut = () => async dispatch => {
    await authorizationAPI.logOut()
    dispatch(authorizeAC.logOut())
}