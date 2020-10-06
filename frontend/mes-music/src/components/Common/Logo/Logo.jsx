import React from "react";
import stl from "./Logo.module.css"
import {NavLink} from "react-router-dom";
import logo from "../../../img/logo.png";

const Logo = ({widthLogo}) => {
    const SITE_NAME = "Mess Music"
    return <div className={stl.logo} style={{width: widthLogo+'%'}}>
        <NavLink to = "/profile">
            <img src = {logo}/>
            <div className={stl.name}>{SITE_NAME}</div>
        </NavLink>
    </div>
}

export default Logo