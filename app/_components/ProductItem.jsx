import Image from 'next/image'
import React from 'react'

function ProductItem({ product }) {
    return (
        <div>
            <div>
                <Image className='rounded-t-lg h-[190px] object-cover' src={product?.attributes?.banner?.data?.attributes?.url}
                    alt='banner' width={400} height={300} />
                <div className='p-3'>
                    <h2 className='text-[14px] font-medium'>{product?.attributes?.title}</h2>
                    <h2 className='text-[12px] font-medium text-gray-500'>{product?.attributes?.category}</h2>
                </div>
            </div>

        </div>
    )
}

export default ProductItem