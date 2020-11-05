import React from 'react'
import {connect} from "react-redux"
import {compose} from "redux"
import {Peoples} from "./Peoples";
import {getGroups, getPeoples} from "../../redux/selectors/globalSelectors";

function PeoplesContainer(props) {
    return <Peoples peoples={props.peoples} groups={props.groups}/>
}

const stateToProps = state => ({
    peoples: getPeoples(state),
    groups: getGroups(state)
})

export default compose(
    connect(stateToProps, {}))(PeoplesContainer)


