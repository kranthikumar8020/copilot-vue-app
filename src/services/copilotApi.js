//import axios from 'axios';

// Call your local proxy server (running on port 3001)
//const api = axios.create({
  //baseURL: 'http://localhost:3001/api',
//});

//export function getClients() {
  //return api.get('/clients'); // This calls http://localhost:3001/api/clients
//}


import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // no localhost/port — this works in Vercel
});

export function getClients() {
  return api.get('/clients');
}

