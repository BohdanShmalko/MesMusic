import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { dialogsAC, dialogsReducer } from "./dialogsReducer";
import { musicAC, musicReducer } from "./musicReducer";
import { newsAC, newsReducer } from "./newsReducer";
import { profileAC, profileReducer } from "./profileReducer";
import { settingsAC, settingsReducer } from "./settingsReducer";
import { trainingAC, trainingReducer } from "./trainingReducer";
import { usersAC, usersReducer } from "./usersReducer";
import { messageAC, messageReducer } from "./messageReducer";
import { likeAC, likeReducer } from "./likeReducer";
import { commentAC, commentReducer } from "./commentReducer";

let rootReducer = combineReducers({
  dialogsScreen: dialogsReducer,
  musicScreen: musicReducer,
  newsScreen: newsReducer,
  profileScreen: profileReducer,
  settingsScreen: settingsReducer,
  trainingScreen: trainingReducer,
  usersScreen: usersReducer,
  messageScreen: messageReducer,
  likeScreen: likeReducer,
  commentScreen: commentReducer,
});

type RootReducerType = typeof rootReducer;
export type StateType = ReturnType<RootReducerType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionsType<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesTypes<T>>;

export const actionCreator = {
  dialogsScreen: dialogsAC,
  musicScreen: musicAC,
  newsScreen: newsAC,
  profileScreen: profileAC,
  settingsScreen: settingsAC,
  trainingScreen: trainingAC,
  usersScreen: usersAC,
  messageScreen: messageAC,
  likeScreen: likeAC,
  commentScreen: commentAC,
};
