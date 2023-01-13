import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <div className='footer-main-title'>
                    <p>adalene.</p>
                </div>
                <div className='footer-content-first-colum'>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/shopall">Shop All</Link>
                    <Link className='link' to="/ourstory">Our Story</Link>
                    <Link className='link' to="/ourcraft">Our Craft</Link>
                    <Link className='link' to="/contact">Contact</Link>
                </div>
                <div className='footer-content-second-colum'>
                    <p>FAQ</p>
                    <p>Shpping & Return</p>
                    <p>Store Policy</p>
                    <p>Payment Methods</p>
                    <p>Stockists</p>
                </div>
                <div className='footer-content-third-colum'>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Pinterest</p>
                </div>
                <div className='footer-join-us'>
                    <h1>JOIN US!</h1>
                    <p>Email</p>
                    <input type='email' />
                    <button>Send</button>
                </div>
            </div>
            <div className='end-footer'>
                <p>©2035 by adalene. Powered and secured by Wix</p>
            </div>
        </>
    )
}

export default Footer