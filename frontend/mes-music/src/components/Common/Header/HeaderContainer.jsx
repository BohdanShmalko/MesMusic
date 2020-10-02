import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"


class HeaderContainer extends React.Component {
    render() {
        return <div>header</div>
    }
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(HeaderContainer)


