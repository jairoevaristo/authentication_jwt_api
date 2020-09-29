import { Router } from 'express';

import userController from './controllers/userController';
import auth from './middlewares/auth';

const router = Router();

router.post('/users', userController.create);

router.post('/authenticated', userController.authenticated);

router.use(auth);

router.get('/users', userController.list);

export default router;