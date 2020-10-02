import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"


class ProfileContainer extends React.Component {
    render() {
        return <div>profile</div>
    }
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(ProfileContainer)


