import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {Profile} from './Profile'
import {
    getUserInfo,
    getUserMainPhoto,
    getUserNickName,
    getUserPhotos, getUserPosts,
    getUserStatus
} from '../../redux/selectors/globalSelectors'
import {onAddPost, onStatusChange} from "../../redux/profileReducer";

const isOwn = true

function ProfileContainer(props) {
    return <Profile isOwn={isOwn} mainPhoto={props.mainPhoto} photos={props.photos} nickName={props.nickName}
                    status={props.status} info={props.info} posts={props.posts}
                    onStatusChange={props.onStatusChange} onAddPost={props.onAddPost}/>
}

const stateToProps = state => ({
    mainPhoto: getUserMainPhoto(state),
    photos: getUserPhotos(state),
    nickName: getUserNickName(state),
    status: getUserStatus(state),
    info: getUserInfo(state),
    posts: getUserPosts(state)
})

export default compose(
    connect(stateToProps, {onStatusChange, onAddPost}))(ProfileContainer)


