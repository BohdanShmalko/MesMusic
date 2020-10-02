import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"


class RegistrationContainer extends React.Component {
    render() {
        return <div>registration</div>
    }
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(RegistrationContainer)


