import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-content'>
                    <div className='navbar-items'>
                        <Link className='link' to="/">Home</Link>
                        <Link className='link' to="/shopall">Shop All</Link>
                        <Link className='link' to="/ourstory">Our Story</Link>
                        <Link className='link' to="/ourcraft">Our Craft</Link>
                        <Link className='link' to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar