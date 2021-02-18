import {StateType} from "../storeRedux";

export const getIsMyProfile = (state : StateType) => state.profileScreen.isMyProfile
export const getIsShowTrainings = (state : StateType) => state.profileScreen.isShowTrainings
export const getIsShowMusic = (state : StateType) => state.profileScreen.isShowMusic
export const getProfilePhotos = (state : StateType) => state.profileScreen.photos
export const getProfilePosts = (state : StateType) => state.profileScreen.posts
export const getUserInf = (state : StateType) => state.profileScreen.userInf