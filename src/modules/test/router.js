import { Router } from 'express';
import controller from './controller.js';
import checkToken from '../../middlewares/checkToken.js';


const router = Router();

router.get('/tests', checkToken, controller.GET);
router.post('/tests', checkToken, controller.CHECK);


export default router;