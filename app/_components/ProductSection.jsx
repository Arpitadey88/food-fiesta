"use client"
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import GlobalApi from '../_utils/GlobalApi'
import { ArrowRightIcon } from 'lucide-react';

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
                <h2 className='font-bold text-[20px] my-3'>Popular Pizaa
                    <span className='font-normal text-[14px] float-right text-blue-600 flex items-center cursor-pointer hover:text-blue-800'>View All Collectoin <ArrowRightIcon className='w-5' /></span></h2>
                <ProductList productList={filterdProductList('pizza')} />

                {/* Burger Items */}
                <h2 className='font-bold text-[20px] my-5'>Popular Burger Items
                    <span className='font-normal text-[14px] float-right text-blue-600 flex items-center cursor-pointer hover:text-blue-800'>View All Collectoin <ArrowRightIcon className='w-5' /></span></h2>
                <ProductList productList={filterdProductList('burger')} />

                {/* Sandwich Items */}
                <h2 className='font-bold text-[20px] my-5'>Popular Sandwich Items
                    <span className='font-normal text-[14px] float-right text-blue-600 flex items-center cursor-pointer hover:text-blue-800'>View All Collectoin <ArrowRightIcon className='w-5' /></span></h2>
                <ProductList productList={filterdProductList('sandwich')} />
            </div>
        )

    )
}

export default ProductSection