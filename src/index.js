import express from 'express';

import './utils/database';
import router from './routes';

const server = express();

server.use(express.json());

server.use(router);

const PORT = process.env.PORT || 3000;

server.listen(3000, () => console.log(`Server is runnign st http://localhost:${PORT}`));
