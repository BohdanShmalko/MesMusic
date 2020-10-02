import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"


class HomeContainer extends React.Component {
    render() {
        return <div>home</div>
    }
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(HomeContainer)


