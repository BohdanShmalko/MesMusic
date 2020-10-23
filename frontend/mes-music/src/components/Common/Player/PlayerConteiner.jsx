import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Player from "./Player";

class PlayerConteiner extends React.Component {

    render() {
        return <div>
            <Player {...this.props}/>
        </div>
    }
    componentDidMount() {
        setTimeout(() => this.props.setDuration(this.props.id, this.props.audio.duration), 250)
    }

}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(PlayerConteiner)


