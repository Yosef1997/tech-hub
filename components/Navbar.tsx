"use client"
import Link from "next/link"
import React, { useState } from "react"
import { BiChevronRight } from "react-icons/bi"
import { RxHamburgerMenu } from "react-icons/rx"
import nav from "@/utils/NavList"
import Image from "next/image"
import techHub from "@/public/assets/tech-hub.png"

const Navbar = () => {
  const [showBurger, setShowBurger] = useState<boolean>(false)

  return (
    <>
      <div className='bg-black flex items-center justify-between px-5 py-2.5 md:px-20 md:py-5 w-full'>
        <Image className='h-10 w-auto md:h-12' src={techHub} alt='tech-hub' />

        <div className='hidden gap-x-5 items-center bg-black text-white md:flex'>
          {nav.map((e, i) => {
            return (
              <Link key={i} href={e.path}>
                {e.name}
              </Link>
            )
          })}
        </div>

        <RxHamburgerMenu
          onClick={() => setShowBurger(!showBurger)}
          size={20}
          color='white'
          className='block md:hidden'
        />
      </div>
      {showBurger ? (
        <div className='flex flex-col  bg-black text-white p-5 md:px-20 '>
          {nav.map((e, i) => {
            return (
              <div key={i}>
                <Link
                  className='flex items-center justify-between py-1.5'
                  href={e.path}
                >
                  {e.name}
                  <span>
                    <BiChevronRight color='white' />
                  </span>
                </Link>
              </div>
            )
          })}
        </div>
      ) : null}
    </>
  )
}

export default Navbar
