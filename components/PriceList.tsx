"use client"
import React from "react"
import priceList from "@/utils/PriceList"
import { useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import responsive from "@/utils/CarouselResponsive"
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
        <Carousel responsive={responsive.responsivePrice} arrows={false}>
          {priceList.map((e, i) => {
            return (
              <div key={i} className='ml-5'>
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
            )
          })}
        </Carousel>
      </div>
    </>
  )
}

export default PriceList
