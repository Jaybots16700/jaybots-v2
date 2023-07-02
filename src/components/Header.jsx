import Image from "next/image"

export function Header({title, beforeBold, bold, afterBold}){
  return (
    <div className='[transform-style:preserve-3d] [transform:translateZ(-20px)scale(3)] sm:flex px-12 py-6 sm:py-12 text-white text-center items-center w-full h-72 bg-gray-900 sm:bg-transparent bg-gradient-to-b from-gray-700 via-70% via-gray-800 absolute bottom-[133.3333333%] z-50 -left-4 lg:left-96'>
      <div className='lg:hidden flex justify-center'>
        <Image
          src='https://cdn.jaybots.org/logo/logo.png'
          width={250}
          height={250}
          className='rounded-full h-32 w-32 sm:h-auto sm:w-auto'
          alt='logo'
        />
      </div>
      <div className='w-full space-y-2 lg:space-y-4'>
        <h1 className='text-4xl xl:text-7xl lg:text-6xl md:text-5xl font-extrabold'>{title}</h1>
        <div className='flex w-full text-md md:text-lg lg:text-xl xl:text-2xl text-center justify-center space-x-2'>
          <p className='font-thin'>
            {beforeBold}<b className='font-semibold'>
              {bold}</b>
            {afterBold}
          </p>
        </div>
      </div>
    </div>
  )
}

export function MemberHeader({member, text}){
  return (
    <div className='[transform-style:preserve-3d] [transform:translateZ(-20px)scale(3)] sm:flex px-12 py-6 sm:py-12 text-white text-center items-center w-full h-72 bg-gradient-to-b from-gray-700 via-70% via-gray-800 absolute bottom-[133.3333333%] z-50 -left-4 lg:left-[46rem]'>
      <div className='flex justify-center'>
        <Image
          src={member.image}
          width={250}
          height={250}
          className='h-32 w-32 sm:h-auto sm:w-auto aspect-square object-cover rounded-full'
          alt={member.name}
        />
      </div>
      <div className='w-full space-y-2 lg:space-y-4 lg:right-40 relative'>
        <h1 className='text-4xl xl:text-7xl lg:text-6xl md:text-5xl font-extrabold'>{member.name}</h1>
        <div className='flex w-full text-md md:text-lg lg:text-xl xl:text-2xl text-center justify-center space-x-2'>
          <p className='font-thin'>
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}