import {
  Footer,
  Hero,
  Navbar,
  Overview,
  PriceList,
  Products,
  Team,
  Testimony,
} from "@/components"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='mx-auto w-fit mb-5 md:mb-20'>
        <p className='text-black md:text-2xl font-bold'>
          {`\"Empowering Tomorrow, Today.\"`}
        </p>
      </div>
      <Overview />
      <Team />
      <Products showNavigation={true} />
      <Testimony />
      <PriceList />

      <Footer />
    </div>
  )
}
