import Image, { StaticImageData } from "next/image"
import React from "react"
import { BsArrowRight } from "react-icons/bs"

interface ProductCardProps {
  props: {
    image: StaticImageData
    name: string
    description: string
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ props }) => {
  return (
    <div className='flex gap-x-3 items-start p-2 rounded-md bg-white md:p-5 shadow-lg hover:shadow-2xl'>
      <Image
        className='h-14 w-14 rounded-md'
        height={300}
        width={300}
        src={props.image}
        alt={`${props.name}-image`}
      />
      <div className='flex flex-col items-start justify-between gap-y-2 w-full text-sm md:text-base'>
        <p className='font-bold line-clamp-1 text-xs md:text-base'>
          {props.name}
        </p>
        <p className='line-clamp-2'>{props.description}</p>
        <button className='flex items-center gap-x-2 font-medium'>
          <p className='text-xs md:text-base text-left w-fit'>Learn More</p>
          <BsArrowRight />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
