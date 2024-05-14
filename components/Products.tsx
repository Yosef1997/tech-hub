"use client"
import React from "react"
import products from "@/utils/Products"
import ProductCard from "./ProductCard"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import responsive from "@/utils/CarouselResponsive"
import { useState } from "react"
import Link from "next/link"
import { StaticImageData } from "next/image"
import ModalProduct from "./ModalProduct"

export type product = {
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
  const [productId, setProductId] = useState<number>(0)

  const toggleModal = (value: number) => {
    setShowModal(!showModal)
    if (!showModal) setProductId(value)
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
              <div key={i} onClick={() => toggleModal(i)}>
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
                onClick={() => toggleModal(i)}
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
        <ModalProduct
          picture={products[productId].image}
          name={products[productId].name}
          description={products[productId].description}
          advantages={products[productId].advantages}
          specifications={products[productId].specifications}
          onClick={() => toggleModal(0)}
        />
      ) : null}
    </div>
  )
}

export default Products
