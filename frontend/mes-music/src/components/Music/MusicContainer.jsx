import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"


class MusicContainer extends React.Component {
    render() {
        return <div>music</div>
    }
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(MusicContainer)


