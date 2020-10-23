import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Music from "./Music";
import {actionCreator} from "../../redux/storeRedux";

class MusicContainer extends React.Component {
    render() {
        return <div>
            <Music {...this.props} />
        </div>
    }
}

const stateToProps = state => ({
    music : state.music
})

export default compose(
    connect(stateToProps, {...actionCreator.music}))(MusicContainer)


