import {authorizationAPI} from '../DAL/API'

const CHANGE_AUTHORIZE_STATUS = '/authorize/CHANGE_AUTHORIZE_STATUS'
const BECOME_AUTHORIZED = '/authorize/BECOME_AUTHORIZED'

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
        default : return state
    }
}

export const authorizeAC = {
    changeAuthorizeStatus(status) { return {type : CHANGE_AUTHORIZE_STATUS, status} },
    becomeAuthorized: () => ({type: BECOME_AUTHORIZED})
}

export const authorise = data => async dispatch => {
    await authorizationAPI.authorise(data)
    dispatch(authorizeAC.becomeAuthorized())
}