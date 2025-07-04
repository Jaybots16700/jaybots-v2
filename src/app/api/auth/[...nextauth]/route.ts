import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import { clientPromise } from '@/lib/db'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: 'Jaybots',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (
          credentials?.username === 'jaybots' &&
          credentials?.password === '#jaybots2world2025'
        ) {
          return {
            id: 'jaybots-user',
            name: 'Jaybots User',
            email: 'jaybots@example.com',
          }
        }
        return null
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise, {
    databaseName:
      process.env.NODE_ENV === 'development' ? 'dev-jaybots-v2' : 'jaybots-v2',
  }),
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' },
  secret: process.env.AUTH_SECRET,
})

export { handler as GET, handler as POST }
