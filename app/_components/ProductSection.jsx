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
    const filterdProductList = (category) => {
        const result = productList.filter(item =>
            item.attributes.category == category);
        return result;
    }

    return (
        (productList &&
            <div className='px-10 md:px-20 my-10'>
                {/* Pizza Items */}
                <h2 className='font-bold text-[20px] my-3'>Popular Pizaa Items</h2>
                <ProductList productList={filterdProductList('pizza')} />
                {/* Burger Items */}
                <h2 className='font-bold text-[20px] my-3'>Popular Burger Items</h2>
                <ProductList productList={filterdProductList('burger')} />
                {/* Sandwich Items */}
                <h2 className='font-bold text-[20px] my-3'>Popular Sandwich Items</h2>
                <ProductList productList={filterdProductList('sandwich')} />
            </div>
        )

    )
}

export default ProductSection