"use client"
import React from "react"
import products from "@/utils/Products"
import ProductCard from "./ProductCard"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import responsive from "@/utils/CarouselResponsive"
import { useState } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { MdRadioButtonChecked } from "react-icons/md"
import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import defProfile from "@/public/assets/def-profile.webp"

type product = {
  name: string
  description: string
  image: StaticImageData
  advantages: string[]
  specifications: string[]
}

const Products: React.FC<{ showNavigation?: boolean }> = ({
  showNavigation,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [product, setProduct] = useState<product>()

  const toggleModal = (value?: product) => {
    setShowModal(!showModal)
    if (!showModal) setProduct(value)
  }

  return (
    <div className='bg-product-bg bg-contain flex flex-col gap-y-5 items-center py-5 md:py-20'>
      <div className='flex flex-col items-center px-5 md:px-20'>
        <p className='text-orange md:text-lg font-semibold shadow-black [text-shadow:_1px_1px_1px_var(--tw-shadow-color)]'>
          PROFESSIONAL SERVICE
        </p>
        <p className='text-lg text-center md:text-3xl'>
          We do Professional Services Offers in <br /> the IT Sector
        </p>
        <div className='hidden md:grid md:grid-cols-3 gap-10 mt-10'>
          {products.map((e, i) => {
            return (
              <div key={i} onClick={() => toggleModal(e)}>
                <ProductCard
                  props={{
                    image: e.image,
                    name: e.name,
                    description: e.description,
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>

      <div aria-hidden='true' className='md:hidden w-full'>
        <Carousel
          responsive={responsive.responsive}
          arrows={false}
          containerClass='h-40'
          showDots
        >
          {products.map((e, i) => {
            return (
              <div
                key={i}
                onClick={() => toggleModal(e)}
                className='ml-2 md:ml-5'
              >
                <ProductCard
                  props={{
                    image: e.image,
                    name: e.name,
                    description: e.description,
                  }}
                />
              </div>
            )
          })}
        </Carousel>
      </div>

      {showNavigation ? (
        <Link
          className='bg-orange text-black p-3 md:p-5 rounded-md font-medium md:mt-10'
          href={"/products"}
        >
          View All Services
        </Link>
      ) : null}

      {showModal ? (
        <div
          aria-hidden='true'
          className='fixed bg-grey bg-opacity-70 top-0 bottom-0 right-0 left-0 p-5 z-50 md:p-10'
        >
          <div className=' relative bg-white h-full p-5 md:p-20 rounded-xl'>
            <div className='flex flex-col justify-center items-center gap-x-5 md:gap-x-20'>
              <Image
                className='h-24 md:h-40 w-auto rounded-xl'
                height={500}
                width={500}
                src={product ? product.image : defProfile}
                alt={`${product?.name}-image`}
              />
              <p className='text-lg md:text-2xl font-bold'>{product?.name}</p>
            </div>
            <div className='mt-5'>
              <p className='text-xs md:text-2xl '>{product?.description}</p>
            </div>
            <div className=' mt-5 grid grid-cols-1 md:grid-cols-2 md:mt-10'>
              <div>
                <p className='font-semibold mb-2 max-md:text-xs'>Advantages:</p>
                {product?.advantages.map((e, i) => {
                  return (
                    <div key={i} className='flex items-start gap-x-1'>
                      <MdRadioButtonChecked size={20} color='black' />
                      <p className='max-md:text-xs'>{e}</p>
                    </div>
                  )
                })}
              </div>
              <div>
                <p className='font-semibold my-2 max-md:text-xs'>
                  Specification:
                </p>
                {product?.specifications.map((e, i) => {
                  return (
                    <div key={i} className='flex items-start gap-x-2'>
                      <MdRadioButtonChecked size={20} color='black' />
                      <p className='max-md:text-xs'>{e}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <button
              onClick={() => toggleModal()}
              className='absolute top-1 right-1 md:top-20 md:right-20 w-fit text-start '
            >
              <AiOutlineCloseCircle size={40} />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Products
