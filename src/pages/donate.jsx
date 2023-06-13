import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

export default function Donate() {
  return (
    <>
      <Head>
        <title>Jaybots | Donate</title>
      </Head>
      <Nav current="Donate" />
      <main className='flex items-center justify-center'>
        <div className='invisible w-0 lg:w-64 flex-none transition-all duration-1000' />
        
        <div className='w-full'>
        <Header title="Donate" beforeBold="Parts are " bold="expensive" afterBold=", consider donating today!"/>

          <div className='w-full h-full py-12 bg-zinc-800 flex justify-center'>

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