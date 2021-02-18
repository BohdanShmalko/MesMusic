import {ActionsType, StateType} from "./storeRedux";
import {ThunkAction} from "redux-thunk";
import {SettingsType} from "../types/types";

const LOAD_SETTINGS = '/settings/LOAD_SETTINGS'
const CHANGE_FIRST_COLOR = '/settings/CHANGE_FIRST_COLOR'
const CHANGE_SECOND_COLOR = '/settings/CHANGE_SECOND_COLOR'
const CHANGE_FIRST_FONT = '/settings/CHANGE_FIRST_FONT'
const CHANGE_SECOND_FONT = '/settings/CHANGE_SECOND_FONT'
const SET_IS_USE_PICTURE_IN_BACKGROUND = '/settings/SET_IS_USE_PICTURE_IN_BACKGROUND'
const SET_SINGLE_PICTURE_IN_BACKGROUND = '/settings/SET_SINGLE_PICTURE_IN_BACKGROUND'
const SET_COMMENT_IN_BACKGROUND = '/settings/SET_COMMENT_IN_BACKGROUND'
const SET_DIALOG_IN_BACKGROUND = '/settings/SET_DIALOG_IN_BACKGROUND'
const SET_LIKE_IN_BACKGROUND = '/settings/SET_LIKE_IN_BACKGROUND'
const SET_MESSAGE_IN_BACKGROUND = '/settings/SET_MESSAGE_IN_BACKGROUND'
const SET_MUSIC_IN_BACKGROUND = '/settings/SET_MUSIC_IN_BACKGROUND'
const SET_NEWS_IN_BACKGROUND = '/settings/SET_NEWS_IN_BACKGROUND'
const SET_PROFILE_IN_BACKGROUND = '/settings/SET_PROFILE_IN_BACKGROUND'
const SET_SETTINGS_IN_BACKGROUND = '/settings/SET_SETTINGS_IN_BACKGROUND'
const SET_TRAINING_IN_BACKGROUND = '/settings/SET_TRAINING_IN_BACKGROUND'
const SET_USERS_IN_BACKGROUND = '/settings/SET_USERS_IN_BACKGROUND'
const SET_BLOCK_FOR_UNSIGNED = '/settings/SET_BLOCK_FOR_UNSIGNED'
const BLOCK_USER = '/settings/BLOCK_USER'
const UNBLOCK_USER = '/settings/UNBLOCK_USER'
const PROHIBIT_COMMENTS = '/settings/PROHIBIT_COMMENTS'
const UNPROHIBIT_COMMENTS = '/settings/UNPROHIBIT_COMMENTS'
const PROHIBIT_MUSIC = '/settings/PROHIBIT_MUSIC'
const UNPROHIBIT_MUSIC = '/settings/UNPROHIBIT_MUSIC'
const PROHIBIT_TRAININGS = '/settings/PROHIBIT_TRAININGS'
const UNPROHIBIT_TRAININGS = '/settings/UNPROHIBIT_TRAININGS'
const SET_SOUND_NOTIFICATION = '/settings/SET_SOUND_NOTIFICATION'
const CHANGE_LANGUAGE = '/settings/CHANGE_LANGUAGE'

export type InitialStateType = SettingsType

const initialState : InitialStateType = {
    confidentiality : {
        blockForUnsigned : false,
        blockUsers : [],
        forbidMusicFor : [],
        forbidTrainingsFor : [],
        prohibitComments : []
    },
    theme : {
        firstMainColor : '#080561',
        firstPrimaryFont : '#ffffff',
        secondMainColor : '#870010',
        secondPrimaryFont : '#000000',
        pictureOnBackground : {
            isActive : true,
            screensPicture : {
                newsPicture : 'https://1stwebdesigner.com/wp-content/uploads/2019/07/css-background-effects-thumb.jpg',
                profilePicture : 'https://png.pngtree.com/thumb_back/fw800/back_our/20190617/ourmid/pngtree-blue-technology-background-banner-image_125518.jpg'
            },
            singlePicture : {
                isActive : true,
                uri : 'https://images-na.ssl-images-amazon.com/images/I/71Hn4qqsY%2BL._AC_SL1000_.jpg'
            }
        }
    }
}

export const settingsReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type){
        // case SOME : return {...state
        //
        // }
        default : return state
    }
}

type ActionType = ActionsType<typeof settingsAC>
type DispatchType = ThunkAction<Promise<void>, StateType, unknown, ActionType>

export const settingsAC = {}