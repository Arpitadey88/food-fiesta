"use client"
import React, { useContext } from 'react'
import { CartContext } from '../../../_context/CartContext';
import GlobalApi from '../../../_utils/GlobalApi';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

// import GlobalApi from '@/app/_utils/GlobalApi';
// import { useUser } from '@clerk/nextjs'
import { AlertOctagon, BadgeCheck, ShoppingCart } from 'lucide-react'
// import { useRouter } from 'next/navigation';

function ProductInfo({ product }) {
    const router = useRouter();
    const { user } = useUser();
    const { cart, setCart } = useContext(CartContext);
    const onAddToCartClick = () => {
        if (!user) {
            router.push('/sign-in')
            return
        }
        else {
            const data = {
                data: {
                    userName: user.fullName,
                    email: user.primaryEmailAddress.emailAddress,
                    products: [product?.id]

                }
            }
            GlobalApi.addToCart(data).then(res => {
                console.log('add to cart', res);
                if (res) {
                    setCart(cart => [...cart,
                    {
                        id: res?.data?.id,
                        product: product
                    }
                    ])
                }

            }, (error) => {
                console.log('Error', error);
            })
        }
    }
    return (
        <div>
            <div className=''>
                <h2 className='text-[20px] font-medium'>{product?.attributes?.title}</h2>
                <h2 className=' text-[15px] font-medium text-gray-500'> {product?.attributes?.category}</h2>
                <h2 className=''> {product?.attributes?.description[0].children[0].text}</h2>
                <h2 className=' text-[15px] font-medium mt-5 text-gray-800'> {product?.attributes?.whatsIncluded}</h2>
            </div>
            <h2 className='text-[28px] mt-5 text-blue-600 font-medium'>$ {product?.attributes?.pricing}</h2>
            <h3 className='flex items-center gap-3 mt-5 text-gray-500 font-[13px]'>{product?.attributes?.InstantDelivery ? <BadgeCheck className='text-green-600 h-5 w-5' /> : <AlertOctagon className='text-yellow-300  h-5 w-5' />}Eligible for Instant Delivery</h3>
            <button onClick={() => onAddToCartClick()} className='flex gap-2 p-3 px-10 mt-5 rounded-lg bg-blue-600 text-white hover:bg-blue-800'>
                <ShoppingCart /> Add to Cart
            </button>
        </div>
    )
}

export default ProductInfo