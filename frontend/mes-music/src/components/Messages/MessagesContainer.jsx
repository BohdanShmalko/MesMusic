import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"
import {Messages} from "./Messages";

const watchId = 0;

const messages = {
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

function DialogsContainer() {
    return <Messages watchId={watchId} messages={messages}/>
}

const stateToProps = state => ({})

export default compose(
    connect(stateToProps, {}))(DialogsContainer)


