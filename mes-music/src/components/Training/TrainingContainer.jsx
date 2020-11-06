import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Training from './Training'


function TrainingContainer(props) {
    return <div>
        <Training {...props}/>
    </div>
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(TrainingContainer)


