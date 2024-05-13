import {
  Footer,
  Navbar,
  PriceList,
  ProductsHero,
  Testimony,
} from "@/components"
import React from "react"

const page = () => {
  return (
    <div>
      <Navbar />
      <ProductsHero />
      <PriceList />
      <Testimony />
      <Footer />
    </div>
  )
}

export default page
