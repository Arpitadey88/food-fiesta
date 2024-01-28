import Image from 'next/image'
import React from 'react'

function ProductBanner({ product }) {
    return (
        <div className='flex justify-center'>
            <Image src={product?.attributes?.banner?.data?.attributes?.url}
                className='rounded-lg object-cover ' alt='banner' width={400} height={400} />
        </div>
    )
}

export default ProductBanner