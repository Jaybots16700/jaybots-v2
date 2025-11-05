import Head from 'next/head'
import { useState } from 'react'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'
import Colors from '@/components/Colors'
import Link from 'next/link'

const newsletters = [
  {
    season: '2025-2026',
    date: 'October 5, 2025',
    title: "Jaybots Newsletter: October 2025",
    description:
      "Welcome to the first 2025-26 season edition of the John Jay Robotics Team: Jaybots' monthly newsletter! Here we will share our robot progress, tournament details, and general team updates!",
    link:
      '/newsletters/october-2025.pdf',
  },
  {
    season: '2024-2025',
    date: 'April 11, 2025',
    title: "Hudson Valley Robot Builders to Battle in World Competition",
    description:
      'A group of impressive high school students is set to represent the Hudson Valley at the world championship of robotics, and they could use our help.',
    link:
      'https://wpdh.com/hudson-valley-robot-team/',
  },

]

const seasons = [
  '2025-2026',
  '2024-2025',

]

export default function Newsletters() {
  const [selectedSeason, setSelectedSeason] = useState(seasons[0])
  const [expanded, setExpanded] = useState({})

  const toggleExpand = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const filteredNewsletters = newsletters.filter(
    (newsletter) => newsletter.season === selectedSeason
  )

  const showAllByDefault = filteredNewsletters.length <= 2

  return (
    <>
      <Head>
        <title>Jaybots | Newsletters</title>
      </Head>
      <Nav />
      <main>
        <div className="animate-all z-50 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 lg:pl-64">
          <Header
            title="Monthly Newsletters"
            beforeBold="Stay updated with our "
            bold="Newsletters"
            afterBold="!"
          />

          <div className="w-full text-gray-400 lg:pb-24">
            <div className="relative isolate h-full w-full space-y-6 p-12 text-center text-lg font-semibold text-gray-300">
              <div className="flex justify-center space-x-4">
                {seasons.map((season) => (
                  <button
                    key={season}
                    onClick={() => setSelectedSeason(season)}
                    className={`rounded-full px-6 py-2 text-sm font-bold ${selectedSeason === season
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                  >
                    {season}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredNewsletters.map((newsletter) => {
                  const key = newsletter.title

                  return (
                    <Link
                      key={key}
                      className="bg-white/10 ring-1 ring-white/20 hover:ring-white/50 transition-all duration-300 p-4 rounded-3xl"
                      href={newsletter.link}
                      target="_blank"
                    >
                      <h2 className="text-3xl font-bold text-white">
                        {newsletter.title}
                      </h2>
                      <h3 className="text-lg font-bold text-slate-200">
                        {newsletter.date}
                      </h3>
                      <p className="mt-2 text-slate-400">
                        {newsletter.description}
                      </p>
                    </Link>
                  )
                })}
              </div>

              <Colors />
            </div>
          </div>
          <Footer />
        </div>
      </main >
    </>
  )
}
