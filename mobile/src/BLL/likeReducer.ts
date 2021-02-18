import {ActionsType, StateType} from "./storeRedux";
import {ThunkAction} from "redux-thunk";
import {LikeType} from "../types/types";

const DELETE_LIKE = '/like/DELETE_LIKE'
const LOAD_LIKE = '/like/LOAD_LIKE'
const ADD_LIKE = '/like/ADD_LIKE'

export type InitialStateType = {
    likes: Array<LikeType>
}

const initialState: InitialStateType = {
    likes: [{
        id: '1', date: '21:01:2021 22:00', type : 'complain', whoLiked: {
            id : '1',
            photo: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/surprises_about_dogs_and_cats_slideshow/1800x1200_surprises_about_dogs_and_cats_slideshow.jpg',
            name : 'some test name'
        },
        whatLiked : {
            id: '1',
            uris: [{id: '1', uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'}, {
                id: '2',
                uri: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg'
            }],
            name: 'Lincoln',
            likeCount: 10,
            description: 'some description ddj dlkfdkl sdds sdsd kj sdjs dkjsdjs bsd bsd sjdsd skdjskd  jskdjsk jskdjk jskjdksdjskdjsk jskdjkd ksjdks kjskdjskd jdkjsdj jskdjskdj kj dksj dsk j',
            publicationTime: '22:00',
            isLike: true,
            userUri: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
            isAdded: true,
            useMenu: true
        }
    },]
}

export const likeReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type){
        case DELETE_LIKE : return {...state,
            likes : state.likes.filter(like => like.id !== action.id)
        }
        case LOAD_LIKE : return {...state,
            likes : action.likes
        }
        case ADD_LIKE : return {...state,
            likes : [action.like, ...state.likes]
        }
        default : return state
    }
}

type ActionType = ActionsType<typeof likeAC>
type DispatchType = ThunkAction<Promise<void>, StateType, unknown, ActionType>

export const likeAC = {
    deleteLike : (id : string) => ({type : DELETE_LIKE, id} as const),
    loadLikes : (likes : Array<LikeType>) => ({type : LOAD_LIKE, likes} as const),
    addLike : (like : LikeType) => ({type : ADD_LIKE, like} as const)
}

//TODO thunk delete like
//TODO thunk load like
