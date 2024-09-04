import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

import Colors from '@/components/Colors'
import { useState, useEffect } from 'react'
import clsx from 'clsx'

import { Popover } from '@headlessui/react'
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Outreach() {
  const [outreach, setOutreach] = useState([])

  const catergories = [
    'Year 4 (2022-2023)',
    'Year 3 (2021-2022)',
    'Year 2 (2020-2021)',
    'Year 1 (2019-2020)',
  ]

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/api/outreach', {
          method: 'GET',
        })

        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`)
        }

        const data = await response.json()

        setOutreach(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    getData()
  }, [])

  console.log(outreach)

  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <>
      <Head>
        <title>Jaybots | Outreach</title>
      </Head>
      <Nav />
      <main>
        <div className="animate-all z-50 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 lg:pl-64">
          <Header
            title="Outreach"
            beforeBold="Outreaching "
            bold="all over"
            afterBold=" the community."
          />

          <div className="w-full py-12 text-gray-400 lg:pb-24">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:flex">
              {catergories.map((catergory, index) => (
                <div key={catergory} className="flex w-full justify-center">
                  <button
                    className={clsx({
                      'my-2 h-fit rounded-full border-2 px-3 py-2 text-lg text-white transition-all duration-1000 hover:brightness-125 motion-safe:hover:scale-105': true,
                      'border-blue-600 bg-blue-900 brightness-110 motion-safe:scale-105':
                        index === selectedIndex,
                      // 'xl:motion-safe:rotate-12': (index === selectedIndex) && (index%2 == 0),
                      // 'xl:motion-safe:-rotate-12': (index === selectedIndex) && (index%2 != 0),
                      'border-blue-700 bg-gray-800': !(index === selectedIndex),
                    })}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <p>{catergory}</p>
                  </button>
                </div>
              ))}
            </div>

            <div className="relative mt-8 flex w-full justify-center">
              <div className="grid w-96 grid-cols-1 justify-center gap-12 px-10 sm:w-[40rem] sm:grid-cols-2 xl:w-[60rem] xl:grid-cols-3 2xl:w-[80rem] 2xl:grid-cols-4">
                {outreach
                  .filter((e) => e.seasonString === catergories[selectedIndex])
                  .map((outreach, index) => (
                    <Event event={outreach} key={outreach.title} />
                  ))}
              </div>
              <Colors />
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}

function Event({ event }) {
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  return (
    <div
      key={event.title}
      className="flex w-full flex-col overflow-hidden rounded-2xl bg-slate-900/50 ring-2 ring-blue-950"
    >
      <Image
        src={event.image}
        width={300}
        height={400}
        className="aspect-square w-full object-cover"
      />
      <div className="w-full px-2">
        <div className="mx-3 h-fit overflow-hidden whitespace-nowrap rounded-full p-2 text-center text-lg font-semibold leading-6 text-gray-200">
          <p
            className={clsx({
              'animate-slide-infinite': event.title.length >= 30,
            })}
          >
            {event.title}
          </p>
        </div>
        <p className="text-center">{event.date}</p>
        <p className="pt-2 text-center text-gray-300">{event.short}</p>
        <div className="flex w-full items-center justify-center p-2">
          <button
            className="self-center rounded-lg bg-blue-600/60 px-5 text-lg text-gray-200 ring-1 ring-slate-900 duration-150 hover:bg-blue-600 hover:text-white"
            onClick={() => {
              setOpen(true)
            }}
          >
            View
          </button>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-slate-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-center text-base font-semibold leading-6 text-gray-100"
                        >
                          {event.title}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-400">{event.long}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-center bg-white/5 px-4 py-3 sm:flex sm:flex-row sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm duration-100 hover:bg-blue-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
