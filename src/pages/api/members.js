import { connectToDatabase } from '../../lib/db.ts'

const handler = async (req, res) => {
  const { db } = await connectToDatabase()
  return res.json(await db.collection('members').find({}).toArray())
}

export default handler
