import { ChevronRightSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ProductItem({ product }) {
    return (
        <Link href={'/product-detail/' + product.id}>
            <div className='hover:border rounded-lg border-grey-300'>
                <Image className='rounded-t-lg h-[190px] object-cover' src={product?.attributes?.banner?.data?.attributes?.url}
                    alt='banner' width={400} height={300} />
                <div className='flex justify-between items-center bg-gray-100 rounded-b-lg p-3'>
                    <div className=''>
                        <h2 className='text-[16px] font-medium'>{product?.attributes?.title}</h2>
                        {product?.attributes?.category && <h2 className='flex gap-2 items-center text-[14px] font-medium text-gray-500'><ChevronRightSquare className='h-4 w-4' />  {product?.attributes?.category}</h2>}
                    </div>
                    <h2 className='font-medium'>$ {product?.attributes?.pricing}</h2>
                </div>
            </div>

        </Link>
    )
}

export default ProductItem