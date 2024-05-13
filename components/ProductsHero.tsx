import React from "react"
import Products from "./Products"
import overview from "@/public/assets/overview.png"
import Image from "next/image"

const ProductsHero = () => {
  return (
    <div className='flex flex-col items-center bg-gradient-to-b from-black to-white'>
      <div className='p-5 md:p-20'>
        <h1 className='text-white text-3xl text-center font-bold'>Products</h1>
        <h1 className='text-white text-sm md:text-xl text-center my-5 md:my-10'>
          TechHub offers top-notch technology services encompassing data center
          management, cloud computing, web development, IT management, software
          renewal, and machine learning solutions.
        </h1>
        <Image
          className='h-[300px] w-full object-contain rounded-xl  md:h-[500px] '
          src={overview}
          alt='products-hero'
        />
      </div>

      <div className='w-full mt-5 md:mt-20'>
        <Products />
      </div>
    </div>
  )
}

export default ProductsHero
