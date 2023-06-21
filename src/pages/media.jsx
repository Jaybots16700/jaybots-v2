import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

import { PhotoGrid } from '@/components/Photos'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

import { miscImages, buildImages, codeImages, outreachImages, compImages, allImages } from '@/config.jsx'
import Colors from '@/components/Colors'

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
      <main className='flex items-center justify-center lg:pl-64 animate-all duration-1000'>
        
        <div className='w-full'>
          <Header title='Media' bold='Our pics and vids' afterBold=' - check out what we&apos;ve been up to!' />

          <div className='w-full h-full p-12 bg-gray-900'>
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
            
            <div className="relative isolate">
              <PhotoGrid imageList={tabs[selectedIndex].images} />
              <Colors />
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}
