import {peoplesAPI} from '../DAL/API'

const ON_CHANGE_PEOPLES = '/peoples/ON_CHANGE_PEOPLES'
const FOLLOW = '/peoples/FOLLOW'
const DISFOLLOW = '/peoples/DISFOLLOW'

const initialState = {
    peoples: [],
    groups: [
        {
            nickName: 'Group',
            photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png',
            followed: false,
            info: 'The llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.',
        },
        {
            nickName: 'Group',
            photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png',
            followed: false,
            info: 'The llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.',
        },
        {
            nickName: 'Group',
            photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png',
            followed: false,
            info: 'The llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.',
        }
    ]
}

export const peoplesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_CHANGE_PEOPLES:
            return {
                ...state,
                peoples: [...action.peoples]
            }
        case FOLLOW:
            return {
                ...state,
                peoples: state.peoples.map(
                    (el) => {
                        if (el.id === action.followedId) el.followed = true
                        return el
                    }
                )
            }
        case DISFOLLOW:
            return {
                ...state,
                peoples: state.peoples.map(
                    (el) => {
                        if (el.id === action.disFollowedId) el.followed = false
                        return el
                    }
                )
            }
        default :
            return state
    }
}

export const onChangePeoples = (peoples) => ({type: ON_CHANGE_PEOPLES, peoples})
export const followAC = (followedId) => ({type: FOLLOW, followedId})
export const disFollowAC = (disFollowedId) => ({type: DISFOLLOW, disFollowedId})

export const getPeoples = () => async dispatch => {
    const peoples = await peoplesAPI.getPeoples()
    dispatch(onChangePeoples(peoples))
}

export const follow = (followedId) => async dispatch => {
    await peoplesAPI.follow(followedId)
    dispatch(followAC(followedId));
}

export const disFollow = (disFollowedId) => async dispatch => {
    await peoplesAPI.disFollow(disFollowedId)
    dispatch(disFollowAC(disFollowedId))
}