"use client"
import React from "react"
import { motion, Variants } from "framer-motion"

const cardVariants: Variants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 0.8,
    },
  },
}

const Card: React.FC<{ children: JSX.Element | React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true }}
      variants={cardVariants}
      className='w-full'
    >
      {children}
    </motion.div>
  )
}

export default Card
