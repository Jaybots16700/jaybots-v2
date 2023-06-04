import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Photos'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

import { members } from '@/config'


const friends = (members.length -2 + " friends")

export default function Team() {
  return (
    <>
      <Head>
        <title>Jaybots | Meet The Team</title>
      </Head>
      <Nav />
      <main className='flex items-center justify-center'>
        <div className='invisible w-0 lg:w-64 flex-none transition-all duration-1000' />
        
        <div className='w-full'>
        <Header title="Meet The Team" beforeBold="Just " bold={friends} afterBold=" working on a robot."/>

          <div className='w-full h-full py-12 bg-zinc-800 flex justify-center'>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>

              {members.map((member) => (
                <div key={member.name} className='w-72 group [perspective:5000px]'>
                  <div className='relative h-full w-full  text-gray-300 transition-all duration-1000 motion-reduce:duration-0 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]'>
                    <div className=' rounded-xl bg-slate-900 h-full w-full [backface-visibility:hidden] overflow-hidden'>
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
                          <div className='text-xl font-semibold whitespace-nowrap text-center overflow-hidden'>
                            {member.motion &&
                              <div className='motion-safe:rounded-full overflow-hidden'>
                                <p className='w-fit pl-64 animate-slide-infinite motion-reduce:hidden'>
                                  {member.title}
                                </p>
                                <p className='motion-safe:hidden'>
                                  {member.altTitle}
                                </p>
                              </div>
                            }
                            {!member.motion &&
                              <p className=''>
                                {member.title}
                              </p>
                            }
                          </div>
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
                        <div className='font-light text-md overflow-y-auto bg-slate-900 pt-2 h-[450px]'>
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
