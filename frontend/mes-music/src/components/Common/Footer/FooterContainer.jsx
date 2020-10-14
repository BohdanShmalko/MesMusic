import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Footer from './Footer'
import {constantes} from "../../../static/constantes";


class FooterContainer extends React.Component {
    render() {
        return <div>
            <Footer {...this.props}/>
        </div>
    }
}

const stateToProps = state => ({
    appColor : constantes.appColor
})

export default compose(
    connect(stateToProps, {}))(FooterContainer)


