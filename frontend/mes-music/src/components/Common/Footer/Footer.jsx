import React from "react";
import stl from "./Footer.module.css"
import Logo from "../Logo/Logo";

const Footer = ({siteName}) => {
    return <footer className={stl.footer}>
        <Logo/>
    </footer>
}

export default Footer
