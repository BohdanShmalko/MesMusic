import {ActionsType, StateType} from "./storeRedux";
import {ThunkAction} from "redux-thunk";

const initialState = {

}

export type InitialStateType = typeof initialState

export const profileReducer = (state = initialState, action : ActionType) : InitialStateType => {
    // case SOME : return {...state
    //
    // }
    return state
}

type ActionType = ActionsType<typeof profileAC>
type DispatchType = ThunkAction<Promise<void>, StateType, unknown, ActionType>

export const profileAC = {

}