import React from 'react'
import Footer from '../../Component/Footer/Footer'
import Navbar from '../../Component/Navbar/Navbar'

import "./OurStory.css"

const OurStory = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='ourstory-title'>
                <p>Our Story</p>
            </div>
            <div className='story-img-container'>
                <div className='brand-img-container'>
                    <div className='left-brand-container'>
                        <div className='left-brand-content'>
                            <h4>THE BRAND</h4>
                            <p className='horizontal-line-container'><hr></hr></p>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                            <p>Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </div>
                    <div className='right-brand-img-container'></div>
                </div>
                <div className='designers-img-container'>
                    <div className='left-designers-img-container'></div>
                    <div className='right-designers-container'>
                        <div className='right-designers-content'>
                            <h4>THE DESIGNERS</h4>
                            <p className='horizontal-line-container'><hr></hr></p>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. click  “Edit Text” or double click me to add your own content and make changes to the font.
                                Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </>
    )
}

export default OurStory