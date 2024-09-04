import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Nav } from '@/components/Nav'
import Head from 'next/head'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Jaybots | John Jay Robotics</title>
      </Head>
      <Nav />
      <main>
        <div className="animate-all z-50 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 lg:pl-64">
          <Header
            title="Team Member Dashboard"
            bold="Jaybots"
            afterBold=" - FTC Robotics Team #16700"
          />

          {/* <div className="w-full pb-12 text-gray-400 lg:pb-24">
            <div className="flex w-full flex-col space-y-6 p-6 text-center text-xl sm:px-12">
              <h2 className="text-5xl font-bold text-gray-200 xl:text-6xl">
                Who are we?
              </h2>
              <div className="flex w-full justify-center">
                <p className="max-w-4xl leading-8">
                  We are the Jaybots - This is our fifth year competing in{' '}
                  <Link
                    href="https://www.firstinspires.org/robotics/ftc/"
                    className={linkStyle}
                    target="_blank"
                  >
                    FTC
                  </Link>
                  . After making it to the regional competition four years in a
                  row, we are aiming to make it even further next year . Join us
                  on our journey!
                </p>
              </div>
            </div>
            <JoinToday />

            <div className="relative isolate grid w-full grid-cols-1 gap-4 p-6 text-center text-lg font-semibold sm:grid-cols-2 sm:px-12 sm:text-sm md:text-xl">
              <Link
                ref={instaBtnRef}
                href="https://www.instagram.com/johnjayroboticsclub/"
                className={clsx({
                  'group flex h-12 items-center justify-center overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/10 duration-500 hover:scale-x-[103%] hover:scale-y-110 hover:font-bold hover:text-white hover:ring-white/25 xl:hover:scale-x-[101%]': true,
                  '-translate-x-64 opacity-0': !instaBtnVis,
                })}
                target="_blank"
              >
                <span className="absolute h-full w-full items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 opacity-0 duration-500 group-hover:opacity-100" />
                <FontAwesomeIcon icon={faInstagram} className="z-10 mr-2 h-8" />
                <p className="z-10">@JohnJayRoboticsClub</p>
              </Link>
              <Link
                ref={ytBtnRef}
                href="https://www.youtube.com/@jaybots16700"
                className={clsx({
                  'flex h-12 items-center justify-center rounded-lg bg-gray-800 ring-1 ring-white/10 duration-500 hover:scale-x-[103%] hover:scale-y-110 hover:bg-red-600 hover:font-bold hover:text-white hover:ring-white/25 xl:hover:scale-x-[101%]': true,
                  'translate-x-64 opacity-0': !ytBtnVis,
                })}
                target="_blank"
              >
                <FontAwesomeIcon icon={faYoutube} className="mr-2 h-8" />
                <p>Jaybots #16700</p>
              </Link>
              <Link
                ref={xBtnRef}
                href="https://twitter.com/RoboticsJay"
                className={clsx({
                  'flex h-12 items-center justify-center rounded-lg bg-gray-800 ring-1 ring-white/10 duration-500 hover:scale-x-[103%] hover:scale-y-110 hover:bg-black hover:font-bold hover:text-white hover:ring-white/25 xl:hover:scale-x-[101%]': true,
                  '-translate-x-64 opacity-0': !xBtnVis,
                })}
                target="_blank"
              >
                <FontAwesomeIcon icon={faXTwitter} className="mr-2 h-8" />
                <p>@RoboticsJay</p>
              </Link>
              <Link
                ref={sponsorBtnRef}
                href="https://jaybotsboosters.org/sponsors"
                className={clsx({
                  'flex h-12 items-center justify-center rounded-lg bg-gray-800 ring-1 ring-white/10 duration-500 hover:scale-x-[103%] hover:scale-y-110 hover:bg-blue-600 hover:font-bold hover:text-white hover:ring-white/25 xl:hover:scale-x-[101%]': true,
                  'translate-x-64 opacity-0': !sponsorBtnVis,
                })}
                target="_blank"
              >
                <FontAwesomeIcon icon={faCommentsDollar} className="mr-2 h-8" />
                <p>Our Sponsors!</p>
              </Link>
            </div>

            <div
              ref={mediaRef}
              className="relative isolate h-fit w-full space-y-8 sm:flex sm:h-[42rem] sm:justify-between sm:space-x-12 xl:h-[50rem]"
            >
              <div
                className={clsx({
                  'h-fit w-full items-center duration-500 sm:flex sm:h-full sm:w-min': true,
                  '-translate-x-full': !mediaVis,
                })}
              >
                <div className="h-fit w-full bg-white/5 p-12 ring-1 ring-white/10 sm:w-min sm:rounded-r-4xl">
                  <h2 className="w-fit border-b-8 border-white pb-3 pr-16 text-5xl font-bold text-gray-100 sm:text-6xl md:mr-20 md:text-7xl xl:text-8xl">
                    Media
                  </h2>
                  <p className="mt-4 text-base font-light text-gray-300 md:text-lg">
                    A visual tapestry that showcases the remarkable moments of
                    triumph, camaraderie, and innovation captured through
                    captivating photos, immortalizing the unwavering dedication,
                    creativity, and teamwork that defines our exceptional
                    robotics team.
                  </p>
                  <div className="mt-4 flex">
                    <Link
                      href="/media"
                      target="_blank"
                      className="group text-sm font-semibold leading-6 text-indigo-400 hover:font-bold"
                    >
                      View all Media{' '}
                      <span aria-hidden="true" className="">
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className={clsx({
                  'relative mx-8 h-[32rem] overflow-hidden rounded-2xl pl-4 pr-4 duration-500 sm:mx-0 sm:h-full sm:rounded-r-none sm:pr-8': true,
                  'translate-x-full': !mediaVis,
                })}
              >
                <ReviewColumn
                  reviews={allImages}
                  msPerPixel={10}
                  caption={false}
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray-700" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-700" />
              </div>

              <Colors />
            </div>

            <div className="mt-20 aspect-video w-full px-12">
              <iframe
                className=" h-full w-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/IkMCntCRsLE?si=jN2frnBaT_ovuywc&amp;clip=UgkxQFFDhOqml9jQqJzNyPtE9tClnhFLQ7JG&amp;clipt=EMGgsgcYh46zBw"
                title="Jaybot's Plane is Something Else"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                // allowfullscreen
              ></iframe>
            </div>

            <div
              id="contact"
              className="text:base relative mt-8 w-full space-y-4 px-4 text-center font-light sm:text-xl"
            >
              <h2 className="text-4xl font-bold text-gray-200">Contact Us!</h2>
              <p>
                Like what you see?{' '}
                <Link
                  href="https://interest.jaybots.org"
                  className={linkStyle}
                  target="_blank"
                >
                  Join Today!
                </Link>{' '}
                Feel free to contact us at{' '}
                <Link
                  href="mailto:interest@jaybots.org?subject=Question"
                  className={linkStyle}
                  target="_blank"
                >
                  interest@jaybots.org
                </Link>
              </p>
              <p>
                Interested in becoming a{' '}
                <Link
                  href="https://jaybotsboosters.org/sponsor"
                  className={linkStyle}
                  target="_blank"
                >
                  sponsor
                </Link>
                ? You can reach us at{' '}
                <Link
                  href="mailto:joe@jaybots.org?subject=Sponsorship Question"
                  className={linkStyle}
                  target="_blank"
                >
                  joe@jaybots.org
                </Link>
              </p>
              <p>
                If there&apos;s anything else that you would like to discuss,
                send us an email at{' '}
                <Link
                  href="mailto:hello@jaybots.org"
                  className={linkStyle}
                  target="_blank"
                >
                  hello@jaybots.org
                </Link>
              </p>
            </div>
          </div> */}

          <Footer />
        </div>
      </main>
    </>
  )
}
