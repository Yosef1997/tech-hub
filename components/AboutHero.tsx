import React from "react"
import aboutHero from "@/public/assets/about-hero.webp"
import Image from "next/image"
import { CardMotion } from "."

const AboutHero = () => {
  return (
    <div className='flex flex-col items-center bg-gradient-to-b from-black to-white p-5 md:p-20'>
      <CardMotion>
        <p className='text-white text-3xl text-center font-bold'>About Us</p>
        <p className='text-white text-sm md:text-xl text-center my-5 md:my-10'>
          TechHub empowers businesses to thrive in the digital age by delivering
          tailored technology solutions that drive innovation, efficiency, and
          growth.
        </p>
        <Image className='rounded-xl' src={aboutHero} alt='about-hero' />

        <div className='bg-overview-bg bg-contain rounded-lg p-5 mt-5 md:mt-20 md:p-20 '>
          <p className='text-white text-xl md:text-3xl font-semibold text-center mb-5 md:mb-10'>
            History and Founding
          </p>
          <p className='text-white text-sm md:text-base text-justify bg-black bg-opacity-25'>
            Established in 2010 by passionate technologists, TechHub quickly
            became a leader in tech solutions, starting with web development and
            expanding to data center management, cloud computing, IT
            infrastructure, software renewal, and machine learning. Driven by a
            vision of innovation, TechHub ventured into cloud computing in 2015,
            propelling it to industry prominence. The company serves a diverse
            clientele, from startups to multinationals, and continues to
            innovate with machine learning applications. TechHub&apos;s global
            reach and commitment to excellence make it a trusted partner for
            businesses aiming to leverage technology for growth and success.
          </p>
        </div>
      </CardMotion>
    </div>
  )
}

export default AboutHero
