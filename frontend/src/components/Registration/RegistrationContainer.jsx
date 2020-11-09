import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Registration from './Registration'
import {getIsPassword, getRegistrationPassword} from '../../redux/selectors/globalSelectors'


function RegistrationContainer(props) {
    return <div>
        <Registration {...props}/>
    </div>
}

const stateToProps = state => {
    if(getIsPassword(state)) return{
        currentPassword : getRegistrationPassword(state)
    }
}

export default compose(
    connect(stateToProps, {}))(RegistrationContainer)


