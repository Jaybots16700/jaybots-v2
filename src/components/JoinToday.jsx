import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'
import Colors from './Colors'

const benefits = [
  "Thrive in Competition",
  'Develop Cutting-edge Skills',
  'Foster Lifelong Friendships',
  'Unlock Future Opportunities',
  'Embrace Team Collaboration',
  "Experience Unforgettable Fun!",
]

export function JoinToday() {
  return (
    <div className="py-6">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 xl:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 xl:mx-0 xl:max-w-none xl:flex-row xl:items-center xl:py-20 xl:gap-x-20 xl:px-20">
            <Image
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl xl:aspect-square xl:h-auto xl:max-w-sm"
              src="https://file.coffee/u/9eBeiWCI4QcCuo.jpg"
              alt="team photo"
              width={500}
              height={384}
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join the team</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Unleash your potential and join the Jaybots for an exhilarating journey of innovation, collaboration, and personal growth, where creativity thrives, skills sharpen, and lifelong friendships flourish amidst the exciting realm of technology and robotics.
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <Link href="https://interest.jaybots.org" target="_blank" className="group text-sm font-semibold leading-6 text-indigo-400 hover:font-bold">
                  Join Today <span aria-hidden="true" className=''>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Colors />
      </div>
    </div>
  )
}