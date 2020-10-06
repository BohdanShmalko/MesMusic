import React from 'react'
import stl from './DropDown.module.css'
import {NavLink} from 'react-router-dom'

const DropDown = ({builder}) => {
    let menu = builder.map((wall, index) => (
        <li key = {index}>
            { wall.link ? <NavLink to = {wall.link}>{wall.external}</NavLink> : wall.external}
            {wall.internal &&
            <ul>
                {wall.internal.map((brick,index) => (
                    <li key = {index}>
                        { brick[1] ? <NavLink to = {brick[1]}>{brick[0]}</NavLink> : brick[0]}
                    </li>
                ))}
            </ul>}
        </li>
        )
    )


    return <div className={stl.dropDown}>
        <ul>
            {menu}
        </ul>
    </div>
}

export default DropDown