"use client"
import React from "react"
import Carousel from "react-multi-carousel"
import TeamCard from "./TeamCard"
import responsive from "../utils/CarouselResponsive"
import useRandomUser from "../hooks/useRandomUser"
import { useState } from "react"
import ModalTeam from "./ModalTeam"

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
        <ModalTeam
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

export default Team
