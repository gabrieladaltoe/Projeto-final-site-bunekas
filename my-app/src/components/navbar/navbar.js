import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/branco-logo.png'
import './navbar.css'
import Menu from './menu'

const Navbar = () => (
    <nav className='navbar'>
        <Link to='/'>
            <img className='navbar__logo' src={logo} alt='Reprograma'/>
        </Link>
        <Menu />
    </nav>
)

export default Navbar