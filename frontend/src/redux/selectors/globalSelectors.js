import {createSelector} from 'reselect'

const getRegistration = state => state.form.registration
export const getIsPassword = createSelector(getRegistration, reg => reg && reg.values)

export const getRegistrationPassword = state => state.form.registration.values.password


export const getIsAuthorize = state => state.authorize.isAuthorize


export const getWatchId = state => state.dialogsReducer.watchId
export const getMessages = state => state.dialogsReducer.messages


export const getPeoples = state => state.peoplesReducer.peoples
export const getGroups = state => state.peoplesReducer.groups


export const getUserMainPhoto = state => state.profileReducer.mainPhoto
export const getUserPhotos = state => state.profileReducer.photos
export const getUserNickName = state => state.profileReducer.nickName
export const getUserStatus = state => state.profileReducer.status
export const getUserInfo = state => state.profileReducer.info
export const getUserPosts = state => state.profileReducer.posts