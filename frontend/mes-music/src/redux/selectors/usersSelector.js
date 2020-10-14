import {createSelector} from 'reselect'

const getUsersPrimitive = state => state.usersPage.users

export const getUsers = createSelector(getUsersPrimitive, users => users.filter(u => true)) //bad logic for example library reselect

export const getIsLoad = state => state.usersPage.isLoad

export const getFriendButtonInProcessing = state => state.usersPage.friendButtonInProcessing

