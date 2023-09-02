import {IsAuth} from '../middlewares/middleware.js';

import { Router } from "express";
const router = Router();

router.get('/profile',IsAuth, (req, res) => {
    const profile={
        username:req.session.username
    }
   
    res.render('profile', {profile:profile});
});
router.get('/about',IsAuth, (req, res) => {
    const profile={
        username:req.session.username
    }
   
    res.render('about', {profile:profile});
});
export default router;
