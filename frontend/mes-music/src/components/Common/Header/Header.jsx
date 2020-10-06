import React from "react";
import stl from './Header.module.css';
import {NavLink} from "react-router-dom";
import Logo from "../Logo/Logo";
import DropDown from "../DropDown/DropDown";

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
                ['goups', '/peoples'],
                ['chat', '/messages'],
                ['training', '/training'],
                ['log out', '/home'],
            ],

            link : '/profile'
        }
    ]
    return <header className={stl.header}>
        <Logo widthLogo = '10'/>
        <div className={stl.authButton}>
            {isAuthorize
                ? <NavLink to = "/home"><button onClick={onLogOut}>Log out</button></NavLink>
                : <NavLink to = "/registration"><button>Registration</button></NavLink>}
            <div className={stl.menu}>
                {isAuthorize
                ? <DropDown builder={builderAuth}/>
                :<DropDown builder={builderNoAuth}/>}
            </div>
        </div>
    </header>
}



export default Header