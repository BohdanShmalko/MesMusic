import { ActionsType, StateType } from "./storeRedux";
import { ThunkAction } from "redux-thunk";
import {IdUriType, MessageType} from "../types/types";

const LOAD_MESSAGE_PAGE = "/messages/LOAD_MESSAGE_PAGE";
const ADD_TEMPORARY_MESSAGE = "/messages/ADD_TEMPORARY_MESSAGE";
const ADD_CONST_MESSAGE = "/messages/ADD_CONST_MESSAGE";
const DELETE_MESSAGE = "/messages/DELETE_MESSAGE";
const CHANGE_MESSAGE_STATUS = "/messages/CHANGE_MESSAGE_STATUS";
const SET_DIALOG_ID = "/messages/SET_DIALOG_ID"
const CHANGE_GROUP_PHOTO = "/messages/CHANGE_GROUP_PHOTO"

export type InitialStateType = {
  dialogId: string;
  groupUri: string;
  usersUris: Array<IdUriType>;
  last_action: string;
  name: string;
  messages: Array<MessageType>;
  myId : string
};

const initialState: InitialStateType = {
  myId : '',
  dialogId: '',//"1",
  groupUri: '',
    //"https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg",
  usersUris: [
    // {
    //   id: "1",
    //   uri:
    //     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
    // },
  ],
  last_action: '',//"be online 22:10",
  name: '',//"some name",
  messages: [
    // {
    //   id: "1",
    //   isMyMessage: true,
    //   status: "in process",
    //   message: "some msg",
    //   userId: "1",
    // },
  ],
};

export const messageReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case SET_DIALOG_ID : return {...state,
      dialogId : action.id
    }
    case LOAD_MESSAGE_PAGE : return action.page
    case ADD_TEMPORARY_MESSAGE : return {...state,
      messages : [action.message, ...state.messages]
    }
    case ADD_CONST_MESSAGE : {
      const messages = state.messages.filter(msg => msg.status !== 'in process')
      return {...state, messages : [action.message, ...messages]}
    }
    case CHANGE_GROUP_PHOTO : return {...state, groupUri : action.uri}
    default:
      return state;
  }
};

type ActionType = ActionsType<typeof messageAC>;
type DispatchType = ThunkAction<Promise<void>, StateType, unknown, ActionType>;

export const messageAC = {
  setDialogId : (id : string) => ({type : SET_DIALOG_ID, id} as const),
  loadMessagePage : (page : InitialStateType) => ({type : LOAD_MESSAGE_PAGE, page} as const),
  addTemporaryMessage : (message : MessageType) => ({type : ADD_TEMPORARY_MESSAGE, message} as const),
  addConstMessage : (message : MessageType) => ({type : ADD_CONST_MESSAGE, message} as const),
  changeGroupPhoto : (uri : string) => ({type : CHANGE_GROUP_PHOTO, uri} as const)
};
