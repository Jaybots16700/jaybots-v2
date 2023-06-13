import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'

import { linkStyle } from '@/config'

export default function Donate() {
  return (
    <>
      <Head>
        <title>Jaybots | Donate</title>
      </Head>
      <Nav current="Donate" />
      <main className='flex items-center justify-center'>
        <div className='invisible w-0 lg:w-64 flex-none transition-all duration-1000' />
        
        <div className='w-full'>
        <Header title="Donate" beforeBold="Parts are " bold="expensive" afterBold=", consider donating today!"/>

          <div className='grid grid-cols-1 xl:grid-cols-2 space-x-6 w-full h-full p-12 bg-zinc-800 text-white text-center text-lg font-semibold space-y-6'>
            
            <div className='space-y-4 w-full'>
              <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>How Can You Help?</h1>
              <p>As a robotics team, we are consistently improving our robot for the best result in competitive matches and looking for new ways to spread STEM in our community. Broken parts, registration fees, and transportation fees all take bites out of the team coffers, and we need your support to continue to improve as a <Link href="https://www.firstinspires.org/" className={linkStyle}>FIRST</Link> robotics team.</p>
              <p>Having a larger pool of funds will help our team in lots of ways. We will put your donations towards:</p>
              <ul className='list-disc font-light text-start space-y-4'>
                <li>Getting better equipment and parts for the team so that we can build better robots and perform better in competitions.</li>
                <li>Paying for transportation, registration, and other fees needed for the team to compete.</li>
                <li>Organizing STEM activities for community outreach</li>
              </ul>
              <p>If you are interested in helping us do the best we can as both a robotics team and as a part of our community, please consider donating to the Jaybots!</p>
            </div>

            <div className='space-y-8'>
              <div className='w-full bg-slate-900 rounded-5xl p-8 font-light space-y-4'>
                <p>Corporations should check out our <Link
                  href="https://jaybotsboosters.org/sponsor"
                  className={linkStyle}>
                    Corporate Sponsorship Plans
                  </Link> ranging from $100 to $5000.
                </p>
                <p>
                  <b className='font-bold'>Benefits Include:</b> Your logo on our <b className='font-bold'>shirts, robot, banner,</b>  & <Link href="https://jaybotsboosters.org/sponsors" className={linkStyle}>website</Link>, as well as <b className='font-bold'>sponsored social media posts</b> & much more!
                </p>
                <Link
                  href="https://jaybotsboosters.org/sponsor">
                    <div className='bg-blue-500 rounded-full h-16 text-xl flex items-center justify-center mt-4 hover:bg-blue-700 transition-colors duration-500'>
                      <p>Learn more at <b className='font-bold'>JaybotsBoosters.org</b></p>
                    </div>
                </Link>
              </div>

              <div className='w-full bg-slate-900 rounded-5xl p-8 pb-6 font-light'>
                <p>Donations accepted via <b className='font-bold'>PayPal</b>. (Account not required!)</p>
                <Link
                  href="https://www.paypal.com/donate/?hosted_button_id=9ZWAFZYN8NTCS">
                    <div className='bg-blue-500 rounded-full h-16 text-xl flex items-center justify-center my-6 hover:bg-blue-700 transition-colors duration-500'>
                      <Image 
                        src="/images/paypal.png"
                        height={200}
                        width={130}
                        alt="PayPal"
                      />
                    </div>
                </Link>
                <p className='text-sm'>Your donation will be sent to the <Link
                  href="https://jaybotsbooster.org"
                  className={linkStyle}>
                    Jaybots Booster Club
                  </Link>, which is a <b className='font-bold'>501(c)3 organization</b>. All donations are <b className='font-bold'>tax deducatble</b>.</p>
              </div>
            </div>

          </div>
          <Footer />
        </div>
      </main>
    </>
  )
}

function Titles({titles}){
  return(
    <p>
      <b className=' font-semibold'>Former </b>
      {titles.map((title, index) => (
        <b key={title} className=' font-semibold'> {title}
        {titles.length == index+2 && 
          <> &</>
        }
        {titles.length > index+2 && 
          <>,</>
        }
        </b>
      ))}
    </p>
  )
}