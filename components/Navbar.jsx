"use client"
import { useState } from 'react'
import Link from 'next/link'
import { AlignJustify, Search, Heart, Gift, ShoppingCart } from 'lucide-react';

const Navbar = () => {
    const [categoryClick, setcategoryClick] = useState(false);
    return (
        <>
            <div className='w-screen h-20 border-b-2 border-gray-500 flex items-center justify-evenly' >
                <Link href={'/'} className='text-2xl font-bold'  >Ecommerce</Link>
                <div onClick={() => setcategoryClick(!categoryClick)} className='flex w-32 h-10 items-center justify-between hover:bg-gray-200 p-3 rounded-3xl ease-in-out ' >
                    <div>
                        <AlignJustify />
                    </div>
                    <h5 className='font-bold text-gray-700' >Categories</h5>
                    {categoryClick ? <CategoryItems /> : ""}
                </div>
                <div className='w-[50vw] group h-12 rounded-4xl border-2 border-black flex items-center justify-between'  >
                    <input type="text" placeholder='Search for anything' className='rounded-bl-4xl rounded-tl-4xl h-full p-5 w-[93%]' />
                    <div className='flex items-center justify-center w-[7%] rounded-tr-4xl rounded-br-4xl h-full group-hover:bg-orange-500 transition-colors duration-300 ' >
                        <Search />
                    </div>
                </div>
                <h1 className='font-bold text-gray-700' >Sign in</h1>
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


const CategoryItems = () => {
    return (
        <>
            <div className='w-[300px] h-[500px] border border-gray-300 absolute top-18 left-24 z-10 shadow-[0px_0px_5px_0px_gray] rounded-2xl bg-white ' >
                <div className='w-3 h-3 border-l border-t border-gray-300 rotate-45 relative -top-[7px] bg-white left-1/2 ' ></div>
                <div className='w-full h-[97%] rounded-b-2xl overflow-y-scroll pb-3' >
                    <Link href={"/"} className='w-full h-10 flex items-center group hover:bg-gray-300' >
                        <h1 className='text-lg font-light relative left-10 group-hover:underline' >Accessories</h1>
                    </Link>
                    <Link href={"/"} className='w-full h-10 flex items-center group hover:bg-gray-300' >
                        <h1 className='text-lg font-light relative left-10 group-hover:underline' >Art & Collectibles</h1>
                    </Link>
                    <Link href={"/"} className='w-full h-10 flex items-center group hover:bg-gray-300' >
                        <h1 className='text-lg font-light relative left-10 group-hover:underline' >Baby</h1>
                    </Link>
                    <Link href={"/"} className='w-full h-10 flex items-center group hover:bg-gray-300' >
                        <h1 className='text-lg font-light relative left-10 group-hover:underline' >Bags & Purses</h1>
                    </Link>
                    <Link href={"/"} className='w-full h-10 flex items-center group hover:bg-gray-300' >
                        <h1 className='text-lg font-light relative left-10 group-hover:underline' >Bath & Beauty</h1>
                    </Link>
                    <Link href={"/"} className='w-full h-10 flex items-center group hover:bg-gray-300' >
                        <h1 className='text-lg font-light relative left-10 group-hover:underline' >Books, Flims & Music</h1>
                    </Link>
                    <Link href={"/"} className='w-full h-10 flex items-center group hover:bg-gray-300' >
                        <h1 className='text-lg font-light relative left-10 group-hover:underline' >Clothing</h1>
                    </Link>
                    <Link href={"/"} className='w-full h-10 flex items-center group hover:bg-gray-300' >
                        <h1 className='text-lg font-light relative left-10 group-hover:underline' >Craft Supplies & Tools</h1>
                    </Link>
                    <Link href={"/"} className='w-full h-10 flex items-center group hover:bg-gray-300' >
                        <h1 className='text-lg font-light relative left-10 group-hover:underline' >Electronics & Accessories</h1>
                    </Link>
                    <Link href={"/"} className='w-full h-10 flex items-center group hover:bg-gray-300' >
                        <h1 className='text-lg font-light relative left-10 group-hover:underline' >Gifts</h1>
                    </Link>
                    <Link href={"/"} className='w-full h-10 flex items-center group hover:bg-gray-300' >
                        <h1 className='text-lg font-light relative left-10 group-hover:underline' >Home & Living</h1>
                    </Link>
                    <Link href={"/"} className='w-full h-10 flex items-center group hover:bg-gray-300' >
                        <h1 className='text-lg font-light relative left-10 group-hover:underline' >Jewellery</h1>
                    </Link>
                    <Link href={"/"} className='w-full h-10 flex items-center group hover:bg-gray-300' >
                        <h1 className='text-lg font-light relative left-10 group-hover:underline' >Paper & Party Supplies</h1>
                    </Link>
                    <Link href={"/"} className='w-full h-10 flex items-center group hover:bg-gray-300' >
                        <h1 className='text-lg font-light relative left-10 group-hover:underline' >Pet Supplies</h1>
                    </Link>
                    <Link href={"/"} className='w-full h-10 flex items-center group hover:bg-gray-300' >
                        <h1 className='text-lg font-light relative left-10 group-hover:underline' >Shoes</h1>
                    </Link>
                    <Link href={"/"} className='w-full h-10 flex items-center group hover:bg-gray-300' >
                        <h1 className='text-lg font-light relative left-10 group-hover:underline' >Toys & Games</h1>
                    </Link>
                    <Link href={"/"} className='w-full h-10 flex items-center group hover:bg-gray-300' >
                        <h1 className='text-lg font-light relative left-10 group-hover:underline' >Weddings</h1>
                    </Link>
                </div>
            </div>
        </>
    )
}