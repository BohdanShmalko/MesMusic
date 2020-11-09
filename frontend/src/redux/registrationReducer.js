const CHANGE_AUTHORIZE_STATUS = '/authorize/CHANGE_AUTHORIZE_STATUS'

const initialState = {
    name : null,
    lastName : null,
    emailNumber : null,
    password : null,
    repeatPassword : null
}

export const registrationReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_AUTHORIZE_STATUS : return {
            ...state,
            isAuthorize : action.status
        }
        default : return state
    }
}

export const authorizeAC = {
    changeAuthorizeStatus(status) { return {type : CHANGE_AUTHORIZE_STATUS, status} }
}

