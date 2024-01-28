import React from 'react'

function ProductInfo({ product }) {
    return (
        <div>
            <div className=''>
                <h2 className='text-[20px] font-medium'>{product?.attributes?.title}</h2>
                <h2 className=' text-[15px] font-medium text-gray-500'> {product?.attributes?.category}</h2>
                <h2 className=''> {product?.attributes?.description[0].children[0].text}</h2>
                <h2 className=' text-[15px] font-medium mt-5 text-gray-800'> {product?.attributes?.whatsIncluded}</h2>
            </div>
            <h2 className='text-[28px] mt-5 text-blue-600 font-medium'>$ {product?.attributes?.pricing}</h2>
        </div>
    )
}

export default ProductInfo