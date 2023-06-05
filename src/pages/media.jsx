import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { PhotoGrid } from '@/components/Photos'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header'



// export async function getServerSideProps() {

//   const {google} = require('googleapis');
//   const Photos = require('googlephotos');

//   const oauth2Client = new google.auth.OAuth2('494328507223-n02cuh523lt3ed7q05tt06a80u9o1t28.apps.googleusercontent.com','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');

//   const url = oauth2Client.generateAuthUrl({
//     // 'online' (default) or 'offline' (gets refresh_token)
//     access_type: 'online',

//     scope: "Photos.Scopes.READ_ONLY",
//   });

//   // Send the user to the url from above. Once they grant access they will be redirected to the
//   // the redirect URL above with a query param code in the redirect. Use the code below to get the
//   // access token.

//   const {tokens} = await oauth2Client.getToken(code);

//   // The token from above can be used to initialize the photos library.


//   const reviews = [
//     {
//       title: 'It really works.',
//       body: 'I downloaded Pocket today and turned $5000 into $25,000 in half an hour.',
//       author: 'CrazyInvestor',
//       rating: 5,
//     },
//     {
//       title: 'You need this app.',
//       body: 'I didn’t understand the stock market at all before Pocket. I still don’t, but at least I’m rich now.',
//       author: 'CluelessButRich',
//       rating: 5,
//     },
//     {
//       title: 'This shouldn’t be legal.',
//       body: 'Pocket makes it so easy to win big in the stock market that I can’t believe it’s actually legal.',
//       author: 'LivingDaDream',
//       rating: 5,
//     },
//     {
//       title: 'Screw financial advisors.',
//       body: 'I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.',
//       author: 'JordanBelfort1962',
//       rating: 5,
//     },
//     {
//       title: 'I love it!',
//       body: 'I started providing insider information myself and now I get new insider tips every 5 minutes. I don’t even have time to act on all of them. New Lamborghini is being delivered next week!',
//       author: 'MrBurns',
//       rating: 5,
//     },
//     {
//       title: 'Too good to be true.',
//       body: 'I was making money so fast with Pocket that it felt like a scam. But I sold my shares and withdrew the money and it’s really there, right in my bank account. This app is crazy!',
//       author: 'LazyRich99',
//       rating: 5,
//     },
//     {
//       title: 'Wish I could give 6 stars',
//       body: 'This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.',
//       author: 'SarahLuvzCash',
//       rating: 5,
//     },
//     {
//       title: 'Bought an island.',
//       body: 'Yeah, you read that right. Want your own island too? Get Pocket.',
//       author: 'ScroogeMcduck',
//       rating: 5,
//     },
//     {
//       title: 'No more debt!',
//       body: 'After 2 weeks of trading on Pocket I was debt-free. Why did I even go to school at all when Pocket exists?',
//       author: 'BruceWayne',
//       rating: 5,
//     },
//     {
//       title: 'I’m 13 and I’m rich.',
//       body: 'I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!',
//       author: 'RichieRich',
//       rating: 5,
//     },
//     {
//       title: 'Started an investment firm.',
//       body: 'I charge clients a 3% management fee and just throw all their investments into Pocket. Easy money!',
//       author: 'TheCountOfMonteChristo',
//       rating: 5,
//     },
//     {
//       title: 'It’s like a superpower.',
//       body: 'Every tip Pocket has sent me has paid off. It’s like playing Blackjack but knowing exactly what card is coming next!',
//       author: 'ClarkKent',
//       rating: 5,
//     },
//     {
//       title: 'Quit my job.',
//       body: 'I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!',
//       author: 'GeorgeCostanza',
//       rating: 5,
//     },
//     {
//       title: 'Don’t download this app',
//       body: 'Unless you want to have the best life ever! I am literally writing this from a yacht.',
//       author: 'JeffBezos',
//       rating: 5,
//     },
//   ]
//   return { props: {reviews} }

// }


export default function Media({ reviews }) {

  return (
    <>
      <Head>
        <title>Jaybots | Media</title>
      </Head>
      <Nav current="Media" />
      <main className='flex items-center justify-center'>
        <div className='invisible w-0 lg:w-64 flex-none transition-all duration-1000' />
        
        <div className='w-full'>
          <Header title='Media' bold='Our pics and vids' afterBold=' - check out what we&apos;ve been up to!' />

          <div className='w-full h-full p-12 bg-zinc-800'>

            <PhotoGrid />

          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}
