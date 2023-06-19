import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Photos'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

import { ReviewColumn } from '@/components/Photos'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faCommentsDollar,
  faBullhorn,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'
import { linkStyle } from '@/config.jsx'
import { allImages } from '@/config.jsx'


const buttonStyle = "h-12 w-30 rounded-lg flex justify-center items-center hover:brightness-150 hover:text-gray-800 "

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaybots | John Jay Robotics</title>
      </Head>
      <Nav current="Home" />
      <main className='flex items-center justify-center lg:pl-64 animate-all duration-1000 space-y text-gray-400'>
        
        <div className='w-full'>
          <Header title="John Jay Robotics Team" bold="Jaybots" afterBold=" - FTC Robotics Team #16700" />

          <div className='w-full h-full bg-gray-900 py-12'>

            <div className='relative w-full text-center space-y-6 text-xl p-12 pt-0'>
              <h2 className='text-5xl font-bold text-gray-200'>Who are we?</h2>
              <p>We are the Jaybots - This is our fifth year competing in <Link href="https://www.firstinspires.org/robotics/ftc/" className={linkStyle} target='_blank'>
                FTC
              </Link>
              . After making it to the regional competition three years in a row, we are aiming to make it even further next year. We have completed our 2023 Game Season: <Link href="https://www.youtube.com/watch?v=HsitvZ0JaDc" className={linkStyle} target='_blank'>
                Power Play
              </Link>
              , and are preparing for the 2024 Game Season, <Link href="https://www.youtube.com/watch?v=pTvP165wi3E" className={linkStyle} target='_blank'>
                First In Show
              </Link>
              . Join us on our journey!
              </p>
            </div>

            <div className='grid sm:grid-cols-2 grid-cols-1 w-full p-12 pt-0 gap-4 text-center text-white text-lg sm:text-sm font-semibold md:text-xl'>
              <Link href="https://www.instagram.com/johnjayroboticsclub/" className={buttonStyle + "bg-fuchsia-500"} target='_blank'>
                <FontAwesomeIcon icon={faInstagram} className="h-8 mr-2" />
                <p>@JohnJayRoboticsClub</p>
              </Link>
              <Link href="https://www.youtube.com/@jaybots16700" className={buttonStyle + "bg-red-600"} target='_blank'>
                <FontAwesomeIcon icon={faYoutube} className="h-8 mr-2" />
                <p>Jaybots #16700</p>
              </Link>
              <Link href="https://twitter.com/RoboticsJay" className={buttonStyle + "bg-sky-500"} target='_blank'>
                <FontAwesomeIcon icon={faTwitter} className="h-8 mr-2" />
                <p>@RoboticsJay</p>
              </Link>
              <Link href="https://jaybotsboosters.org/sponsors" className={buttonStyle + "bg-purple-600"} target='_blank'>
              <FontAwesomeIcon icon={faCommentsDollar} className="h-8 mr-2" />
                <p>Our Sponsors!</p>
              </Link>
              <Link href="https://interest.jaybots.org" className={buttonStyle + "bg-blue-800 sm:col-span-2"} target='_blank'>
                <FontAwesomeIcon icon={faBullhorn} className="h-8 mr-2" />
                <p>Join Now!</p>
              </Link>
            </div>

            <div className='w-full sm:flex h-fit sm:h-[42rem] xl:h-[50rem] sm:space-x-12 space-y-8 justify-center'>
              <div className="w-full sm:w-min h-fit sm:h-full sm:flex items-center">
                <div className="h-fit bg-slate-950 p-12 w-full sm:w-min sm:rounded-r-4xl">
                  <h2 className='text-gray-100 text-5xl sm:text-6xl md:text-7xl xl:text-8xl pb-3 font-bold w-fit pr-16 border-b-8 border-white md:mr-20'>Media</h2>
                  <p className='text-gray-300 text-base md:text-lg font-light mt-4'>I don&apos;t know what to put here. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sequi molestias, harum omnis, nisi.</p>
                  <Link href="/media" className='flex items-center mt-4 space-x-2 bg-blue-700 w-fit px-3 py-1 rounded-full hover:bg-blue-600 group'>
                    <p className='text-sm text-gray-100 group-hover:font-semibold transition-all duration-300'>View all Media</p>
                    <FontAwesomeIcon icon={faArrowRight} className='text-white transition-all duration-300 h-4 group-hover:h-6' />
                  </Link>
                </div>
              </div>

              <div className='relative pl-4 rounded-2xl sm:rounded-r-none overflow-hidden pr-4 sm:pr-8 sm:h-full h-[32rem] mx-8 sm:mx-0'>
                <ReviewColumn reviews={allImages} msPerPixel={10} caption={false} />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray-700" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-700" />
              </div>
            </div>

            <div className='w-full px-12 mt-20'>
              <video controls className='w-full'>
                <source src='/videos/home.mp4' type="video/mp4" />
                Video unavailable.
              </video>
            </div>

            <div id="contact" className='relative w-full text-center space-y-4 text-xl mt-8 font-light px-4'>
              <h2 className='text-4xl font-bold text-gray-200'>Contact Us!</h2>
              <p>Like What you see? <Link href="https://www.interest.jaybots.org" className={linkStyle} target='_blank'>
                  Join Today!
                </Link>
                <b> </b>
                Feel free to contact us at <Link href="mailto:interest.jaybots.org?subject=Question" className={linkStyle} target='_blank'>
                  interest@jaybots.org
                </Link>
              </p>
              <p>Interested in becoming a <Link href="https://jaybotsboosters.org/sponsors" className={linkStyle} target='_blank'>
                  sponser
                </Link>
                ? You can reach us at <Link href="mailto:joanna@jaybots.org?subject=Sponsership Question" className={linkStyle} target='_blank'>
                  joanna@jaybots.org
                </Link>
              </p>
              <p>If there&apos;s anything else that you would like to discuss, send us an email at <Link href="mailto:hi.jaybots.org" className={linkStyle} target='_blank'>
                  hi@jaybots.org
                </Link>
              </p>
            </div>

          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}
