import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

import { PhotoGrid } from '@/components/Photos'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

import { miscImages, buildImages, codeImages, outreachImages, compImages, allImages } from '@/config.jsx'

import clsx from 'clsx'

const tabs = [
  { name: "All", images: allImages},
  { name: "Build", images: buildImages},
  { name: "Code", images: codeImages},
  { name: "Outreach", images: outreachImages},
  { name: "Competitions", images: compImages},
  { name: "Miscellaneous", images: miscImages},
]

export default function Media() {

  const [selectedIndex, setSelectedIndex] = useState(0);


  return (
    <>
      <Head>
        <title>Jaybots | Media</title>
      </Head>
      <Nav current='Media' />
      <main className='flex items-center justify-center'>
        <div className='invisible w-0 lg:w-64 flex-none transition-all duration-1000' />
        
        <div className='w-full'>
          <Header title='Media' bold='Our pics and vids' afterBold=' - check out what we&apos;ve been up to!' />

          <div className='w-full h-full p-12 bg-zinc-800'>
          <div className='grid grid-cols-2 md:grid-cols-3 xl:flex'>
              {tabs.map((tab, index) => (
                <div key={tab.name} className='w-full flex justify-center'>
                    <button className={clsx({
                      'h-fit py-2 my-2 w-36 text-lg font-semibold rounded-full text-white hover:brightness-125 border-2 transition-all duration-1000 motion-safe:hover:scale-105': true,
                      'bg-blue-900 border-blue-600 brightness-110 motion-safe:scale-110': index === selectedIndex,
                      'xl:motion-safe:rotate-12': (index === selectedIndex) && (index%2 == 0),
                      'xl:motion-safe:-rotate-12': (index === selectedIndex) && (index%2 != 0),
                      'bg-gray-800 border-blue-700': !(index === selectedIndex)
                    })} onClick={() =>  setSelectedIndex(index)}>
                      <p>{tab.name}</p>
                    </button>
                </div>
              ))}
            </div>

            <PhotoGrid imageList={tabs[selectedIndex].images} />

          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}
