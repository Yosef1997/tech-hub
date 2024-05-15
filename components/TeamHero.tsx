import React from "react"
import Team from "./Team"
import teamHero from "@/public/assets/team-hero.webp"
import Image from "next/image"

const TeamHero = () => {
  return (
    <div className='flex flex-col items-center bg-gradient-to-b from-black to-white'>
      <div className='p-5 md:p-20'>
        <h1 className='text-white md:text-3xl text-center font-bold'>Team</h1>
        <p className='text-white text-sm md:text-xl text-center my-5 md:my-10'>
          TechHub offers top-notch technology services encompassing data center
          management, cloud computing, web development, IT management, software
          renewal, and machine learning solutions.
        </p>
        <Image className='rounded-xl' src={teamHero} alt='team-hero' />
      </div>

      <div className='w-full mb-5 md:mb-20'>
        <Team />
      </div>
    </div>
  )
}

export default TeamHero
