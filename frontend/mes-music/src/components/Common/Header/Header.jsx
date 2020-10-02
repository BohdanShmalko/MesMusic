import React from "react";
import stl from './Header.module.css';
import {NavLink} from "react-router-dom";
import Logo from "../Logo/Logo";

const Header = ({isAuthorize, changeAuthorizeStatus}) =>{
    const onLogOut = () => changeAuthorizeStatus(false)
    return <header className={stl.header}>
        <Logo/>
        <div className={stl.authButton}>
            {isAuthorize
                ? <NavLink to = "/home"><button onClick={onLogOut}>Log out</button></NavLink>
                : <NavLink to = "/registration"><button>Registration</button></NavLink>}
        </div>
    </header>
}



export default Header