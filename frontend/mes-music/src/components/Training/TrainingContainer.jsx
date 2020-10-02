import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"


class TrainingContainer extends React.Component {
    render() {
        return <div>training</div>
    }
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(TrainingContainer)


