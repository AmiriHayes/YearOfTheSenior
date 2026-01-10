import { Redis } from '@upstash/redis'
const redis = Redis.fromEnv()

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  // CORS
  response.setHeader('Access-Control-Allow-Credentials', true)
  response.setHeader('Access-Control-Allow-Origin', '*') // Allows localhost and other sites
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  response.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')

  if (request.method === 'OPTIONS') {
    response.status(200).end()
    return
  }

  try {
    const { email } = request.body;

    if (!email || !email.includes('@')) {
      return response.status(400).json({ error: 'Valid email required' });
    }
    await redis.sadd('subscribers', email);

    return response.status(200).json({ message: 'Email saved!' });
  } catch (error) {
    // return response.status(500).json({ error: 'Failed to save to database' });
    return response.status(500).json({ error: err.message })
  }
}