import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import "./Home.css"
import sliderimgone from '../../Assests/sliderimgone.png'
import sliderimgtwo from '../../Assests/sliderimgtwo.png'
import sliderimgthird from '../../Assests/sliderimgthird.png'
import sliderimgfive from '../../Assests/sliderimgfive.png'
import sliderimgsix from '../../Assests/sliderimgsix.png'
import sliderimgseven from '../../Assests/sliderimgseven.jpg'
import sliderimgeight from '../../Assests/sliderimgeight.jpg'
import sliderimgnine from '../../Assests/sliderimgnine.jpg'
import sliderimgten from '../../Assests/sliderimgten.jpg'
import sliderimgeleven from '../../Assests/sliderimgeleven.jpg'
import sliderimgthirteen from '../../Assests/sliderimgthirteen.jpg'
import mimileathergoodsleftimg from '../../Assests/mimileathergoodsleftimg.png'
import leatherbeltsrightimg from '../../Assests/leatherbeltsrightimg.png'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 2024, min: 1000 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1000, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
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
            </div>
            <div className='best-sallers'>
                <div className='best-sallers-title'>
                    <p>BEST SALLERS</p>
                    <p className='line'><hr></hr></p>
                </div>
                <div className='best-sellers-slider'>
                    <Carousel className='cards' responsive={responsive}>
                        <div className='card-one'>
                            <Link to='/shopall'>
                                <img src={sliderimgone} />
                            </Link>
                            <p>I'm a Product</p>
                            <p>$400.00</p>
                        </div>
                        <div className='about-card'>
                            <div>
                                <Link to='/shopall'>
                                    <img src={sliderimgtwo} />
                                    <div className='about-card'>
                                        <p>Quick view</p>
                                    </div>
                                </Link>
                            </div>
                            <div className='about-card-product'>
                                <p>I'm a Product</p>
                                <p className='para'>$400.00</p>
                            </div>
                        </div>
                        <div className='card-two'>
                            <div>
                                <Link to='/shopall'>
                                    <img src={sliderimgthird} />
                                </Link>
                            </div>
                            <div className='about-card-product'>
                                <p>I'm a Product</p>
                                <p className='para'>$400.00</p>
                            </div>
                        </div>
                        <div className='card-two'>
                            <div>
                                <Link to='/shopall'>
                                    <img src={sliderimgone} />
                                </Link>
                            </div>
                            <div className='about-card-product'>
                                <p>I'm a Product</p>
                                <p className='para'>$250.00</p>
                            </div>
                        </div>
                        <div className='card-two'>
                            <div>
                                <Link to='/shopall'>
                                    <img src={sliderimgtwo} />
                                </Link>
                            </div>
                            <div className='about-card-product'>
                                <p>I'm a Product</p>
                                <p className='para'>$300.00</p>
                            </div>
                        </div>
                        <div className='card-two'>
                            <div>
                                <Link to='/shopall'>
                                    <img src={sliderimgthird} />
                                </Link>
                            </div>
                            <div className='about-card-product'>
                                <p>I'm a Product</p>
                                <p className='para'>$150.00</p>
                            </div>
                        </div>
                        <div className='card-two'>
                            <div>
                                <Link to='/shopall'>
                                    <img src={sliderimgten} />
                                </Link>
                            </div>
                            <div className='about-card-product'>
                                <p>I'm a Product</p>
                                <p className='para'>$150.00</p>
                            </div>
                        </div>
                        <div className='card-two'>
                            <div>
                                <Link to='/shopall'>
                                    <img src={sliderimgseven} />
                                </Link>
                            </div>
                            <div className='about-card-product'>
                                <p>I'm a Product</p>
                                <p className='para'>$150.00</p>
                            </div>
                        </div>
                        <div className='card-two'>
                            <div>
                                <Link to='/shopall'>
                                    <img className='slider-img' src={sliderimgthirteen} />
                                </Link>
                            </div>
                            <div className='about-card-product'>
                                <p>I'm a Product</p>
                                <p className='para'>$400.00</p>
                            </div>
                        </div>
                        <div className='card-two'>
                            <div>
                                <Link to='/shopall'>
                                    <img src={sliderimgfive} />
                                </Link>
                            </div>
                            <div className='about-card-product'>
                                <p>I'm a Product</p>
                                <p className='para'>$150.00</p>
                            </div>
                        </div>
                        <div className='card-two'>
                            <div>
                                <Link to='/shopall'>
                                    <img src={sliderimgsix} />
                                </Link>
                            </div>
                            <div className='about-card-product'>
                                <p>I'm a Product</p>
                                <p className='para'>$150.00</p>
                            </div>
                        </div>
                        <div className='card-two'>
                            <div>
                                <Link to='/shopall'>
                                    <img src={sliderimgeleven} />
                                </Link>
                            </div>
                            <div className='about-card-product'>
                                <p>I'm a Product</p>
                                <p className='para'>$150.00</p>
                            </div>
                        </div>
                        <div className='card-two'>
                            <div>
                                <Link to='/shopall'>
                                    <img src={sliderimgnine} />
                                </Link>
                            </div>
                            <div className='about-card-product'>
                                <p>I'm a Product</p>
                                <p className='para'>$150.00</p>
                            </div>
                        </div>
                        <div className='card-two'>
                            <div>
                                <Link to='/shopall'>
                                    <img src={sliderimgeight} />
                                </Link>
                            </div>
                            <div className='about-card-product'>
                                <p>I'm a Product</p>
                                <p className='para'>$150.00</p>
                            </div>
                        </div>

                    </Carousel>
                </div>
                <div className='best-sallers-button'>
                    <div className='shopall-button'>
                        <Link className='shopall-button-link' to='/shopall'>Shop All Bags</Link>
                    </div>
                </div>
            </div>
            <div className='space'></div>
            <div className='imagediv-containet'>
                <div className='mini-leather-goods'>
                    <div className='left-minileather-goods'>
                        <div className='minileather-goods-img'>
                            <img src={mimileathergoodsleftimg} />
                            <div className='minileather-goods-content'>
                                <p>I'm a Product</p>
                                <p className='minileather-goods-price'>$100.00</p>
                            </div>
                        </div>
                    </div>
                    <div className='right-minileather-goods'>
                        <div className='minileather-goods-link-container'>
                            <Link className='minileather-goods-link' to='/shopall'>MINI LEATHER GOODS</Link>
                        </div>
                    </div>
                </div>
                <div className='leather-belts'>
                    <div className='left-leather-belts'>
                        <div className='leather-belts-link-container'>
                            <Link className='leather-belts-link' to='/shopall'>LEATHER BELTS</Link>
                        </div>
                    </div>
                    <div className='right-leather-belts'>
                        <div className='leather-belts-img'>
                            <img src={leatherbeltsrightimg} />
                            <div className='leather-belts-content'>
                                <p>I'm a Product</p>
                                <p className='leather-belts-price'>$50.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-container'>
                <div className='brand-container'>
                    <div className='brand-card'>
                        <div className='card-container'>
                            <div className='brand-container-content'>
                                <p>Family Owned</p>
                                <p className='brand'>BRAND</p>
                                <p className='horizontal-line'><hr></hr></p>
                            </div>
                            <div className='brand-container-link'>
                                <Link className='brand-container-link' to='/ourstory'>Read our Story</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='products-container'>
                    <div className='product-card'>
                        <div className='card-container'>
                            <div className='products-container-content'>
                                <p>Hand Crafted</p>
                                <p className='products'>PRODUCTS</p>
                                <p className='horizontal-line'><hr></hr></p>
                            </div>
                            <div className='products-container-link'>
                                <Link className='products-container-link' to='/ourcraft'>About our leather</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='usa-container'>
                    <div className='usa-card'>
                        <div className='card-container'>
                            <div className='usa-container-content'>
                                <p>Created in the</p>
                                <p className='usa'>USA</p>
                                <p className='horizontal-line'><hr></hr></p>
                            </div>
                            <div className='usa-container-link'>
                                <Link className='usa-container-link' to='/ourcraft'>Learn our process</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-instragram'>
                <div className='about-title'>
                    <div className='paragraph'>
                        <p >FOLLOW</p>
                        <p > ADALENE ON INSTRAGRAM</p>
                    </div>
                    <p className='insta-account'>@adaleneshop</p>
                </div>
            </div>
            <div className='about-slider'>
                <div className='slider-imgone'></div>
                <div className='slider-imgtwo'></div>
                <div className='slider-imgthree'></div>
                <div className='slider-imgfour'></div>
                <div className='slider-imgfive'></div>
            </div>
            <div className='about-info'>
                <div className='about-Worldwide-shipping'>
                    <p className='about-horizontal-line'><hr></hr></p>
                    <p className='about-content'>Worldwide shipping</p>
                </div>
                <div className='about-return-days'>
                    <p className='about-horizontal-line'><hr></hr></p>
                    <p className='about-content'>Easy 30 day returns</p>
                </div>
                <div className='about-month-warranty'>
                    <p className='about-horizontal-line'><hr></hr></p>
                    <p className='about-content'>12 month warranty</p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Home