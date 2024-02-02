import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

import { alumni } from '@/config'
import Colors from '@/components/Colors'

export default function Alumni() {
  return (
    <>
      <Head>
        <title>Jaybots | Alumni</title>
      </Head>
      <Nav current="Alumni" />
      <main>
      <div className='flex flex-col lg:pl-64 animate-all h-screen w-full overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 z-50'>
        <Header title="Alumni" beforeBold="Meet our " bold="distinguished" afterBold=" alumni." />

        <div className='w-full lg:pb-24 text-gray-400 mt-24 flex justify-center'>
           
          <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>

            {alumni.map((alum) => (
              <div key={alum.name} className='w-72 group [perspective:5000px]'>
                <div className='relative h-full w-full  text-gray-300 transition-all duration-1000 motion-reduce:duration-0 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]'>
                  <div className='ring-1 ring-blue-800 rounded-xl bg-slate-900 h-full w-full [backface-visibility:hidden] overflow-hidden'>
                    <div className='flex items-start justify-center h-96'>
                      <Image
                        src={alum.image}
                        height={384}
                        width={288}
                        alt={alum.name}
                        className='border-b-4 border-gray-600'
                      />
                    </div>
                    <div className='w-full text-center p-4 space-y-1'>
                      <div className='text-2xl font-bold border-b-2 border-gray-500 pb-1 mb-2 text-white'>
                        {alum.name}
                      </div>
                      <div className='text-xl font-semibold whitespace-nowrap text-center space-y-1'>
                        {alum.year && (
                          <div>
                            Class of {alum.year}
                          </div>
                        )}
                        {alum.motion &&
                          <div className='motion-safe:rounded-full overflow-hidden'>
                            <p className='w-fit px-0 animate-alumni-slide-infinite motion-reduce:hidden'>
                              <Titles titles={alum.title} />
                            </p>
                            <p className='motion-safe:hidden'>
                            <Titles titles={alum.altTitle} />
                            </p>
                          </div>
                        }
                        {!alum.motion &&
                          <Titles titles={alum.title} />
                        }
                      </div>
                    </div>
                  </div>  

                  <div className='absolute inset-0 rounded-xl h-full w-full bg-slate-900 ring-1 ring-blue-800 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden'>
                    <div className='h-full w-full text-center'>
                      <p className='text-2xl font-bold border-b-2 border-gray-500 pb-1 m-4 mb-0'>
                        {alum.name}
                      </p>
                      <div className='p-4 w-full font-light text-md overflow-y-auto bg-slate-900 pt-2 h-[450px] scrollbar-thin scrollbar-thumb-blue-900/70 scrollbar-track-slate-950 hover:scrollbar-thumb-blue-600'>
                        {alum.bio}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

              <Link href="/team" className='ring-1 ring-blue-800 w-72 h-full bg-slate-900 rounded-xl hover:bg-blue-950 text-gray-300 transition-all duration-300 group'>
                <div className='w-full h-[388px] flex items-center border-b-4 border-gray-600'>
                  <Image
                    src="https://cdn.jaybots.org/logo/birdtransparent.png"
                    width={288}
                    height={384}
                    alt="Alumni logo"
                  />
                </div>
                <div className='w-full text-center p-4 space-y-1'>
                  <div className='text-2xl font-bold border-b-2 border-gray-500 pb-1 mb-2 text-white'>
                    Members
                  </div>
                  <div className='text-xl font-semibold text-center overflow-hidden'>
                    Meet our Team Members
                  </div>
                </div>
              </Link>
            </div>

          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}

function Titles({titles}){
  return(
    <p>
      <b className=' font-semibold'>Former </b>
      {titles.map((title, index) => (
        <b key={title} className=' font-semibold'> {title}
        {titles.length == index+2 && 
          <> &</>
        }
        {titles.length > index+2 && 
          <>,</>
        }
        </b>
      ))}
    </p>
  )
}