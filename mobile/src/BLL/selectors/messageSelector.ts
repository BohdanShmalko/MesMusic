import { StateType } from "../storeRedux";

export const getMessageTitle = (state: StateType) => state.messageScreen.name;
export const getLastAction = (state: StateType) =>
  state.messageScreen.last_action;
export const getMessageData = (state: StateType) =>
  state.messageScreen.messages;
export const getMessageUri = (state: StateType) => state.messageScreen.groupUri;
export const getUserUri = (id: string) => (state: StateType) =>
  state.messageScreen.usersUris.filter((userUri) => userUri.id === id)[0].uri;
export const getDialogId = (state : StateType) => state.messageScreen.dialogId
export const getMyId = (state : StateType) => state.messageScreen.myId
