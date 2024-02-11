import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
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

const links = [
  ['Home', '/', faHouse],
  ['Meet the Team', '/team', faPeopleGroup],
  ['Join', 'https://interest.jaybots.org', faBullhorn],
  ['Outreach', '/outreach', faComments],
  ['Awards', '/awards', faAward],
  ['Donate', '/donate', faCircleDollarToSlot],
  ['Media', '/media', faPhotoFilm],
  ['Alumni', '/alumni', faGraduationCap],
  ['Sponsors', 'https://jaybotsboosters.org/sponsors', faCommentsDollar],
  ['Contact Us', '/#contact', faEnvelopeOpenText],
]

export function NavLinks({current}) {

  return (
  
  <div className=''>
  {links.map(([label, href, icon, target], index) => (
      <Link
        key={label}
        href={href}
        target={target}
        className={clsx({
          "flex items-center relative rounded-xl py-3 px-2 text-base text-gray-300 transition-all duration-200 delay-100 hover:delay-0 hover:text-white hover:bg-blue-900/70 hover:font-bold": true,
          "bg-blue-800 text-white font-semibold": current == label,
        })}
      >
        <FontAwesomeIcon icon={icon} className='h-6 w-6 place-self-center' />
        <span className="relative z-10 col-span-5 pl-3">{label}</span>
      </Link>
  ))}
  </div>
  )
}


export const Socials = [
  {name: "X", link: "https://twitter.com/RoboticsJay", image: "https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png", width: 35},
  {name: "Instagram", link: "https://www.instagram.com/johnjayroboticsclub/", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png", width: 35},
  {name: "YouTube", link: "https://www.youtube.com/@jaybots16700", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png", width: 35},
  {name: "School", link: "https://www.wappingersschools.org/Domain/1118", image: "https://thecommencementgroup.com/wp-content/uploads/2016/09/NEW-JJHS-LOGO.gif", width: 45},
]

export const Sponsers = [
  // {name: "Rev Robotics", link: "https://revrobotics.com", image: "https://jaybotsboosters.org/_next/image?url=%2Frevlightbetter.png&w=256&q=75", width: 100},
  // {name: "PTC Onshape", link: "https://www.ptc.com/en/products/onshape", image: "https://jaybotsboosters.org/_next/image?url=%2Fonshapelight.png&w=640&q=75", width: 200},
  // {name: "Stewart's Shops", link: "https://www.stewartsshops.com/", image: "https://jaybotsboosters.org/_next/image?url=%2Fstewlight.png&w=256&q=75", width: 100},
  // {name: "18 North Grill", link: "https://www.18northgrill.com/", image: "https://jaybotsboosters.org/_next/image?url=%2Fgrilllight.png&w=256&q=75", width: 100},
  // {name: "Dutches Invests", link: "https://jaybotsboosters.org/sponsors", image: "https://jaybotsboosters.org/_next/image?url=%2Fdutchess.jpg&w=640&q=75", width: 200},
  // {name: "Wappingers Central School District", link: "https://www.wappingersschools.org/", image: "https://www.wappingersschools.org/cms/lib/NY01001463/Centricity/Template/GlobalAssets/images///logos/Wappingers_Logo_NEW_Blue_Red.png", width: 200},
]