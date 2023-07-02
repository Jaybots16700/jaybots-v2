import Head from 'next/head'
import Link from 'next/link'

import React, { useState } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard"

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { MemberHeader } from '@/components/Header'
import Colors from '@/components/Colors'


export function Member({member, bio, links}) {

  var title = "Member of the Jaybots!"
  
  if(member.title){
    title = (member.title + " of the Jaybots!")
  }

  const [copied, setCopied] = useState(undefined)

  function handleCopy(text) {
    setCopied(text)
    setTimeout(() => {
      setCopied(undefined)
    }, 2000)
  }

  return (
    <>
      <Head>
        <title>Jaybots | Anish</title>
      </Head>
      <Nav />
      <main>
        <div className='lg:pl-64 animate-all duration-1000 h-screen overflow-y-auto [perspective:10px] bg-gray-900 scrollbar scrollbar-track-gray-950 scrollbar-thumb-blue-800/50'>
          <MemberHeader member={member} text={title} />

          <div className='w-full py-12 lg:pb-24 text-gray-300 mt-72 font-light text-lg text-justify space-y-8 xl:grid xl:grid-cols-2 xl:gap-12 px-12'>
            <div className='isolate bg-white/5 ring-1 ring-white/10 p-6 rounded-3xl'>
              {bio}
              <Colors />
            </div>

            <div className='isolate bg-white/5 ring-1 ring-white/10 p-6 rounded-3xl'>
              {links.map((link) => (
                <div key={link.name} className='overflow-hidden bg-blue-500 rounded-full h-16 text-xl my-6 hover:bg-blue-800 transition-colors duration-500' target="_blank">
                  {link.url && (
                    <Link href={link.url}
                      className='h-full w-full flex items-center text-center text-white font-light'
                    >
                      <p className='text-center w-full'>
                        {link.name} <b className='font-semibold'>{link.username}</b>
                      </p>
                    </Link>
                  )}
                  {link.copy && (
                    <CopyToClipboard
                      text={link.username}
                      className='h-full w-full flex items-center text-center text-white font-light'
                      onCopy={() => handleCopy(link.username)}
                    >
                      <button>
                        {copied === link.username
                          ? <p className='text-center w-full font-semibold'>Copied!</p>
                          : <p className='text-center w-full'>
                            {link.name} <b className='font-semibold'>{link.username}</b>
                          </p>
                        }
                      </button>
                    </CopyToClipboard>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Footer />

        </div>
      </main>
    </>
  )
}