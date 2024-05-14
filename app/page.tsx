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
      <div className='mb-5 md:mb-20'>
        <h1 className='text-black text-lg md:text-4xl font-bold text-center'>
          {`\"Empowering Tomorrow, Today.\"`}
        </h1>
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
