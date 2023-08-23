import { Router } from "express";
import{login , register , logout } from '../controllers/control.js';
import {passAndUserClear , passAndUserData , profiles} from '../Tester/WebTester.js';
import {SHA256converter} from '../middlewares/middleware.js';
import {Setdashboard} from '../controllers/UserDataFetch.js';


const router = Router();

router.post('/Setdashboard', Setdashboard);
router.post('/login',SHA256converter, login);
router.post('/logout', logout);
router.post('/register' ,SHA256converter, register);
router.get('/passAndUserClear' , passAndUserClear);
router.get('/passAndUserData' , passAndUserData);
router.get('/profiles' , profiles);
export default router;






