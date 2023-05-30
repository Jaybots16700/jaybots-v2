import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaybots | John Jay Robotics</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>
      <Header />
      <main className='flex items-center justify-center'>
        <div className='invisible w-0 lg:w-64 flex-none transition-all duration-1000' />
        <div className='w-full'>
          <Hero />
          <PrimaryFeatures />
          <SecondaryFeatures />
          <CallToAction />
          <Reviews />
          <Pricing />
          <Faqs />
        </div>
      </main>
      <Footer />
    </>
  )
}
