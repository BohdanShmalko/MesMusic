import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"


class NewsContainer extends React.Component {
    render() {
        return <div>news</div>
    }
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(NewsContainer)


