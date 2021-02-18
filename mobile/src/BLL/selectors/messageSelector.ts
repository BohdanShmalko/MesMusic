import {StateType} from "../storeRedux";

export const getMessageTitle = (state : StateType) => state.messageScreen.name
export const getMessageStatus = (state : StateType) => state.messageScreen.status
export const getMessageData = (state : StateType) => state.messageScreen.messages
export const getMessageUri = (state : StateType) => state.messageScreen.groupUri
export const getUserUri = (id : string) => (state : StateType) => state.messageScreen.usersUris.filter(userUri => userUri.id === id)[0].uri
