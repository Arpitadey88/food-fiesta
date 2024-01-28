"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'
import BreadCrumb from '@/app/_components/BreadCrumb';
import ProductBanner from './ProductHome/ProductBanner';
import ProductInfo from './ProductHome/ProductInfo';


function ProductDetail({ params }) {
    const [productDetail, setProductDetail] = useState();
    useEffect(() => {
        console.log('object id', params?.productId);
        params?.productId && getProductId();
    }, [])
    const getProductId = () => {
        GlobalApi.getProductsById(params?.productId).then(res => {
            console.log(res.data.data);
            setProductDetail(res.data.data);
        })
    }
    return (
        <div className='p-5 py-12 px-10 md:px-28'>
            <BreadCrumb />
            <div>
                <ProductBanner />
                <ProductInfo />
            </div>
        </div>

    )
}

export default ProductDetail
