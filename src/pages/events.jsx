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
      <Nav />
      <main>
        <div className="animate-all flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 lg:pl-64">
          <Header
            title="Calendar"
            beforeBold="Veiw our "
            bold="upcoming events"
          />

          <div className="isolate mt-24 w-full py-12 lg:pb-24">
            <div className="relative flex h-[40rem] w-full items-center justify-center">
              <h1 className="bg-gradient-to-r from-green-500 via-blue-500 via-40% to-purple-500 bg-clip-text pb-3 text-center text-5xl font-bold text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
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
