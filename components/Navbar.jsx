import React from 'react'
import Link from 'next/link'
import { AlignJustify, Search, Heart, Gift, ShoppingCart } from 'lucide-react';

const Navbar = () => {
    return (
        <>
            <div className='w-screen h-20 border-2 border-black flex items-center justify-evenly' >
                <Link href={'/'} className='text-2xl font-bold'  >Ecommerce</Link>
                <div className='flex w-32 h-8 items-center justify-between hover:bg-gray-200 p-2 rounded-3xl ease-in-out ' >
                    <AlignJustify />
                    <h5 className='font-bold' >Categories</h5>
                </div>
                <div className='w-[50vw] group h-12 rounded-4xl border-2 border-black flex items-center justify-between'  >
                    <input type="text" placeholder='Search for anything' className='rounded-bl-4xl rounded-tl-4xl h-full p-5 w-[93%]' />
                    <div className='flex items-center justify-center w-[7%] rounded-tr-4xl rounded-br-4xl h-full group-hover:bg-orange-500 transition-colors duration-300 ' >
                        <Search />
                    </div>
                </div>
                <h1 className='font-bold' >Sign in</h1>
                <div className="relative group">
                    <div className="icon-bg-blue">
                        <Heart />
                    </div>
                    <span className='tooltip' >
                        Favourites
                    </span>
                </div> 
                <div className="relative group">
                    <div className="icon-bg-blue">
                    <Gift />
                    </div>
                    <span className='tooltip' >
                        Gifts
                    </span>
                </div>
                <div className="relative group">
                    <div className="icon-bg-blue">
                    <ShoppingCart />
                        <div className='w-5 h-5 border-2 border-white rounded-full flex items-center justify-center p-2 absolute top-0 right-0 text-white bg-red-500 ' >
                            <h6 className='text-[13px] font-bold ' >1</h6>
                        </div>
                    </div>
                    <span className='tooltip' >
                        Cart
                    </span>
                </div>
            </div>
        </>
    )
}

export default Navbar