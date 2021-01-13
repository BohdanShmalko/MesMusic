import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Music from "./Music";
import {actionCreator} from "../../redux/storeRedux";
import {withAuthRedirect} from "../../HOC/Auth";

function MusicContainer(props) {
    return <div>
        <Music {...props} />
    </div>
}

const stateToProps = state => ({
    music : state.music
})

export default compose(withAuthRedirect,
    connect(stateToProps, {...actionCreator.music}))(MusicContainer)


