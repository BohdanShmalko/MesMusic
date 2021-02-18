import {ActionsType, StateType} from "./storeRedux";
import {ThunkAction} from "redux-thunk";
import {UserType} from "../types/types";

const LOAD_USERS = '/users/LOAD_USERS'
const SUBSCRIBE = '/users/SUBSCRIBE'
const UNSUBSCRIBE = '/users/UNSUBSCRIBE'

export type InitialStateType = {
    users : Array<UserType>
}

const initialState : InitialStateType = {
    users : [
        {
            id: '1',
            name: 'Vaselina',
            photoUri: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
            about: 'some firm from the internet that photo was first',
            isFriend: false
        },
        {
            id: '2',
            name: 'Vaselina',
            photoUri: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
            about: 'some firm from the internet that photo was first',
            isFriend: true
        },
        {
            id: '3',
            name: '?¿infinity. .sadness ¿?',
            photoUri: 'https://tutby.gcdn.co/n/lady.tut.by/01/3/ubit_zhaby_02.jpg',
            about: 'one of my friends',
            isFriend: true
        },
        {
            id: '4',
            name: 'Vaselina',
            photoUri: 'https://miro.medium.com/max/2560/1*gBQxShAkxBp_YPb14CN0Nw.jpeg',
            about: 'some firm from the internet that photo was first',
            isFriend: true
        },
        {
            id: '5',
            name: 'Vaselina',
            photoUri: 'https://miro.medium.com/max/2560/1*gBQxShAkxBp_YPb14CN0Nw.jpeg',
            about: 'some firm from the internet that photo was first',
            isFriend: true
        },
        {
            id: '6',
            name: 'Vaselina',
            photoUri: 'https://miro.medium.com/max/2560/1*gBQxShAkxBp_YPb14CN0Nw.jpeg',
            about: 'some firm from the internet that photo was first',
            isFriend: true
        },
        {
            id: '7',
            name: 'Vaselina',
            photoUri: 'https://miro.medium.com/max/2560/1*gBQxShAkxBp_YPb14CN0Nw.jpeg',
            about: 'some firm from the internet that photo was first',
            isFriend: true
        },
        {
            id: '8',
            name: 'Vaselina',
            photoUri: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
            about: 'some firm from the internet that photo was first',
            isFriend: true
        }]
}

export const usersReducer = (state = initialState, action : ActionType) : InitialStateType => {
    switch (action.type){
        // case SOME : return {...state
        //
        // }
        default : return state
    }
}

type ActionType = ActionsType<typeof usersAC>
type DispatchType = ThunkAction<Promise<void>, StateType, unknown, ActionType>

export const usersAC = {

}