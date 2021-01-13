import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect, useSelector} from 'react-redux'
import {getIsAuthorize} from "../redux/selectors/globalSelectors";

const stateToProps = state => ({
    //isAutorize : state.auth.isAutorize
})

export const withAuthRedirect1 = Component => {
    class AuthRedirect extends React.Component {
        render() {
            /*if(!this.props.isAutorize) return <Redirect to = '/login' />
            return <Component {...this.props} />*/
            return <div></div>
        }
    }
    return connect(stateToProps)(AuthRedirect)
}

export const withAuthRedirect = Component => props => {
    const isAuthorize = useSelector(getIsAuthorize)
    if (!isAuthorize) return <Redirect to={'/home'}/>
    return <Component {...props}/>
}