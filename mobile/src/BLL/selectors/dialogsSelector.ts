import { StateType } from "../storeRedux";

export const getDialogs = (state: StateType) => state.dialogsScreen.dialogs;
