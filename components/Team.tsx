"use client"
import React from "react"
import TeamCard from "./TeamCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import useRandomUser from "../hooks/useRandomUser"
import { useState } from "react"
import ModalTeam from "./ModalTeam"
import { CardMotion } from "."

const Team = () => {
  const { users } = useRandomUser()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectUser, setSelectUser] = useState<number>(0)

  const toggleModal = (value: number) => {
    setShowModal(!showModal)
    if (!showModal) setSelectUser(value)
  }

  return (
    <CardMotion>
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

        <div aria-hidden='true' className='h-fit md:hidden'>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
          >
            {users.map((e, i) => {
              return (
                <SwiperSlide key={i} className='pt-10 pb-20'>
                  <div className='ml-5' onClick={() => toggleModal(i)}>
                    <TeamCard
                      e={{
                        image: e.picture.large,
                        name: `${e.name.first} ${e.name.last}`,
                        position: e.position,
                      }}
                    />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
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
    </CardMotion>
  )
}

export default Team
