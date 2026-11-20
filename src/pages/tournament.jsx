import Head from 'next/head'
import Link from 'next/link'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'
import Colors from '@/components/Colors'

const actions = [
  {
    title: 'Volunteer',
    description: 'Help make the tournament run smoothly.',
    href: '/volunteer',
    cta: 'Register to Volunteer',
    external: false,
  },
  {
    title: 'Team Guide',
    description: 'Schedule, pits, parking, and day-of info.',
    href: '/teamguide',
    cta: 'View Team Guide',
    external: false,
  },
  {
    title: 'Facebook Event',
    description: 'Updates and announcements for the weekend.',
    href: 'https://www.facebook.com/events/818287127870931/',
    cta: 'Open Event Page',
    external: true,
  },
]

const faqs = [
  {
    question: 'What is FIRST Tech Challenge?',
    answer:
      'FTC is a robotics competition for students in grades 7–12. Teams design, build, and program robots to compete in an alliance format against other teams.',
    href: 'https://www.firstinspires.org/robotics/ftc',
    external: true,
    cta: (
      <>
        Learn more about{' '}
        <b className="font-bold">FIRST Tech Challenge</b>
      </>
    ),
  },
  {
    question: "What is this year's game about?",
    answer: (
      <>
        This year&apos;s game is{' '}
        <b className="font-bold text-white">BIOBUZZ</b>! Teams navigate their
        robots through a complex field to decode patterns, collect game pieces,
        and score points by launching them into their hives. The game combines
        strategy, precision driving, and autonomous programming challenges.
      </>
    ),
    href: 'https://www.firstinspires.org/robotics/ftc/game-and-season',
    external: true,
    cta: (
      <>
        Learn more about{' '}
        <b className="font-bold">BIOBUZZ</b>
      </>
    ),
  },
  {
    question: 'How can I volunteer?',
    answer:
      'We welcome volunteers to help with setup, judging, refereeing, or general event support.',
    links: [
      {
        href: '/volunteer',
        cta: (
          <>
            Register to{' '}
            <b className="font-bold">Volunteer</b>
          </>
        ),
        external: false,
      },
      {
        href: 'https://www.firstinspires.org/community/volunteers/roles',
        cta: (
          <>
            View Volunteer{' '}
            <b className="font-bold">Role Descriptions</b>
          </>
        ),
        external: true,
      },
    ],
  },
  {
    question: 'Where is the team guide?',
    answer:
      'The team guide has the tournament schedule, match times, pit assignments, venue layout, parking, safety protocols, inspection procedures, and day-of reminders.',
    href: '/teamguide',
    external: false,
    cta: (
      <>
        View the{' '}
        <b className="font-bold">Team Guide</b>
      </>
    ),
  },
]

function ActionButton({ href, children, external }) {
  return (
    <Link
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex h-14 items-center justify-center rounded-full bg-blue-800 px-6 text-lg text-white duration-150 hover:bg-blue-700"
    >
      <span className="font-normal">{children}</span>
    </Link>
  )
}

export default function Tournaments() {
  return (
    <>
      <Head>
        <title>Jaybots | Tournaments</title>
      </Head>
      <Nav />
      <main>
        <div className="animate-all z-50 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 lg:pl-64">
          <Header
            title="John Jay FTC Qualifying Tournament"
            beforeBold="Come support your fellow "
            bold="FTC"
            afterBold=" teams"
          />

          <div className="w-full text-gray-400 lg:pb-24">
            <div className="relative isolate mx-auto max-w-5xl space-y-10 px-6 py-12 sm:px-10">
              <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950/80 via-slate-900/80 to-black ring-1 ring-blue-500/30">
                <div className="border-b border-white/10 px-6 py-5 sm:px-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Upcoming Qualifier
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    December 5
                  </h2>
                  <p className="mt-1 text-gray-300">
                    Snow date: Sunday, December 6
                  </p>
                </div>

                <div className="grid gap-6 px-6 py-8 sm:px-8 md:grid-cols-2">
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                      Schedule
                    </h3>
                    <dl className="space-y-3 text-left text-gray-200">
                      <div className="flex flex-col gap-1 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 sm:flex-row sm:items-baseline sm:justify-between">
                        <dt className="font-medium text-white">
                          Opening Ceremonies
                        </dt>
                        <dd className="text-gray-300">
                          Dec 5 · 7:15 PM
                        </dd>
                      </div>
                      <div className="flex flex-col gap-1 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 sm:flex-row sm:items-baseline sm:justify-between">
                        <dt className="font-medium text-white">
                          Awards Ceremony
                        </dt>
                        <dd className="text-gray-300">
                          Dec 5 · ~6:30 PM
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                      Location
                    </h3>
                    <div className="rounded-2xl bg-white/5 p-4 text-left ring-1 ring-white/10">
                      <p className="font-medium text-white">
                        John Jay Senior High School
                      </p>
                      <p className="mt-1 text-gray-300">
                        2012 Route 52
                        <br />
                        Hopewell Junction, NY 12533
                      </p>
                      <p className="mt-4 rounded-xl bg-amber-500/15 px-3 py-2 text-sm font-semibold text-amber-300 ring-1 ring-amber-400/30">
                        Enter through the cafeteria
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="grid gap-4 sm:grid-cols-3">
                {actions.map((action) => (
                  <div
                    key={action.title}
                    className="flex flex-col rounded-3xl bg-white/10 p-6 text-left ring-1 ring-white/20"
                  >
                    <h3 className="text-lg font-bold text-white">
                      {action.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm font-normal text-gray-300">
                      {action.description}
                    </p>
                    <div className="mt-5">
                      <ActionButton
                        href={action.href}
                        external={action.external}
                      >
                        {action.cta}
                      </ActionButton>
                    </div>
                  </div>
                ))}
              </section>

              <section className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Tournament FAQ
                  </h2>
                  <p className="mt-2 font-normal text-gray-300">
                    Quick answers for spectators, volunteers, and teams.
                  </p>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <article
                      key={faq.question}
                      className="rounded-3xl bg-white/10 p-6 text-left ring-1 ring-white/20 sm:p-8"
                    >
                      <h3 className="text-xl font-bold text-blue-300">
                        {faq.question}
                      </h3>
                      <p className="mt-3 font-normal leading-relaxed text-gray-300">
                        {faq.answer}
                      </p>
                      {faq.links ? (
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                          {faq.links.map((link) => (
                            <div key={link.href} className="flex-1">
                              <ActionButton
                                href={link.href}
                                external={link.external}
                              >
                                {link.cta}
                              </ActionButton>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="mt-6">
                          <ActionButton
                            href={faq.href}
                            external={faq.external}
                          >
                            {faq.cta}
                          </ActionButton>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </section>

              <Colors />
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  )
}
