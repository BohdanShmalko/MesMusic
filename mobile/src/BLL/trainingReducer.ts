import { ActionsType, StateType } from "./storeRedux";
import { ThunkAction } from "redux-thunk";

const initialState = {};

export type InitialStateType = typeof initialState;

export const trainingReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    // case SOME : return {...state
    //
    // }
    default:
      return state;
  }
};

type ActionType = ActionsType<typeof trainingAC>;
type DispatchType = ThunkAction<Promise<void>, StateType, unknown, ActionType>;

export const trainingAC = {};
