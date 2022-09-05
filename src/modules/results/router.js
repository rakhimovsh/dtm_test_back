import { Router } from 'express';
import controller from './controller.js';
import checkToken from '../../middlewares/checkToken.js';


const router = Router();

router.get('/results', controller.GET);
router.get('/results/:resultId', controller.GET);
router.get('/result', checkToken, controller.GET);


export default router;