import Image, { StaticImageData } from "next/image"
import React from "react"

interface TeamCardProps {
  e: {
    image: string
    name: string
    position: string
  }
}

const TeamCard: React.FC<TeamCardProps> = ({ e }) => {
  return (
    <div className='relative flex flex-col items-center h-44 md:h-72'>
      <Image
        className='w-full h-full rounded-md'
        height={300}
        width={300}
        src={e.image}
        alt={`${e.name}-image`}
      />
      <div className='absolute bg-white -bottom-4 rounded-md w-11/12 py-1 text-center shadow-black drop-shadow-md md:-bottom-10'>
        <h2 className='text-xs md:text-base font-bold'>{e.name}</h2>
        <h2 className='text-xs md:text-base '>{e.position}</h2>
      </div>
    </div>
  )
}

export default TeamCard
