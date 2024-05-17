import Image from "next/image"
import React from "react"
import milestone from "@/public/assets/milestone.png"
import milestoneMobile from "@/public/assets/milestone-mobile.png"
import { CardMotion } from "."

const Milestone = () => {
  return (
    <CardMotion>
      <div className='pt-5 md:pt-20'>
        <h1 className='text-black md:text-3xl font-bold text-center'>
          Milestone
        </h1>
        <Image
          className=' hidden md:block w-full h-auto'
          src={milestone}
          alt='milestone'
        />
        <Image
          className=' block md:hidden w-full h-auto'
          src={milestoneMobile}
          alt='milestone-mobile'
        />
      </div>
    </CardMotion>
  )
}

export default Milestone
