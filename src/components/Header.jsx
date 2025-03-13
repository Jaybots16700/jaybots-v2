'use client'

import Image from 'next/image'

export function Header({ title, beforeBold, bold, afterBold }) {
  return (
    <>
      <></>
      <div className="z-10 w-full origin-top-right items-center bg-gradient-to-b from-blue-950 via-blue-950 via-70% px-12 pb-20 pt-3 text-center text-white [transform-style:preserve-3d] sm:flex sm:py-12 lg:-left-4 lg:pb-16 lg:pt-12">
        <div className="flex justify-center lg:hidden">
          <Image
            src="https://cdn.jaybots.org/logo/logo.png"
            width={250}
            height={250}
            className="h-32 w-32 rounded-full sm:h-auto sm:w-auto"
            alt="logo"
          />
        </div>
        <div className="w-full space-y-2 lg:space-y-4">
          <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h1>
          <div className="text-md flex w-full justify-center space-x-2 text-center md:text-lg lg:text-xl xl:text-2xl">
            <p className="font-thin">
              {beforeBold}
              <b className="font-semibold">{bold}</b>
              {afterBold}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export function MemberHeader({ member, text }) {
  return (
    <div className="absolute -left-4 bottom-[140%] z-40 h-72 w-full items-center bg-gradient-to-b from-gray-700 via-gray-800 via-70% px-12 py-6 text-center text-white [transform-style:preserve-3d] [transform:translateZ(-20px)scale(3)] sm:flex sm:py-12 lg:left-[46rem]">
      <div className="flex justify-center">
        <Image
          src={member.image}
          width={250}
          height={250}
          className="aspect-square h-32 w-32 rounded-full object-cover sm:h-auto sm:w-auto"
          alt={member.name}
        />
      </div>
      <div className="relative w-full space-y-2 lg:right-40 lg:space-y-4">
        <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl xl:text-7xl">
          {member.name}
        </h1>
        <div className="text-md flex w-full justify-center space-x-2 text-center md:text-lg lg:text-xl xl:text-2xl">
          <p className="font-thin">{text}</p>
        </div>
      </div>
    </div>
  )
}
