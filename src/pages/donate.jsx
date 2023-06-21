import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'
import Colors from '@/components/Colors'

import { linkStyle } from '@/config'


export default function Donate() {
  return (
    <>
      <Head>
        <title>Jaybots | Donate</title>
      </Head>
      <Nav current="Donate" />
      <main className='flex items-center justify-center lg:pl-64 animate-all duration-1000'>
        
        <div className='w-full'>
        <Header title="Donate" beforeBold="Parts are " bold="expensive" afterBold=", consider donating today!"/>

          <div className='grid grid-cols-1 xl:grid-cols-2 space-x-16 w-full h-full p-12 bg-gray-900 text-gray-400 text-center text-lg font-semibold space-y-6'>
            
            <div className='space-y-4 w-full'>
              <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-gray-200'>How Can You Help?</h1>
              <p>As a robotics team, we are consistently improving our robot for the best result in competitive matches and looking for new ways to spread STEM in our community. Broken parts, registration fees, and transportation fees all take bites out of the team coffers, and we need your support to continue to improve as a <Link href="https://www.firstinspires.org/" className={linkStyle}>FIRST</Link> robotics team.</p>
              <p>Having a larger pool of funds will help our team in lots of ways. We will put your donations towards:</p>
              <ul className='list-disc font-light text-start space-y-4 text-gray-300'>
                <li>Getting better equipment and parts for the team so that we can build better robots and perform better in competitions.</li>
                <li>Paying for transportation, registration, and other fees needed for the team to compete.</li>
                <li>Organizing STEM activities for community outreach</li>
              </ul>
              <p>If you are interested in helping us do the best we can as both a robotics team and as a part of our community, please consider donating to the Jaybots!</p>
            </div>

            <div className='space-y-8 relative isolate'>
              <div className='w-full bg-white/5 ring-1 ring-white/10 rounded-5xl p-8 font-light space-y-4'>
                <p>Corporations should check out our <Link
                  href="https://jaybotsboosters.org/sponsor"
                  className={linkStyle}>
                    Corporate Sponsorship Plans
                  </Link> ranging from $100 to $5000.
                </p>
                <p>
                  <b className='font-bold text-gray-200'>Benefits Include:</b> Your logo on our <b className='font-bold text-gray-200'>shirts, robot, banner,</b>  & <Link href="https://jaybotsboosters.org/sponsors" className={linkStyle}>website</Link>, as well as <b className='font-bold text-gray-200'>sponsored social media posts</b> & much more!
                </p>
                <Link
                  href="https://jaybotsboosters.org/sponsor">
                    <div className='bg-blue-400 rounded-full h-16 text-xl flex items-center justify-center mt-4 hover:bg-blue-300 transition-colors duration-500'>
                      <p className='text-blue-900 font-normal'>Learn more at <b className='font-bold'>JaybotsBoosters.org</b></p>
                    </div>
                </Link>
              </div>

              <div className='w-full bg-white/5 ring-1 ring-white/10 rounded-5xl p-8 pb-6 font-light'>
                <p>Donations accepted via <b className='font-bold  text-gray-200'>PayPal</b>. (Account not required!)</p>
                <Link
                  href="https://www.paypal.com/donate/?hosted_button_id=9ZWAFZYN8NTCS">
                    <div className='bg-blue-400 rounded-full h-16 text-xl flex items-center justify-center my-6 hover:bg-blue-300 transition-colors duration-500'>
                      <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
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
                  </Link>, which is a <b className='font-bold  text-gray-200'>501(c)3 organization</b>. All donations are <b className='font-bold text-gray-200'>tax deducatble</b>.</p>
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