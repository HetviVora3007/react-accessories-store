import React from 'react'
import Footer from '../../Component/Footer/Footer'
import Navbar from '../../Component/Navbar/Navbar'

import "./Contact.css"

const contact = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='contact-title'>
                <p>GET IN TOUCH</p>
            </div>
            <div className='customer-service-title'>
                <div className='customer-service'>
                    <p>CUSTOMER SERVICE</p>
                    <div className='container-horizontal-line'><hr></hr></div>
                </div>
            </div>
            <div className='main-time-container'>
                <div className='time-container'>
                    <div className='flagship-store'>
                        <p className='flagship-store-title'>Flagship Store</p>
                        <p className='para'>500 Terry Francois St.</p>
                        <p className='para'>San Francisco, CA 94158</p>
                    </div>
                    <div className='opening-hours'>
                        <p className='openinghours-Store-title'>Opening Hours</p>
                        <p className='para'>Monday-Friday</p>
                        <p className='para'>9:00am - 7:00pm EST</p>
                    </div>
                    <div className='contact-us'>
                        <p className='contact-us-title'>Contact Us</p>
                        <p className='para'>1-800-000-0000</p>
                        <p className='para'>info@mysite.com</p>
                    </div>
                </div>
            </div>
            <div className='div-space'></div>
            <div className='inquiries'>
                <div className='inquiries-container'>
                    <p className='inquiries-title'>Inquiries</p>
                    <p className='inquiries-para'>For questions regarding our products and services you can also</p>
                    <p className='inquiries-para'>contact us by filling out the form below.</p>
                </div>
            </div>
            <div className='form'>
                <div className='form-container'>
                    <div className='firstname-lastname'>
                        <div className='firstname'>
                            <p>First Name</p>
                            <input type='text' />
                        </div>
                        <div className='lastname'>
                            <p>Last Name</p>
                            <input type='text' />
                        </div>
                    </div>
                    <div className='email'>
                        <p>Email</p>
                        <input type='number' />
                    </div>
                    <div className='subject'>
                        <p>Subject</p>
                        <input type='text' />
                    </div>
                    <div className='message'>
                        <p>Message</p>
                        <input type='text' />
                    </div>
                </div>
                <div className='submit-button'>
                    <button>Submit</button>
                </div>
            </div>
            <div className='stockists'>
                <div className='stockists-container'>
                    <div className='stockists-title'>
                        <p className='title-name'>STOCKISTS</p>
                        <p className='stockists-horizontal-line'><hr></hr></p>
                    </div>
                    <div className='stockists-first-row'>
                        <div className='stockists-firstrow-cardone'>
                            <p>500 Terry Francois St.</p>
                            <p>San Francisco, CA 94158</p>
                            <p>123-456-7890</p>
                        </div>
                        <div className='stockists-firstrow-cardone'>
                            <p>500 Terry Francois St.</p>
                            <p>San Francisco, CA 94158</p>
                            <p>123-456-7890</p>
                        </div>
                        <div className='stockists-firstrow-cardone'>
                            <p>500 Terry Francois St.</p>
                            <p>San Francisco, CA 94158</p>
                            <p>123-456-7890</p>
                        </div>
                    </div>
                    <div className='stockists-second-row'>
                        <div className='stockists-firstrow-cardone'>
                            <p>500 Terry Francois St.</p>
                            <p>San Francisco, CA 94158</p>
                            <p>123-456-7890</p>
                        </div>
                        <div className='stockists-firstrow-cardone'>
                            <p>500 Terry Francois St.</p>
                            <p>San Francisco, CA 94158</p>
                            <p>123-456-7890</p>
                        </div>
                        <div className='stockists-firstrow-cardone'>
                            <p>500 Terry Francois St.</p>
                            <p>San Francisco, CA 94158</p>
                            <p>123-456-7890</p>
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

export default contact