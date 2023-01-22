import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import "./AboutProduct.css"
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import Data from '../../Utils/Data'

const Product = () => {
    const [productData, setProductData] = useState({})
    const params = useParams()

    useEffect(() => {
        const id = params.id
        const obj = Data.filter(d => Number(d.id) === Number(id))
        setProductData(obj[0])
    }, [])
    return (
        <>
            <div><Navbar /></div>
            <div className='about-product-title'>
                <p>About Product</p>
            </div>
            <div className='main-product-container'>
                <div className='product-container'>
                    <div className='leftside-product-container'>
                        <div className='img-container'>
                            <img src={productData.product_img} />
                        </div>
                        <div className='product-description-container'>
                            <p>{productData.product_description}</p>
                        </div>
                    </div>
                    <div className='rightside-product-container'>
                        <div className='rightside-product-information-container'>
                            <div className='about-productname-and-sku'>
                                <p className='product-name'>{productData.product_name}</p>
                                <p className='sku'>SKU: {productData.sku}</p>
                            </div>
                            <div className='about-productprice'>
                                <p className='product-price'>{productData.product_price}</p>
                            </div>
                            <div className='about-productquantity'>
                                <p>Quantity</p>
                                <input type='number' />
                            </div>
                            <div className='about-addtocard-buynow-buttons'>
                                <button className='add-to-card'>Add to Card</button>
                                <button className='buy-now'>Buy Now</button>
                            </div>
                            <div className='product-info'>
                                <p className='product-info-title'>PRODUCT INFO</p>
                                <p className='product-information'>{productData.producr_info}</p>
                            </div>
                            <div className='return-and-refund-policy'>
                                <p className='return-and-refund-policy-title'>RETURN & REFUND POLICY</p>
                                <p className='return-and-refund-policy-information'>{productData.return_and_refund_policy}</p>
                            </div>
                            <div className='shipping-info'>
                                <p className='shipping-info-title'>SHIPPING INFO</p>
                                <p className='shipping-information'>{productData.shipping_info}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div><Footer /></div>
        </>
    )
}

export default Product