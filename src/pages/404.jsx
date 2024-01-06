import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'
import Colors from '@/components/Colors'

export default function _404() {
  return (
    <>
      <Head>
        <title>Jaybots | 404 - Page Not found</title>
      </Head>
      <Nav />
      <main>
      <div className='flex flex-col lg:pl-64 animate-all h-screen w-full [perspective:10px] [perspective-origin:top_right] overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900'>
        <Header title="Page Not Found" beforeBold="We couldn't find this page. Don't fret, we're " bold='never gonna give you up!' />
          
          <div className='w-full pt-12 lg:pb-24 text-gray-400 isolate'>
            
            <video autoPlay playsInline muted className='w-full'>
              <source src='/videos/404.mp4' type="video/mp4" />
              Video unavailable.
            </video>

            {/* <Colors /> */}
          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}
