import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'
import Colors from '@/components/Colors'

import { linkStyle } from '@/config'

export default function Donate() {
  return (
    <>
      <Head>
        <title>Jaybots | Live</title>
      </Head>
      <Nav />
      <main>
        <div className="animate-all z-50 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 lg:pl-64">
          <Header
            title="Live"
            beforeBold="See us in "
            bold="action"
            afterBold="!"
          />

          <div className="w-full text-gray-400 lg:pb-24">
            <div className="relative isolate h-full w-full space-y-6 px-12  text-center text-lg font-semibold text-gray-300">
              <div className="w-full space-y-4 font-normal"></div>

              <div className="w-full space-y-4 font-normal">
                <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  What is the FIRST World Championship?
                </h1>
                <p>
                  The{' '}
                  <Link
                    href="https://firstchampionship.org/"
                    className={linkStyle}
                    target="_blank"
                  ></Link>{' '}
                  It's a robotics competition where the top 256 teams from
                  around the world come together to compete. It is held each
                  year in Houston, TX
                  <span className="font-bold text-gray-100"></span>, and is from{' '}
                  <span className="font-bold text-gray-100">
                    April 16th to 19th
                  </span>{' '}
                  this season.
                </p>
                <div className="flex w-full flex-col items-center justify-center space-x-4 md:flex-row">
                  <iframe
                    src="https://player.twitch.tv/?channel=firstinspires_ochoa&parent=localhost"
                    frameBorder="0"
                    allowFullScreen
                    scrolling="no"
                    height="350"
                    width="620"
                    className="rounded-3xl"
                  ></iframe>
                  <iframe
                    src="https://player.twitch.tv/?channel=fuzion_panda1&parent=localhost"
                    frameBorder="0"
                    allowFullScreen
                    scrolling="no"
                    height="360"
                    width="620"
                    className="rounded-3xl"
                  ></iframe>
                </div>
              </div>
              <div className="mt-72 flex h-fit flex-col items-start justify-center gap-8 md:flex-row">
                <div className="h-full w-full rounded-5xl bg-white/10 p-8 pb-6 font-light ring-1 ring-white/20">
                  <p>
                    Watch the World Championship{' '}
                    <b className="font-bold  text-gray-200">here</b>!
                  </p>
                  <Link href="https://www.twitch.tv/firstinspires_ochoa">
                    <div className="my-6 flex h-16 items-center justify-center rounded-full bg-blue-800 text-3xl font-bold text-white duration-150 hover:bg-blue-700">
                      FTC Livestream
                    </div>
                  </Link>
                  <p className="text-sm">
                    The FIRST Tech Challenge (FTC) World Championship is an
                    international robotics competition, which brings together
                    top teams from around the world to showcase their
                    engineering skills, innovation, and teamwork.
                  </p>
                </div>

                <div className="h-full w-full space-y-4 rounded-5xl bg-white/10 p-8 font-light ring-1 ring-white/20">
                  <p>
                    Check out our vlog to get a behind-the-scenes look at our
                    adventures in Houston during the FTC World Championship!
                    From exploring the city to bonding with the team and
                    experiencing the excitement of the event, you'll see what
                    life was like both on and off the field. It’s a fun way to
                    relive the memories and see what the journey was all about.
                  </p>

                  <Link href="https://www.twitch.tv/fuzion_panda1">
                    <div className="mt-6 flex h-16 items-center justify-center rounded-full bg-blue-800 text-xl duration-150 hover:bg-blue-700">
                      <p className="font-normal text-white">
                        {''}
                        <b className="font-bold">Watch our Live Vlog!</b>
                      </p>
                    </div>
                  </Link>
                </div>

                <Colors />
              </div>
              <div className=" top-12">
                <Colors />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  )
}
