import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"


class FooterContainer extends React.Component {
    render() {
        return <div>footer</div>
    }
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(FooterContainer)


