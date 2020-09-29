import { Router } from 'express';

import userController from './controllers/userController';

const router = Router();

router.get('/users', userController.list);

router.post('/users', userController.create);

router.post('/authenticated', userController.authenticated);

export default router;