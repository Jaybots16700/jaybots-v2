'use client'
import { CldImage, CldUploadButton } from 'next-cloudinary'
import Head from 'next/head'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import EditClientPage from './editClient'
import { useState } from 'react'

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

export default function EditMediaPage() {
  const pages = ['Outreach' /*, 'Media'*/] as const
  const [tab, setTab] = useState('Outreach')
  return (
    <>
      <Head>
        <title>Jaybots | Outreach</title>
      </Head>
      <Nav />
      <main>
        <div className="animate-all z-50 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 lg:pl-64">
          <Header title="Edit Media" beforeBold="" bold="" afterBold="" />
          <div className="">
            <Tabs value={tab} onValueChange={setTab} className="w-[400px]">
              <TabsList className="mx-auto w-full">
                {pages.map((page) => (
                  <TabsTrigger key={page} value={page}>
                    <h1 className="mx-auto text-lg font-semibold">{page}</h1>
                  </TabsTrigger>
                ))}
              </TabsList>
              {pages.map((page) => (
                <EditClientPage page={page} />
              ))}
            </Tabs>
          </div>
          <Footer />
        </div>
      </main>
    </>
  )
}
