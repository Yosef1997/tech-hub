import React from "react"
import { MdRadioButtonChecked } from "react-icons/md"
import culture from "@/utils/Culture"
import building from "@/public/assets/gedung-techhub.png"
import Image from "next/image"

const AboutCulture = () => {
  return (
    <div className=' bg-orange p-5 md:p-20'>
      <h2 className='text-white text-xl md:text-3xl font-bold text-center mb-5 md:mb-10'>
        Culture
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5'>
        <Image
          className='h-[300px] md:h-[600px] w-full object-contain'
          src={building}
          alt='building'
        />
        <div className='flex flex-col gap-y-5'>
          {culture.map((e, i) => {
            return (
              <div key={i} className='flex items-start gap-x-2'>
                <MdRadioButtonChecked size={35} color='white' />
                <p className='font-bold text-base md:text-xl text-white'>
                  {e.title} <span className='font-normal'>{e.description}</span>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutCulture
