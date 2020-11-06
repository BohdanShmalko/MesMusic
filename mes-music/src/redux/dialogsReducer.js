const ON_DIALOG_CLICK = '/dialogs/ON_DIALOG_CLICK'
const ON_ADD_MESSAGE_CLICK = '/dialogs/ON_ADD_MESSAGE_CLICK'

const initialState = {
    watchId: 0,
    messages: {
        0: {
            main: {
                name: 'Vasy228',
                photo: 'https://pbs.twimg.com/media/EcZzOJbXgAEpndc.jpg'
            },
            peoples: {
                0: {
                    nickName: 'Vova666',
                    photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png'
                },
                1: {
                    nickName: 'Vasy228',
                    photo: 'https://pbs.twimg.com/media/EcZzOJbXgAEpndc.jpg'
                }
            },
            messages: [
                {who: 1, message: 'Hi!', time: '12:10'},
                {who: 1, message: 'Hello!', time: '12:20'},
                {who: 1, message: 'Bonjour!', time: '12:30'},
                {who: 1, message: 'Draste!', time: '12:40'},
                {who: 0, message: 'By', time: '12:41'}
            ]
        },
        1: {
            main: {
                name: 'Pupkin13',
                photo: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg'
            },
            peoples: {
                0: {
                    nickName: 'Vova666',
                    photo: 'https://dwpdobr8xeaso.cloudfront.net/wgvs-images/avatars/profile_llama@4x.png'
                },
                1: {
                    nickName: 'Pupkin13',
                    photo: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg'
                }
            },
            messages: [
                {who: 1, message: 'Hi', time: '12:10'},
                {who: 1, message: 'My lastname is Pupkin', time: '12:20'},
                {who: 0, message: 'Good by!', time: '12:30'},
                {who: 1, message: 'Hi!', time: '12:40'},
                {who: 0, message: 'By', time: '12:41'}
            ]
        }
    }
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_DIALOG_CLICK:
            return {
                ...state,
                watchId: action.newWatchId
            }
        case ON_ADD_MESSAGE_CLICK:
            const time = new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'})
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


