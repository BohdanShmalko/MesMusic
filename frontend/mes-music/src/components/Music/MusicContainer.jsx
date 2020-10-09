import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Music from "./Music";

const audio = {
    user : [],
    other : []
}

class MusicContainer extends React.Component {
    render() {
        return <div>
            <Music {...this.props} />
        </div>
    }
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(MusicContainer)


