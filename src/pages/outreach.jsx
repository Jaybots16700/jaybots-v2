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
import { ExclamationTriangleIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import { Dialog as HeadlessDialog } from '@headlessui/react'

export default function Outreach() {
  const { data: session } = useSession()
  const [outreach, setOutreach] = useState([])
  const [categories, setCategories] = useState([
    'Year 6 (2024-2025)',
    'Year 5 (2023-2024)',
    'Year 4 (2022-2023)',
    'Year 3 (2021-2022)',
    'Year 2 (2020-2021)',
    'Year 1 (2019-2020)',
  ])
  const [history, setHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false)
  const [jaybotsOfficer, setJaybotsOfficer] = useState('')
  const [addPromptOpen, setAddPromptOpen] = useState(false)
  const [addEventDialogOpen, setAddEventDialogOpen] = useState(false)
  const [addSeasonDialogOpen, setAddSeasonDialogOpen] = useState(false)
  const [newEventData, setNewEventData] = useState({
    title: '',
    date: '',
    short: '',
    long: '',
    image: '',
    seasonString: '',
  })
  const [newSeasonName, setNewSeasonName] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [undoStack, setUndoStack] = useState([])
  const [redoStack, setRedoStack] = useState([])

  const [allSeasons, setAllSeasons] = useState([
    'Year 6 (2024-2025)',
    'Year 5 (2023-2024)',
    'Year 4 (2022-2023)',
    'Year 3 (2021-2022)',
    'Year 2 (2020-2021)',
    'Year 1 (2019-2020)',
  ])

  const MAX_INLINE_SEASONS = 4
  const inlineSeasons = categories.slice(0, MAX_INLINE_SEASONS)
  const pastSeasons = categories.slice(MAX_INLINE_SEASONS)

  async function fetchData() {
    const [outreachRes, historyRes] = await Promise.all([
      fetch('/api/outreach'),
      fetch('/api/outreach_history'),
    ])
    const outreachData = await outreachRes.json()
    const historyData = await historyRes.json()
    setOutreach(outreachData)
    setHistory(historyData)
    setCategories(allSeasons)
  }

  useEffect(() => {
    fetchData()
    if (typeof window !== 'undefined') {
      setJaybotsOfficer(localStorage.getItem('jaybots_officer') || '')
    }
  }, [])

  async function saveOutreachToBackend(newOutreach, user, description) {
    await fetch('/api/outreach', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        all: newOutreach,
        user,
        description,
        categories,
      }),
    })
    fetchData()
  }

  const handleUndo = async () => {
    if (undoStack.length === 0) return
    const prev = undoStack[undoStack.length - 1]
    setUndoStack(undoStack.slice(0, -1))
    setRedoStack([outreach, ...redoStack])
    await saveOutreachToBackend(
      prev,
      session?.user?.name || jaybotsOfficer || 'Unknown User',
      'Undo'
    )
  }
  const handleRedo = async () => {
    if (redoStack.length === 0) return
    const next = redoStack[0]
    setRedoStack(redoStack.slice(1))
    setUndoStack([...undoStack, outreach])
    await saveOutreachToBackend(
      next,
      session?.user?.name || jaybotsOfficer || 'Unknown User',
      'Redo'
    )
  }

  function withUndo(action) {
    return async (...args) => {
      setUndoStack([...undoStack, outreach])
      setRedoStack([])
      await action(...args)
    }
  }

  const handleAddSeason = withUndo(async () => {
    if (!newSeasonName) return

    const updatedCategories = [
      newSeasonName,
      ...categories.filter((s) => s !== newSeasonName),
    ]
    const updatedAllSeasons = [
      newSeasonName,
      ...allSeasons.filter((s) => s !== newSeasonName),
    ]

    setAllSeasons(updatedAllSeasons)
    setCategories(updatedCategories)

    const user = session?.user?.name || jaybotsOfficer || 'Unknown User'
    const newEvent = {
      title: 'New Event',
      date: '',
      short: '',
      long: '',
      image: '',
      seasonString: newSeasonName,
    }

    try {
      await fetch('/api/outreach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          item: newEvent,
          user,
          description: `Added new season "${newSeasonName}"`,
          categories: updatedCategories,
        }),
      })

      setAddSeasonDialogOpen(false)
      setNewSeasonName('')

      setOutreach((prev) => [...prev, newEvent])
    } catch (error) {
      setAllSeasons(allSeasons)
      setCategories(categories)
      console.error('Failed to add season:', error)
    }
  })

  const handleAddEvent = withUndo(async () => {
    if (
      !newEventData.title ||
      !newEventData.date ||
      !newEventData.short ||
      !newEventData.seasonString
    )
      return
    const user = session?.user?.name || jaybotsOfficer || 'Unknown User'
    await fetch('/api/outreach', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item: newEventData,
        user,
        description: `Added event "${newEventData.title}"`,
        categories,
      }),
    })
    setAddEventDialogOpen(false)
    setNewEventData({
      title: '',
      date: '',
      short: '',
      long: '',
      image: '',
      seasonString: '',
    })
    fetchData()
  })

  const handleDeleteSeason = async (season) => {
    const user = session?.user?.name || jaybotsOfficer || 'Unknown User'

    const updatedCategories = categories.filter((c) => c !== season)
    const updatedAllSeasons = allSeasons.filter((s) => s !== season)
    const eventsToDelete = outreach.filter((e) => e.seasonString === season)

    setCategories(updatedCategories)
    setAllSeasons(updatedAllSeasons)
    setOutreach((prev) => prev.filter((e) => e.seasonString !== season))

    if (categories.indexOf(season) === selectedIndex) {
      setSelectedIndex(0)
    }

    try {
      for (const event of eventsToDelete) {
        await fetch('/api/outreach', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            _id: event._id,
            user,
            description: `Deleted season "${season}"`,
            categories: updatedCategories,
          }),
        })
      }
    } catch (error) {
      setCategories(categories)
      setAllSeasons(allSeasons)
      setOutreach((prev) => [...prev, ...eventsToDelete])
      console.error('Failed to delete season:', error)
    }
  }

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
            {(session?.user?.email || jaybotsOfficer) && (
              <div className="mb-6 flex w-full justify-center gap-4">
                <button
                  onClick={handleUndo}
                  className={`rounded bg-gray-700 px-3 py-1 text-white ${
                    undoStack.length === 0
                      ? 'cursor-not-allowed opacity-50'
                      : ''
                  }`}
                  disabled={undoStack.length === 0}
                >
                  Undo
                </button>
                <button
                  onClick={handleRedo}
                  className={`rounded bg-gray-700 px-3 py-1 text-white ${
                    redoStack.length === 0
                      ? 'cursor-not-allowed opacity-50'
                      : ''
                  }`}
                  disabled={redoStack.length === 0}
                >
                  Redo
                </button>
                <button
                  onClick={() => setShowHistory(true)}
                  className="rounded bg-blue-700 px-3 py-1 text-white"
                >
                  View History
                </button>
              </div>
            )}
            {(session?.user?.email || jaybotsOfficer) && (
              <div className="mb-6 flex w-full justify-center">
                <button
                  className="rounded-full bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-2 text-lg font-semibold text-white shadow-md transition hover:from-blue-800 hover:to-blue-600"
                  onClick={() => setAddPromptOpen(true)}
                >
                  + Add New Season/Event
                </button>
              </div>
            )}
            <HeadlessDialog
              open={addPromptOpen}
              onClose={() => setAddPromptOpen(false)}
              className="relative z-50"
            >
              <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
              <div className="fixed inset-0 flex items-center justify-center">
                <Transition
                  appear
                  show={addPromptOpen}
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-90"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-90"
                >
                  <HeadlessDialog.Panel className="w-full max-w-xs rounded-2xl border border-blue-700 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 p-10 text-center shadow-2xl">
                    <div className="flex flex-col items-center gap-4">
                      <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 shadow-lg">
                        <svg
                          className="h-8 w-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          />
                          <path
                            d="M12 8v8M8 12h8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <HeadlessDialog.Title className="mb-1 text-2xl font-extrabold text-white">
                        Add New
                      </HeadlessDialog.Title>
                      <div className="mb-4 text-sm text-blue-200">
                        What would you like to create?
                      </div>
                      <div className="flex w-full flex-col gap-4">
                        <button
                          className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 px-8 py-3 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          onClick={() => {
                            setAddPromptOpen(false)
                            setAddSeasonDialogOpen(true)
                          }}
                        >
                          <span className="inline-flex items-center gap-2">
                            <svg
                              className="h-5 w-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 8v8M8 12h8" strokeLinecap="round" />
                            </svg>
                            Season
                          </span>
                        </button>
                        <button
                          className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 px-8 py-3 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          onClick={() => {
                            setAddPromptOpen(false)
                            setAddEventDialogOpen(true)
                          }}
                        >
                          <span className="inline-flex items-center gap-2">
                            <svg
                              className="h-5 w-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 8v8M8 12h8" strokeLinecap="round" />
                            </svg>
                            Event
                          </span>
                        </button>
                      </div>
                    </div>
                  </HeadlessDialog.Panel>
                </Transition>
              </div>
            </HeadlessDialog>
            <HeadlessDialog
              open={addSeasonDialogOpen}
              onClose={() => setAddSeasonDialogOpen(false)}
              className="relative z-50"
            >
              <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
              <div className="fixed inset-0 flex items-center justify-center">
                <HeadlessDialog.Panel className="w-full max-w-lg rounded-2xl border border-blue-700 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 p-8 shadow-2xl">
                  <div className="flex flex-col gap-6">
                    <div className="mb-2 flex w-full justify-center">
                      <input
                        type="text"
                        value={newSeasonName}
                        onChange={(e) => setNewSeasonName(e.target.value)}
                        className="w-80 rounded-xl border-2 border-blue-700 bg-slate-800 p-3 text-center text-xl font-bold text-white shadow-inner placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Season Name"
                      />
                    </div>
                    <div className="flex justify-center gap-4 rounded-b-2xl bg-white/5 px-6 py-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-lg bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-2 text-base font-semibold text-white shadow-md transition hover:from-blue-800 hover:to-blue-600"
                        onClick={handleAddSeason}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-lg bg-gray-600 px-6 py-2 text-base font-semibold text-white shadow-md transition hover:bg-gray-500"
                        onClick={() => setAddSeasonDialogOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </HeadlessDialog.Panel>
              </div>
            </HeadlessDialog>
            <HeadlessDialog
              open={addEventDialogOpen}
              onClose={() => setAddEventDialogOpen(false)}
              className="relative z-50"
            >
              <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
              <div className="fixed inset-0 flex items-center justify-center">
                <HeadlessDialog.Panel className="w-full max-w-lg rounded-2xl border border-blue-700 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 p-8 shadow-2xl">
                  <div className="flex flex-col gap-6">
                    <div className="mb-2 flex w-full justify-center">
                      <input
                        type="text"
                        value={newEventData.title}
                        onChange={(e) =>
                          setNewEventData((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                        className="w-80 rounded-xl border-2 border-blue-700 bg-slate-800 p-3 text-center text-xl font-bold text-white shadow-inner placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Event Title"
                      />
                    </div>
                    <div className="flex w-full items-center justify-center gap-6">
                      {newEventData.image ? (
                        <img
                          src={newEventData.image}
                          alt="Preview"
                          className="aspect-square w-40 rounded-xl border-2 border-blue-700 object-cover shadow-lg"
                        />
                      ) : (
                        <div className="flex aspect-square w-40 items-center justify-center rounded-xl border-2 border-blue-700 bg-slate-800 text-blue-300">
                          No Image
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0]
                          if (file) {
                            const reader = new FileReader()
                            reader.onloadend = () => {
                              setNewEventData((prev) => ({
                                ...prev,
                                image: reader.result,
                              }))
                            }
                            reader.readAsDataURL(file)
                          }
                        }}
                        className="text-sm file:cursor-pointer file:rounded-lg file:bg-gradient-to-r file:from-blue-600 file:to-blue-500 file:px-6 file:py-3 file:font-semibold file:text-white file:shadow-lg file:transition-all file:duration-200 file:hover:scale-105 file:hover:from-blue-700 file:hover:to-blue-600"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-blue-200">
                        Season
                      </label>
                      <select
                        value={newEventData.seasonString}
                        onChange={(e) =>
                          setNewEventData((prev) => ({
                            ...prev,
                            seasonString: e.target.value,
                          }))
                        }
                        className="rounded-lg border border-blue-700 bg-slate-800 p-3 text-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a season</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="mt-2 text-sm font-semibold text-blue-200">
                        Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={newEventData.date}
                          onChange={(e) =>
                            setNewEventData((prev) => ({
                              ...prev,
                              date: e.target.value,
                            }))
                          }
                          className="w-full rounded-lg border border-blue-700 bg-slate-800 p-3 pr-10 text-lg text-white shadow-inner placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <svg
                          className="pointer-events-none absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                      </div>
                      <label className="mt-2 text-sm font-semibold text-blue-200">
                        Description
                      </label>
                      <textarea
                        value={newEventData.short}
                        onChange={(e) =>
                          setNewEventData((prev) => ({
                            ...prev,
                            short: e.target.value,
                          }))
                        }
                        className="min-h-[80px] rounded-lg border border-blue-700 bg-slate-800 p-3 text-lg text-white shadow-inner placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Description"
                      />
                      <label className="mt-2 text-sm font-semibold text-blue-200">
                        Long Description
                      </label>
                      <textarea
                        value={newEventData.long}
                        onChange={(e) =>
                          setNewEventData((prev) => ({
                            ...prev,
                            long: e.target.value,
                          }))
                        }
                        className="min-h-[80px] rounded-lg border border-blue-700 bg-slate-800 p-3 text-lg text-white shadow-inner placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Long Description"
                      />
                    </div>
                    <div className="flex justify-center gap-4 rounded-b-2xl bg-white/5 px-6 py-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-lg bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-2 text-base font-semibold text-white shadow-md transition hover:from-blue-800 hover:to-blue-600"
                        onClick={handleAddEvent}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-lg bg-gray-600 px-6 py-2 text-base font-semibold text-white shadow-md transition hover:bg-gray-500"
                        onClick={() => setAddEventDialogOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </HeadlessDialog.Panel>
              </div>
            </HeadlessDialog>
            <div className="flex w-full flex-col items-center">
              <div className="flex flex-row items-center justify-center gap-2 md:gap-4 xl:gap-4">
                {inlineSeasons.map((category, index) => (
                  <div key={category} className="flex items-center">
                    <button
                      className={clsx({
                        'my-2 h-fit rounded-full border-2 px-3 py-2 text-lg text-white transition-all duration-1000 hover:brightness-125 motion-safe:hover:scale-105': true,
                        'border-blue-600 bg-blue-900 brightness-110 motion-safe:scale-105':
                          index === selectedIndex,
                        'border-blue-700 bg-gray-800': !(
                          index === selectedIndex
                        ),
                      })}
                      onClick={() => setSelectedIndex(index)}
                    >
                      <p>{category}</p>
                    </button>
                    {(session?.user?.email || jaybotsOfficer) && (
                      <button
                        className="ml-1 text-xl font-bold text-red-400 hover:text-red-600"
                        onClick={() => handleDeleteSeason(category)}
                        title="Delete season"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
                {pastSeasons.length > 0 && (
                  <div className="group relative">
                    <button className="my-2 flex h-fit items-center rounded-full border-2 border-blue-700 bg-gray-800 px-3 py-2 text-lg text-white">
                      Past years
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 z-10 mt-2 hidden min-w-[180px] rounded-lg bg-slate-900 p-2 shadow-lg group-hover:block">
                      {pastSeasons.map((category, i) => (
                        <div key={category} className="flex items-center">
                          <button
                            className={clsx({
                              'w-full rounded-full px-3 py-2 text-left text-lg text-white hover:bg-blue-800': true,
                              'bg-blue-900 font-bold':
                                i + MAX_INLINE_SEASONS === selectedIndex,
                            })}
                            onClick={() =>
                              setSelectedIndex(i + MAX_INLINE_SEASONS)
                            }
                          >
                            {category}
                          </button>
                          {(session?.user?.email || jaybotsOfficer) && (
                            <button
                              className="ml-1 text-xl font-bold text-red-400 hover:text-red-600"
                              onClick={() => handleDeleteSeason(category)}
                              title="Delete season"
                            >
                              ×
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="relative mt-8 flex w-full justify-center">
              <div className="grid w-96 grid-cols-1 justify-center gap-12 px-10 sm:w-[40rem] sm:grid-cols-2 xl:w-[60rem] xl:grid-cols-3 2xl:w-[80rem] 2xl:grid-cols-4">
                {outreach
                  .filter((e) => e.seasonString === categories[selectedIndex])
                  .map((outreach, index) => (
                    <Event
                      event={outreach}
                      key={outreach._id || outreach.title}
                      canEdit={!!(session?.user?.email || jaybotsOfficer)}
                      fetchData={fetchData}
                      user={
                        session?.user?.name || jaybotsOfficer || 'Unknown User'
                      }
                      categories={categories}
                      setOutreach={setOutreach}
                    />
                  ))}
              </div>
              <Colors />
            </div>
          </div>

          <Footer />
        </div>
      </main>
      {showHistory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative w-[32rem] max-w-full rounded-2xl border border-blue-700 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 p-8 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold text-white">Edit History</h2>
            <div className="max-h-80 overflow-y-auto">
              {history.length === 0 ? (
                <div className="text-gray-300">No history yet.</div>
              ) : (
                history.map((h, i) => (
                  <div
                    key={i}
                    className={
                      'mb-2 rounded p-2 ' +
                      (false ? 'bg-blue-800/40' : 'bg-slate-800/40')
                    }
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm text-blue-200">
                          {new Date(h.timestamp).toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-400">
                          by {h.user}
                        </span>
                      </div>
                    </div>
                    <div className="mt-1 text-sm text-gray-200">
                      {h.description}
                    </div>
                  </div>
                ))
              )}
            </div>
            <button
              className="mt-4 rounded bg-gray-700 px-3 py-1 text-white"
              onClick={() => setShowHistory(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function Event({ event, canEdit, fetchData, user, categories, setOutreach }) {
  const [open, setOpen] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [editData, setEditData] = useState({
    title: event.title,
    date: event.date,
    short: event.short,
    image: event.image,
    long: event.long,
    seasonString: event.seasonString,
  })
  const cancelButtonRef = useRef(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setEditData((prev) => ({ ...prev, image: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = async () => {
    await fetch('/api/outreach', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item: { ...event, ...editData },
        user,
        description: `Edited event "${editData.title}"`,
        categories,
      }),
    })
    setEditModal(false)
    fetchData()
  }

  const handleDelete = async () => {
    setOutreach((prev) =>
      prev.filter((e) => e._id !== event._id && e.title !== event.title)
    )
    setEditModal(false)
    try {
      await fetch('/api/outreach', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _id: event._id,
          user,
          description: `Deleted event "${event.title}"`,
          categories,
        }),
      })
    } catch (error) {
      setOutreach((prev) => [...prev, event])
      console.error('Failed to delete event:', error)
    }
  }

  return (
    <div
      key={event._id || event.title}
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
              'animate-slide-infinite': event.title?.length >= 30,
            })}
          >
            {event.title}
          </p>
        </div>
        <p className="text-center">{event.date}</p>
        <p className="pt-2 text-center text-gray-300">{event.short}</p>
        <div className="flex w-full items-center justify-center gap-2 p-2">
          <button
            className="self-center rounded-lg bg-blue-600/60 px-5 text-lg text-gray-200 ring-1 ring-slate-900 duration-150 hover:bg-blue-600 hover:text-white"
            onClick={() => setOpen(true)}
          >
            View
          </button>
          {canEdit && (
            <button
              className="self-center rounded-lg bg-green-600/60 px-5 text-lg text-gray-200 ring-1 ring-slate-900 duration-150 hover:bg-green-600 hover:text-white"
              onClick={() => setEditModal(true)}
            >
              Edit
            </button>
          )}
          {canEdit && (
            <button
              className="flex items-center justify-center self-center rounded-lg bg-red-600/60 px-3 py-2 text-lg text-gray-200 ring-1 ring-slate-900 duration-150 hover:bg-red-600 hover:text-white"
              onClick={handleDelete}
              title="Delete event"
            >
              <TrashIcon className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
      <Transition.Root show={editModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setEditModal}
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
            <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity" />
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-2xl border border-blue-700 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="flex flex-col gap-6 px-6 pb-6 pt-8 sm:p-8 sm:pb-6">
                    <div className="mb-2 flex w-full justify-center">
                      <input
                        type="text"
                        value={editData.title}
                        onChange={(e) =>
                          setEditData((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                        className="w-80 rounded-xl border-2 border-blue-700 bg-slate-800 p-3 text-center text-xl font-bold text-white shadow-inner placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Event Title"
                      />
                    </div>
                    <div className="flex w-full items-center justify-center gap-6">
                      <Image
                        src={editData.image}
                        width={200}
                        height={200}
                        className="aspect-square w-40 rounded-xl border-2 border-blue-700 object-cover shadow-lg"
                        alt="Event preview"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="text-sm file:cursor-pointer file:rounded-lg file:bg-gradient-to-r file:from-blue-600 file:to-blue-500 file:px-6 file:py-3 file:font-semibold file:text-white file:shadow-lg file:transition-all file:duration-200 file:hover:scale-105 file:hover:from-blue-700 file:hover:to-blue-600"
                      />
                    </div>
                    <div className="mt-2 flex w-full justify-center">
                      <button
                        className="rounded-lg bg-red-700 px-4 py-2 font-semibold text-white shadow hover:bg-red-800"
                        onClick={handleDelete}
                      >
                        Delete Event
                      </button>
                    </div>
                    <div className="mt-2 flex flex-col gap-3">
                      <label className="mt-2 text-sm font-semibold text-blue-200">
                        Date
                      </label>
                      <input
                        type="date"
                        value={editData.date}
                        onChange={(e) =>
                          setEditData((prev) => ({
                            ...prev,
                            date: e.target.value,
                          }))
                        }
                        className="rounded-lg border border-blue-700 bg-slate-800 p-3 text-lg text-white shadow-inner placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <label className="mt-2 text-sm font-semibold text-blue-200">
                        Description
                      </label>
                      <textarea
                        value={editData.short}
                        onChange={(e) =>
                          setEditData((prev) => ({
                            ...prev,
                            short: e.target.value,
                          }))
                        }
                        className="min-h-[80px] rounded-lg border border-blue-700 bg-slate-800 p-3 text-lg text-white shadow-inner placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Description"
                      />
                      <label className="mt-2 text-sm font-semibold text-blue-200">
                        Long Description
                      </label>
                      <textarea
                        value={editData.long}
                        onChange={(e) =>
                          setEditData((prev) => ({
                            ...prev,
                            long: e.target.value,
                          }))
                        }
                        className="min-h-[80px] rounded-lg border border-blue-700 bg-slate-800 p-3 text-lg text-white shadow-inner placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Long Description"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 rounded-b-2xl bg-white/5 px-6 py-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-lg bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-2 text-base font-semibold text-white shadow-md transition hover:from-blue-800 hover:to-blue-600"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-lg bg-gray-600 px-6 py-2 text-base font-semibold text-white shadow-md transition hover:bg-gray-500"
                      onClick={() => {
                        setEditModal(false)
                        setEditData({
                          title: event.title,
                          date: event.date,
                          short: event.short,
                          image: event.image,
                          long: event.long,
                          seasonString: event.seasonString,
                        })
                      }}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
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
