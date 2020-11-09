import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Home from './Home'


function HomeContainer(props) {
    return <div>
        <Home {...props}/>
    </div>
}

const stateToProps = state => ({

})

export default compose(
    connect(stateToProps, {}))(HomeContainer)


