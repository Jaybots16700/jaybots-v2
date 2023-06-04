import Image from "next/image"

export function Header({title, beforeBold, bold, afterBold}){
  return (
    <div className='flex p-12 text-white text-center items-center w-full h-72 bg-gray-900'>
      <div className='lg:hidden'>
        <Image
          src='/images/logo.png'
          width={250}
          height={250}
          className='rounded-full'
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