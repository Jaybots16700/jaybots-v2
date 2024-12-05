import { connectToDatabase } from '../../lib/db.ts'

export default async (req, res) => {
  const { db } = await connectToDatabase('main')

  return res.json(await db.collection('outreach').find({}).toArray())
}
