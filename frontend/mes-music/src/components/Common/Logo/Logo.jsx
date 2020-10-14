import React from 'react'
import stl from './Logo.module.css'
import {NavLink} from 'react-router-dom'
import logo from '../../../static/logo.png'
import {constantes} from '../../../static/constantes'

const Logo = ({widthLogo}) => {
    const {appName} = constantes;
    return <div className={stl.logo} style={{width: widthLogo+'%'}}>
        <NavLink to = "/profile">
            <img src = {logo}/>
            <div className={stl.name}>{appName}</div>
        </NavLink>
    </div>
}

export default Logo