const ON_DIALOG_CLICK = '/peoples/ON_DIALOG_CLICK'
const ON_ADD_MESSAGE_CLICK = '/peoples/ON_ADD_MESSAGE_CLICK'

const initialState = {
    peoples: [
        {
            nickName: 'Vova666',
            photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png',
            followed: false,
            info: 'The llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.',
            type: 'user'
        },
        {
            nickName: 'Vova666',
            photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png',
            followed: true,
            info: 'The llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.',
            type: 'user'
        },
        {
            nickName: 'Vova666',
            photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png',
            followed: false,
            info: 'The llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.',
            type: 'user'
        },
        {
            nickName: 'Vova666',
            photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png',
            followed: true,
            info: 'The llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.',
            type: 'user'
        }
    ],
    groups: [
        {
            nickName: 'Group666',
            photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png',
            followed: false,
            info: 'The llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.',
        },
        {
            nickName: 'Group666',
            photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png',
            followed: false,
            info: 'The llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.',
        },
        {
            nickName: 'Group666',
            photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png',
            followed: false,
            info: 'The llama (/ˈlɑːmə/; Spanish pronunciation: [ˈʎama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.',
        }
    ]
}

export const peoplesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_DIALOG_CLICK:
            return {
                ...state,
                watchId: action.newWatchId
            }
        case ON_ADD_MESSAGE_CLICK:
            const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
            const newMessage = {who: 0, message: action.newMessage, time}
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.watchId]: {
                        ...state.messages[state.watchId],
                        messages: [
                            ...state.messages[state.watchId].messages,
                            newMessage
                        ]
                    }
                }
            }
        default :
            return state
    }
}

export const onDialogClick = (newWatchId) => ({type: ON_DIALOG_CLICK, newWatchId})
export const onAddMessageClick = (newMessage) => ({type: ON_ADD_MESSAGE_CLICK, newMessage})


