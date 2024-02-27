"use client"
import React, { useContext, useEffect, useState } from 'react'
import logo from '../../public/images/Chef.png'
import Image from 'next/image'
import { UserButton, useUser } from '@clerk/nextjs'
import { ShoppingCart } from 'lucide-react'
import { CartContext } from '../_context/CartContext'
import GlobalApi from '../_utils/GlobalApi'
import Cart from './Cart'

function Header() {
    const { user } = useUser();
    const [isLogin, setIsLogin] = useState();
    const [openCart, setOpenCart] = useState(false);
    const { cart, setCart } = useContext(CartContext);
    console.log('path', window.location.href);
    useEffect(() => {
        setIsLogin(window.location.href.toString().includes('sign-up'))
        setIsLogin(window.location.href.toString().includes('sign-in'))
    }, [])

    useEffect(() => {
        user && getCartItem()
    }, [user])

    // useEffect(() => {
    //     openCart == false && setOpenCart(true)
    // }, [cart])

    const toggleCart = () => {
        setOpenCart(prevOpenCart => !prevOpenCart);
    };


    const getCartItem = () => {
        GlobalApi.getUserCartItems(user.primaryEmailAddress.emailAddress).then(res => {
            const result = res.data.data
            result && result.forEach(item => {
                setCart(cart => [...cart,
                {
                    id: item.id,
                    product: item.attributes.products.data[0]
                }
                ])
                console.log('user cart data', item.attributes.products);
            });
        })
    }

    return !isLogin && (
        <header className="bg-black">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-1">
                        <Image src='/images/Chef.png' width={40} height={40} />
                        <h1 className='ms-1 text-lg font-medium text-yellow-500'>FoodFiesta</h1>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-yellow-400 transition hover:text-yellow-400/75" href="/"> Home </a>
                                </li>

                                <li>
                                    <a className="text-yellow-400 transition hover:text-yellow-400/75" href="/"> Explore </a>
                                </li>

                                <li>
                                    <a className="text-yellow-400 transition hover:text-yellow-400/75" href="/"> About Us </a>
                                </li>

                                <li>
                                    <a className="text-yellow-400 transition hover:text-yellow-400/75" href="/"> Products </a>
                                </li>

                                <li>
                                    <a className="text-yellow-400 transition hover:text-yellow-400/75" href="/"> Contact Us </a>
                                </li>
                            </ul>
                        </nav>
                    </div>


                    <div className="flex items-center gap-4">
                        {!user ?
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-yellow-400 px-5 py-2.5 text-sm font-medium text-white shadow"
                                    href="/sign-in"
                                >
                                    Login
                                </a>

                                <div className="hidden sm:flex">
                                    <a
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm text-yellow-400 font-medium hover:bg-yellow-400 hover:text-white"
                                        href="/sign-up"
                                    >
                                        Register
                                    </a>
                                </div>
                            </div>
                            : <div className='flex items-center gap-5'>
                                <h2 className='flex items-center text-yellow-400 gap-1 cursor-pointer'
                                    // onClick={() => setOpenCart(!openCart)}
                                    onClick={toggleCart}
                                >
                                    <ShoppingCart />({cart?.length})</h2>
                                <UserButton />
                            </div>

                        }
                        {openCart && <Cart />}
                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header