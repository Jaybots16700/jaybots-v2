import type { Db } from 'mongodb'
import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI)
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')

export const clientPromise =
  process.env.NODE_ENV === 'development' && globalThis.mongoClientPromise
    ? globalThis.mongoClientPromise
    : new MongoClient(process.env.MONGODB_URI, {}).connect()

if (process.env.NODE_ENV === 'development' && !globalThis.mongoClientPromise)
  globalThis.mongoClientPromise = clientPromise

export async function connectToDatabase(
  dbName: string = process.env.NODE_ENV === 'development'
    ? 'dev-jaybots-v2'
    : 'jaybots-v2'
) {
  const client = await clientPromise
  const db = client.db(dbName) as Db

  return {
    client,
    db,
    usersDB: db.collection<{
      name?: string
      email: string
      emailVerified: Date | null
      image?: string
      isAdmin?: boolean
    }>('users'),
  }
}
