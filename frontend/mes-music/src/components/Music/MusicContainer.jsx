import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Music from "./Music";

const audio = {
    user : [],
    other : []
}

function MusicContainer(props) {
    return <div>
        <Music {...props} />
    </div>
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(MusicContainer)


