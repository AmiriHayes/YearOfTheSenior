import { Redis } from '@upstash/redis'
const redis = Redis.fromEnv()

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = request.body;

    if (!email || !email.includes('@')) {
      return response.status(400).json({ error: 'Valid email required' });
    }
    await redis.sadd('subscribers', email);

    return response.status(200).json({ message: 'Email saved!' });
  } catch (error) {
    return response.status(500).json({ error: 'Failed to save to database' });
  }
}