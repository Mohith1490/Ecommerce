"use client"
import { Heart, Star } from "lucide-react";
import { motion } from 'framer-motion'
import { useState } from "react";

export const SimpleCard = () => {
  return (
    <>
      <div className='w-[190px] h-[250px] hover-border-gray flex flex-col items-center rounded-4xl p-3  transition duration-75' >
        <div className='w-40 h-40 border rounded-full bg-sky-400 ' >

        </div>
        <h1 className='text-xl font-bold text-gray-500 relative top-5' >Hello</h1>
      </div>
    </>
  )
}


export const ProductCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="min-w-[230px] mr-2 hover-border-gray bg-white rounded-xl shadow-md overflow-hidden p-2">
      <div className="relative  ">
        <img
          src="/men-shoes.jpg"
          alt="Custom Clay Stamp"
          className="w-full h-48 object-cover rounded-xl border border-gray-300  "
        />
        <motion.div
         className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
            <Heart className="w-5 h-5 text-gray-600" />
        </motion.div>
      </div>
      <div className="">
        <h2 className="text-gray-800 w-full h-4 no-scrollbar font-semibold text-sm overflow-x-hidden">
          Custom Clay Stamp with Your Name
        </h2>
        <div className="flex items-center space-x-2">
          <span className="text-green-700 font-bold text-lg">₹ 792</span>
          <span className="text-gray-500 line-through text-sm">₹ 1,584</span>
          <span className="text-green-600 text-xs font-semibold">(50% off)</span>
        </div>
        <div className="flex items-center justify-baseline">
          <span className=" text-sm font-bold text-gray-700 mr-1">5.0</span>

          <Star className="w-4 h-4 fill-black mr-1" />

          <span className="text-xs"> (1,212)</span>
        </div>
        <span className="text-black p-1 rounded-2xl bg-green-400 text-xs font-semibold inline-block">
          FREE delivery
        </span>
      </div>
    </div>
  );
};


export const CategoryCard = () =>{
  return (
    <>
     <div className="w-48 h-68  flex flex-col p-3" >  
          <div className="w-40 h-[90%] rounded-xl hover-border-gray " >

          </div>
          <h1 className="text-xl font-bold" >Gold</h1>
     </div>
    </>
  )
}
