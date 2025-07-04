import { connectToDatabase } from '../../lib/db.ts'

export default async function handler(req, res) {
  const { db } = await connectToDatabase('main')
  const outreachCol = db.collection('outreach')
  const historyCol = db.collection('outreach_history')

  // Helper to log history
  async function logHistory({ description, user, outreach, categories }) {
    await historyCol.insertOne({
      timestamp: new Date().toISOString(),
      description,
      user,
      outreach,
      categories,
    })
  }

  if (req.method === 'GET') {
    // Return all outreach data
    const outreach = await outreachCol.find({}).toArray()
    res.status(200).json(outreach)
  } else if (req.method === 'POST') {
    // Add new event or season
    const { item, user, description, categories } = req.body
    if (!item || !user || !description) {
      return res.status(400).json({ error: 'Missing fields' })
    }
    await outreachCol.insertOne(item)
    await logHistory({
      description,
      user,
      outreach: await outreachCol.find({}).toArray(),
      categories,
    })
    res.status(201).json({ success: true })
  } else if (req.method === 'PUT') {
    // Edit event or season
    const { item, user, description, categories } = req.body
    if (!item || !item._id || !user || !description) {
      return res.status(400).json({ error: 'Missing fields' })
    }
    const { _id, ...rest } = item
    await outreachCol.updateOne({ _id }, { $set: rest })
    await logHistory({
      description,
      user,
      outreach: await outreachCol.find({}).toArray(),
      categories,
    })
    res.status(200).json({ success: true })
  } else if (req.method === 'DELETE') {
    // Delete event or season
    const { _id, user, description, categories } = req.body
    if (!_id || !user || !description) {
      return res.status(400).json({ error: 'Missing fields' })
    }
    await outreachCol.deleteOne({ _id })
    await logHistory({
      description,
      user,
      outreach: await outreachCol.find({}).toArray(),
      categories,
    })
    res.status(200).json({ success: true })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
