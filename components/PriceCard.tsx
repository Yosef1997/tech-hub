import React from "react"
import { AiOutlineCheckCircle } from "react-icons/ai"

type automation = {
  name: string
  item: {
    item_name: string
    isItemActive: boolean
  }[]
}
type remove = {
  name: string
  item: {
    item_name: string
    isItemActive: boolean
  }[]
}
type help = {
  name: string
  item: {
    item_name: string
    isItemActive: boolean
  }[]
}

interface PriceCardProps {
  onClick: () => void
  i: number
  plan: number
  e: {
    plan: string
    description: string
    price: string
    automation: automation
    remove: remove
    help: help
  }
}

const PriceCard: React.FC<PriceCardProps> = ({ onClick, i, plan, e }) => {
  return (
    <div
      onClick={onClick}
      className='text-black flex flex-col gap-y-3 border rounded-lg p-5'
    >
      <div>
        <p className='font-semibold'>{e.plan}</p>
        <p className='line-clamp-2'>{e.description}</p>
        <p className='font-bold'>
          $ {e.price} <span className='font-medium'>/month</span>
        </p>
      </div>

      <div>
        <p className='font-semibold'>{e.automation.name}</p>
        {e.automation.item.map((automation, automationId) => (
          <div key={automationId} className='flex items-center gap-x-2'>
            <AiOutlineCheckCircle />
            <p
              className={`line-clamp-1 ${
                automation.isItemActive ? "" : "line-through text-black"
              }`}
            >
              {automation.item_name}
            </p>
          </div>
        ))}
      </div>
      <div>
        <p className='font-semibold'>{e.remove.name}</p>
        {e.remove.item.map((remove, removeId) => (
          <div key={removeId} className='flex items-center gap-x-2'>
            <AiOutlineCheckCircle />
            <p
              className={`line-clamp-1 ${
                remove.isItemActive ? "" : "line-through text-black"
              }`}
            >
              {remove.item_name}
            </p>
          </div>
        ))}
      </div>

      <div>
        <p className='font-semibold'>{e.help.name}</p>
        {e.help.item.map((help, helpId) => (
          <div key={helpId} className='flex items-center gap-x-2'>
            <AiOutlineCheckCircle />
            <p
              className={`line-clamp-1 ${
                help.isItemActive ? "" : "line-through text-black"
              }`}
            >
              {help.item_name}
            </p>
          </div>
        ))}
      </div>

      <button
        className={`${
          i == plan ? "bg-orange text-black" : "bg-black text-white"
        } font-semibold p-2 rounded-md`}
      >
        See All Features
      </button>
    </div>
  )
}

export default PriceCard
