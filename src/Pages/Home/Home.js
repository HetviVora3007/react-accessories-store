import React from 'react'

import "./Home.css"
import Navbar from '../../Component/Navbar/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='homepage-container'>
                <div className='homepage-content'>
                    <div className='homepage-img-content'>
                        <div className='img-content'>
                            <p>CUE THE COLOR</p>
                        </div>
                        <div className='homepage-link-button'>
                            <Link className='homepage-link' to='/shopall'>Shop The Collection</Link>
                        </div>
                    </div>
                </div>
                <div className='best-sallers'>
                    <div className='best-sallers-title'>
                        <p>Best Sallers</p>
                    </div>
                    <div className='best-sellers-slider'></div>
                    <div className='best-sallers-button'></div>
                </div>
            </div>
        </>
    )
}

export default Home