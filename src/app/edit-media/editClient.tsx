'use client'

'use client'
import { CldImage, CldUploadButton } from 'next-cloudinary'
import Head from 'next/head'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useEffect, useState } from 'react'
import Colors from '@/components/Colors'
import Image from 'next/image'
import clsx from 'clsx'
import { setOutreachImage } from '@/lib/serverActions'

const cloudinaryDarkStyles = {
  palette: {
    window: '#0f172a',
    sourceBg: '#1e293b',
    windowBorder: '#9ca3af',
    tabIcon: '#FFFFFF',
    inactiveTabIcon: '#8E9FBF',
    menuIcons: '#FFFFFF',
    link: '#08C0FF',
    action: '#336BFF',
    inProgress: '#00BFFF',
    complete: '#33ff00',
    error: '#EA2727',
    textDark: '#000000',
    textLight: '#FFFFFF',
  },
}

export default function EditClientPage({
  page,
}: {
  page: 'Outreach' | 'Media'
}) {
  const [outreach, setOutreach] = useState(
    [] as {
      _id: string
      title: string
      date: string
      short: string
      image: string
    }[]
  )
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    short: '',
    image: '',
  })

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

  const handleInputChange = (
    index: number,
    field: 'title' | 'date' | 'short' | 'image',
    value: string
  ) => {
    setOutreach((prev) => {
      const updatedOutreach = [...prev]
      updatedOutreach[index] = { ...updatedOutreach[index], [field]: value }
      return updatedOutreach
    })
  }

  return (
    <TabsContent key={page} value={page}>
      {/* <Image
        src={newEvent.image || 'https://cdn.jaybots.org/logo/logo.png'}
        width={300}
        height={400}
        className="aspect-square max-h-24 object-cover"
        alt=""
      />
      <div className="mx-3 flex h-fit overflow-hidden whitespace-nowrap p-2 text-center text-lg font-semibold leading-6 text-gray-200">
        <input
          type="text"
          value={newEvent.title}
          onChange={(e) =>
            setNewEvent((prev) => ({ ...prev, title: e.target.value }))
          }
          className="mb-2 rounded-md border-2 border-blue-400 bg-slate-900 px-2 py-1"
        />
        <input
          type="text"
          value={newEvent.date}
          onChange={(e) =>
            setNewEvent((prev) => ({ ...prev, date: e.target.value }))
          }
          className="mb-2 rounded-md border-2 border-blue-400 bg-slate-900 px-2 py-1"
        />
      </div>
      <textarea
        value={newEvent.short}
        onChange={(e) =>
          setNewEvent((prev) => ({ ...prev, short: e.target.value }))
        }
        className="mb-2 w-full rounded-md border-2 border-blue-400 bg-slate-900 px-2 py-1"
      />
      <CldUploadButton
        className="rounded-md border-2 border-blue-400 px-4 py-2"
        uploadPreset="outreach"
        options={{ cropping: true, styles: cloudinaryDarkStyles }}
        onSuccess={(results) => {
          if (!results.info || typeof results.info === 'string') return
          // add_image(results.info.secure_url)
        }}
      >
        Upload {page} Image
      </CldUploadButton>
      <button
        className="self-center rounded-lg bg-blue-600/60 px-5 text-lg text-gray-200 ring-1 ring-slate-900 duration-150 hover:bg-blue-600 hover:text-white"
        onClick={() => {
          setOutreachImage(
            page,
            Math.random().toString(36).substring(2, 15),
            newEvent
          )
        }}
      >
        Add Event
      </button> */}
      <div className="relative mt-8 flex w-full justify-center">
        <div className="grid w-96 grid-cols-1 justify-center gap-12 px-10 sm:w-[40rem] sm:grid-cols-2 xl:w-[60rem] xl:grid-cols-3 2xl:w-[80rem] 2xl:grid-cols-4">
          {outreach.map((event, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-slate-900/50 ring-2 ring-blue-950">
                <Image
                  src={event.image}
                  width={300}
                  height={400}
                  className="aspect-square w-full object-cover"
                  alt=""
                />
                <div className="w-full px-2">
                  <div className="mx-3 flex h-fit flex-col overflow-hidden whitespace-nowrap p-2 text-center text-lg font-semibold leading-6 text-gray-200">
                    <input
                      type="text"
                      value={event.title}
                      onChange={(e) =>
                        handleInputChange(index, 'title', e.target.value)
                      }
                      className="mb-2 rounded-md border-2 border-blue-400 bg-slate-900 px-2 py-1"
                    />
                    <input
                      type="text"
                      value={event.date}
                      onChange={(e) =>
                        handleInputChange(index, 'date', e.target.value)
                      }
                      className="mb-2 rounded-md border-2 border-blue-400 bg-slate-900 px-2 py-1"
                    />
                    <textarea
                      value={event.short}
                      onChange={(e) =>
                        handleInputChange(index, 'short', e.target.value)
                      }
                      className="mb-2 rounded-md border-2 border-blue-400 bg-slate-900 px-2 py-1"
                    />
                  </div>
                  <div className="flex w-full items-center justify-center gap-4 p-2">
                    <CldUploadButton
                      className="rounded-md border-2 border-blue-400 px-2 py-1"
                      uploadPreset="outreach"
                      options={{ cropping: true, styles: cloudinaryDarkStyles }}
                      onSuccess={(results) => {
                        if (!results.info || typeof results.info === 'string')
                          return
                        console.log(results.info.secure_url)
                        handleInputChange(
                          index,
                          'image',
                          results.info.secure_url
                        )
                      }}
                    >
                      Update Image
                    </CldUploadButton>
                    <button
                      className="self-center rounded-lg bg-blue-600/60 px-5 text-lg text-gray-200 ring-1 ring-slate-900 duration-150 hover:bg-blue-600 hover:text-white"
                      onClick={() => {
                        setOutreachImage(page, event._id, event)
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Colors />
      </div>
    </TabsContent>
  )
}
