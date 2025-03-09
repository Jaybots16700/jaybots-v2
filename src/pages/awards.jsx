import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

import { games, linkStyle, teamColors } from '@/config'
import Colors from '@/components/Colors'
import { useState, useEffect } from 'react'
import clsx from 'clsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faTrophy } from '@fortawesome/free-solid-svg-icons'

export default function Awards() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <>
      <Head>
        <title>Jaybots | Awards</title>
      </Head>
      <Nav />
      <main>
        <div className="animate-all z-50 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 lg:pl-64">
          <Header
            title="Awards"
            beforeBold="View our "
            bold="prestigious"
            afterBold=" awards"
          />

          <div className="mt-12 w-full text-gray-400 lg:pb-24">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:flex">
              {games.map((game, index) => (
                <div key={game.name} className="flex w-full justify-center">
                  <Link
                    href={`/awards#${game.name
                      .toLowerCase()
                      .replace(' ', '_')}`}
                    className={clsx({
                      'my-2 h-fit w-40 rounded-full border-2 text-center text-lg text-white transition-all duration-1000 hover:brightness-125 motion-safe:hover:scale-105': true,
                      'border-blue-600 bg-blue-900 brightness-110 motion-safe:scale-105':
                        index === selectedIndex,
                      // 'xl:motion-safe:rotate-12': (index === selectedIndex) && (index%2 == 0),
                      // 'xl:motion-safe:-rotate-12': (index === selectedIndex) && (index%2 != 0),
                      'border-blue-700 bg-gray-800': !(index === selectedIndex),
                    })}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <p>{game.name}</p>
                    <p>{game.year}</p>
                  </Link>
                </div>
              ))}
            </div>

            {games.map((game, index) => (
              <div key={game.name}>
                {/* {index === selectedIndex && ( */}
                <Game game={game} index={index} />
                {/* )} */}
              </div>
            ))}
          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}

function Game({ game, index }) {
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0)

  return (
    <div className="mt-8 w-full" id={game.name.toLowerCase().replace(' ', '_')}>
      <div className="flex w-full justify-center">
        <Image
          src={game.logo}
          width={game.logowidth}
          height={200}
          className="max-h-48 object-contain"
          alt="Game Season Logo"
        />
      </div>
      <div className="w-full text-center text-3xl font-semibold text-white">
        {game.year}
      </div>
      {game.allComps.length > 1 && (
        <div className="justify center flex">
          {game.allComps.map((comp, index) => (
            <div key={comp.team} className="flex w-full justify-center">
              <button
                className={`w-48 rounded-full border-4 p-4 text-lg font-semibold text-white transition-all duration-500 hover:font-bold motion-safe:hover:scale-105
                  ${
                    selectedTeamIndex == index
                      ? teamColors(comp.team, false, true)
                      : teamColors(comp.team, false, false, true) +
                        teamColors(comp.team, true, false, true) +
                        teamColors(comp.team, true, true)
                  }`}
                onClick={() => setSelectedTeamIndex(index)}
              >
                {comp.team}
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="relative isolate m-2 mt-12 grid-cols-2 gap-8 p-4 sm:m-12 xl:grid">
        {game.allComps[selectedTeamIndex].team !== 'Jaybots' && (
          <Gallery photo={game.allComps[selectedTeamIndex].images} />
        )}

        <div
          className={
            'mb-12 rounded-5xl border-4 bg-white/5 sm:px-12 xl:mb-0 ' +
            teamColors(
              game.allComps[selectedTeamIndex].team,
              false,
              false,
              true
            )
          }
        >
          <TeamStats teamComps={game.allComps[selectedTeamIndex]} />
        </div>

        {game.allComps[selectedTeamIndex].team === 'Jaybots' && (
          <Gallery photo={game.allComps[selectedTeamIndex].images} />
        )}

        <Colors />
      </div>
    </div>
  )
}

function TeamStats({ teamComps }) {
  return (
    <div className="py-4 text-center text-4xl font-bold text-white">
      {/* <h1 className=''>
        {teamComps.team}
      </h1> */}
      {teamComps.comps.map((comp) => (
        <CompStats key={comp} comp={comp} />
      ))}
    </div>
  )
}

const awardsStyle = 'flex items-center space-x-2 justify-center'

function CompStats({ comp }) {
  return (
    <div className="mt-12">
      <div className="border-y-2 border-gray-400 py-1 text-xl">
        {comp.name || comp.type} | {comp.date}
      </div>
      <div className="flex flex-col space-y-4 pt-3 text-base font-light">
        {comp.upcoming && (
          <p>
            Upcoming Competition! You can find our full schedule{' '}
            <Link href="/events" className={linkStyle}>
              Here
            </Link>
            .
          </p>
        )}
        {comp.awards.advanced && (
          <div className={awardsStyle}>
            <Ribbon />
            {comp.type == 'Qualifier' && (
              <p>Advanced to Regional Competition</p>
            )}
            {comp.type == 'Regionals' && <p>Advanced to World Competition</p>}
          </div>
        )}
        {comp.awards.first && (
          <>
            {comp.awards.first.map((award) => (
              <div key={award} className={awardsStyle}>
                <Gold />
                <p>
                  First Place <Award award={award} awards={comp.awards} /> Award
                </p>
              </div>
            ))}
          </>
        )}
        {comp.awards.winningAlliance && (
          <div className={awardsStyle}>
            <Gold />
            <p>Winning Alliance {comp.awards.winningAlliance}</p>
          </div>
        )}
        {comp.awards.finalistAlliance && (
          <div className={awardsStyle}>
            <Silver />
            <p>Finalist Alliance {comp.awards.finalistAlliance}</p>
          </div>
        )}
        {comp.awards.judgesChoice && (
          <div className={awardsStyle}>
            <Gold />
            <p>Judges&apos; Choice Award</p>
          </div>
        )}
        {comp.awards.deansList && (
          <div className={awardsStyle}>
            <Gold />
            <p>Dean&apos;s List {comp.awards.deansList}</p>
          </div>
        )}
        {comp.awards.otherGold && (
          <div className={awardsStyle}>
            <Gold />
            <p>{comp.awards.otherGold}</p>
          </div>
        )}
        {comp.awards.second && (
          <>
            {comp.awards.second.map((award) => (
              <div key={award} className={awardsStyle}>
                <Silver />
                <p>
                  Second Place <Award award={award} awards={comp.awards} />{' '}
                  Award
                </p>
              </div>
            ))}
          </>
        )}
        {comp.awards.otherSilver && (
          <div className={awardsStyle}>
            <Silver />
            <p>{comp.awards.otherSilver}</p>
          </div>
        )}
        {comp.awards.third && (
          <>
            {comp.awards.third.map((award) => (
              <div key={award} className={awardsStyle}>
                <Bronze />
                <p>
                  Third Place <Award award={award} awards={comp.awards} /> Award
                </p>
              </div>
            ))}
          </>
        )}
        {comp.awards.otherBronze && (
          <div className={awardsStyle}>
            <Bronze />
            <p>{comp.awards.otherBronze}</p>
          </div>
        )}
      </div>
    </div>
  )
}

function Gold() {
  return <FontAwesomeIcon icon={faTrophy} className="h-6 text-yellow-500" />
}

function Silver() {
  return <FontAwesomeIcon icon={faTrophy} className="h-6 text-gray-400" />
}

function Bronze() {
  return <FontAwesomeIcon icon={faTrophy} className="h-6 text-amber-700" />
}

function Ribbon() {
  return <FontAwesomeIcon icon={faAward} className="h-6 text-blue-600" />
}

function Award({ award, awards }) {
  return (
    <>
      {award == 'Promote' && (
        <Link href={awards.promotehref} className={linkStyle} target="_blank">
          {award}
        </Link>
      )}
      {award != 'Promote' && <>{award}</>}
    </>
  )
}

function Gallery({ photo }) {
  return (
    <div className="flex h-full w-full items-center">
      <Image
        src={photo}
        width={1000}
        height={100}
        alt="Bot Picture"
        className={'rounded-5xl'}
      />
    </div>
  )
}
