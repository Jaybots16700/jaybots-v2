import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'
import Colors from '@/components/Colors'

import { linkStyle } from '@/config'

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
                        <div className="relative isolate mx-auto max-w-4xl space-y-8 p-12 text-center text-lg font-semibold text-gray-400">
                            {/* Tournament Details - Moved to top */}
                            <div className="w-full space-y-4 rounded-5xl bg-white/10 p-8 font-light ring-1 ring-white/20">
                                <h2 className="text-2xl font-bold text-green-400">
                                    Upcoming Tournament Details
                                </h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div>
                                        <h3 className="mb-2 text-lg font-semibold text-green-300">WHEN?</h3>
                                        <p className="text-gray-300">
                                            EVENT: SATURDAY, DECEMBER 6th<br />
                                            (SNOWDATE: SUNDAY, DECEMBER 7th)
                                        </p>
                                        <p className="mt-2 text-gray-300">
                                            Opening Ceremonies: 10 AM<br />
                                            Awards Ceremony: ~5 PM
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-lg font-semibold text-green-300">WHERE?</h3>
                                        <p className="text-gray-300">
                                            John Jay Sr. High School<br />
                                            2012 Route 52<br />
                                            Hopewell Junction, NY 12533
                                        </p>
                                        <p className="mt-2 text-yellow-400 font-semibold">
                                            *ENTER THROUGH THE CAFETERIA*
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Introduction */}
                            <div className="w-full space-y-4 font-normal">
                                <h1 className="text-3xl font-bold text-gray-200 sm:text-5xl md:text-6xl">
                                    Tournament FAQ
                                </h1>
                                <p className="text-xl text-gray-300">
                                    Here you will find answers to questions such as...
                                </p>
                            </div>

                            {/* FAQ Sections */}
                            <div className="space-y-8">
                                {/* What is FIRST TECH CHALLENGE? */}
                                <div className="w-full space-y-4 rounded-5xl bg-white/10 p-8 font-light ring-1 ring-white/20 ">
                                    <h2 className="text-2xl font-bold text-blue-400">
                                        What is FIRST TECH CHALLENGE?
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        FTC is a robotics competition for students in grades 7-12.
                                        Teams design, build, and program robots to compete in an alliance format against other teams.
                                    </p>
                                    <Link href="https://www.firstinspires.org/robotics/ftc" target="_blank">
                                        <div className="mt-6 flex h-16 items-center justify-center rounded-full bg-blue-800 text-xl duration-150 hover:bg-blue-700 ">
                                            <p className="font-normal text-white">
                                                Learn more about <b className="font-bold">FIRST Tech Challenge</b>
                                            </p>
                                        </div>
                                    </Link>
                                </div>

                                {/* What is this year's game about? */}
                                <div className="w-full space-y-4 rounded-5xl bg-white/10 p-8 font-light ring-1 ring-white/20 ">
                                    <h2 className="text-2xl font-bold text-blue-400">
                                        What is this year&apos;s game about?
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        This years game is <b className="font-bold text-white">DECODE</b>!
                                        In DECODE, teams must navigate their robots through a complex field to decode patterns,
                                        collect game pieces, and score points by placing them in specific zones.
                                        The game combines strategy, precision driving, and autonomous programming challenges.
                                    </p>
                                    <Link href="https://www.firstinspires.org/robotics/ftc/game-and-season" target="_blank">
                                        <div className="mt-6 flex h-16 items-center justify-center rounded-full bg-blue-800 text-xl duration-150 hover:bg-blue-700">
                                            <p className="font-normal text-white">
                                                Learn more about <b className="font-bold">DECODE</b>
                                            </p>
                                        </div>
                                    </Link>
                                </div>

                                {/* How can I volunteer? */}
                                <div className="w-full space-y-4 rounded-5xl bg-white/10 p-8 font-light ring-1 ring-white/20 ">
                                    <h2 className="text-2xl font-bold text-blue-400">
                                        HOW CAN I VOLUNTEER?
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        We welcome volunteers to help with our tournaments and events!
                                        Volunteers can assist with setup, judging, refereeing, or general event support.
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        <Link href="/volunteer">
                                            <div className="flex h-16 items-center justify-center rounded-full bg-blue-800 text-xl duration-150 hover:bg-blue-700">
                                                <p className="font-normal text-white">
                                                    Register to <b className="font-bold">Volunteer</b>
                                                </p>
                                            </div>
                                        </Link>
                                        <Link href="https://www.firstinspires.org/community/volunteers/roles#first_tech_challenge" target="_blank">
                                            <div className="flex h-16 items-center justify-center rounded-full bg-blue-800 text-xl duration-150 hover:bg-blue-700">
                                                <p className="font-normal text-white">
                                                    View Volunteer <b className="font-bold">Role Descriptions</b>
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className="w-full space-y-4 rounded-5xl bg-white/10 p-8 font-light ring-1 ring-white/20 ">
                                    <h2 className="text-2xl font-bold text-blue-400">
                                        Where is the TEAM GUIDE?
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        The team guide contains all essential information for participating teams including
                                        detailed tournament schedule, match times, pit assignments, venue layout, parking information,
                                        safety protocols, inspection procedures, and important reminders for the day of the event.
                                    </p>
                                    <Link href="/teamguide">
                                        <div className="mt-6 flex h-16 items-center justify-center rounded-full bg-blue-800 text-xl duration-150 hover:bg-blue-700">
                                            <p className="font-normal text-white">
                                                View the <b className="font-bold">Team Guide</b>
                                            </p>
                                        </div>
                                    </Link>
                                </div>

                                {/* Facebook Event Link */}
                                <div className="w-full sçpace-y-4 rounded-5xl bg-white/10 p-8 font-light ring-1 ring-white/20 ">
                                    <h2 className="text-2xl font-bold text-blue-400">
                                        Facebook Event Page
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        Visit our Facebook event page for the latest tournament updates, announcements, and to stay connected with the event!
                                    </p>
                                    <Link href="https://www.facebook.com/events/818287127870931/" target="_blank">
                                        <div className="mt-6 flex h-16 items-center justify-center rounded-full bg-blue-800 text-xl duration-150 hover:bg-blue-700">
                                            <p className="font-normal text-white">
                                                View Tournament <b className="font-bold">Event Page</b>
                                            </p>
                                        </div>
                                    </Link>
                                </div>

                            </div>

                            <Colors />
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
        </>
    )
}
