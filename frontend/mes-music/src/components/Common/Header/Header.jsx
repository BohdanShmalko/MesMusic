import React from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'
import Logo from '../Logo/Logo'
import DropDown from '../DropDown/DropDown'

const Header = ({isAuthorize, changeAuthorizeStatus}) =>{
    const onLogOut = () => changeAuthorizeStatus(false)
    const builderNoAuth = [
        {
            external : 'menu',
            internal : [['log in', '/home'],['registration', '/registration']],
            link : '/profile'
        }
    ]
    const builderAuth = [
        {
            external : 'menu',
            internal : [
                ['my profile', '/profile'],
                ['news', '/news'],
                ['music', '/music'],
                ['friends', '/peoples'],
                ['groups', '/peoples'],
                ['chat', '/messages'],
                ['training', '/training'],
                ['log out', '/home'],
            ],

            link : '/profile'
        }
    ]
    return <header className={s.header}>
        <Logo widthLogo = '80'/>
        {/*in future*/}<div className={s.content}></div>
        <div className={s.authButton}>
            {isAuthorize
                ? <NavLink to = '/home'><button onClick={onLogOut}>Log out</button></NavLink>
                : <NavLink to = '/registration'><button>Registration</button></NavLink>}
            <div className={s.menu}>
                {isAuthorize
                ? <DropDown builder={builderAuth}/>
                :<DropDown builder={builderNoAuth}/>}
            </div>
        </div>
    </header>
}



export default Header