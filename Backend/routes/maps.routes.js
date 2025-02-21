const express=require('express');
const router=express.Router();
const mapController=require('../controllers/map.controller');
const authMiddleware= require('../middlewares/auth.middleware');
const {query} = require('express-validator');

router.get('/get-coordinate', 
    query('address').isString().isLength({min: 2}),
    authMiddleware.authUser, mapController.getAddressesCoordinate);

router.get('/get-distance-time', 
    query('origin').isString().isLength({min: 2}),
    query('destination').isString().isLength({min: 2}),
    authMiddleware.authUser, mapController.getDistanceTime);

router.get('/get-suggestions', 
    query('input').isString().isLength({min: 2}),
    authMiddleware.authUser, mapController.getAutoComplete);

module.exports=router;