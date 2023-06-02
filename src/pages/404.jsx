import Head from 'next/head'
import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'


const linkStyle = "ml-2 font-bold text-blue-600 hover:text-blue-500"
const buttonStyle = "h-12 w-30 rounded-lg flex justify-center items-center "

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaybots | 404 - Page Not found</title>
      </Head>
      <Nav />
      <main className='flex items-center justify-center'>
        <div className='invisible w-0 lg:w-64 flex-none transition-all duration-1000' />
        
        <div className='w-full'>
          <div className='flex p-12 text-white text-center items-center w-full h-72 bg-gray-900'>
            <div className='lg:hidden'>
              <Image
                src='/images/logo.png'
                width={250}
                height={250}
                className='rounded-full'
                alt='Jaybots logo'
              />
            </div>
            <div className='w-full space-y-2 lg:space-y-4'>
              <h1 className='text-4xl xl:text-7xl lg:text-6xl md:text-5xl font-extrabold'>Page Not Found</h1>
              <div className='flex w-full text-md md:text-lg lg:text-xl xl:text-2xl text-center justify-center space-x-2'>
                <p className='font-thin'>
                  We couldn&apos;t find this page. Don&apos;t fret, we&apos;re
                  <b className='font-bold'> never gonna give you up!</b>
                </p>
              </div>
            </div>
          </div>

          <div className='w-full h-full p-12 bg-zinc-800'>
            
            <video autoPlay playsInline muted className='w-full my-4'>
              <source src='/videos/404.mp4' type="video/mp4" />
              Video unavailable.
            </video>
          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}
