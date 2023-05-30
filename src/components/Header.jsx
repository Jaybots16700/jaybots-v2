import Link from 'next/link'
import Image from 'next/image'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faX,
 } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { NavLinks } from '@/components/NavLinks'
import { useState } from 'react'
import clsx from 'clsx'

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

function Nav() {
  return (        
    <div>
      <Link href="/" aria-label="Home"  className="flex justify-center pt-4">
        <Image
          src='/images/logo.png'
          width={175}
          height={175}
          className='rounded-full'
          />
      </Link>
      <div className="grid grid-cols-1 mt-2">
        <NavLinks />
      </div>
    </div>
  )
}

export function Header() {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between">
          <div className='fixed p-4 z-0  justify-center w-64 -left-64 lg:left-0 h-full bg-slate-900 transition-translation duration-1000'>
            <Nav/>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={open ? "z-50 fixed flex rounded-br-lg left-0 items-center justify-center w-12 h-10 bg-slate-900 text-gray-400 hover:text-white transition-all duration-300" : "z-50 fixed flex rounded-br-lg left-0 items-center justify-center w-12 h-10 bg-slate-900 text-gray-400 hover:text-white hover:bg-blue-800 transition-all duration-300"}
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <FontAwesomeIcon icon={faX} className='h-6 w-6' />
                      ) : (
                        <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        >
                          <Popover.Panel
                            static
                            as={motion.div}
                            initial={{ opacity: 1, x: -64 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{
                              opacity: 1,
                              x: -64,
                              transition: { duration: 1 },
                            }}
                            className='fixed p-4 z-20 justify-center w-64 h-full bg-slate-900 transition-translation duration-1000'
                          >
                            <Nav />
                          </Popover.Panel>
                        </Popover.Overlay>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
    </header>
  )
}
