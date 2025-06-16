import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());

const API_KEY = '5a96822e0f564b84a9dc7732690a0183.cb41d2992e6cbab6'; // Replace with your actual API key

app.get('/api/clients', async (req, res) => {
  try {
    const response = await axios.get('https://api.copilot.app/v1/clients?limit=100', {
      headers: {
        'X-API-KEY': API_KEY,
        Accept: 'application/json',
      },
    });
    res.json(response.data);
  } catch (err) {
    console.error('Proxy error:', err.message);
    res.status(err.response?.status || 500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log('✅ Proxy server running at http://localhost:3001');
});
