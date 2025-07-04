import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { useSession, signIn, signOut } from 'next-auth/react'
import {
  faHouse,
  faPeopleGroup,
  faComments,
  faAward,
  faCircleDollarToSlot,
  faCalendarWeek,
  faPhotoFilm,
  faGraduationCap,
  faEnvelopeOpenText,
  faBullhorn,
  faCommentsDollar,
  faEarthAmerica,
  faVideo,
  faNewspaper,
  faEdit,
  faLock,
} from '@fortawesome/free-solid-svg-icons'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { GoogleIcon, LogoutIcon, Printing3dIcon } from './icons'
import { members } from '../config'

const links = [
  ['Home', '/', faHouse],
  //['Worlds', '/worlds', faEarthAmerica],
  ['3D Printing', '/3dprint'],
  ['Meet the Team', '/team', faPeopleGroup],
  ['Join', '/interest', faBullhorn],
  ['Outreach', '/outreach', faComments],
  ['Awards', '/awards', faAward],
  ['Donate', '/donate', faCircleDollarToSlot],
  ['Media', '/media', faPhotoFilm],
  ['Live', '/livelink', faVideo],
  ['Alumni', '/alumni', faGraduationCap],
  ['Sponsors', 'https://jaybotsboosters.org/sponsors', faCommentsDollar],
  //['Newsletter', '/news', faNewspaper],
  ['Upcoming Events', '/events', faCalendarWeek],
  ['Contact Us', '/#contact', faEnvelopeOpenText],
]

const dashboardLinks = [
  ['Home', '/dashboard', faHouse],
  ['Bio', '/dashboard/team', faPeopleGroup],
  ['Outreach', '/dashboard/outreach', faComments],
  ['Awards', '/dashboard/awards', faAward],
  ['Media', '/dashboard/media', faPhotoFilm],
  ['Alumni', '/dashboard/alumni', faGraduationCap],
]

export function NavLinks({ current }) {
  const session = useSession()
  const pathname = usePathname()
  const linksToUse = pathname?.startsWith('/dashboard') ? dashboardLinks : links

  // Jaybots Login modal state
  const [showModal, setShowModal] = useState(false)
  const [step, setStep] = useState(1)
  const [password, setPassword] = useState('')
  const [selectedOfficer, setSelectedOfficer] = useState('')
  const [error, setError] = useState('')
  const [officerName, setOfficerName] = useState('')
  const [showForgot, setShowForgot] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOfficerName(localStorage.getItem('jaybots_officer') || '')
    }
  }, [])

  // Get current officers from members list
  const officers = members.filter(
    (m) =>
      m.title === 'President' ||
      m.title === 'Vice President' ||
      m.title === 'Media Manager' ||
      m.title === 'Outreach Manager' ||
      m.name === 'Anika'
  )

  // Handle login flow
  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    if (password === 'Jaybots123!') {
      setStep(2)
      setError('')
    } else {
      setError('Incorrect password')
    }
  }

  const handleOfficerSubmit = (e) => {
    e.preventDefault()
    if (selectedOfficer) {
      localStorage.setItem('jaybots_officer', selectedOfficer)
      setOfficerName(selectedOfficer)
      setShowModal(false)
      setStep(1)
      setPassword('')
      setSelectedOfficer('')
      setTimeout(() => window.location.reload(), 100)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('jaybots_officer')
    setOfficerName('')
    window.location.reload()
  }

  return (
    <div>
      {linksToUse.map(([label, href, icon]) => (
        <Link
          key={label}
          href={href}
          className={clsx(
            'relative flex items-center rounded-xl px-2 py-3 text-base text-gray-300 transition-all delay-100 duration-200 hover:bg-blue-900/70 hover:font-bold hover:text-white hover:delay-0',
            current === href && 'bg-blue-800 font-semibold text-white'
          )}
        >
          {label === '3D Printing' ? (
            <Printing3dIcon className="h-6 w-6 place-self-center" />
          ) : (
            <FontAwesomeIcon
              icon={icon}
              className="h-6 w-6 place-self-center"
            />
          )}
          <span className="relative z-10 col-span-5 pl-3">{label}</span>
        </Link>
      ))}
      <hr className="my-2" />

      {/* AUTH BLOCK */}
      {session.status === 'loading' && (
        <div className="px-2 py-3 text-gray-400">Loading...</div>
      )}

      {officerName ? (
        <div className="flex flex-col items-start gap-2 px-2 py-3">
          <span className="font-semibold text-white">
            Hi {officerName}, welcome back!
          </span>
          <button
            onClick={handleLogout}
            className="text-sm text-blue-300 hover:underline"
          >
            Log out
          </button>
        </div>
      ) : session.status === 'authenticated' ? (
        <button
          onClick={() => signOut()}
          className="relative flex w-full items-center rounded-xl px-2 py-3 text-base text-gray-300 transition-all delay-100 duration-200 hover:bg-blue-900/70 hover:font-bold hover:text-white hover:delay-0"
        >
          <LogoutIcon fill="white" />
          <span className="relative z-10 col-span-5 pl-3">Sign Out</span>
        </button>
      ) : session.status === 'unauthenticated' ? (
        <>
          {/*
          <button
            onClick={() => signIn('google')}
            className="relative flex items-center rounded-xl px-2 py-3 text-base text-gray-300 transition-all delay-100 duration-200 hover:bg-blue-900/70 hover:font-bold hover:text-white hover:delay-0"
          >
            <GoogleIcon />
            <span className="relative z-10 col-span-5 pl-3">
              Sign in with Google
            </span>
          </button>
          */}
          <button
            onClick={() => setShowModal(true)}
            className="relative flex items-center rounded-xl px-2 py-3 text-base text-gray-300 transition-all delay-100 duration-200 hover:bg-blue-900/70 hover:font-bold hover:text-white hover:delay-0"
          >
            <FontAwesomeIcon
              icon={faLock}
              className="h-6 w-6 place-self-center"
            />
            <span className="relative z-10 col-span-5 pl-3">Jaybots Login</span>
          </button>
        </>
      ) : null}

      {/* Jaybots Login Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative w-96 animate-fade-in rounded-2xl border border-blue-700 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 p-8 shadow-2xl">
            {step === 1 && (
              <form
                onSubmit={handlePasswordSubmit}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 shadow-lg">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-2xl text-white"
                    />
                  </div>
                  <h2 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    Jaybots Officer Login
                  </h2>
                  <p className="mb-2 text-sm text-blue-200">
                    Enter the officer password to continue
                  </p>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-lg border border-blue-700 bg-slate-800 p-3 text-lg text-white shadow-inner placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Password"
                  autoFocus
                />
                {error && (
                  <div className="flex flex-col items-center">
                    <span className="text-center text-sm text-red-400">
                      {error}
                    </span>
                    <button
                      type="button"
                      className="mt-1 text-blue-400 underline hover:text-blue-600"
                      onClick={() => setShowForgot(true)}
                    >
                      Forgot password?
                    </button>
                    {showForgot && (
                      <span className="mt-1 text-sm text-gray-200">
                        Contact anika@jaybots.org for more info.
                      </span>
                    )}
                  </div>
                )}
                <button
                  type="submit"
                  className="mt-2 rounded-lg bg-gradient-to-r from-blue-700 to-blue-500 p-3 text-lg font-semibold text-white shadow-md transition hover:from-blue-800 hover:to-blue-600"
                >
                  Next
                </button>
                <button
                  type="button"
                  className="mt-2 text-sm text-blue-300 hover:underline"
                  onClick={() => {
                    setShowModal(false)
                    setStep(1)
                    setPassword('')
                    setError('')
                  }}
                >
                  Cancel
                </button>
              </form>
            )}
            {step === 2 && (
              <form
                onSubmit={handleOfficerSubmit}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 shadow-lg">
                    <FontAwesomeIcon
                      icon={faPeopleGroup}
                      className="text-2xl text-white"
                    />
                  </div>
                  <h2 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    Select Officer
                  </h2>
                  <p className="mb-2 text-sm text-blue-200">
                    Who is signing in?
                  </p>
                </div>
                <select
                  value={selectedOfficer}
                  onChange={(e) => setSelectedOfficer(e.target.value)}
                  className="rounded-lg border border-blue-700 bg-slate-800 p-3 text-lg text-white shadow-inner placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="" disabled>
                    Select officer
                  </option>
                  {officers.map((o) => (
                    <option key={o.name} value={o.name}>
                      {o.name}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="mt-2 rounded-lg bg-gradient-to-r from-blue-700 to-blue-500 p-3 text-lg font-semibold text-white shadow-md transition hover:from-blue-800 hover:to-blue-600"
                >
                  Next
                </button>
                <button
                  type="button"
                  className="mt-2 text-sm text-blue-300 hover:underline"
                  onClick={() => {
                    setShowModal(false)
                    setStep(1)
                    setPassword('')
                    setSelectedOfficer('')
                    setError('')
                  }}
                >
                  Cancel
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export const Socials = [
  {
    name: 'X',
    link: 'https://twitter.com/RoboticsJay',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png',
    width: 35,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/johnjayroboticsclub/',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
    width: 35,
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/@jaybots16700',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png',
    width: 35,
  },
  {
    name: 'School',
    link: 'https://www.wappingersschools.org/Domain/1118',
    image:
      'https://thecommencementgroup.com/wp-content/uploads/2016/09/NEW-JJHS-LOGO.gif',
    width: 45,
  },
]

export const Sponsers = [
  // Add sponsor data if needed
]
