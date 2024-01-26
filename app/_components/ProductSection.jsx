"use client"
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import GlobalApi from '../_utils/GlobalApi'

function ProductSection() {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        getAllProducts();
    }, [])
    const getAllProducts = () => {
        GlobalApi.getLatestProducts().then(res => {
            console.log(res.data.data);
            setProductList(res.data.data)
        })
    }

    return (
        (productList &&
            <div className='px-10 md:px-20 my-10'>
                {/* latest Items */}
                <h2 className='font-bold text-[20px] my-3'>Latest Items</h2>
                <ProductList productList={productList} />
                {/* popular Items */}
                <h2 className='font-bold text-[20px] my-3'>Popular Items</h2>
                <ProductList productList={productList} />
                {/* New Items */}
                <h2 className='font-bold text-[20px] my-3'>New Items</h2>
                <ProductList productList={productList} />
            </div>
        )

    )
}

export default ProductSection