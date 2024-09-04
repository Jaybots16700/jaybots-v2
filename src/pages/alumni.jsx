import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

import { alumni } from '@/config'
import Colors from '@/components/Colors'

export default function Alumni() {
  return (
    <>
      <Head>
        <title>Jaybots | Alumni</title>
      </Head>
      <Nav current="Alumni" />
      <main>
        <div className="animate-all z-50 flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll bg-black scrollbar scrollbar-track-slate-900 scrollbar-thumb-blue-900 lg:pl-64">
          <Header
            title="Alumni"
            beforeBold="Meet our "
            bold="distinguished"
            afterBold=" alumni."
          />

          <div className="mt-24 flex w-full justify-center text-gray-400 lg:pb-24">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {alumni.map((alum) => (
                <div
                  key={alum.name}
                  className="group w-72 [perspective:5000px]"
                >
                  <div className="relative h-full w-full  text-gray-300 transition-all duration-1000 [backface-visibility:hidden] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] motion-reduce:duration-0">
                    <div className="h-full w-full overflow-hidden rounded-xl bg-slate-900 ring-1 ring-blue-800 [backface-visibility:hidden]">
                      <div className="flex h-96 items-start justify-center">
                        <Image
                          src={alum.image}
                          height={384}
                          width={288}
                          alt={alum.name}
                          className="border-b-4 border-gray-600"
                        />
                      </div>
                      <div className="w-full space-y-1 p-4 text-center">
                        <div className="mb-2 border-b-2 border-gray-500 pb-1 text-2xl font-bold text-white">
                          {alum.name}
                        </div>
                        <div className="space-y-1 whitespace-nowrap text-center text-xl font-semibold">
                          {alum.year && <div>Class of {alum.year}</div>}
                          {alum.motion && (
                            <div className="overflow-hidden motion-safe:rounded-full">
                              <span className="w-fit animate-alumni-slide-infinite px-0 motion-reduce:hidden">
                                <Titles titles={alum.title} />
                              </span>
                              <span className="motion-safe:hidden">
                                <Titles titles={alum.altTitle} />
                              </span>
                            </div>
                          )}
                          {!alum.motion && <Titles titles={alum.title} />}
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 h-full w-full overflow-hidden rounded-xl bg-slate-900 ring-1 ring-blue-800 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className="h-full w-full text-center">
                        <p className="m-4 mb-0 border-b-2 border-gray-500 pb-1 text-2xl font-bold">
                          {alum.name}
                        </p>
                        <div className="text-md h-[450px] w-full overflow-y-auto bg-slate-900 p-4 pt-2 font-light scrollbar-thin scrollbar-thumb-blue-900/70 hover:scrollbar-thumb-blue-600">
                          {alum.bio}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <Link
                href="/team"
                className="group h-full w-72 rounded-xl bg-slate-900 text-gray-300 ring-1 ring-blue-800 transition-all duration-300 hover:bg-blue-950"
              >
                <div className="flex h-[388px] w-full items-center border-b-4 border-gray-600">
                  <Image
                    src="https://cdn.jaybots.org/logo/birdtransparent.png"
                    width={288}
                    height={384}
                    alt="Alumni logo"
                  />
                </div>
                <div className="w-full space-y-1 p-4 text-center">
                  <div className="mb-2 border-b-2 border-gray-500 pb-1 text-2xl font-bold text-white">
                    Members
                  </div>
                  <div className="overflow-hidden text-center text-xl font-semibold">
                    Meet our Team Members
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}

function Titles({ titles }) {
  return (
    <p>
      {titles.map((title, index) => (
        <strong key={title} className=" font-semibold">
          {' '}
          {title}
          {titles.length == index + 2 && <> &</>}
          {titles.length > index + 2 && <>,</>}
        </strong>
      ))}
    </p>
  )
}
