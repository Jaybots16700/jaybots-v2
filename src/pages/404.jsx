import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'
import Colors from '@/components/Colors'
import Image from 'next/image'

export default function _404() {
  return (
    <>
      <Head>
        <title>Jaybots | 404 - Page Not found</title>
      </Head>
      <Nav />
      <main>
        <div className="animate-all flex h-screen w-full flex-col overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 [perspective-origin:top_right] [perspective:10px] lg:pl-64">
          <Header
            title="Page Not Found"
            beforeBold="We couldn't find this page."
          />

          <div className="w-full px-12 pt-12 text-gray-400 lg:pb-24">
            <Image
              className="w-full rounded-3xl ring-2 ring-blue-800"
              src="/images/Corning.jpg"
              alt="team photo"
              width={500}
              height={384}
            />

            {/* <Colors /> */}
          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}
