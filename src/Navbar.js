import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
        <Link to='/' className='site-title'>Router</Link>
        <ul>
            <CustomLink to="/pricing">Pricing</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </ul>
    </nav>
  )
}

const CustomLink = ( {to, children, ...props}) =>{
    const path = window.location.pathname
    return(
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default Navbar
