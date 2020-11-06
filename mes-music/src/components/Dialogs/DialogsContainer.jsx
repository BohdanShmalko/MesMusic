import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {Dialogs} from './Dialogs'
import {getMessages, getWatchId} from '../../redux/selectors/globalSelectors'
import {onAddMessageClick, onDialogClick} from '../../redux/dialogsReducer'

const userId = 0 //delete in future

function DialogsContainer(props) {
    return <Dialogs watchId={props.watchId} messages={props.messages} userId={userId}
                    onDialogClick={props.onDialogClick} onAddMessageClick={props.onAddMessageClick}/>
}

const stateToProps = state => ({
    watchId: getWatchId(state),
    messages: getMessages(state)
})

export default compose(
    connect(stateToProps, {onDialogClick, onAddMessageClick}))(DialogsContainer)


