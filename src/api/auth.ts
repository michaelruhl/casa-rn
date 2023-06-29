import axios from 'axios';

export default axios.create({
  // baseURL would be the production URL of server
  // every time ngrok is run, unique URL is given and so this key will need to be updated each time
  baseURL: 'https://042f-2607-f7a0-d-f001-f31d-1beb-5748-6bd5.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
