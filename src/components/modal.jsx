'use client'

import { Dialog } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { linkStyle, allImages, sponsors } from '@/config.jsx'
import { XMarkIcon } from '@heroicons/react/24/outline'
export default function Modal({ open, setOpen }) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div className="fixed inset-0 z-10 w-full overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-gray-900 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-3/4  sm:p-6">
            <div>
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full">
                <Image
                  src="https://cdn.jaybots.org/logo/logo.png"
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full sm:h-auto sm:w-auto"
                  alt="logo"
                />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <Dialog.Title
                  as="h3"
                  className="text-3xl font-light text-blue-400"
                >
                  THE <span className="font-black ">JAYBOTS</span> ARE GOING TO{' '}
                  <span className="font-black">WORLDS</span>!
                </Dialog.Title>
                <div className="mt-2">
                  <p className="mt-4 text-base font-light text-gray-300 md:text-lg">
                    On March 8th and 9th, we competed in our Regional
                    Championship in Utica where we won the 3rd Place Inspire
                    Award and competed in the finalist alliance, qualifying us
                    for the{' '}
                    <a
                      href="https://www.firstchampionship.org/"
                      target="_blank"
                      className={`${linkStyle} outline-none`}
                    >
                      WORLD CHAMPIONSHIP
                    </a>{' '}
                    in Houston in April. We are one of three teams in our region
                    of over 100 to qualify for the World Championship, with only
                    2.5% of teams worldwide qualifying. We also hold 6 of the
                    top 25 highest scoring matches in the state. This trip is
                    extremely expensive, and to ensure all members of our team
                    are able to experience this amazing opportunity, we need
                    your help. <br></br>
                    <br></br> Please consider donating to our GoFundMe page to
                    help us get to Houston! Thank you for your support!
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 flex space-x-8 sm:mt-6">
              <Link
                href="/worlds"
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Learn more about Worlds
              </Link>
              <Link
                href="/donate"
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Donate
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4"
            >
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}
