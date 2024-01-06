import Link from 'next/link'
import Image from 'next/image'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faX,
 } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@/components/Container'
import { NavLinks } from '@/components/NavLinks'


function NavBar({current}) {
  return (        
    <div className=''>
      <Link href="/" aria-label="Home"  className="flex justify-center py-2">
        <Image
          src='https://cdn.jaybots.org/logo/logo.png'
          width={175}
          height={175}
          className='rounded-full'
          alt='logo'
          />
      </Link>
      <div className="grid grid-cols-1 mt-2">
        <NavLinks current={current} />
      </div>
    </div>
  )
}

export function Nav({current}) {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between">
          <div className='fixed p-4 z-0 justify-center w-64 -left-64 lg:left-0 h-full bg-blue-950/60 transition duration-1000 overflow-auto scrollbar-thin scrollbar-thumb-blue-900/40'>
            <NavBar current={current} />
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={open ? "z-50 fixed flex rounded-br-lg left-0 items-center justify-center w-12 h-10 bg-slate-950 text-gray-400 hover:text-white transition-all duration-300"
                      : "z-50 fixed flex rounded-br-lg left-0 items-center justify-center w-12 h-10 bg-slate-950 text-gray-400 hover:text-white hover:bg-blue-950 transition-all duration-300 border-r-2 border-b-2 border-blue-800 hover:border-blue-600"}
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
                              transition: { duration: 0.1},
                            }}
                            className='fixed p-4 z-20 justify-center w-64 h-full bg-slate-950 transition-translation duration-1000 overflow-auto scrollbar-thin scrollbar-thumb-blue-900 hover:scrollbar-thumb-blue-800 scrollbar-track-slate-950'
                          >
                            <NavBar current={current} />
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
