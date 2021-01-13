import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"
import {withAuthRedirect} from "../../HOC/Auth";


function NewsContainer() {
    return <div>news</div>
}

const stateToProps = state => ({

})

export default compose(withAuthRedirect,
    connect(stateToProps, {}))(NewsContainer)


