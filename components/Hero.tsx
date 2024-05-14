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
    <div className='bg-gradient-to-b from-black to-white bg-contain bg-center w-full min-h-screen'>
      <Carousel aria-hidden='true' responsive={responsive.responsivePrice}>
        {hero.map((e, i) => {
          return (
            <div
              key={i}
              className='grid grid-cols-1 gap-y-5 p-5 md:gap-x-20 md:p-20 md:grid-cols-2'
            >
              <div className='hidden md:flex flex-col gap-y-5 justify-center'>
                <p className='bg-grey bg-opacity-5 max-md:text-sm font-bold text-white rounded-xl '>
                  {e.text}
                </p>
                <Link
                  href={"/about"}
                  className=' flex items-center gap-x-3 text-xl font-medium text-black bg-orange px-5 py-2 rounded-lg w-fit'
                >
                  See Profile <BsArrowRightCircle size={20} color='black' />
                </Link>
              </div>
              <div className=' flex flex-col items-center justify-between'>
                <Image
                  className='object-cover'
                  height={500}
                  width={500}
                  src={e.image}
                  placeholder='blur'
                  alt={`hero-image-${i}`}
                />
              </div>
              <div className='flex flex-col gap-y-5 justify-center md:hidden'>
                <p className='bg-black bg-opacity-15 font-bold text-white rounded-xl p-5'>
                  {e.text}
                </p>
                <Link
                  href={"/about"}
                  className=' flex items-center gap-x-3 text-xl font-medium text-black bg-orange px-5 py-2 rounded-lg justify-center md:justify-start md:w-fit'
                >
                  See Profile <BsArrowRightCircle size={20} color='black' />
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
