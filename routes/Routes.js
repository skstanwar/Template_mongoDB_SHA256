import { Router } from "express";
import{login , register } from '../controllers/control.js';
import {passAndUserClear , passAndUserData} from '../Tester/WebTester.js';
import {SHA256converter} from '../middlewares/middleware.js';


const router = Router();

router.post('/login',SHA256converter, login);
router.post('/register' ,SHA256converter, register);
router.get('/passAndUserClear' , passAndUserClear);
router.get('/passAndUserData' , passAndUserData);
export default router;






