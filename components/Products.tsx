"use client"
import React from "react"
import products from "@/utils/Products"
import ProductCard from "./ProductCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Parallax, Pagination, Navigation } from "swiper/modules"
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
        <p className='text-sm text-center md:text-3xl'>
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

      <div className='md:hidden w-full'>
        <Swiper
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          modules={[Parallax, Pagination, Navigation]}
        >
          <div slot='container-start' data-swiper-parallax='-23%' />
          {products.map((e, i) => {
            return (
              <SwiperSlide key={i} className='pb-10'>
                <div onClick={() => toggleModal(i)} className='mx-5'>
                  <ProductCard
                    props={{
                      image: e.image,
                      name: e.name,
                      description: e.description,
                    }}
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      {showNavigation ? (
        <Link
          className='bg-orange text-black p-2 rounded-md font-medium max-md:text-sm md:p-5 md:mt-10'
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
