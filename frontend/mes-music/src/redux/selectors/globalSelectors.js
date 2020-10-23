import {createSelector} from 'reselect'

const getRegistration = state => state.form.registration
export const getIsPassword = createSelector(getRegistration, reg => reg && reg.values)

export const getRegistrationPassword = state => state.form.registration.values.password


export const getIsAuthorize = state => state.authorize.isAuthorize

