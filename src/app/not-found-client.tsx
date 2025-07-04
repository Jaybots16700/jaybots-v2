'use client'

import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function NotFoundClient() {
  return (
    <>
      <Nav />
      <main>
        <div className="animate-all z-50 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 lg:pl-64">
          <div className="flex min-h-screen flex-col items-center justify-center text-center">
            <h1 className="mb-4 text-6xl font-bold text-white">404</h1>
            <h2 className="mb-6 text-2xl font-semibold text-gray-300">
              Page Not Found
            </h2>
            <p className="mb-8 max-w-md text-gray-400">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
            <Link
              href="/"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Go Home
            </Link>
          </div>
          <Footer />
        </div>
      </main>
    </>
  )
}
