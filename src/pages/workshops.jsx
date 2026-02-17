import Head from 'next/head'
import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'
import { workshops, workshopsInterestFormUrl } from '@/config'

const cardClass =
  'flex flex-col overflow-hidden rounded-2xl border border-blue-800/60 bg-slate-900/80 shadow-lg ring-1 ring-white/5'
const contentClass = 'flex flex-col p-6'

function WorkshopCard({ workshop }) {
  const when = [workshop.date, workshop.time].filter(Boolean).join(' · ')
  const hasRegister = Boolean(workshop.registrationUrl)

  return (
    <li className={cardClass}>
      {workshop.image && (
        <div className="relative aspect-video w-full bg-slate-800">
          <Image
            src={workshop.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className={contentClass}>
        <h2 className="text-xl font-bold text-white">{workshop.name}</h2>
        {when && <p className="mt-1 text-sm text-blue-300">{when}</p>}
        {workshop.location && (
          <p className="mt-1 text-sm text-gray-400">{workshop.location}</p>
        )}
        {workshop.cost && (
          <p className="mt-0.5 text-sm font-medium text-white/90">
            {workshop.cost}
          </p>
        )}
        {workshop.description && (
          <p className="mt-3 flex-1 text-gray-300">{workshop.description}</p>
        )}
        {hasRegister ? (
          <a
            href={workshop.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Register
          </a>
        ) : (
          <span className="mt-4 inline-flex w-fit items-center rounded-lg border border-amber-600/60 bg-amber-900/30 px-4 py-2 text-sm font-medium text-amber-200">
            Coming soon
          </span>
        )}
      </div>
    </li>
  )
}

export default function Workshops() {
  const open = workshops?.filter((w) => w.registrationOpen) ?? []

  return (
    <>
      <Head>
        <title>Jaybots | Workshops</title>
      </Head>
      <Nav />
      <main>
        <div className="animate-all z-50 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 lg:pl-64">
          <Header
            title="Workshops"
            beforeBold="Open for "
            bold="registration"
            afterBold=""
          />

          <div className="w-full px-6 pb-24 pt-8 text-gray-400 sm:px-12">
            <div className="mx-auto max-w-4xl space-y-8">
              {open.length > 0 ? (
                <ul className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                  {open.map((workshop) => (
                    <WorkshopCard key={workshop.name} workshop={workshop} />
                  ))}
                </ul>
              ) : (
                <div className="rounded-2xl border border-blue-800/40 bg-slate-900/60 p-10 text-center">
                  <p className="text-lg text-gray-300">
                    No workshops are open for registration right now.
                  </p>
                  <p className="mt-2 text-gray-500">
                    Check back later or follow us on social media for
                    announcements.
                  </p>
                </div>
              )}

              <div className="rounded-2xl border border-blue-800/50 bg-slate-900/60 p-6 text-center sm:p-8">
                <p className="text-lg font-medium text-white">
                  Interested in all our workshops?
                </p>
                <p className="mt-1 text-gray-400">
                  Join our mailing list to hear about future workshop dates and
                  registration.
                </p>
                <a
                  href={workshopsInterestFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-lg border border-blue-600 bg-blue-900/50 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800/70"
                >
                  Add me to the workshop interest list
                </a>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  )
}
