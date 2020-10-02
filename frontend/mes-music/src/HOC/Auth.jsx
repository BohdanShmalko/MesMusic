import React from 'react'
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"

const stateToProps = state => ({
    //isAutorize : state.auth.isAutorize
})

export const withAuthRedirect = Component => {
    class AuthRedirect extends React.Component {
        render() {
            /*if(!this.props.isAutorize) return <Redirect to = '/login' />
            return <Component {...this.props} />*/
            return <div></div>
        }
    }
    return connect(stateToProps)(AuthRedirect)
}