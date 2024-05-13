"use client"
import React from "react"
import { BiChevronRight } from "react-icons/bi"
import { BiChevronLeft } from "react-icons/bi"
import testimonies from "../utils/Testimonies"
import { useEffect, useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import responsive from "../utils/CarouselResponsive"
import Image, { StaticImageData } from "next/image"
import defProfile from "@/public/assets/def-profile.jpg"

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
      <h1 className='text-lg md:text-2xl font-bold text-center px-10 mb-10'>
        Loved by developers and trusted by businesses
      </h1>
      <div className='hidden grid-cols-2 gap-20  md:grid'>
        <div className='flex flex-col justify-between w-full'>
          <h2 className='text-3xl font-bold'>{testimony?.name}</h2>
          <h2 className='text-3xl line-clamp-6'>{testimony?.testi}</h2>
          <div className='flex items-center justify-between'>
            <div className='flex gap-x-3'>
              <button
                disabled={testiId == 0 ? true : false}
                className='border rounded-full p-5'
                onClick={() => setTestiId(testiId - 1)}
              >
                <BiChevronLeft size={30} />
              </button>
              <button
                disabled={testiId == testimonies.length - 1 ? true : false}
                className='border rounded-full p-5'
                onClick={() => setTestiId(testiId + 1)}
              >
                <BiChevronRight size={30} />
              </button>
            </div>
            <p className='text-4xl font-bold'>
              {testiId + 1}
              <span className='text-orange font-normal'>
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
        <Carousel responsive={responsive.responsive} arrows={false}>
          {testimonies.map((e, i) => {
            return (
              <div
                key={i}
                className='flex flex-col gap-y-2 items-center border rounded-xl p-5 ml-5'
              >
                <Image
                  className='h-20 w-full rounded-xl object-contain'
                  src={e.image}
                  alt={`testimony-image-${e.name}`}
                />
                <h2 className='font-semibold line-clamp-1'>{e.name}</h2>
                <p className='line-clamp-4 text-sm'>{e.testi}</p>
              </div>
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}

export default Testimony
