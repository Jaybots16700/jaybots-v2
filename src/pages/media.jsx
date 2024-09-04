import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

import { PhotoGrid } from '@/components/Photos'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

import {
  miscImages,
  buildImages,
  codeImages,
  outreachImages,
  compImages,
  allImages,
} from '@/config.jsx'
import Colors from '@/components/Colors'

import clsx from 'clsx'

const tabs = [
  { name: 'All', images: allImages },
  { name: 'Build', images: buildImages },
  { name: 'Code', images: codeImages },
  { name: 'Outreach', images: outreachImages },
  { name: 'Competitions', images: compImages },
  { name: 'Miscellaneous', images: miscImages },
]

export default function Media() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <>
      <Head>
        <title>Jaybots | Media</title>
      </Head>
      <Nav />
      <main>
        <div className="animate-all z-50 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 lg:pl-64">
          <Header
            title="Media"
            bold="Our pics and vids"
            afterBold=" - Check out what we've been up to!"
          />

          <div className="w-full p-12 text-gray-400 lg:pb-24">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:flex">
              {tabs.map((tab, index) => (
                <div key={tab.name} className="flex w-full justify-center">
                  <button
                    className={clsx({
                      'my-2 h-fit w-40 rounded-full border-2 py-4 text-xl font-semibold text-white transition-all duration-1000 hover:brightness-125 motion-safe:hover:scale-105': true,
                      'border-blue-600 bg-blue-900 brightness-110 motion-safe:scale-105':
                        index === selectedIndex,
                      // 'xl:motion-safe:rotate-12': (index === selectedIndex) && (index%2 == 0),
                      // 'xl:motion-safe:-rotate-12': (index === selectedIndex) && (index%2 != 0),
                      'border-blue-700 bg-gray-800': !(index === selectedIndex),
                    })}
                    onClick={() => setSelectedIndex(index)}
                  >
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
