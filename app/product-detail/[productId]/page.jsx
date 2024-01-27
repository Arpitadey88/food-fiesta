"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'


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
        <div>ProductDetail</div>
    )
}

export default ProductDetail
