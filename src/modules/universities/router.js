import { Router } from 'express';
import controller from './controller.js';


const router = Router();

router.get('/universities', controller.GET_UNIVERSITIES);
router.get('/faculty/:facultyId', controller.GET_FACULTY);


export default router;