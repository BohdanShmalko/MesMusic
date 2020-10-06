import React from 'react'
import stl from './Footer.module.css'
import Logo from '../Logo/Logo'

const Footer = ({siteName}) => {
    return <footer className={stl.footer}>
        <Logo widthLogo = '10'/>
    </footer>
}

export default Footer
