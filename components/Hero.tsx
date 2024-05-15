"use client"
import React from "react"
import { BsArrowRightCircle } from "react-icons/bs"
import hero from "../utils/hero"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { EffectFade, Navigation, Pagination } from "swiper/modules"
import Link from "next/link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className='bg-gradient-to-b from-black to-white bg-contain bg-center w-full h-fit'>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        modules={[EffectFade, Navigation, Pagination]}
      >
        {hero.map((e, i) => {
          return (
            <SwiperSlide key={i} className='pb-10'>
              <div className='grid grid-cols-1 gap-y-5 p-5 md:gap-x-20 md:p-20 md:grid-cols-2'>
                <div className='hidden md:flex flex-col gap-y-5 justify-center'>
                  <p className='bg-grey bg-opacity-5 max-md:text-sm font-bold text-white rounded-xl '>
                    {e.text}
                  </p>
                  <Link
                    href={"/about"}
                    className='flex items-center gap-x-3 text-xl font-medium text-black bg-orange px-5 py-2 rounded-lg w-fit'
                  >
                    See Profile <BsArrowRightCircle size={20} color='black' />
                  </Link>
                </div>
                <div className=' flex flex-col items-center justify-between'>
                  <Image
                    className='object-cover w-auto h-48 md:h-96 rounded-xl'
                    src={e.image}
                    placeholder='blur'
                    alt={`hero-image-${i}`}
                  />
                </div>
                <div className='flex flex-col gap-y-5 justify-center md:hidden'>
                  <p className='bg-black bg-opacity-15 font-bold max-md:text-sm text-white rounded-xl p-5'>
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
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Hero
