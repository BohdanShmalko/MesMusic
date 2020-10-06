import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"
import Footer from "./Footer";


class FooterContainer extends React.Component {
    render() {
        return <div>
            <Footer />
        </div>
    }
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(FooterContainer)


