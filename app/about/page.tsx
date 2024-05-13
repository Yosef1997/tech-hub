import {
  AboutCulture,
  AboutHero,
  Footer,
  Milestone,
  Navbar,
  Team,
} from "@/components"
import React from "react"

const page = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <Team />
      <AboutCulture />
      <Milestone />
      <Footer />
    </div>
  )
}

export default page
