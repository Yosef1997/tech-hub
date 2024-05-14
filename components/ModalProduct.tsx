import Image, { StaticImageData } from "next/image"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { MdRadioButtonChecked } from "react-icons/md"

const ModalProduct: React.FC<{
  picture: StaticImageData
  name: string
  description: string
  advantages: string[]
  specifications: string[]
  onClick: () => void
}> = ({ picture, name, description, advantages, specifications, onClick }) => {
  return (
    <div
      aria-hidden='true'
      className='fixed bg-grey bg-opacity-70 top-0 bottom-0 right-0 left-0 p-5 z-50 md:p-10'
    >
      <div className=' relative bg-white h-full p-5 md:p-20 rounded-xl'>
        <div className='flex flex-col justify-center items-center gap-x-5 md:gap-x-20'>
          <Image
            className='h-24 md:h-40 w-auto rounded-xl'
            height={500}
            width={500}
            src={picture}
            alt={`${name}-image`}
          />
          <p className='text-lg md:text-2xl font-bold'>{name}</p>
        </div>
        <div className='mt-5'>
          <p className='text-xs md:text-2xl '>{description}</p>
        </div>
        <div className=' mt-5 grid grid-cols-1 md:grid-cols-2 md:mt-10'>
          <div>
            <p className='font-semibold mb-2 max-md:text-xs'>Advantages:</p>
            {advantages.map((e, i) => {
              return (
                <div key={i} className='flex items-start gap-x-1'>
                  <MdRadioButtonChecked size={20} color='black' />
                  <p className='max-md:text-xs'>{e}</p>
                </div>
              )
            })}
          </div>
          <div>
            <p className='font-semibold my-2 max-md:text-xs'>Specification:</p>
            {specifications.map((e, i) => {
              return (
                <div key={i} className='flex items-start gap-x-2'>
                  <MdRadioButtonChecked size={20} color='black' />
                  <p className='max-md:text-xs'>{e}</p>
                </div>
              )
            })}
          </div>
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

export default ModalProduct
