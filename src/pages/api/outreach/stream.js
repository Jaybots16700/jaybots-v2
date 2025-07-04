// Store connected clients
let clients = new Set()

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Set headers for SSE
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Cache-Control',
    })

    // Send initial connection message
    res.write(
      `data: ${JSON.stringify({
        type: 'connected',
        message: 'Connected to outreach stream',
      })}\n\n`
    )

    // Add this client to the set
    const clientId = Date.now()
    clients.add({ id: clientId, res })

    // Remove client when connection closes
    req.on('close', () => {
      clients.delete({ id: clientId, res })
    })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}

// Function to broadcast updates to all connected clients
export function broadcastUpdate(type, data) {
  const message = JSON.stringify({ type, data })
  clients.forEach((client) => {
    try {
      client.res.write(`data: ${message}\n\n`)
    } catch (error) {
      // Remove disconnected clients
      clients.delete(client)
    }
  })
}
