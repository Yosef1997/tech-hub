import Image from "next/image"
import { AiOutlineCloseCircle } from "react-icons/ai"

const ModalTeam: React.FC<{
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

export default ModalTeam
