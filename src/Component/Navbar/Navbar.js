import React from 'react'
import { NavLink } from 'react-router-dom'

import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-content'>
                    <div className='navbar-items'>
                        <NavLink className='link' to="/">Home</NavLink>
                        <NavLink className='link' to="/shopall">Shop All</NavLink>
                        <NavLink className='link' to="/ourstory">Our Story</NavLink>
                        <NavLink className='link' to="/ourcraft">Our Craft</NavLink>
                        <NavLink className='link' to="/contact">Contact</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar