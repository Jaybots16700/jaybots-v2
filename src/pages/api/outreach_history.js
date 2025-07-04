import { connectToDatabase } from '../../lib/db.ts'

export default async function handler(req, res) {
  const { db } = await connectToDatabase('main')
  const historyCol = db.collection('outreach_history')

  if (req.method === 'GET') {
    const history = await historyCol.find({}).sort({ timestamp: 1 }).toArray()
    res.status(200).json(history)
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
