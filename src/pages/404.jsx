import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'
import Colors from '@/components/Colors'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaybots | 404 - Page Not found</title>
      </Head>
      <Nav />
      <main>
      <div className='flex flex-col lg:pl-64 animate-all h-screen w-full [perspective:10px] [perspective-origin:top_right] overflow-y-scroll bg-gray-900 scrollbar scrollbar-track-gray-950 scrollbar-thumb-blue-800/50'>
        <Header title="Page Not Found" beforeBold="We couldn't find this page. Don't fret, we're " bold='never gonna give you up!' />
          
          <div className='w-full py-12 lg:pb-24 text-gray-400 mt-72'>
            
            <video autoPlay playsInline muted className='w-full my-4'>
              <source src='/videos/404.mp4' type="video/mp4" />
              Video unavailable.
            </video>

            <Colors />
          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}
