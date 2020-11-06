import React from 'react'
import stl from './Footer.module.css'
import Logo from '../Logo/Logo'

const Footer = ({appColor}) => {
    return <footer className={stl.footer} style={{backgroundColor : appColor}}>
        <Logo widthLogo = '10'/>
    </footer>
}

export default Footer
