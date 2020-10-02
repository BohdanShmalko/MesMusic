import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"
import Home from "./Home";


class HomeContainer extends React.Component {
    render() {
        return <div>
            <Home {...this.props}/>
        </div>
    }
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(HomeContainer)


