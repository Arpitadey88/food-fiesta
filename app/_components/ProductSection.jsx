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
                <ProductList productList={productList} />
            </div>
        )

    )
}

export default ProductSection