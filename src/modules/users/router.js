import { Router } from 'express';
import controller from './controller.js';
import checkToken from '../../middlewares/checkToken.js';

const router = Router();

router.post('/login', controller.LOGIN);
router.post('/register', controller.REGISTER);
router.post('/info', checkToken, controller.INFO);
export default router;
