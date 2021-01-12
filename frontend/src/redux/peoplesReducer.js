import {peoplesAPI} from '../DAL/API'

const ON_CHANGE_PEOPLES = '/peoples/ON_CHANGE_PEOPLES'

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
        default :
            return state
    }
}

export const onChangePeoples = (peoples) => ({type: ON_CHANGE_PEOPLES, peoples})

export const getPeoples = () => async dispatch => {
    const peoples = await peoplesAPI.getPeoples()
    console.log(peoples, '6565')
    dispatch(onChangePeoples(peoples))
}