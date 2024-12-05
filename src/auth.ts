import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "./lib/db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  adapter: MongoDBAdapter(client),
})
