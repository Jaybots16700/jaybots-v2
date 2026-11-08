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

export default function engkit() {
  return (
    <>
      <Head>
        <title>Jaybots | Join</title>
      </Head>
      <Nav />
      <main>
        <div className="animate-all z-50 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 lg:pl-64">
          <Header
            title="Order a Engineering Kit Now!"
            beforeBold="Learn and play with"
            bold=" JayLabs"
            afterBold=" Engineering Kits"
          />
        </div>
        <div className="w-full text-gray-400 lg:pb-24">
          <div className="relative isolate h-full w-full space-y-6 p-12 text-center text-lg font-semibold text-gray-300">
            <div className="w-full space-y-4 font-normal">
              <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Engineering Kits
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}