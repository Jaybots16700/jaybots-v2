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
} from '@fortawesome/free-solid-svg-icons'
import { linkStyle, allImages } from '@/config.jsx'
import Colors from '@/components/Colors'

const buttonStyle = "h-12 w-30 rounded-lg flex justify-center items-center hover:text-white hover:font-bold bg-white/5 ring-1 ring-white/10 hover:bg-white/20 hover:ring-white/25 hover:scale-y-110 hover:scale-x-[103%] transition-color duration-500"

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaybots | John Jay Robotics</title>
      </Head>
      <Nav current="Home" />
      <main>
        <div className='lg:pl-64 animate-all duration-1000 h-screen overflow-y-auto [perspective:10px] bg-gray-900 scrollbar scrollbar-track-gray-950 scrollbar-thumb-blue-800/50'>
          <Header title="John Jay Robotics Team" bold="Jaybots" afterBold=" - FTC Robotics Team #16700" />

          <div className='w-full py-12 lg:pb-24 text-gray-400 mt-72'>

            <div className='relative w-full text-center space-y-6 text-xl p-6 sm:p-12 pt-0 flex flex-col'>
              <h2 className='text-5xl xl:text-6xl font-bold text-gray-200'>Who are we?</h2>
              <div className='w-full flex justify-center'>
                <p className='max-w-4xl leading-8'>We are the Jaybots - This is our fifth year competing in <Link href="https://www.firstinspires.org/robotics/ftc/" className={linkStyle} target='_blank'>
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
            </div>

            <JoinToday />

            <div className=' relative isolate grid sm:grid-cols-2 grid-cols-1 w-full p-6 sm:p-12 pt-0 mb-24 gap-4 text-center text-lg sm:text-sm font-semibold md:text-xl'>
              <Link href="https://www.instagram.com/johnjayroboticsclub/" className={buttonStyle} target='_blank'>
                <FontAwesomeIcon icon={faInstagram} className="h-8 mr-2" />
                <p>@JohnJayRoboticsClub</p>
              </Link>
              <Link href="https://www.youtube.com/@jaybots16700" className={buttonStyle} target='_blank'>
                <FontAwesomeIcon icon={faYoutube} className="h-8 mr-2" />
                <p>Jaybots #16700</p>
              </Link>
              <Link href="https://twitter.com/RoboticsJay" className={buttonStyle} target='_blank'>
                <FontAwesomeIcon icon={faTwitter} className="h-8 mr-2" />
                <p>@RoboticsJay</p>
              </Link>
              <Link href="https://jaybotsboosters.org/sponsors" className={buttonStyle} target='_blank'>
              <FontAwesomeIcon icon={faCommentsDollar} className="h-8 mr-2" />
                <p>Our Sponsors!</p>
              </Link>
            </div>

            <div className='w-full sm:flex h-fit sm:h-[42rem] xl:h-[50rem] sm:space-x-12 space-y-8 justify-center relative isolate'>
              <div className="w-full sm:w-min h-fit sm:h-full sm:flex items-center">
                <div className="h-fit bg-white/5 p-12 w-full sm:w-min sm:rounded-r-4xl ring-1 ring-white/10">
                  <h2 className='text-gray-100 text-5xl sm:text-6xl md:text-7xl xl:text-8xl pb-3 font-bold w-fit pr-16 border-b-8 border-white md:mr-20'>Media</h2>
                  <p className='text-gray-300 text-base md:text-lg font-light mt-4'>A visual tapestry that showcases the remarkable moments of triumph, camaraderie, and innovation captured through captivating photos, immortalizing the unwavering dedication, creativity, and teamwork that defines our exceptional robotics team.</p>
                  <div className="mt-4 flex">
                <Link href="/media" target="_blank" className="group text-sm font-semibold leading-6 text-indigo-400 hover:font-bold">
                  View all Media <span aria-hidden="true" className=''>&rarr;</span>
                </Link>
              </div>
                </div>
              </div>

              <div className='relative pl-4 rounded-2xl sm:rounded-r-none overflow-hidden pr-4 sm:pr-8 sm:h-full h-[32rem] mx-8 sm:mx-0'>
                <ReviewColumn reviews={allImages} msPerPixel={10} caption={false} />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray-700" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-700" />
              </div>

              <Colors />
            </div>

            <div className='w-full px-12 mt-20'>
              <video controls className='w-full'>
                <source src='/videos/home.mp4' type="video/mp4" />
                Video unavailable.
              </video>
            </div>

            <div id="contact" className='relative w-full text-center space-y-4 sm:text-xl mt-8 font-light px-4 text:base'>
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

import { CheckCircleIcon } from '@heroicons/react/20/solid'

const benefits = [
  "Thrive in Competition",
  'Develop Cutting-edge Skills',
  'Foster Lifelong Friendships',
  'Unlock Future Opportunities',
  'Embrace Team Collaboration',
  "Experience Unforgettable Fun!",
]

function JoinToday() {
  return (
    <div className="py-24">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src="https://file.coffee/u/9eBeiWCI4QcCuo.jpg"
              alt=""
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join the team</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Unleash your potential and join the Jaybots for an exhilarating journey of innovation, collaboration, and personal growth, where creativity thrives, skills sharpen, and lifelong friendships flourish amidst the exciting realm of technology and robotics.
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <Link href="https://interest.jaybots.org" target="_blank" className="group text-sm font-semibold leading-6 text-indigo-400 hover:font-bold">
                  Join Today <span aria-hidden="true" className=''>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Colors />
      </div>
    </div>
  )
}