"use client"
import React from "react"
import { BiChevronRight } from "react-icons/bi"
import { BiChevronLeft } from "react-icons/bi"
import testimonies from "../utils/Testimonies"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Parallax, Pagination, Navigation } from "swiper/modules"
import Image, { StaticImageData } from "next/image"
import defProfile from "@/public/assets/def-profile.webp"

interface testimony {
  name: string
  testi: string
  image: StaticImageData
}

const Testimony = () => {
  const [testiId, setTestiId] = useState<number>(0)
  const [testimony, setTestimony] = useState<testimony>()

  useEffect(() => {
    setTestimony(testimonies[testiId])
  }, [testiId])

  return (
    <div className='py-5 md:p-20'>
      <p className='text-lg md:text-2xl font-bold text-center px-10 mb-10'>
        Loved by developers and trusted by businesses
      </p>
      <div className='hidden grid-cols-2 gap-20  md:grid'>
        <div className='flex flex-col justify-between w-full'>
          <p className='text-3xl font-bold'>{testimony?.name}</p>
          <p className='text-3xl line-clamp-6'>{testimony?.testi}</p>
          <div className='flex items-center justify-between'>
            <div className='flex gap-x-3'>
              <button
                disabled={testiId == 0 ? true : false}
                className='border rounded-full p-5'
                onClick={() => setTestiId(testiId - 1)}
                title='previous'
              >
                <BiChevronLeft size={30} />
              </button>
              <button
                disabled={testiId == testimonies.length - 1 ? true : false}
                className='border rounded-full p-5'
                onClick={() => setTestiId(testiId + 1)}
                title='next'
              >
                <BiChevronRight size={30} />
              </button>
            </div>
            <p className='text-4xl font-bold'>
              {testiId + 1}
              <span className='text-black font-normal'>
                /{testimonies.length}
              </span>
            </p>
          </div>
        </div>
        <Image
          className='h-96 w-full rounded-3xl object-cover'
          objectFit='contain'
          src={testimony ? testimony.image : defProfile}
          alt={`testimony-image-${testimony?.name}`}
        />
      </div>
      <div className='md:hidden'>
        <Swiper
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          modules={[Parallax, Pagination, Navigation]}
        >
          <div slot='container-start' data-swiper-parallax='-23%'></div>
          {testimonies.map((e, i) => {
            return (
              <SwiperSlide key={i} className='pb-10'>
                <div className='flex flex-col gap-y-2 items-center border rounded-xl p-5 mx-5'>
                  <Image
                    className='h-28 w-auto rounded-xl object-contain'
                    height={300}
                    width={300}
                    src={e.image}
                    alt={`testimony-image-${e.name}`}
                  />
                  <p className='font-semibold line-clamp-1'>{e.name}</p>
                  <p className='line-clamp-4 text-sm'>{e.testi}</p>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimony
