import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

import Colors from '@/components/Colors'


export default function Host() {
  return (
    <>
      <Head>
        <title>Jaybots | Competition Hosting</title>
      </Head>
      <Nav current="Competition Hosting" />
      <main>
        <div className='flex flex-col lg:pl-64 animate-all h-screen w-full [perspective:10px] [perspective-origin:top_right] overflow-y-scroll bg-gray-900 scrollbar scrollbar-track-gray-950 scrollbar-thumb-blue-800/50'>
          <Header title="Competition Hosting" beforeBold="Learn about the amazing " bold="Competitions" afterBold=" we host" />

          <div className='w-full py-12 lg:pb-24 text-gray-400 mt-72 sm:mt-52 md:mt-60'>

            <div className='h-[50vh] w-full relative flex items-center justify-center'>
            
              <h1 className='font-bold text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center'>Coming Soon!</h1>
              <Colors />    
            
            </div>
          </div>

          <Footer />

        </div>
      </main>
    </>
  )
}