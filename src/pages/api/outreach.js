import { connectToDatabase } from '../../lib/db.ts'
import { broadcastUpdate } from './outreach/stream.js'

const DEFAULT_CATEGORIES = [
  'Year 6 (2024-2025)',
  'Year 5 (2023-2024)',
  'Year 4 (2022-2023)',
  'Year 3 (2021-2022)',
  'Year 2 (2020-2021)',
  'Year 1 (2019-2020)',
]

// Helper to update categories in a dedicated collection
async function updateCategories(db, categories) {
  const catCol = db.collection('outreach_categories')
  await catCol.updateOne(
    { _id: 'categories' },
    { $set: { categories } },
    { upsert: true }
  )
}

export default async function handler(req, res) {
  const { db } = await connectToDatabase('main')
  const outreachCol = db.collection('outreach')
  const historyCol = db.collection('outreach_history')
  const catCol = db.collection('outreach_categories')

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
    const outreach = await outreachCol.find({}).toArray()
    // Also return categories
    let catDoc = await catCol.findOne({ _id: 'categories' })
    let categories = catDoc?.categories
    if (!categories || !Array.isArray(categories) || categories.length === 0) {
      // Fallback to default if DB is empty
      categories = DEFAULT_CATEGORIES
      await updateCategories(db, categories)
    }
    res.status(200).json({ outreach, categories })
  } else if (req.method === 'POST') {
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
    if (categories) {
      await updateCategories(db, categories)
    }
    broadcastUpdate('outreach_updated', { action: 'created', item })
    res.status(201).json({ success: true })
  } else if (req.method === 'PUT') {
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
    if (categories) {
      await updateCategories(db, categories)
    }
    broadcastUpdate('outreach_updated', { action: 'updated', item })
    res.status(200).json({ success: true })
  } else if (req.method === 'DELETE') {
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
    if (categories) {
      await updateCategories(db, categories)
    }
    broadcastUpdate('outreach_updated', { action: 'deleted', _id })
    res.status(200).json({ success: true })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
