import {profileAPI} from '../DAL/API'

const ON_STATUS_CHANGE = '/profile/ON_STATUS_CHANGE'
const ON_ADD_POST = '/profile/ON_ADD_POST'
const ON_NICKNAME_CHANGE = '/profile/ON_NICKNAME_CHANGE'
const ON_MAIN_PHOTO_CHANGE = '/profile/ON_MAIN_PHOTO_CHANGE'
const ON_INFO_CHANGE = '/profile/ON_INFO_CHANGE'
const ON_PHOTOS_CHANGE = '/profile/ON_PHOTOS_CHANGE'

const initialState = {
    mainPhoto: null,
    photos: [],
    nickName: null,
    status: null,
    info: null,
    posts: [
        {
            header: 'white coat',
            info: 'My coat is white!blablablablablablablablabla blablablablablablablablablablablablablablablablablabl' +
                ' ablablablablablablabl ablablablablablablabl ablablablablablablablablablablablablablabl' +
                ' ablablablablabla'
        },
        {header: 'black coat', info: 'And now black!'}
    ]
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_STATUS_CHANGE:
            return {
                ...state,
                status: action.status
            }
        case ON_NICKNAME_CHANGE:
            return {
                ...state,
                nickName: action.nickName
            }
        case ON_MAIN_PHOTO_CHANGE:
            return {
                ...state,
                mainPhoto: action.mainPhoto
            }
        case ON_INFO_CHANGE:
            return {
                ...state,
                info: action.info
            }
        case ON_PHOTOS_CHANGE:
            return {
                ...state,
                photos: [...action.photos]
            }
        case ON_ADD_POST:
            const newPost = {header: action.postHeader, info: action.postContent}
            return {
                ...state,
                posts: [
                    ...state.posts,
                    newPost
                ]
            }
        default:
            return state
    }
}

export const onStatusChange = (status) => ({type: ON_STATUS_CHANGE, status})
export const onAddPost = (postHeader, postContent) => ({type: ON_ADD_POST, postHeader, postContent})
export const onNickNameChange = (nickName) => ({type: ON_NICKNAME_CHANGE, nickName})
export const onMainPhotoChange = (mainPhoto) => ({type: ON_MAIN_PHOTO_CHANGE, mainPhoto})
export const onInfoChange = (info) => ({type: ON_INFO_CHANGE, info})
export const onPhotosChange = (photos) => ({type: ON_PHOTOS_CHANGE, photos})

export const getStatus = id => async dispatch => {
    //dispatch(profileActionCreator.isLoad(false))
    const data = await profileAPI.getStatus(id)
    dispatch(onStatusChange(data.status))
    //if(data.status == 200) //dispatch(profileActionCreator.isLoad(true))
}

export const getProfile = id => async dispatch => {
    const data = await profileAPI.getProfile(id)
    dispatch(onNickNameChange(data.nickname))
    dispatch(onMainPhotoChange(data.mainphoto))
    dispatch(onInfoChange(data.aboutme))
}

export const getUserPhotos = id => async dispatch => {
    const data = await profileAPI.getUserPhotos(id)
    dispatch(onPhotosChange(data))
}

export const setStatus = status => async dispatch => {
    const data = await profileAPI.setStatus(status)
    dispatch(onStatusChange(status))
}

