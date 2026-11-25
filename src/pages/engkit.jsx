import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

export default function Engkit() {
  return (
    <>
      <Head>
        <title>Jaybots | Engineering Kits</title>
      </Head>

      <Nav />

      <div className="animate-all z-50 flex min-h-screen w-full flex-col overflow-x-hidden bg-black lg:pl-64">
        <Header
          title="Order an Engineering Kit Now!"
          beforeBold="Learn and play with"
          bold=" JayLabs"
          afterBold=" Engineering Kits"
        />

        <main className="w-full text-gray-400 lg:pb-24">
          <div className="relative isolate w-full space-y-6 p-8 text-lg font-semibold text-gray-300 md:p-12">

            <h1 className="mb-4 text-center text-2xl font-mono text-white sm:text-3xl md:text-4xl">
              Latest Kit:
            </h1>

            {/* Kit image and product information */}
            <div className="flex flex-col items-start gap-8 md:flex-row">

              {/* Image on the left */}
              <img
                src="https://res.cloudinary.com/jaybots/image/upload/v1795634947/Screenshot_2026-11-25_at_14.29.03_vvlr9r.png"
                alt="JayLabs Engineering Kit"
                className="mt-0 w-full max-w-xl rounded-xl border-8 border-gray-900 object-contain"
              />

              {/* Product information on the right */}
              <div className="flex flex-col items-start gap-4">

                <h2 className="text-2xl font-bold text-white">
                  Launcher!
                </h2>

                {/* Price */}
                <div className="w-fit rounded-xl border border-gray-700 bg-gray-900 p-5">
                  <p className="text-sm text-gray-400">
                    Price
                  </p>

                  <p className="text-2xl font-bold text-white">
                    $15
                  </p>
                </div>

                {/* Description */}
                <p className="text-base font-normal text-gray-400">
                  Build your very own engineering kit.
                </p>

                {/* Buy button */}
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=DBNCZM99KA84G"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-fit rounded-full bg-blue-600 px-8 py-4 text-center text-xl font-semibold text-white transition hover:bg-blue-700"
                >
                  Buy Here
                </a>

              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}