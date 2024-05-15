"use client"
import React from "react"
import priceList from "@/utils/PriceList"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Parallax, Pagination, Navigation } from "swiper/modules"
import PriceCard from "./PriceCard"

const PriceList = () => {
  const [plan, setPlan] = useState<number>(1)

  return (
    <>
      <div className='hidden gap-10 p-20 md:grid md:grid-cols-3'>
        {priceList.map((e, i) => {
          return (
            <PriceCard
              key={i}
              onClick={() => setPlan(i)}
              i={i}
              plan={plan}
              e={{
                plan: e.plan,
                description: e.description,
                price: e.price,
                automation: e.automation,
                remove: e.remove,
                help: e.help,
              }}
            />
          )
        })}
      </div>
      <div className='py-5 md:hidden'>
        <Swiper
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          modules={[Parallax, Pagination, Navigation]}
        >
          <div slot='container-start' data-swiper-parallax='-23%' />
          {priceList.map((e, i) => {
            return (
              <SwiperSlide key={i} className='pb-10'>
                <div className='mx-5'>
                  <PriceCard
                    onClick={() => setPlan(i)}
                    i={i}
                    plan={plan}
                    e={{
                      plan: e.plan,
                      description: e.description,
                      price: e.price,
                      automation: e.automation,
                      remove: e.remove,
                      help: e.help,
                    }}
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}

export default PriceList
