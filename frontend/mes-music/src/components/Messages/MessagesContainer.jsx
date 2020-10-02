import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"


class MessagesContainer extends React.Component {
    render() {
        return <div>messages</div>
    }
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(MessagesContainer)


