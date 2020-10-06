import {applyMiddleware, createStore, combineReducers, compose} from "redux"
import {profileActionCreator, profileReducer} from "./profileReducer";
import thunkMiddleware from "redux-thunk"
import {authorizeAC, authorizeReducer} from "./authorizeReducer";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    profilePage : profileReducer,
    authorize : authorizeReducer,
    form : formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store

export const actionCreator = {
    profilePage : profileActionCreator,
    authorize : authorizeAC
}