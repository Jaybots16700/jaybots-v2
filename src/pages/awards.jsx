import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

import { games, linkStyle, teamColors } from '@/config'
import Colors from '@/components/Colors'
import { useState } from 'react'
import clsx from 'clsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faTrophy } from '@fortawesome/free-solid-svg-icons'

export default function Awards() {

  const [selectedIndex, setSelectedIndex] = useState(0);

  
  return (
    <>
      <Head>
        <title>Jaybots | Awards</title>
      </Head>
      <Nav current='Awards' />
      <main>
        <div className='lg:pl-64 animate-all duration-1000 h-screen overflow-y-auto [perspective:10px] bg-gray-900 scrollbar scrollbar-track-gray-950 scrollbar-thumb-blue-800/50'>
          <Header title="John Jay Robotics Team" bold="Jaybots" afterBold=" - FTC Robotics Team #16700" />

          <div className='w-full py-12 lg:pb-24 text-gray-400 mt-72'>
            
            <div className='grid grid-cols-2 md:flex'>
              {games.map((game, index) => (
                <div key={game.name} className='w-full flex justify-center'>
                    <button className={clsx({
                      'h-fit my-2 w-36 text-md rounded-3xl text-white hover:brightness-125 border-2 transition-all duration-1000 motion-safe:hover:scale-105': true,
                      'bg-blue-900 border-blue-600 brightness-110 motion-safe:scale-110': index === selectedIndex,
                      'md:motion-safe:rotate-12': (index === selectedIndex) && (index%2 == 0),
                      'md:motion-safe:-rotate-12': (index === selectedIndex) && (index%2 != 0),
                      'bg-gray-800 border-blue-700': !(index === selectedIndex)
                    })} onClick={() =>  setSelectedIndex(index)}>
                      <p>{game.name}</p>
                      <p>{game.year}</p>
                    </button>
                </div>
              ))}
            </div>

            {games.map((game, index) => (
              <div key={game.name}>
              {index === selectedIndex && (
                <Game game={game} />
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

function Game({game}){

  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0);

  return(
    <div className='w-full mt-8'>
      <div className='flex justify-center w-full'>
        <Image
          src={game.logo}
          width={game.logowidth}
          height={200}
          alt="Game Season Logo"
        />
      </div>
      <div className='w-full text-center text-white text-3xl font-semibold'>{game.year}</div>
    {game.allComps.length > 1 && (
      <div className='flex justify center'>
        {game.allComps.map((comp, index) => (
          <div key={comp.team} className='w-full flex justify-center'>
            <button className={(
              'w-48 text-white p-4 rounded-full text-lg transition-all duration-500 border-4 font-semibold hover:font-bold motion-safe:hover:scale-105'
              + teamColors(comp.team, false, false)
              + teamColors(comp.team, true, false)
              + teamColors(comp.team, false, true)
              + teamColors(comp.team, true, true))}
              onClick={() => setSelectedTeamIndex(index)}>
                {comp.team}
            </button>
          </div>
        ))}
      </div>
    )}

    <div className='xl:grid grid-cols-2 mt-12 m-2 sm:m-12 p-4 gap-8 relative isolate'>
      <div className={"rounded-5xl mb-12 xl:mb-0 sm:px-12 border-4 bg-white/5"+teamColors(game.allComps[selectedTeamIndex].team, false, false, true)}>
        <TeamStats teamComps={game.allComps[selectedTeamIndex]} />
      </div>
      <Gallery photo={game.allComps[selectedTeamIndex].images} />
      <Colors />
    </div>
    </div>
  )
}

function TeamStats({teamComps}){
  return(
    <div className='text-white font-bold text-center text-4xl py-4'>
      <h1 className=''>
        {teamComps.team}
      </h1>
      {teamComps.comps.map((comp) => (
        <CompStats key={comp} comp={comp} />
      ))}
    </div>
  )
}

const awardsStyle = 'flex items-center space-x-2 justify-center'

function CompStats({comp}){
  return(
    <div className='mt-12'>
      <div className='text-xl border-y-2 py-1 border-gray-400'>
        {comp.type} | {comp.date}
      </div>
      <div className='text-base font-light flex flex-col space-y-4 pt-3'>
        {comp.upcoming && (
          <p>Upcoming Competition! You can find our full schedule <Link
            href="/events"
            className={linkStyle}>
              Here
          </Link>.</p>
        )}
        {comp.awards.advanced &&
          <div className={awardsStyle}>
            <Ribbon />
            {comp.type == "Qualifier" &&
              <p>Advanced to Regional Competition</p>
            }
            {comp.type == "Regional" &&
              <p>Advanced to World Competition</p>
            }
          </div>
        }
        {comp.awards.first && (
          <>
            {comp.awards.first.map((award) => (
              <div key={award} className={awardsStyle}>
                <Gold />
                <p>First Place <Award award={award} awards={comp.awards} /> Award</p>
              </div>
            ))}
          </>
        )}
        {comp.awards.winningAlliance &&
          <div className={awardsStyle}>
            <Gold />
            <p>Winning Alliance {comp.awards.winningAlliance}</p>
          </div>
        }
        {comp.awards.finalistAlliance &&
          <div className={awardsStyle}>
            <Silver />
            <p>Finalist Alliance {comp.awards.finalistAlliance}</p>
          </div>
        }
        {comp.awards.judgesChoice &&
          <div className={awardsStyle}>
            <Gold />
            <p>Judges&apos; Choice Award</p>
          </div>
        }
        {comp.awards.deansList &&
          <div className={awardsStyle}>
            <Gold />
            <p>Dean&apos;s List {comp.awards.deansList}</p>
          </div>
        }
        {comp.awards.otherGold &&
          <div className={awardsStyle}>
            <Gold />
            <p>{comp.awards.otherGold}</p>
          </div>
        }
        {comp.awards.second && (
          <>
            {comp.awards.second.map((award) => (
              <div key={award} className={awardsStyle}>
                <Silver />
                <p>Second Place <Award award={award} awards={comp.awards} /> Award</p>
              </div>
            ))}
          </>
        )}
        {comp.awards.otherSilver &&
          <div className={awardsStyle}>
            <Silver />
            <p>{comp.awards.otherSilver}</p>
          </div>
        }
        {comp.awards.third && (
          <>
            {comp.awards.third.map((award) => (
              <div key={award} className={awardsStyle}>
                <Bronze />
                <p>Third Place <Award award={award} awards={comp.awards} /> Award</p>
              </div>
            ))}
          </>
        )}
        {comp.awards.otherBronze &&
          <div className={awardsStyle}>
            <Bronze />
            <p>{comp.awards.otherBronze}</p>
          </div>
        }
      </div>
    </div>
  )
}

function Gold(){
  return(
  <FontAwesomeIcon icon={faTrophy} className='text-yellow-500 h-6'/>
  )
}

function Silver(){
  return(
  <FontAwesomeIcon icon={faTrophy} className='text-gray-400 h-6'/>
  )
}

function Bronze(){
  return(
  <FontAwesomeIcon icon={faTrophy} className='text-amber-700 h-6'/>
  )
}

function Ribbon(){
  return(
  <FontAwesomeIcon icon={faAward} className='text-yellow-300 h-6'/>
  )
}

function Award({award, awards}){
  return(
    <>
    {award == "Promote" &&
      <Link href={awards.promotehref} className={linkStyle} target='_blank'>{award}
      </Link>
    }
    {award != "Promote" &&
      <>
        {award}
      </>
    }
    </>
  )
}

function Gallery({photo}){
  return(
    <div className='w-full h-full flex items-center'>
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