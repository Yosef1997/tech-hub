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
      className={`${
        i == plan ? "bg-orange text-white" : ""
      } flex flex-col gap-y-3 border rounded-lg p-5`}
    >
      <div>
        <h2 className='font-semibold'>{e.plan}</h2>
        <p className='line-clamp-2'>{e.description}</p>
        <h2 className='font-bold'>
          $ {e.price} <span className='font-medium'>/month</span>
        </h2>
      </div>

      <div>
        <h6 className='font-semibold'>{e.automation.name}</h6>
        {e.automation.item.map((automation, automationId) => (
          <div key={automationId} className='flex items-center gap-x-2'>
            <AiOutlineCheckCircle
              className={`${automation.isItemActive ? "" : "opacity-50"}`}
            />
            <p
              className={`line-clamp-1 ${
                automation.isItemActive ? "" : "line-through text-opacity-50"
              }`}
            >
              {automation.item_name}
            </p>
          </div>
        ))}
      </div>
      <div>
        <h6 className='font-semibold'>{e.remove.name}</h6>
        {e.remove.item.map((remove, removeId) => (
          <div key={removeId} className='flex items-center gap-x-2'>
            <AiOutlineCheckCircle
              className={`${remove.isItemActive ? "" : "opacity-50"}`}
            />
            <p
              className={`line-clamp-1 ${
                remove.isItemActive ? "" : "line-through opacity-50"
              }`}
            >
              {remove.item_name}
            </p>
          </div>
        ))}
      </div>

      <div>
        <h6 className='font-semibold'>{e.help.name}</h6>
        {e.help.item.map((help, helpId) => (
          <div key={helpId} className='flex items-center gap-x-2'>
            <AiOutlineCheckCircle
              className={`${help.isItemActive ? "" : "opacity-50"}`}
            />
            <p
              className={`line-clamp-1 ${
                help.isItemActive ? "" : "line-through opacity-50"
              }`}
            >
              {help.item_name}
            </p>
          </div>
        ))}
      </div>

      <button
        className={`${
          i == plan ? "bg-white text-orange" : "bg-black text-white"
        } font-semibold p-2 rounded-md`}
      >
        See All Features
      </button>
    </div>
  )
}

export default PriceCard
