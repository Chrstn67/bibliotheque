import app from './app/index.server.js';
import { config } from 'dotenv';
config();

const PORT = process.env.PORT ?? 3000;
const VERSION = process.env.VERSION || 1;

app.listen(PORT, () => console.log(`✨ Server ready in development mode: http://localhost:${PORT})`));