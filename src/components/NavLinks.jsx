import { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
} from '@fortawesome/free-solid-svg-icons'

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return [
    ['Home', '/', faHouse],
    ['Meet the Team', '/team', faPeopleGroup],
    ['Outreach', '/outreach', faComments],
    ['Awards', '/awards', faAward],
    ['Donate', '/donate', faCircleDollarToSlot],
    ['Calendar', '/events', faCalendarWeek],
    ['Media', '/media', faPhotoFilm],
    ['Alumni', '/alumni', faGraduationCap],
    ['Past Games', '/games', faRobot],
    ['Contact Us', '#contact', faEnvelopeOpenText],
  ].map(([label, href, icon], index) => (
      <Link
        key={label}
        href={href}
        className="items-center relative rounded-lg my-1 py-4 px-2 text-md text-gray-300 transition-all duration-500 delay-100 hover:delay-0 hover:text-white hover:bg-blue-800 grid grid-cols-6 hover:font-bold"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <FontAwesomeIcon icon={icon} className='h-6 place-self-center' />
        <span className="relative z-10 col-span-5 pl-3">{label}</span>
      </Link>
  ))
}


export const Socials = [
  {name: "Twitter", link: "https://twitter.com/RoboticsJay", image: "/images/twitter.png"},
  {name: "Instagram", link: "https://www.instagram.com/johnjayroboticsclub/", image: "/images/instagram.png"},
  {name: "YouTube", link: "https://www.youtube.com/channel/UCIg6LPq_AsOuY2rVGpZgBsA", image: "/images/youtube.png"},
  {name: "School", link: "https://www.wappingersschools.org/Domain/1118", image: "/images/jjhslogo.png"},
]

export const Sponsers = [
  {name: "Rev Robotics", link: "https://revrobotics.com", image: "/images/rev.png", width: 100},
  {name: "PTC Onshape", link: "https://www.ptc.com/en/products/onshape", image: "/images/onshape.png", width: 200},
  {name: "Stewart's Shops", link: "https://www.stewartsshops.com/", image: "/images/stewarts.png", width: 100},
  {name: "18 North Grill", link: "https://www.18northgrill.com/", image: "/images/northgrill.png", width: 100},
  {name: "Dutches Invests", link: "https://jaybotsboosters.org/sponsors", image: "/images/dutchess.png", width: 200}
]