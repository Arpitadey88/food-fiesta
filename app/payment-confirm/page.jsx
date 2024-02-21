import Image from 'next/image'
import React from 'react'
import checkIcon from '../../public/images/checkIcon.gif'

function PaymentConfirm() {
    return (
        <div className='text-center'>
            <div className="p-8  sm:p-12">
                <div className='flex items-center justify-center'>
                    <Image src={checkIcon}
                        className=' object-cover ' alt='banner' width={150} height={150} />
                </div>
                <h3 className=" font-semibold uppercase tracking-widest text-green-700">
                    Payment Successful !!
                </h3>

                <h3 className="mt-6 text-3xl font-bold">Thanks for your purchase, We sent an email <br /> with your order confirmation along with order details!</h3>

                <div>
                    <a
                        className="mt-8 inline-block  rounded-full bg-yellow-500 hover:bg-yellow-400 py-4 px-8 text-sm font-bold text-white shadow-xl"
                        href="/"
                    >
                        Go To Home
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PaymentConfirm