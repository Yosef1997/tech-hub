"use client"
import Link from "next/link"
import React from "react"
import { AiFillYoutube } from "react-icons/ai"
import { FaTiktok } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { CgTwitter } from "react-icons/cg"
import { FaFacebookF } from "react-icons/fa"
import Image from "next/image"
import techHub from "@/public/assets/tech-hub.png"

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-grey to-black text-white py-10 md:py-20'>
      <div className='flex flex-col gap-y-10  md:grid md:grid-cols-5 p-5 md:p-10'>
        <div className='md:col-span-1'>
          <Image className='h-24 w-auto' src={techHub} alt='tech-hub' />
          <p className='text-md my-2 md:text-lg'>Build WorldClass Brand</p>
          <div className='flex gap-x-5'>
            <FaFacebookF size={20} />
            <CgTwitter size={20} />
            <AiFillInstagram size={20} />
            <FaTiktok size={20} />
            <AiFillYoutube size={20} />
          </div>
        </div>
        <div className='md:col-span-1 pr-10'>
          <h2 className='text-lg md:text-2xl font-medium'>Information</h2>
          <p className='text-xs py-1.5'>
            Address: Hang Kesturi Street, Kabil, Nongsa, Batam, 29467{" "}
          </p>
          <p className='text-xs py-1.5'>Phone: +62822-1111-2222</p>
          <p className='text-xs py-1.5'>Mail: tech_hub@gmail.com</p>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-lg md:text-2xl font-medium'>Explore More</h2>
          <Link className='text-sm w-fit py-2' href={"/about"}>
            About Us
          </Link>
          <Link className='text-sm w-fit py-2' href={"/products"}>
            Products
          </Link>
          <Link className='text-sm w-fit py-2' href={"/team"}>
            Our Team
          </Link>
        </div>
        <div className='flex flex-col gap-y-2 items-center bg-orange text-black p-5 rounded-lg md:col-span-2'>
          <h2 className='text-lg md:text-xl font-medium'>Newsletter</h2>
          <p className='text-sm text-center'>
            Subscribe us to get information about discount
          </p>
          <form
            className='flex flex-col gap-y-2 items-center w-full'
            onSubmit={() => {
              alert("Thank you for subscribing")
            }}
          >
            <input
              className='p-2 rounded-lg focus:outline-none text-black w-full'
              type='text'
              placeholder='example@gmail.com'
            />
            <button
              className='bg-white text-black w-full rounded-lg p-2 font-medium'
              type='submit'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className='flex flex-col gap-y-5 items-center border-t border-orange pt-5 mt-10  px-5 md:px-10 md:flex-row md:justify-between'>
        <p className='text-xs'>Copyright @2010 TechHub. All Rights Reserved</p>
        <div className='flex gap-x-3 md:gap-x-5 text-xs'>
          <Link href={"/"}>Privacy policy</Link>
          <Link href={"/"}>Cookie notice</Link>
          <Link href={"/"}>Terms of service</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
