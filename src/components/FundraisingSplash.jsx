import { useLayoutEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { fundraisingSplash, linkStyle } from '@/config.jsx'

const storageKey = `jaybots-fundraising-splash-v${fundraisingSplash.storageKeyVersion}`

function readForceShowFromUrl() {
  if (typeof window === 'undefined') return false
  const param = fundraisingSplash.queryParam || 'showFundraising'
  const v = new URLSearchParams(window.location.search).get(param)
  return v === '1' || v === 'true' || v === 'yes'
}

function stripQueryParamFromUrl() {
  const param = fundraisingSplash.queryParam || 'showFundraising'
  const url = new URL(window.location.href)
  if (!url.searchParams.has(param)) return
  url.searchParams.delete(param)
  const next =
    url.pathname + (url.searchParams.toString() ? `?${url.searchParams}` : '') + url.hash
  window.history.replaceState({}, '', next)
}

export function FundraisingSplash() {
  const [open, setOpen] = useState(false)

  useLayoutEffect(() => {
    if (readForceShowFromUrl()) {
      try {
        sessionStorage.removeItem(storageKey)
      } catch {
        /* private mode etc. */
      }
      setOpen(true)
      stripQueryParamFromUrl()
      return
    }
    try {
      if (sessionStorage.getItem(storageKey)) return
    } catch {
      /* private mode etc. */
    }
    setOpen(true)
  }, [])

  const dismiss = () => {
    try {
      localStorage.setItem(storageKey, '1')
    } catch {
      /* ignore */
    }
    setOpen(false)
  }

  return (
    <Dialog open={open} onClose={dismiss} className="relative z-[9999]">
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full flex-col lg:pl-64">
          <div className="flex flex-1 flex-col items-center justify-center p-4 sm:p-8">
            <Dialog.Panel className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl ring-1 ring-white/10">
              <div className="bg-gradient-to-b from-blue-950 via-blue-950/90 to-black px-6 pb-6 pt-10 text-center sm:px-10 sm:pb-8 sm:pt-12">
                <div className="flex justify-center lg:hidden">
                  <Image
                    src="https://cdn.jaybots.org/logo/logo.png"
                    width={120}
                    height={120}
                    className="h-28 w-28 rounded-full sm:h-28 sm:w-28"
                    alt="Jaybots logo"
                  />
                </div>
                {fundraisingSplash.teamPhotoUrl ? (
                  <div className="relative mx-auto mt-6 w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 aspect-[16/9]">
                    <Image
                      src={fundraisingSplash.teamPhotoUrl}
                      alt={fundraisingSplash.teamPhotoAlt || 'Jaybots team photo'}
                      fill
                      sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 28rem"
                      priority
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <Dialog.Title className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {fundraisingSplash.title}
                </Dialog.Title>
                <p className="mt-3 text-base font-thin text-blue-100/95 sm:text-lg">
                  {fundraisingSplash.subtitle}
                </p>
              </div>

              <div className="space-y-4 px-6 py-6 text-left text-base font-light leading-relaxed text-gray-300 sm:px-10 sm:py-8 sm:text-lg">
                {fundraisingSplash.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p>
                  <a
                    href={fundraisingSplash.fundraisingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkStyle}
                  >
                    Donate on GoFundMe
                  </a>{' '}
                  — every contribution helps with travel, registration, and materials.
                </p>
              </div>

              <div className="flex flex-col gap-3 border-t border-white/10 bg-slate-950/50 px-6 py-5 sm:flex-row sm:justify-end sm:px-10">
                <button
                  type="button"
                  onClick={dismiss}
                  className="order-2 rounded-md border border-white/20 bg-transparent px-4 py-2.5 text-center text-sm font-semibold text-gray-200 transition hover:border-white/40 hover:bg-white/5 sm:order-1 sm:px-5"
                >
                  Continue to site
                </button>
                <a
                  href={fundraisingSplash.fundraisingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="order-1 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:order-2 sm:px-5"
                >
                  Watch on YouTube
                </a>
              </div>

              <button
                type="button"
                onClick={dismiss}
                className="absolute right-3 top-3 rounded-md p-1 text-gray-400 transition hover:bg-white/10 hover:text-white"
                aria-label="Dismiss"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </Dialog.Panel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
