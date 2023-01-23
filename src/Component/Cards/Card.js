import React from 'react'
import { Link } from 'react-router-dom'

import "./Card.css"

const Card = (props) => {
    return (
        <div>
            <div className='product-one'>
                <div className='product-img-container'>
                    <Link to={`/aboutproduct/${props.Data.id}`}><img src={props.Data.product_img} /></Link>
                </div>
                <div className='product-one-details-container'>
                    <p className='product-name'>{props.Data.product_name}</p>
                    <p className='product-price'>{props.Data.product_price}</p>
                </div>
            </div>
        </div>
    )
}

export default Card