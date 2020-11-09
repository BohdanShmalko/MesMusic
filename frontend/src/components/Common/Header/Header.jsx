import React from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'
import Logo from '../Logo/Logo'
import DropDown from '../DropDown/DropDown'

const Header = ({isAuthorize, changeAuthorizeStatus, appColor}) =>{
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
                ['dialogs', '/dialogs'],
                ['training', '/training'],
                ['log out', '/home'],
            ],

            link : '/profile'
        }
    ]
    return <header className={s.header} style={{backgroundColor : appColor}}>
        <Logo widthLogo = '80'/>
        {/*in future*/}<div className={s.content}></div>
        <div className={s.authButton}>
            {isAuthorize
                ? <NavLink to = '/home'><button onClick={onLogOut}>Log out</button></NavLink>
                : <NavLink to = '/registration'><button>Registration</button></NavLink>}
            <div className={s.menu}>
                {true//isAuthorize
                ? <DropDown builder={builderAuth} background = {appColor}/>
                :<DropDown builder={builderNoAuth} background = {appColor}/>}
            </div>
        </div>
    </header>
}



export default Header