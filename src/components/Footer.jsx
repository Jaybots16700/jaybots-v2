import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Socials, Sponsers } from './NavLinks'

export function Footer() {
  return (
    <footer className="border-t border-gray-500 bg-slate-950">
      <Container>
        <div className="flex flex-col items-start justify-center gap-y-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link href="/" className="hidden lg:flex lg:items-center">
              <Image
                src="https://cdn.jaybots.org/logo/logo.png"
                width={100}
                height={100}
                className="rounded-full"
                alt=""
              />
              <span className="ml-4">
                <p className="text-base font-semibold text-gray-200">Jaybots</p>
                <p className="mt-1 text-sm  text-gray-400 xl:w-32">
                  John Jay Robotics
                </p>
              </span>
            </Link>
            <a
              href="https://posthog.com?utm_source=badge"
              rel="noreferrer"
              title="Built with PostHog analytics + more"
              target="_blank"
              aria-label="Built with PostHog analytics + more"
            >
              <Image
                src="https://d1hovhsvet4m1p.cloudfront.net/badges/posthog-badge-transparent-bg-white-text.svg"
                alt="Built with PostHog analytics"
                width={120}
                height={30}
              />
            </a>
          </div>
          <div className="grid w-full grid-cols-2 items-center justify-center space-x-2 sm:flex lg:justify-end">
            {Socials.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="group flex h-16 w-auto items-center justify-center space-x-2 rounded-lg p-4 hover:bg-slate-800"
              >
                <Image
                  src={item.image}
                  height={25}
                  width={item.width}
                  alt={item.name}
                />
                <span className="text-gray-400 group-hover:text-white">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        {/* <div className='flex flex-col items-center border-t border-gray-400 pt-4 pb-2 md:justify-between'>
          <p className='text-md text-gray-400'>Meet our <Link href='https://jaybotsboosters.org/sponsors' className='text-gray-200 font-semibold hover:font-bold'>Sponsors</Link></p>
          <div className='grid grid-cols-3 sm:flex space-x-8'>
            {Sponsers.map((item) => (
              <Link key={item.name} href={item.link} className='flex items-center hover:brightness-125'>
                <Image 
                  src={item.image}
                  width={item.width}
                  height={1}
                  alt={item.name}
                />
              </Link>
            ))}
          </div>
        </div> */}
        <div className="flex flex-col items-center border-t border-gray-400 py-6 md:flex-row-reverse md:justify-between md:pt-6">
          {/* <form className="flex w-full justify-center md:w-auto">
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <button type="submit" className="ml-4 flex-none px-3 rounded-lg bg-blue-800 text-gray-200 hover:bg-blue-700 hover:text-white">
              <span className="hidden lg:inline">Join our newsletter</span>
              <span className="lg:hidden">Join newsletter</span>
            </button>
          </form> */}
          <p className=" mt-4 text-center text-sm text-gray-400 md:mr-2 md:mt-0 md:text-start">
            &copy; <span className="hidden sm:inline">Copyright </span>2026{' '}
            <Link
              href="/"
              className="font-semibold text-gray-200 hover:font-bold"
            >
              Jaybots
            </Link>
            . Created by Anthony. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
