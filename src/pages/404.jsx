import Head from 'next/head'
import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'


const linkStyle = "ml-2 font-bold text-blue-600 hover:text-blue-500"
const buttonStyle = "h-12 w-30 rounded-lg flex justify-center items-center "

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaybots | 404 - Page Not found</title>
      </Head>
      <Nav />
      <main>
        <div className='lg:pl-64 animate-all duration-1000 h-screen overflow-y-auto [perspective:10px] bg-gray-900 scrollbar scrollbar-track-gray-950 scrollbar-thumb-blue-800/50'>

          <Header title="Page Not Found" beforeBold="We couldn't find this page. Don't fret, we're " bold='never gonna give you up!' />
          
          <div className='w-full py-12 lg:pb-24 text-gray-400 mt-72'>
            
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
