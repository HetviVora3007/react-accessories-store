import React from 'react'

import Card from '../../Component/Cards/Card'
import Footer from '../../Component/Footer/Footer'
import Navbar from '../../Component/Navbar/Navbar'
import Data from '../../Utils/Data'
import "./ShopAll.css"

const ShopAll = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='shop-all-title'>
                <p>Shop All</p>
            </div>
            <div className='products'>
                <div className='all-product-container'>
                    {Data.map((d) => <Card Data={d} />)}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default ShopAll