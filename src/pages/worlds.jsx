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
        <title>Jaybots | Worlds</title>
      </Head>
      <Nav />
      <main>
        <div className="animate-all z-50 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 lg:pl-64">
          <Header
            title="World Championship"
            beforeBold="We're going to "
            bold="Worlds"
            afterBold="!"
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
                  design, and code robots. Every year, there is a new game, and
                  from September to March, teams compete in qualifiers to
                  advance to the Regional competition. This year, the game is
                  called{' '}
                  <span className="font-bold text-gray-100">Into the Deep</span>
                  .
                </p>
              </div>

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
                  >
                    World Championship
                  </Link>{' '}
                  is a robotics competition where the top 256 teams from around
                  the world come together to compete. It is held each year in
                  <span className="font-bold text-gray-100">
                    {' '}
                    Houston, Texas
                  </span>
                  , and is from{' '}
                  <span className="font-bold text-gray-100">
                    April 16th to 19th
                  </span>{' '}
                  this season.
                </p>

                <p>
                  This is the Jaybots&apos; first year qualifying for the World
                  Championship! After being on the{' '}
                  <span className="font-bold text-gray-100">
                    finalist alliance
                  </span>{' '}
                  and winning the 3rd Place{' '}
                  <span className="font-bold text-gray-100">Inspire Award</span>{' '}
                  at Regionals, we qualified for the World Championship!
                </p>
              </div>

              <div className="w-full space-y-4 font-normal">
                <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  How Can <span className="italic">You</span> Help Us?
                </h1>
                <p>
                  With the cost of transportation to Houston, lodging, food,
                  registration fees, and improving our robot, we need your help!
                  Our goal is to raise{' '}
                  <span className="font-bold text-gray-100">$60,000</span> to
                  cover these expenses, and we need your help! Please consider
                  donating and spreading the word about our team!
                </p>
              </div>

              <div className="relative isolate grid h-fit grid-cols-2 items-start justify-center space-x-8">
                <div className="h-full w-full rounded-5xl bg-white/10 p-8 pb-6 font-light ring-1 ring-white/20">
                  <p>
                    Donate to our{' '}
                    <b className="font-bold  text-gray-200">GoFundMe</b>!
                  </p>
                  <Link href="/donate">
                    <div className="my-6 flex h-16 items-center justify-center rounded-full bg-blue-800 text-3xl font-bold text-white duration-150 hover:bg-blue-700">
                      Donate
                    </div>
                  </Link>
                  <p className="text-sm">
                    Your donation will be sent to the{' '}
                    <Link
                      href="https://jaybotsbooster.org"
                      className={linkStyle}
                    >
                      Jaybots Booster Club
                    </Link>
                    , which is a{' '}
                    <b className="font-bold  text-gray-200">
                      501(c)3 organization
                    </b>
                    . All donations are{' '}
                    <b className="font-bold text-gray-200">tax deductible</b>.
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
                    ranging from $100 to $5000.
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
