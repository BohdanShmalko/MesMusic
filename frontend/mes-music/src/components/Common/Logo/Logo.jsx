import React from 'react'
import s from './Logo.module.css'
import {NavLink} from 'react-router-dom'
import {constantes} from '../../../static/constantes'

const {appName, logoImg} = constantes

const Logo = ({widthLogo}) => {
    return <div className={s.logo} style={{width: widthLogo+'%'}}>
        <NavLink to = '/profile'>
            <img src = {logoImg}/>
            <div className={s.name}>{appName}</div>
        </NavLink>
    </div>
}

export default Logo