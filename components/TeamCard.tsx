import Image from "next/image"
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
    <div className='h-fit'>
      <div className='relative h-fit w-fit flex flex-col items-center'>
        <Image
          className='h-fit object-cover rounded-md'
          height={300}
          width={300}
          src={e.image}
          alt={`${e.name}-image`}
        />
        <div className='absolute bg-white mx-auto bottom-0 translate-y-7 rounded-md w-11/12 py-1 text-center shadow-black drop-shadow-md'>
          <p className='text-xs md:text-base font-bold'>{e.name}</p>
          <p className='text-xs md:text-base '>{e.position}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
