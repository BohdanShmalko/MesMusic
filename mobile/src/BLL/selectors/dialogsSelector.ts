import { StateType } from "../storeRedux";

export const getDialogs = (state: StateType) => state.dialogsScreen.dialogs;

export const getFriends = (state : StateType) => state.dialogsScreen.friends
