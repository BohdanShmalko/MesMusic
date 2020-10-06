import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"
import Registration from "./Registration";


class RegistrationContainer extends React.Component {
    render() {
        return <div>
            <Registration {...this.props}/>
        </div>
    }
}

const stateToProps = state => {
    if(state.form.registration && state.form.registration.values) return{
        currentPassword : state.form.registration.values.password
    }
}

export default compose(
    connect(stateToProps, {}))(RegistrationContainer)


