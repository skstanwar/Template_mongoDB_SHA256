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
router.get('/about',IsAuth, (req, res) => {
 res.render('about');
});
router.get('/contact',IsAuth, (req, res) => {
 res.render('contact');
});
router.get('/services',IsAuth, (req, res) => {
 res.render('services');
});
router.get('/works',IsAuth, (req, res) => {
 res.render('works');
});
router.get('/testimonial',IsAuth, (req, res) => {
 res.render('testimonial');
});
export default router;
