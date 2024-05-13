import React from "react"
import aboutHero from "@/public/assets/about-hero.jpg"
import Image from "next/image"

const AboutHero = () => {
  return (
    <div className='flex flex-col items-center bg-gradient-to-b from-black to-white p-5 md:p-20'>
      <h1 className='text-white text-3xl text-center font-bold'>About Us</h1>
      <h1 className='text-white text-sm md:text-xl text-center my-5 md:my-10'>
        TechHub empowers businesses to thrive in the digital age by delivering
        tailored technology solutions that drive innovation, efficiency, and
        growth.
      </h1>
      <Image
        className='h-[300px] w-full object-cover rounded-xl  md:h-[500px] '
        src={aboutHero}
        alt='about-hero'
      />

      <div className='bg-overview-bg bg-contain rounded-lg p-5 mt-5 md:mt-20 md:p-20 '>
        <h2 className='text-white text-xl md:text-3xl font-semibold text-center mb-5 md:mb-10'>
          History and Founding
        </h2>
        <p className='text-white text-sm md:text-base text-justify bg-black bg-opacity-25'>
          Established in 2010 by a group of passionate technologists, TechHub
          swiftly rose as a frontrunner in tech solutions, initially focusing on
          web development and later expanding to encompass data center
          management, cloud computing, IT infrastructure, software renewal, and
          machine learning solutions. Fueled by a shared vision of innovation,
          TechHub emerged from the desire to revolutionize businesses through
          technology. As the digital landscape evolved, so did TechHub. In 2015,
          the company ventured into cloud computing services, recognizing the
          transformative potential of the cloud in modern business operations.
          This strategic move propelled TechHub to the forefront of the
          industry, enabling it to serve a diverse clientele ranging from
          startups to multinational corporations. In the following years,
          TechHub continued to innovate, incorporating machine learning
          applications into its service offerings to help clients harness the
          power of data-driven insights. Additionally, the company expanded its
          global footprint, establishing partnerships and delivering solutions
          to clients across various industries and geographic regions. Driven by
          a commitment to excellence and customer satisfaction, TechHub has
          remained at the forefront of technological innovation, continuously
          adapting to meet the evolving needs of its clients. Today, TechHub
          stands as a trusted partner for businesses seeking to leverage
          technology to drive growth, efficiency, and success in the digital
          age.
        </p>
      </div>
    </div>
  )
}

export default AboutHero
