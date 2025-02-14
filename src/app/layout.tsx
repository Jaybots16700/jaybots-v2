import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/tailwind.css'
import { Suspense } from 'react'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jaybots | John Jay Robotics',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head></head>
      <body
        className={`${inter.className} min-h-screen bg-slate-800 text-white`}
      >
        <Suspense>
          <SessionProvider>{children}</SessionProvider>
        </Suspense>
      </body>
    </html>
  )
}
