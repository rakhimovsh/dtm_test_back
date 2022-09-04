import { Router } from 'express';
import controller from './controller.js';
import checkToken from '../../middlewares/checkToken.js';


const router = Router();

router.get('/subjects', controller.GET);
router.get('/subjects/:subjectId', controller.GET);


export default router;