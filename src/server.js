import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT;

const server = app.listen(PORT, async () => {
  console.log(PORT)
});

export default server;
