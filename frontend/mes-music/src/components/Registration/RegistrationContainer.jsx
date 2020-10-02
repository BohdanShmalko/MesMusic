import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"
import Registration from "./Registration";


class RegistrationContainer extends React.Component {
    render() {
        return <div>
            <Registration />
        </div>
    }
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(RegistrationContainer)


