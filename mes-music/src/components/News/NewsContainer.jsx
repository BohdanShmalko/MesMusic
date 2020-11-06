import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"


function NewsContainer() {
    return <div>news</div>
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(NewsContainer)


