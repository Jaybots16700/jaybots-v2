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

      <div className="animate-all z-50 flex min-h-screen w-full flex-col overflow-x-hidden bg-black lg:pl-64">
        <Header
          title="Order an Engineering Kit Now!"
          beforeBold="Learn and play with"
          bold=" JayLabs"
          afterBold=" Engineering Kits"
        />

        <main className="w-full text-gray-400 lg:pb-24">
          <div className="relative isolate w-full space-y-6 p-12 text-center text-lg font-semibold text-gray-300">
            <div className="w-full space-y-4 font-normal">
              <h1 className="mb-4 text-2xl font-mono text-white sm:text-3xl md:text-4xl">
                Latest Kit:
              </h1>
               <img
              src="https://res.cloudinary.com/jaybots/image/upload/v1795634947/Screenshot_2026-11-25_at_14.29.03_vvlr9r.png"
              alt="JayLabs Engineering Kit"
              className="mx-auto mt-8 w-full max-w-3xl rounded-xl border border-gray-900 border-8 object-contain"
            />
             <div className="mx-auto mt-8 max-w-3xl space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Launcher!
              </h2>

              <p className="text-lg font-normal text-gray-300">
                
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="rounded-xl border border-gray-700 bg-gray-900 p-5">
                  <p className="text-sm text-gray-400">Price</p>
                  <p className="text-2xl font-bold text-white">
                    $15
                  </p>
                </div>

                
              <a
              href="https://www.paypal.com/donate/?hosted_button_id=DBNCZM99KA84G"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-blue-600 px-8 py-12 text-center text-xl font-semibold text-white hover:bg-blue-700 transition"
>
  Buy Here
</a>
              

              </div>

              <p className="pt-4 text-base font-normal text-gray-400">
                build your very own engineering kit.
              </p>
            </div>
            </div>
          </div>
         </main>

        <Footer />
      </div>
    </>
  );
}
