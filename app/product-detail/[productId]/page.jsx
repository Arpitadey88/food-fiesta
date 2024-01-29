"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'
import BreadCrumb from '@/app/_components/BreadCrumb';
import ProductBanner from './ProductHome/ProductBanner';
import ProductInfo from './ProductHome/ProductInfo';
import ProductList from '@/app/_components/ProductList';


function ProductDetail({ params }) {
    const [productDetail, setProductDetail] = useState();
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        console.log('object id', params?.productId);
        params?.productId && getProductId();
    }, [])
    const getProductId = () => {
        GlobalApi.getProductsById(params?.productId).then(res => {
            console.log(res.data.data);
            setProductDetail(res.data.data);
            getProductListByCategory(res.data.data)
        })
    }
    const getProductListByCategory = (product) => {
        GlobalApi.getProductByCategory(product?.attributes?.category)
            .then(res => {
                console.log(res);
                setProductList(res.data.data);
            })
    }
    return (
        <div className='p-5 py-12 px-10 md:px-28'>
            <BreadCrumb />
            <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5 sm:gap-5'>
                <ProductBanner product={productDetail} />
                <ProductInfo product={productDetail} />
            </div>
            {productList && <div className='mt-16'>
                <h2 className='text-[20px] font-medium mb-4'>Similar Items</h2>
                <ProductList productList={productList} />
            </div>}

        </div>
    )
}
export default ProductDetail
