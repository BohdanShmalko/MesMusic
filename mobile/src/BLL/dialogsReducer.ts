import {ActionsType, StateType} from "./storeRedux";
import {ThunkAction} from "redux-thunk";

const initialState = {

}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state = initialState, action : ActionType) : InitialStateType => {
    // case SOME : return {...state
    //
    // }
    return state
}

type ActionType = ActionsType<typeof dialogsAC>
type DispatchType = ThunkAction<Promise<void>, StateType, unknown, ActionType>

export const dialogsAC = {

}