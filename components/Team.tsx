"use client"
import React from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import Carousel from "react-multi-carousel"
import TeamCard from "./TeamCard"
import responsive from "../utils/CarouselResponsive"
import useRandomUser, { user } from "../hooks/useRandomUser"
import { useState } from "react"
import Image from "next/image"

const Team = () => {
  const { users } = useRandomUser()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectUser, setSelectUser] = useState<number>(0)

  const toggleModal = (value: number) => {
    setShowModal(!showModal)
    if (!showModal) setSelectUser(value)
  }

  return (
    <div className=' pt-5 pb-10 md:py-20 text-center'>
      <div className='px-5 md:px-20'>
        <h2 className='text-black font-semibold md:text-2xl'>TEAM MEMBER</h2>
        <p className='font-bold text-sm mt-1 md:mb-10 md:text-3xl'>
          Meet our professional and expert team members
        </p>
      </div>

      <div className=' hidden md:grid grid-cols-4 gap-x-10 md:px-20'>
        {users.map((e, i) => {
          return (
            <div key={i} onClick={() => toggleModal(i)}>
              <TeamCard
                e={{
                  image: e.picture.large,
                  name: `${e.name.first} ${e.name.last}`,
                  position: e.position,
                }}
              />
            </div>
          )
        })}
      </div>

      <div aria-hidden='true' className='md:hidden'>
        <Carousel responsive={responsive.responsive} arrows={false}>
          {users.map((e, i) => {
            return (
              <div key={i} className='ml-5' onClick={() => toggleModal(i)}>
                <TeamCard
                  key={i}
                  e={{
                    image: e.picture.large,
                    name: `${e.name.first} ${e.name.last}`,
                    position: e.position,
                  }}
                />
              </div>
            )
          })}
        </Carousel>
      </div>

      {showModal ? (
        <ModalUser
          picture={users[selectUser].picture.large}
          firstName={users[selectUser].name.first}
          lastName={users[selectUser].name.last}
          position={users[selectUser].position}
          description={users[selectUser].description}
          email={users[selectUser].email}
          onClick={() => toggleModal(0)}
        />
      ) : null}
    </div>
  )
}

const ModalUser: React.FC<{
  picture: string
  firstName: string
  lastName: string
  position: string
  description: string
  email: string
  onClick: () => void
}> = ({
  picture,
  firstName,
  lastName,
  position,
  description,
  email,
  onClick,
}) => {
  return (
    <div
      aria-hidden='true'
      className='fixed bg-grey bg-opacity-70 top-0 bottom-0 right-0 left-0 p-5 z-50 md:p-20'
    >
      <div className=' relative bg-white h-full p-5 md:p-20 rounded-xl'>
        <div className='flex items-center gap-x-5 md:gap-x-20'>
          <Image
            className='h-20 md:h-36 w-auto rounded-xl'
            width={500}
            height={500}
            src={picture}
            alt={`${firstName}-image`}
          />

          <div className='text-start'>
            <p className='md:text-4xl font-bold'>{`${firstName} ${lastName}`}</p>
            <p className='text-xs md:text-xl font-semibold text-grey'>
              {position}
            </p>
          </div>
        </div>
        <div className='mt-5 md:mt-10'>
          <p className='text-sm md:text-3xl'>{description}</p>
        </div>
        <div className='mt-5 md:mt-10'>
          <p className='text-sm md:text-3xl'>Email: {email}</p>
        </div>
        <button
          onClick={onClick}
          className='absolute top-1 right-1 md:top-20 md:right-20 w-fit text-start '
        >
          <AiOutlineCloseCircle size={40} />
        </button>
      </div>
    </div>
  )
}

export default Team
