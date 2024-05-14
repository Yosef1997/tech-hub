import React from "react"
import { GiHabitatDome } from "react-icons/gi"
import { BiHistory } from "react-icons/bi"

const Overview = () => {
  return (
    <div className='flex flex-col items-center bg-overview-bg bg-center bg-cover text-white py-5 px-5 w-full h-fit md:px-20'>
      <p className='font-bold md:text-2xl w-fit'>History and Culture</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 mt-5 md:mt-10 md:gap-x-20'>
        <div>
          <span className='flex items-center gap-x-2 mb-5'>
            <BiHistory size={25} />
            <h2 className='font-medium md:text-2xl'>History</h2>
          </span>

          <p className='text-xs font-medium bg-black bg-opacity-30 rounded-lg line-clamp-6 md:line-clamp-none md:p-5 md:text-base'>
            TechHub, established in 2010, offers diverse tech solutions from web
            development to machine learning. It empowers global businesses with
            tailored technology and exceptional service.
          </p>
        </div>
        <div>
          <span className='flex items-center gap-x-2 mb-5'>
            <GiHabitatDome size={25} />
            <h2 className='font-medium md:text-2xl'>Culture</h2>
          </span>

          <p className='text-xs font-medium bg-black bg-opacity-30 rounded-lg line-clamp-6 md:line-clamp-none md:p-5 md:text-base'>
            At TechHub, we foster innovation through collaboration and
            prioritize diversity, learning, and customer satisfaction. Our
            commitment to work-life balance and community engagement drives
            positive impact both personally and professionally.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Overview
