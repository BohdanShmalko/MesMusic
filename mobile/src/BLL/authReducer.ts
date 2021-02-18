import {ActionsType, StateType} from "./storeRedux";
import {ThunkAction} from "redux-thunk";

const SET_AUTH = '/auth/SET_AUTH'

const initialState = {
    isAuth : false
}

export type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action : ActionType) : InitialStateType => {
    switch (action.type) {
        case SET_AUTH : return  {...state,
            isAuth: action.value}
        default : return state
    }
}

type ActionType = ActionsType<typeof authAC>
type DispatchType = ThunkAction<Promise<void>, StateType, unknown, ActionType>

export const authAC = {
    setAuth : (value : boolean) => ({type : SET_AUTH, value})
}