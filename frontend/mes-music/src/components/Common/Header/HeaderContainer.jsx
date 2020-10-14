import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Header from './Header'
import {actionCreator} from '../../../redux/storeRedux'
import {constantes} from "../../../static/constantes";

const {changeAuthorizeStatus} = actionCreator.authorize

class HeaderContainer extends React.Component {
    render() {
        return <div>
            <Header {...this.props}/>
        </div>
    }
}

const stateToProps = state => ({
    isAuthorize : state.authorize.isAuthorize,
    appColor : constantes.appColor
})

export default compose(
    connect(stateToProps, {changeAuthorizeStatus}))(HeaderContainer)


