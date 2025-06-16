import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.copilot.app/v1/clients?limit=100', {
      headers: {
        'X-API-KEY': process.env.API_KEY,
        'accept': 'application/json',
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('API call failed:', error.response?.data || error.message);
    res.status(500).json({ error: 'A server error has occurred' });
  }
}
