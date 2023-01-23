import React from 'react'
import { useEffect } from 'react'

import Footer from '../../Component/Footer/Footer'
import Navbar from '../../Component/Navbar/Navbar'
import "./OurCraft.css"

const OurCraft = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='ourcraft-title'>
                <p>Our Craft</p>
            </div>
            <div className='craft-img-container'>
                <div className='design-img-container'>
                    <div className='left-design-container'>
                        <div className='left-design-content'>
                            <h4>DESIGN</h4>
                            <p className='horizontal-line-container'><hr></hr></p>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. click “Edit Text” or double click me to add your own content and make changes to the font.Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </div>
                    <div className='right-design-img-container'></div>
                </div>
                <div className='selection-img-container'>
                    <div className='left-selection-img-container'></div>
                    <div className='right-selection-container'>
                        <div className='right-selection-content'>
                            <h4>SELECTION</h4>
                            <p className='horizontal-line-container'><hr></hr></p>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                            <p>Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </div>
                </div>
                <div className='crastsmanship-img-container'>
                    <div className='left-crastsmanship-container'>
                        <div className='left-crastsmanship-content'>
                            <h4>CRAFTSMANSHIP</h4>
                            <p className='horizontal-line-container'><hr></hr></p>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. click “Edit Text” or double click me to add your own content and make changes to the font.Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </div>
                    <div className='right-crastsmanship-img-container'></div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default OurCraft