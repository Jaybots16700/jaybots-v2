import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Photos'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'

import { members } from '@/config'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaybots | Meet The Team</title>
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
                alt='logo'
              />
            </div>
            <div className='w-full space-y-2 lg:space-y-4'>
              <h1 className='text-4xl xl:text-7xl lg:text-6xl md:text-5xl font-extrabold'>Meet The Team</h1>
              <div className='flex w-full text-md md:text-lg lg:text-xl xl:text-2xl text-center justify-center space-x-2'>
                <p className='font-thin'>
                  Just 
                  <b className='font-semibold'> {members.length -2} friends </b>
                  working on a robot.
                </p>
              </div>
            </div>
          </div>

          <div className='w-full h-full py-12 bg-zinc-800 flex justify-center'>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>

              {members.map((member) => (
                <div key={member.name} className='w-72 group [perspective:5000px]'>
                  <div className='relative h-full w-full  text-gray-300 transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]'>
                    <div className='overflow-hidden rounded-xl bg-slate-900 h-full w-full [backface-visibility:hidden]'>
                      <div className='flex items-start justify-center h-96'>
                        <Image
                          src={member.image}
                          height={384}
                          width={288}
                          alt={member.name}
                          className='border-b-4 border-gray-600'
                        />
                      </div>
                      <div className='w-full text-center p-4 space-y-1 h-36'>
                        <div className='text-2xl font-bold border-b-2 border-gray-500 pb-1 mb-2'>{member.name}</div>
                        {member.title &&
                          <div className='text-xl font-semibold'>{member.title}</div>
                        }
                        {member.committees[0] &&
                          <div className='text-lg font-light'>{member.committees[0]} Committee</div>
                        }
                        {member.committees[1] &&
                          <div className='text-lg font-light'>{member.committees[1]} Committee</div>
                        }
                      </div>
                    </div>

                    <div className='absolute inset-0 rounded-xl h-full w-full bg-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden'>
                      <div className='h-full w-full p-4 text-center'>
                        <p className='text-2xl font-bold border-b-2 border-gray-500 pb-1'>
                          {member.name}
                        </p>
                        <div className='font-light text-md overflow-auto bg-slate-900 pt-2 h-[450px]'>
                          {member.bio}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}
