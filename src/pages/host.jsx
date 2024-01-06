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
        <div className='flex flex-col lg:pl-64 animate-all h-screen w-full overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-gray-950 scrollbar-thumb-blue-800/50'>
        
          <Header title="Calendar" beforeBold="Veiw our " bold="upcoming events"/>

          <div className='w-full py-12 lg:pb-24 mt-24 isolate'>

            <div className='h-[40rem] w-full relative flex items-center justify-center'>
            
              <h1 className='font-bold bg-gradient-to-r from-green-500 to-purple-500 via-blue-500 via-40% text-transparent bg-clip-text pb-3 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center'>
                Coming Soon!
              </h1>
              <Colors /> 
            
            </div>
          </div>

          <Footer />

        </div>
      </main>
    </>
  )
}