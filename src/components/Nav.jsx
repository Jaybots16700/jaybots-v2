import Link from 'next/link'
import Image from 'next/image'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@/components/Container'
import { NavLinks } from '@/components/NavLinks'

function NavBar({ current }) {
  return (
    <div className="">
      <Link href="/" aria-label="Home" className="flex justify-center py-2">
        <Image
          src="https://cdn.jaybots.org/logo/logo.png"
          width={175}
          height={175}
          className="rounded-full"
          alt="logo"
        />
      </Link>
      <span className="mt-2 grid grid-cols-1">
        <NavLinks current={current} />
      </span>
    </div>
  )
}

export function Nav({ current }) {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between">
          <div className="fixed -left-64 z-0 h-full w-64 justify-center overflow-auto bg-blue-950/60 p-4 transition duration-1000 scrollbar-thin scrollbar-thumb-blue-900 lg:left-0">
            <NavBar current={current} />
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={
                      open
                        ? 'fixed left-0 z-50 flex h-10 w-12 items-center justify-center rounded-br-lg bg-slate-950 text-gray-400 transition-all duration-300 hover:text-white'
                        : 'fixed left-0 z-50 flex h-10 w-12 items-center justify-center rounded-br-lg border-b-2 border-r-2 border-blue-800 bg-slate-950 text-gray-400 transition-all duration-300 hover:border-blue-600 hover:bg-blue-950 hover:text-white'
                    }
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <FontAwesomeIcon icon={faX} className="h-6 w-6" />
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
                            initial={{ opacity: 1, x: -256 }}
                            animate={{ opacity: 1, x: 0 }}
                            // exit={{
                            //   opacity: 1,
                            //   x: -64,
                            //   transition: { duration: 0.1},
                            // }}
                            className="transition-translation fixed z-20 h-full w-64 justify-center overflow-auto bg-slate-950 p-4 duration-200 ease-linear scrollbar-thin scrollbar-track-slate-950 scrollbar-thumb-blue-900 hover:scrollbar-thumb-blue-800"
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
