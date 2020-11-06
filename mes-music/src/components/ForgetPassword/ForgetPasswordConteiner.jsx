import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import ForgetPassword from './ForgetPassword'


function ForgetPasswordContainer(props) {
    return <div>
        <ForgetPassword {...props}/>
    </div>
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(ForgetPasswordContainer)


