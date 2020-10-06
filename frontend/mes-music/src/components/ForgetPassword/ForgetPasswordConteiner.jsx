import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import ForgetPassword from './ForgetPassword'


class ForgetPasswordContainer extends React.Component {
    render() {
        return <div>
            <ForgetPassword {...this.props}/>
        </div>
    }
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(ForgetPasswordContainer)


