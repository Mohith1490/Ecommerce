"use client"
import { motion, useScroll, useTransform } from "framer-motion"

export const InfiniteTextMoving = () => {
    const { scrollYProgress } = useScroll();
    const dirX = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"])
    return (
        <>
            <div className="overflow-hidden whitespace-nowrap w-full py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
                <motion.div
                    className="flex space-x-12 text-3xl font-extrabold text-white"
                    style={{ x: dirX }}
                >
                    <span >
                        🚀 Trusted by 10,000+ Happy Shoppers!
                    </span>
                    <span >
                        📦 Delivering to Over 50,000 Customers & Counting!
                    </span>
                    <span >
                        ⚡ 10K+ Orders Shipped Daily - Yours Could Be Next!
                    </span>
                </motion.div>
            </div>

        </>
    )
}