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
        <title>Jaybots | Upcoming Events</title>
      </Head>
      <Nav />
      <main>
        <div className="animate-all flex h-screen w-full flex-col overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 [perspective-origin:top_right] [perspective:10px] lg:pl-64">
          <Header
            title="Upcoming Events"
            beforeBold="Help us make our events a success!"
          />

          <div className="w-full px-12 pt-12 text-gray-400 lg:pb-24">
            <section className="relative pt-16">
              <div className="relative mx-auto max-w-6xl overflow-x-scroll px-4 sm:px-6">
                <iframe
                  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&title=Jaybots%20Upcoming%20Events&src=d2NzZG55Lm9yZ19jbGFzc3Jvb20yM2ZlMDBiMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23174ea6"
                  style={{ border: 'solid 1px #777' }}
                  width="800"
                  height="600"
                  className="mx-auto"
                ></iframe>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </main>
    </>
  )
}
