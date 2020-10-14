import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Training from './Training'


class TrainingContainer extends React.Component {
    render() {
        return <div>
            <Training {...this.props}/>
        </div>
    }
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(TrainingContainer)


