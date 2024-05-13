"use client"
import React from "react"
import { BsArrowRightCircle } from "react-icons/bs"
import hero from "../utils/hero"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import responsive from "../utils/CarouselResponsive"
import Link from "next/link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className='bg-gradient-to-b from-black to-white bg-contain bg-center'>
      <Carousel responsive={responsive.responsivePrice}>
        {hero.map((e, i) => {
          return (
            <div
              key={i}
              className='grid grid-cols-1 gap-y-5 p-5 md:gap-x-20 md:p-20 md:grid-cols-2'
            >
              <div className='hidden md:flex flex-col gap-y-5 justify-center'>
                <h1 className='bg-white bg-opacity-5 font-bold text-white rounded-xl md:p-5'>
                  {e.text}
                </h1>
                <Link
                  href={"/about"}
                  className=' flex items-center gap-x-3 text-xl font-medium text-white bg-orange px-5 py-2 rounded-lg w-fit'
                >
                  More Information
                  <BsArrowRightCircle size={20} />
                </Link>
              </div>
              <div className=' flex flex-col items-center justify-between'>
                <Image
                  className='h-full w-auto'
                  src={e.image}
                  alt={`hero-image-${i}`}
                />
              </div>
              <div className='flex flex-col gap-y-5 justify-center md:hidden'>
                <h1 className='bg-black bg-opacity-15 font-bold text-white rounded-xl p-5'>
                  {e.text}
                </h1>
                <Link
                  href={"/about"}
                  className=' flex items-center gap-x-3 text-xl font-medium text-white bg-orange px-5 py-2 rounded-lg justify-center md:justify-start md:w-fit'
                >
                  More Information
                  <BsArrowRightCircle size={20} />
                </Link>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Hero
