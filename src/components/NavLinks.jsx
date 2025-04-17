import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { signIn, signOut } from 'next-auth/react'
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
} from '@fortawesome/free-solid-svg-icons'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { GoogleIcon, LogoutIcon, Printing3dIcon } from './icons'

const links = [
  ['Home', '/', faHouse],
  ['Worlds', '/worlds', faEarthAmerica],
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
  ['Upcoming Events', '/events', faCalendarWeek],
  // ['Tournament', 'https://jaybots.org/tournament', faRobot],
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
  const linksToUse = usePathname()?.startsWith('/dashboard')
    ? dashboardLinks
    : links

  return (
    <div>
      {linksToUse.map(([label, href, icon], index) => (
        <Link
          key={label}
          href={href}
          className={clsx({
            'relative flex items-center rounded-xl px-2 py-3 text-base text-gray-300 transition-all duration-200 delay-100 hover:bg-blue-900/70 hover:font-bold hover:text-white hover:delay-0': true,
            'bg-blue-800 font-semibold text-white': current === href,
          })}
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
      {['anikaanne2010pal@gmail.com', 'pillai.nash@gmail.com'].includes(
        session.data?.user.email
      ) ? (
        <Link
          href={'/edit-media'}
          className={clsx({
            'relative flex items-center rounded-xl px-2 py-3 text-base text-gray-300 transition-all duration-200 delay-100 hover:bg-blue-900/70 hover:font-bold hover:text-white hover:delay-0': true,
            'bg-blue-800 font-semibold text-white': current === '/edit-media',
          })}
        >
          <FontAwesomeIcon
            icon={faEdit}
            className="h-6 w-6 place-self-center"
          />
          <span className="relative z-10 col-span-5 pl-3">Edit Media</span>
        </Link>
      ) : session.data?.user ? (
        <button
          onClick={() => signOut()}
          className={
            'relative flex w-full items-center rounded-xl px-2 py-3 text-base text-gray-300 transition-all duration-200 delay-100 hover:bg-blue-900/70 hover:font-bold hover:text-white hover:delay-0'
          }
        >
          <LogoutIcon fill="white" />
          <span className="relative z-10 col-span-5 pl-3">Sign Out</span>
        </button>
      ) : (
        <button
          onClick={() => signIn('google')}
          className={
            'relative flex items-center rounded-xl px-2 py-3 text-base text-gray-300 transition-all duration-200 delay-100 hover:bg-blue-900/70 hover:font-bold hover:text-white hover:delay-0'
          }
        >
          <GoogleIcon />
          <span className="relative z-10 col-span-5 pl-3">
            Sign in with Google
          </span>
        </button>
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
  // {name: "Rev Robotics", link: "https://revrobotics.com", image: "https://jaybotsboosters.org/_next/image?url=%2Frevlightbetter.png&w=256&q=75", width: 100},
  // {name: "PTC Onshape", link: "https://www.ptc.com/en/products/onshape", image: "https://jaybotsboosters.org/_next/image?url=%2Fonshapelight.png&w=640&q=75", width: 200},
  // {name: "Stewart's Shops", link: "https://www.stewartsshops.com/", image: "https://jaybotsboosters.org/_next/image?url=%2Fstewlight.png&w=256&q=75", width: 100},
  // {name: "18 North Grill", link: "https://www.18northgrill.com/", image: "https://jaybotsboosters.org/_next/image?url=%2Fgrilllight.png&w=256&q=75", width: 100},
  // {name: "Dutches Invests", link: "https://jaybotsboosters.org/sponsors", image: "https://jaybotsboosters.org/_next/image?url=%2Fdutchess.jpg&w=640&q=75", width: 200},
  // {name: "Wappingers Central School District", link: "https://www.wappingersschools.org/", image: "https://www.wappingersschools.org/cms/lib/NY01001463/Centricity/Template/GlobalAssets/images///logos/Wappingers_Logo_NEW_Blue_Red.png", width: 200},
]
