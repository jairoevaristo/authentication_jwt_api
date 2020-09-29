import express from 'express';
import './utils/database';

const server = express();

server.use(express.json());

const PORT = process.env.PORT || 3000;

server.listen(3000, () => console.log(`Server is runnign st http://localhost:${PORT}`));
