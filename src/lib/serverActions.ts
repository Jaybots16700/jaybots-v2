'use server'
import { ObjectId } from 'mongodb'
import { connectToDatabase } from './db'

export async function getOutreachImages() {
  const { db } = await connectToDatabase('main')
  return await db.collection('outreach').find({}).toArray()
}

export async function setOutreachImage(
  dbCollection: 'Outreach' | 'Media',
  _id: string,
  eventData: {
    title: string
    date: string
    short: string
    image: string
  }
) {
  const { db } = await connectToDatabase('main')
  return await db
    .collection(dbCollection)
    .updateOne(
      { _id: _id as unknown as ObjectId },
      { $set: eventData },
      { upsert: true }
    )
}
