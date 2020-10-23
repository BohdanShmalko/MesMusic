import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Footer from './Footer'
import {constantes} from "../../../static/constantes";


function FooterContainer(props) {
    return <div>
        <Footer {...props}/>
    </div>
}

const stateToProps = state => ({
    appColor : constantes.appColor
})

export default compose(
    connect(stateToProps, {}))(FooterContainer)


