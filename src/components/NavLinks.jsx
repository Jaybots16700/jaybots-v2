import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { signIn } from "next-auth/react"
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
  faRobot,
  faBullhorn,
  faCommentsDollar,
} from '@fortawesome/free-solid-svg-icons'
import { usePathname } from 'next/navigation'

const links = [
  ['Home', '/', faHouse],
  ['3D Printing', '/3dprint'],
  ['Meet the Team', '/team', faPeopleGroup],
  ['Join', 'https://interest.jaybots.org', faBullhorn],
  ['Outreach', '/outreach', faComments],
  ['Awards', '/awards', faAward],
  ['Donate', '/donate', faCircleDollarToSlot],
  ['Media', '/media', faPhotoFilm],
  ['Alumni', '/alumni', faGraduationCap],
  ['Sponsors', 'https://jaybotsboosters.org/sponsors', faCommentsDollar],
  ['Tournament', 'https://jaybots.org/tournament', faRobot],
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
  const linksToUse = usePathname().startsWith('/dashboard')
    ? dashboardLinks
    : links

  return (
    <div>
      {linksToUse.map(([label, href, icon, target], index) => (
        <Link
          key={label}
          href={href}
          target={target}
          className={clsx({
            'relative flex items-center rounded-xl px-2 py-3 text-base text-gray-300 transition-all delay-100 duration-200 hover:bg-blue-900/70 hover:font-bold hover:text-white hover:delay-0': true,
            'bg-blue-800 font-semibold text-white': current == href,
          })}
        >
          {label === '3D Printing' ? (
            <svg
              fill="#ffffff"
              height="24px"
              width="24px"
              // version="1.1"
              // id="Capa_1"
              // xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 463 463"
              // xml:space="preserve"
              className="h-6 w-6 place-self-center"
            >
              <g>
                <path
                  d="M87.5,343h288c4.142,0,7.5-3.358,7.5-7.5v-264c0-4.142-3.358-7.5-7.5-7.5h-288c-4.142,0-7.5,3.358-7.5,7.5v264
		C80,339.642,83.358,343,87.5,343z M271.5,272h-80H167v-17h129v17H271.5z M199,287h65v9h-65V287z M187.25,311h4.25h80h4.25l12.75,17
		h-114L187.25,311z M307.25,328l-21.75-29c-1.417-1.889-3.639-3-6-3H279v-9h24.5c4.142,0,7.5-3.358,7.5-7.5v-32
		c0-4.142-3.358-7.5-7.5-7.5h-144c-4.142,0-7.5,3.358-7.5,7.5v32c0,4.142,3.358,7.5,7.5,7.5H184v9h-0.5c-2.361,0-4.583,1.111-6,3
		l-21.75,29H95V111h129v33h-24.5c-4.142,0-7.5,3.358-7.5,7.5v24c0,2.841,1.605,5.438,4.146,6.708L224,196.135V207.5
		c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-11.365l27.854-13.927c2.541-1.27,4.146-3.867,4.146-6.708v-24
		c0-4.142-3.358-7.5-7.5-7.5H239v-33h129v217H307.25z M231.5,183.115l-24.5-12.25V159h49v11.865L231.5,183.115z M368,79v17H95V79
		H368z"
                />
                <path d="M103.5,47h16c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142,0-7.5,3.358-7.5,7.5S99.358,47,103.5,47z" />
                <path d="M151.5,47h16c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142,0-7.5,3.358-7.5,7.5S147.358,47,151.5,47z" />
                <path d="M199.5,47h16c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142,0-7.5,3.358-7.5,7.5S195.358,47,199.5,47z" />
                <path d="M247.5,47h16c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142,0-7.5,3.358-7.5,7.5S243.358,47,247.5,47z" />
                <path d="M295.5,47h16c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142,0-7.5,3.358-7.5,7.5S291.358,47,295.5,47z" />
                <path d="M343.5,47h16c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142,0-7.5,3.358-7.5,7.5S339.358,47,343.5,47z" />
                <path
                  d="M415,361.234V23.5C415,10.542,404.458,0,391.5,0h-320C58.542,0,48,10.542,48,23.5v337.734c-9.29,3.138-16,11.93-16,22.266
		v56c0,12.958,10.542,23.5,23.5,23.5h352c12.958,0,23.5-10.542,23.5-23.5v-56C431,373.164,424.29,364.372,415,361.234z M71.5,15h320
		c4.687,0,8.5,3.813,8.5,8.5V360H63V23.5C63,18.813,66.813,15,71.5,15z M416,439.5c0,4.687-3.813,8.5-8.5,8.5h-352
		c-4.687,0-8.5-3.813-8.5-8.5v-56c0-4.687,3.813-8.5,8.5-8.5h352c4.687,0,8.5,3.813,8.5,8.5V439.5z"
                />
                <path d="M87.5,416h-16c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h16c4.142,0,7.5-3.358,7.5-7.5S91.642,416,87.5,416z" />
                <path d="M135.5,416h-16c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h16c4.142,0,7.5-3.358,7.5-7.5S139.642,416,135.5,416z" />
                <path d="M87.5,392h-16c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h16c4.142,0,7.5-3.358,7.5-7.5S91.642,392,87.5,392z" />
                <path d="M135.5,392h-16c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h16c4.142,0,7.5-3.358,7.5-7.5S139.642,392,135.5,392z" />
                <path d="M391.5,416h-24c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h24c4.142,0,7.5-3.358,7.5-7.5S395.642,416,391.5,416z" />
                <path d="M231.5,416h-64c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h64c4.142,0,7.5-3.358,7.5-7.5S235.642,416,231.5,416z" />
                <path d="M231.5,392h-64c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h64c4.142,0,7.5-3.358,7.5-7.5S235.642,392,231.5,392z" />
                <path d="M271.5,416h-8c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h8c4.142,0,7.5-3.358,7.5-7.5S275.642,416,271.5,416z" />
                <path d="M303.5,416h-8c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h8c4.142,0,7.5-3.358,7.5-7.5S307.642,416,303.5,416z" />
                <path d="M335.5,416h-8c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h8c4.142,0,7.5-3.358,7.5-7.5S339.642,416,335.5,416z" />
                <path d="M391.5,392h-24c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h24c4.142,0,7.5-3.358,7.5-7.5S395.642,392,391.5,392z" />
                <path d="M271.5,392h-8c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h8c4.142,0,7.5-3.358,7.5-7.5S275.642,392,271.5,392z" />
                <path d="M303.5,392h-8c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h8c4.142,0,7.5-3.358,7.5-7.5S307.642,392,303.5,392z" />
                <path d="M335.5,392h-8c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h8c4.142,0,7.5-3.358,7.5-7.5S339.642,392,335.5,392z" />
              </g>
            </svg>
          ) : (
            <FontAwesomeIcon
              icon={icon}
              className="h-6 w-6 place-self-center"
            />
          )}
          <span className="relative z-10 col-span-5 pl-3">{label}</span>
        </Link>
      ))}
      <hr className='my-2'/>
      <button onClick={() => signIn("google")} className={'relative flex items-center rounded-xl px-2 py-3 text-base text-gray-300 transition-all delay-100 duration-200 hover:bg-blue-900/70 hover:font-bold hover:text-white hover:delay-0'}>
      <svg className="h-6 w-6 mr-3 shrink-0 fill-current" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path
        	fill="#EA4335"
        	d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
        />
        <path
        	fill="#4285F4"
        	d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
        />
        <path
        	fill="#FBBC05"
        	d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
        />
        <path
        	fill="#34A853"
        	d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
        />
        <path fill="none" d="M0 0h48v48H0z" />
        </svg>Sign in with Google</button>
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
