import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'
import Colors from '@/components/Colors'

import { linkStyle } from '@/config'

export default function Interest() {
  return (
    <>
      <Head>
        <title>Jaybots | Join</title>
      </Head>
      <Nav />
      <main>
        <div className="animate-all z-50 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 lg:pl-64">
          <Header
            title="Interested in joining us?"
            beforeBold="Share your "
            bold="passion"
            afterBold=" with us"
          />
          
          <div className="w-full text-gray-400 lg:pb-24">
            <div className="relative isolate h-full w-full space-y-6 p-12 text-center text-lg font-semibold text-gray-300">
              <div className="w-full space-y-4 font-normal">
                <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  What is FIRST Tech Challenge?
                </h1>
                <p>
                  FTC, or the{' '}
                  <Link
                    href="https://www.firstinspires.org/robotics/ftc"
                    className={linkStyle}
                    target="_blank"
                  >
                    FIRST Tech Challenge
                  </Link>
                  , is a global robotics program where teams compete to build,
                  design, and code robots. Every year, from September to March,thousands teams compete in qualifiers to
                  advance to the Regional competition. The game for this year is{' '}
                  <span className="font-bold text-gray-100">
                    BIOBUZZ
                  </span>{' '}
                  and will be kicked off on{' '}
                  <span className="font-bold text-gray-100">
                    September 12th 2026
                  </span>{' '}

                </p>
              </div>
               
               <div className="w-full space-y-4 font-normal">
                <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  What can you learn from Robotics?
                </h1>
                <p>
                  Being on the robotics team club you hands-on experience in
                  engineering, coding, problem-solving, and teamwork while
                  competing with other teams from across the state.
                </p>
              </div>

              <div className="w-full space-y-4 font-normal">
                <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  What are the two teams in the Robotics Club?
                </h1>
                <p>
                  We have two Robotics teams at John Jay Highschool, both of which are part of the Club. The teams are: The, our Varsity team and the Pheonixes, the junior team
                </p>

              </div>

              <div className="w-full space-y-4 font-normal">
                <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  When does Robotics Meet?
                </h1>
                <p>
                  We have general meetings on tuesdays that everyone is required to attend, and meetings on fridays which are mainly Phoenix focused. We meet in room 171 B in the technology wing. 
                </p>
              </div>

              <div className="relative isolate grid h-fit grid-cols-2 items-start justify-center space-x-8">
                <div className="h-full w-full rounded-5xl bg-white/10 p-8 pb-6 font-light ring-1 ring-white/20">
                  <p>
                    Fill out our{' '}
                    <b className="font-bold text-gray-200">Interest Form</b>!
                  </p>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdfYoCY1HNVDEUasn-cnXdZJlfoFhiQ0m91JkM7CQ17Any6LQ/viewform?usp=header">
                    <div className="my-6 flex h-16 items-center justify-center rounded-full bg-blue-800 text-3xl font-bold text-white duration-150 hover:bg-blue-700">
                      Join
                    </div>
                  </Link>
                  <p className="text-sm">
                    Filling this out will allow you receive emails from us{' '}
                    <b className="font-bold text-gray-200"></b>
                    <b className="font-bold text-gray-200"></b>.
                  </p>
                </div>

                <div className="h-full w-full space-y-4 rounded-5xl bg-white/10 p-8 font-light ring-1 ring-white/20">
                  <p>
                    Corporations should check out our{' '}
                    <Link
                      href="https://jaybotsboosters.org/sponsor"
                      className={linkStyle}
                    >
                      Corporate Sponsorship Plans
                    </Link>{' '}
                    ranging from $500 to $10,000.
                  </p>
                  <p>
                    <b className="font-bold text-gray-200">Benefits Include:</b>{' '}
                    Your logo on our{' '}
                    <b className="font-bold text-gray-200">
                      shirts, robot, banner,
                    </b>{' '}
                    &{' '}
                    <Link
                      href="https://jaybotsboosters.org/sponsors"
                      className={linkStyle}
                    >
                      website
                    </Link>
                    , as well as{' '}
                    <b className="font-bold text-gray-200">
                      sponsored social media posts
                    </b>{' '}
                    & much more!
                  </p>
                  <Link href="https://jaybotsboosters.org/sponsor">
                    <div className="mt-6 flex h-16 items-center justify-center rounded-full bg-blue-800 text-xl duration-150 hover:bg-blue-700">
                      <p className="font-normal text-white">
                        Learn more at{' '}
                        <b className="font-bold">JaybotsBoosters.org</b>
                      </p>
                    </div>
                  </Link>
                </div>

                <Colors />
              </div>

              <div className="top-12">
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
