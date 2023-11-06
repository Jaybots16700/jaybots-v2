import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'


import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

import { committeeNames, otherCommittees, committeeDescript } from '@/config'

import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'




export default function Team() {

  const [members, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("/api/members", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const data = await response.json();

        setData(data.reverse());

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  var advisorCount = 0;
  for(var i = 0; i<members.length; i++){
    if(members[i].committees[0] == "Advisors"){
      advisorCount++;
    }
  }
  const friends = (members.length - advisorCount + " friends")

  const [selectedCommittee, setSelectedCommittee] = useState("Officers");

  return (
    <>
      <Head>
        <title>Jaybots | Meet The Team</title>
      </Head>
      <Nav current="Meet the Team" />
      <main>
      <div className='flex flex-col lg:pl-64 animate-all h-screen w-full [perspective:10px] [perspective-origin:top_right] overflow-y-scroll bg-gray-900 scrollbar scrollbar-track-gray-950 scrollbar-thumb-blue-800/50'>
        <Header title="Meet The Team" beforeBold="Just " bold={friends} afterBold=" working on a robot." />

          <div className='w-full py-12 lg:pb-24 text-gray-400 mt-72'>
            
            <div className='grid grid-cols-2 md:grid-cols-3 xl:flex'>
              {committeeNames.map((committee, index) => (
                <div key={committee} className='w-full flex justify-center'>
                  {committee != "Other" && (
                    <button className={clsx({
                      'h-fit py-4 my-2 w-40 text-xl font-semibold rounded-full text-gray-200 hover:brightness-125 border-2 transition-all duration-1000 motion-safe:hover:scale-105': true,
                      'bg-blue-900 border-blue-600 brightness-110 motion-safe:scale-110 text-white': committee === selectedCommittee,
                      'xl:motion-safe:rotate-12': (committee === selectedCommittee) && (index%2 == 0),
                      'xl:motion-safe:-rotate-12': (committee === selectedCommittee) && (index%2 != 0),
                      'bg-gray-800 border-blue-700': committee !== selectedCommittee
                    })} onClick={() =>  setSelectedCommittee(committee)}>
                      <p>{committee}</p>
                    </button>
                  )}
                  {committee == "Other" && (
                    <Popover className="flex justify-center h-0">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={(open ? "brightness-125 motion-safe:scale-110 "
                              : "group-hover:brightness-125 motion-safe:group-hover:scale-105 ") + clsx({
                                'h-fit py-4 my-2 w-40 text-xl font-semibold rounded-full text-gray-200 hover:brightness-125 border-2 transition-all duration-1000 motion-safe:hover:scale-105 z-50 absolute flex space-x-2 justify-center items-center': true,
                                'bg-blue-900 border-blue-600 brightness-110 motion-safe:scale-110 text-white': (committeeNames.find(element => element === selectedCommittee) === undefined),
                                'xl:motion-safe:rotate-12': (committeeNames.find(element => element === selectedCommittee) === undefined) && (index%2 == 0),
                                'xl:motion-safe:-rotate-12': (committeeNames.find(element => element === selectedCommittee) === undefined) && (index%2 != 0),
                                'bg-gray-800 border-blue-700': (committeeNames.find(element => element === selectedCommittee) !== undefined)
                              })}
                          >
                            <p>Other</p>
                            <FontAwesomeIcon icon={faCaretDown} className='h-6 w-6' />
                          </Popover.Button>
                          <AnimatePresence initial={false}>
                            {open && (
                              <>
                                <Popover.Overlay>
                                  <Popover.Panel
                                    static
                                    as={motion.div}
                                    initial={{ opacity: 1, y: -64 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{
                                      opacity: 1,
                                      y: -64,
                                      transition: { duration: 1 },
                                    }}
                                    className='p-4 rounded-4xl bg-gray-800 border-blue-700 border-2 relative z-40 top-16 grid grid-flow-row gap-1'
                                  >
                                    {otherCommittees.map((committee, index) => (
                                      <button
                                      key={committee}
                                        className={clsx({
                                          'text-gray-200 block text-lg font-semibold hover:text-white hover:brightness-125 rounded-full w-full px-3 py-1': true,
                                          'bg-blue-900 border-2 border-blue-600': committee === selectedCommittee,
                                          'bg-gray-800': committee !== selectedCommittee,
                                        })}
                                        onClick={() => setSelectedCommittee(committee)}
                                      >
                                        {committee}
                                      </button>
                                    ))}
                                  </Popover.Panel>
                                </Popover.Overlay>
                              </>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </Popover>
                  )}
                </div>
              ))}
            </div>
            
            <Members committee={selectedCommittee} members={members} />


          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}

function Members({committee, members}) {
  const committeeMembers = members.filter(member => member.committees.find(comm => comm == committee))
  const leader = members.find(member => member.leader === committee)


  const description = committeeDescript.find(comm => comm.name === committee).description

  var committeeCall = "Committee"
  if(committee === "Officers" || committee === "Advisors"){
    committeeCall = committee
  } else{
    committeeCall = (committee + " Committee")
  }

  return (
    <div className="mt-12 sm:mt-24" id={committeeCall}>
      <div className="mx-auto max-w-7xl px-6 lg:px-">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Meet our {committeeCall}</h2>
          <p className="mt-6 text-lg leading-8">
            {description}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {leader && (
            <li className="flex flex-col gap-6 gap-x-10 md:flex-row sm:col-span-2">
              <Image
                className="aspect-[3/4] self-center w-52 flex-none rounded-2xl object-cover bg-gradient-to-br from-gray-500 to-gray-500 via-gray-400"
                width={208}
                height={260}
                src={leader.image}
                alt=""
              />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-200">{leader.name}</h3>
                <p className="text-base leading-7 text-gray-300">{leader.title}</p>
                <p className="mt-6 text-base leading-7">{leader.bio}</p>
              </div>
            </li>
          )}
          {committeeMembers.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 gap-x-10 2xl:flex-row">
              {/* <div className='bg-red-500 w-full'> */}
                <Image
                  className="aspect-[3/4] self-start w-52 flex-none rounded-2xl object-cover bg-gradient-to-br from-gray-500 to-gray-500 via-gray-400"
                  width={208}
                  height={260}
                  src={person.image}
                  alt=""
                />
              {/* </div> */}
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-200">{person.name}</h3>
                <p className="text-base leading-7">{person.title}</p>
                <p className="mt-6 text-base leading-7">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}