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
        <title>Jaybots | Donate</title>
      </Head>
      <Nav />
      <main>
        <div className="animate-all z-50 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 lg:pl-64">
          <Header
            title="Donate"
            beforeBold="Part are "
            bold="expensive"
            afterBold=". consider donating!"
          />

          <div className="w-full text-gray-400 lg:pb-24">
            <div className="relative isolate grid h-full w-full grid-cols-1 space-x-16 space-y-6 p-12 text-center text-lg font-semibold text-gray-400 xl:grid-cols-2">
              <div className="w-full space-y-4 font-normal">
                <h1 className="text-3xl font-bold text-gray-200 sm:text-5xl md:text-6xl">
                  How Can You Help?
                </h1>
                <p>
                  As a robotics team, we are consistently improving our robot
                  for the best result in competitive matches and looking for new
                  ways to spread STEM in our community. Broken parts,
                  registration fees, and transportation fees all take bites out
                  of the team coffers, and we need your support to continue to
                  improve as a{' '}
                  <Link
                    href="https://www.firstinspires.org/"
                    className={linkStyle}
                  >
                    FIRST
                  </Link>{' '}
                  robotics team.
                </p>
                <p>
                  Having a larger pool of funds will help our team in lots of
                  ways. We will put your donations towards:
                </p>
                <ul className="list-disc space-y-4 text-start text-gray-300">
                  <li>
                    Getting better equipment and parts for the team so that we
                    can build better robots and perform better in competitions.
                  </li>
                  <li>
                    Paying for transportation, registration, and other fees
                    needed for the team to compete.
                  </li>
                  <li>Organizing STEM activities for community outreach</li>
                </ul>
                <p>
                  If you are interested in helping us do the best we can as both
                  a robotics team and as a part of our community, please
                  consider donating to the Jaybots!
                </p>
              </div>

              <div className="relative isolate space-y-8">
                <div className="w-full space-y-4 rounded-5xl bg-white/5 p-8 font-light ring-1 ring-white/10">
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

                <div className="w-full rounded-5xl bg-white/5 p-8 pb-6 font-light ring-1 ring-white/10">
                  <p>
                    Donations accepted via{' '}
                    <b className="font-bold  text-gray-200">PayPal</b>. (Account
                    not required!)
                  </p>
                  <Link href="https://www.paypal.com/donate/?hosted_button_id=9ZWAFZYN8NTCS">
                    <div className="my-6 flex h-16 items-center justify-center rounded-full bg-blue-800 text-xl duration-150 hover:bg-blue-700">
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/donate/thumb/0/02/Paypal-logo-white.svg/2560px-Paypal-logo-white.svg.png"
                        height={200}
                        width={130}
                        alt="PayPal"
                      />
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
                    <b className="font-bold text-gray-200">tax deducatble</b>.
                  </p>
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

function Titles({ titles }) {
  return (
    <p>
      <b className=" font-semibold">Former </b>
      {titles.map((title, index) => (
        <b key={title} className=" font-semibold">
          {' '}
          {title}
          {titles.length == index + 2 && <> &</>}
          {titles.length > index + 2 && <>,</>}
        </b>
      ))}
    </p>
  )
}
