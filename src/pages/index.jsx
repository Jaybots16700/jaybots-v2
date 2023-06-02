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

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faCommentsDollar,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons'


const linkStyle = "ml-2 font-bold text-blue-600 hover:text-blue-500"
const buttonStyle = "h-12 w-30 rounded-lg flex justify-center items-center hover:brightness-150 hover:text-gray-800 "

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaybots | John Jay Robotics</title>
      </Head>
      <Nav />
      <main className='flex items-center justify-center'>
        <div className='invisible w-0 lg:w-64 flex-none transition-all duration-1000' />
        
        <div className='w-full'>
          <div className='flex p-12 text-white text-center items-center w-full h-72 bg-gray-900'>
            <div className='lg:hidden'>
              <Image
                src='/images/logo.png'
                width={250}
                height={250}
                className='rounded-full'
                alt='logo'
              />
            </div>
            <div className='w-full space-y-2 lg:space-y-4'>
              <h1 className='text-4xl xl:text-7xl lg:text-6xl md:text-5xl font-extrabold'>John Jay Robotics Team</h1>
              <div className='flex w-full text-md md:text-lg lg:text-xl xl:text-2xl text-center justify-center space-x-2'>
                <p className='font-thin'>
                  <b className='font-semibold'>Jaybots </b>
                  - FTC Robotics Team #16700
                </p>
              </div>
            </div>
          </div>

          <div className='w-full h-full p-12 bg-zinc-800'>
            <div className='relative w-full text-center text-white space-y-2 text-xl'>
              <h2 className='text-4xl font-semibold'>👋 Hello!</h2>
              <p>We are the Jaybots - This is our fifth year competing in
              <Link href="https://www.firstinspires.org/robotics/ftc/" className={linkStyle} target='_blank'>
                FTC
              </Link>
              . After making it to the regional competition three years in a row, we are aiming to make it even further next year. We have completed our 2023 Game Season:
              <Link href="https://www.youtube.com/watch?v=HsitvZ0JaDc" className={linkStyle} target='_blank'>
                Power Play
              </Link>
              , and are preparing for the 2024 Game Season,
              <Link href="https://www.youtube.com/watch?v=pTvP165wi3E" className={linkStyle} target='_blank'>
                First In Show
              </Link>
              . Join us on our journey!
              </p>
            </div>

            <div className='grid sm:grid-cols-2 grid-cols-1 w-full mt-12 gap-4 text-center text-white text-lg sm:text-sm font-semibold md:text-xl'>
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

            <video controls className='w-full mt-12'>
              <source src='/videos/home.mp4' type="video/mp4" />
              Video unavailable.
            </video>

            <div id="contact" className='relative w-full text-center text-white space-y-4 text-xl mt-8'>
              <h2 className='text-4xl font-semibold'>Contact Us!</h2>
              <p>Like What you see?
                <Link href="https://www.interest.jaybots.org" className={linkStyle} target='_blank'>
                  Join Today!
                </Link>
                <b> </b>
                Feel free to contact us at
                <Link href="mailto:interest.jaybots.org?subject=Question" className={linkStyle} target='_blank'>
                  interest@jaybots.org
                </Link>
              </p>
              <p>Interested in becoming a
                <Link href="https://jaybotsboosters.org/sponsors" className={linkStyle} target='_blank'>
                  sponser
                </Link>
                ? You can reach us at
                <Link href="mailto:joanna@jaybots.org?subject=Sponsership Question" className={linkStyle} target='_blank'>
                  joanna@jaybots.org
                </Link>
              </p>
              <p>If there&apos;s anything else that you would like to discuss, send us an email at
                <Link href="mailto:hi.jaybots.org" className={linkStyle} target='_blank'>
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
