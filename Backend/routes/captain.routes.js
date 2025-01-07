const express=require('express');
const router=express.Router();
const {body}= require('express-validator');
const captainController= require('../controllers/captain.controller');
const authMiddleware= require('../middlewares/auth.middleware');

router.post('/register', [body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({min: 3}).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle']).withMessage('Vehicle type must be either car or motorcycle'),
],captainController.captainRegister); 

router.post('/login', [body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
], captainController.captainLogin);

router.get('/profile', authMiddleware.authCaptain, captainController.captainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.captainLogout);

module.exports=router;