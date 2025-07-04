import Head from 'next/head'
import { useState } from 'react'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'
import Colors from '@/components/Colors'

const newsletters = [
  {
    season: '2024-2025',
    month: 'October',
    title: 'yada yada',
    description: 'yada yada ',
    fullContent:
      'yada yada yada yada yada yada yada yadayada yada yada yadayada yada yada yada',
  },
  {
    season: '2024-2025',
    month: 'April',
    title: "We're going to Worlds!",
    description:
      'yada yada yada yada yada yada yada yadayada yada yada yadayada yada yada yada',
    fullContent:
      'yada yada yada yada yada yada yada yadayada yada yada yadayada yada yada yada',
  },
  {
    season: '2023-2024',
    month: 'March',
    title: 'Regional Success',
    description: 'A recap of our performance at the Regional competition.',
    fullContent:
      'We reached the semifinals, learned a lot from our matches, and are excited to build on this experience for next year.',
  },
]

export default function Newsletters() {
  const [selectedSeason, setSelectedSeason] = useState('2024-2025')
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
                {['2024-2025', '2023-2024'].map((season) => (
                  <button
                    key={season}
                    onClick={() => setSelectedSeason(season)}
                    className={`rounded-full px-6 py-2 text-sm font-bold ${
                      selectedSeason === season
                        ? 'bg-blue-800 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {season}
                  </button>
                ))}
              </div>

              <div className="mt-8 space-y-6">
                {filteredNewsletters.map((newsletter) => {
                  const key = `${newsletter.season}-${newsletter.month}`
                  const isExpanded = expanded[key] || showAllByDefault

                  return (
                    <div
                      key={key}
                      className="rounded-5xl bg-white/10 p-6 text-left ring-1 ring-white/20"
                    >
                      <h2 className="text-2xl font-bold text-white">
                        {newsletter.month} - {newsletter.title}
                      </h2>
                      <p className="mt-2 text-gray-300">
                        {newsletter.description}
                      </p>

                      {isExpanded && (
                        <p className="mt-4 text-gray-300">
                          {newsletter.fullContent}
                        </p>
                      )}

                      {!showAllByDefault && (
                        <button
                          onClick={() => toggleExpand(key)}
                          className="mt-4 inline-block rounded-full bg-blue-800 px-6 py-2 text-sm font-bold text-white duration-150 hover:bg-blue-700"
                        >
                          {isExpanded ? 'Show Less' : 'Read More'}
                        </button>
                      )}
                    </div>
                  )
                })}
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
