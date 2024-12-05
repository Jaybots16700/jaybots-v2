'use server'
import { connectToDatabase } from './db'

export async function getOutreachImages() {
  const { db } = await connectToDatabase('main')
  return await db.collection('outreach').find({}).toArray()
}
