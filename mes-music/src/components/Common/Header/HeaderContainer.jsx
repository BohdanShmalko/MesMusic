import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Header from './Header'
import {actionCreator} from '../../../redux/storeRedux'
import {constantes} from "../../../static/constantes"
import {getIsAuthorize} from '../../../redux/selectors/globalSelectors'

const {changeAuthorizeStatus} = actionCreator.authorize

function HeaderContainer(props) {
    return <div>
        <Header {...props}/>
    </div>
}

const stateToProps = state => ({
    isAuthorize : getIsAuthorize(state),
    appColor : constantes.appColor
})

export default compose(
    connect(stateToProps, {changeAuthorizeStatus}))(HeaderContainer)


