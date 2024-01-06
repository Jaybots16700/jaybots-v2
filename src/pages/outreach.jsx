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

  const [outreach, setOutreach] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("/api/outreach", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const data = await response.json();

        setOutreach(data.reverse());

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);


  const [selectedIndex, setSelectedIndex] = useState(0);

  
  return (
    <>
      <Head>
        <title>Jaybots | Outreach</title>
      </Head>
      <Nav current='Outreach' />
      <main>
      <div className='flex flex-col lg:pl-64 animate-all h-screen w-full overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-gray-950 scrollbar-thumb-blue-800/50 z-50'>
        <Header title="Outreach" beforeBold="Outreaching " bold="all over" afterBold=" the community." />

          <div className='w-full py-12 lg:pb-24 text-gray-400 mt-72'>
            
            <div className='grid grid-cols-2 md:grid-cols-3 xl:flex'>
              {outreach.map((outreach, index) => (
                <div key={outreach.year} className='w-full flex justify-center'>
                    <button className={clsx({
                      'h-fit my-2 py-2 w-40 text-lg rounded-full text-white hover:brightness-125 border-2 transition-all duration-1000 motion-safe:hover:scale-105': true,
                      'bg-blue-900 border-blue-600 brightness-110 motion-safe:scale-105': index === selectedIndex,
                      // 'xl:motion-safe:rotate-12': (index === selectedIndex) && (index%2 == 0),
                      // 'xl:motion-safe:-rotate-12': (index === selectedIndex) && (index%2 != 0),
                      'bg-gray-800 border-blue-700': !(index === selectedIndex)
                    })} onClick={() =>  setSelectedIndex(index)}>
                      <p>{outreach.year}</p>
                    </button>
                </div>
              ))}
            </div>

            {outreach.map((outreach, index) => (
              <div key={outreach.year}>
              {index === selectedIndex && (
                <div className='w-full mt-8 relative flex justify-center'>
                  <div className='grid grid-cols-1 w-96 sm:grid-cols-2 sm:w-[40rem] xl:grid-cols-3 xl:w-[60rem] 2xl:grid-cols-4 2xl:w-[80rem] justify-center px-10 gap-12'>
                    {outreach.events.map((event) => (
                      <Event event={event} key={event.name}/>
                    ))}
                  </div>
                  <Colors />
                </div>

              )}
              </div>
            ))}

          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}

 
function Event({event}){
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)


  return(
    <div key={event.name} className='bg-slate-900/50 w-full rounded-2xl overflow-hidden ring-2 ring-blue-950 flex flex-col'>
      <Image
        src={event.img}
        width={300}
        height={400}
        className='w-full aspect-square object-cover'
      />
      <div className='w-full px-2'>
        <div className='text-gray-200 font-semibold text-lg text-center p-2 leading-6 whitespace-nowrap h-fit overflow-hidden mx-3 rounded-full'>
          <p className={clsx({'animate-slide-infinite': event.name.length >= 30})}>{event.name}</p>
        </div>
        <p className='text-center'>{event.date}</p>
        <p className='text-center text-gray-300 pt-2'>{event.blurb}</p>
        <div className='w-full flex items-center justify-center p-2'>
          <button className='bg-blue-600/60 self-center px-5 text-lg text-gray-200 hover:text-white ring-1 ring-slate-900 rounded-lg hover:bg-blue-600 duration-150' onClick={() => {setOpen(true)}}>View</button>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
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
                <Dialog.Panel className="bg-slate-900 relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base text-center font-semibold leading-6 text-gray-100">
                          {event.name}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-400">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 px-4 py-3 sm:flex sm:flex-row justify-center sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto duration-100"
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