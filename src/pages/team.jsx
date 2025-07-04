import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

import {
  committeeNames,
  otherCommittees,
  committeeDescript,
  members,
} from '@/config'

import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Team() {
  var advisorCount = 0
  for (var i = 0; i < members.length; i++) {
    if (members[i].committees[0] === 'Advisors') {
      advisorCount++
    }
  }
  const friends = members.length - advisorCount + ' friends'

  const [selectedCommittee, setSelectedCommittee] = useState('Everyone')

  return (
    <>
      <Head>
        <title>Jaybots | Meet The Team</title>
      </Head>
      <Nav />
      <main>
        <div className="animate-all z-50 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 lg:pl-64">
          <Header
            title="Meet The Team"
            beforeBold="Just "
            bold={friends}
            afterBold=" working on a robot."
          />

          <div className="mt-12 w-full px-12 pb-12 text-gray-400">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 xl:flex">
              {committeeNames.map((committee, index) => (
                <div key={committee} className="flex w-full justify-center">
                  {committee != 'Other' && (
                    <button
                      className={clsx({
                        'my-2 h-fit w-32 rounded-full border-2 py-4 text-xl font-semibold text-gray-200 transition-all duration-1000 hover:brightness-125 motion-safe:hover:scale-105': true,
                        'border-blue-600 bg-blue-900 text-white brightness-110 motion-safe:scale-105':
                          committee === selectedCommittee,
                        // 'xl:motion-safe:rotate-12': (committee === selectedCommittee) && (index%2 == 0),
                        // 'xl:motion-safe:-rotate-12': (committee === selectedCommittee) && (index%2 != 0),
                        'border-blue-700 bg-gray-800':
                          committee !== selectedCommittee,
                      })}
                      onClick={() => setSelectedCommittee(committee)}
                    >
                      {committee}
                    </button>
                  )}
                  {committee == 'Other' && (
                    <Popover className="relative flex h-0 justify-center">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={
                              (open
                                ? 'brightness-125 motion-safe:scale-110 '
                                : 'group-hover:brightness-125 motion-safe:group-hover:scale-105 ') +
                              clsx({
                                'absolute z-40 my-2 flex h-fit w-32 items-center justify-center space-x-2 rounded-full border-2 py-4 text-xl font-semibold text-gray-200 transition-all duration-1000 hover:brightness-125 motion-safe:hover:scale-105': true,
                                'border-blue-600 bg-blue-900 text-white brightness-110 motion-safe:scale-105':
                                  committeeNames.find(
                                    (element) => element === selectedCommittee
                                  ) === undefined,
                                // 'xl:motion-safe:rotate-12': (committeeNames.find(element => element === selectedCommittee) === undefined) && (index%2 == 0),
                                // 'xl:motion-safe:-rotate-12': (committeeNames.find(element => element === selectedCommittee) === undefined) && (index%2 != 0),
                                'border-blue-700 bg-gray-800':
                                  committeeNames.find(
                                    (element) => element === selectedCommittee
                                  ) !== undefined,
                              })
                            }
                          >
                            More
                            <FontAwesomeIcon
                              icon={faCaretDown}
                              className="h-6 w-6"
                            />
                          </Popover.Button>
                          <AnimatePresence initial={false}>
                            {open && (
                              <>
                                <Popover.Overlay>
                                  <Popover.Panel
                                    static
                                    as={motion.div}
                                    initial={{ opacity: 1, y: -64 }}
                                    animate={{ opacity: 1, y: 8 }}
                                    exit={{
                                      opacity: 1,
                                      y: -64,
                                      transition: { duration: 1 },
                                    }}
                                    className="absolute -left-24 top-16 z-40 grid grid-flow-row gap-1 rounded-4xl border-2 border-blue-700 bg-gray-800 p-4"
                                  >
                                    {otherCommittees.map((committee) => (
                                      <button
                                        key={committee}
                                        className={clsx({
                                          'block w-full rounded-full px-3 py-1 text-lg font-semibold text-gray-200 hover:text-white hover:brightness-125': true,
                                          'border-2 border-blue-600 bg-blue-900':
                                            committee === selectedCommittee,
                                          'bg-gray-800':
                                            committee !== selectedCommittee,
                                        })}
                                        onClick={() =>
                                          setSelectedCommittee(committee)
                                        }
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

function Members({ committee, members }) {
  const committeeMembers =
    committee === 'Everyone'
      ? members
      : members.filter((member) =>
          member.committees.find((comm) => comm == committee)
        )
  const leader = members.find((member) => member.leader === committee)

  const committeeObj = committeeDescript.find((comm) => comm.name === committee)
  const description = committeeObj ? committeeObj.description : ''

  return (
    <div className="mt-24 md:mt-12" id={committee}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            Meet{' '}
            {committee === 'Everyone'
              ? 'the Team'
              : `our ${committee}${
                  committee === 'Advisors' || committee === 'Officers'
                    ? ''
                    : ' Committee'
                }`}
          </h2>
          <p className="mt-6 text-lg leading-8">{description}</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {leader && (
            <li className="flex flex-col gap-6 gap-x-10 sm:col-span-2 md:flex-row">
              <Image
                className="aspect-[3/4] w-52 flex-none self-center rounded-2xl bg-gradient-to-br from-gray-500 via-gray-400 to-gray-500 object-cover"
                width={208}
                height={260}
                src={leader.image}
                alt=""
              />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-200">
                  {leader.name}
                </h3>
                <p className="text-base leading-7 text-gray-300">
                  {leader.title}
                </p>
                <p className="mt-6 text-base leading-7">{leader.bio}</p>
              </div>
            </li>
          )}
          {committeeMembers.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-6 gap-x-10 2xl:flex-row"
            >
              {/* <div className='bg-red-500 w-full'> */}
              <Image
                className="aspect-[3/4] w-52 flex-none self-start rounded-2xl bg-gradient-to-br from-gray-500 via-gray-400 to-gray-500 object-cover"
                width={208}
                height={260}
                src={person.image}
                alt=""
              />
              {/* </div> */}
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-200">
                  {person.name}
                </h3>
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
