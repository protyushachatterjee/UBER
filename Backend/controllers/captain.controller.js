const captainModel= require('../models/captain.model');
const captainService= require('../services/captain.service');
const {validationResult}= require('express-validator');
const blacklistModel= require('../models/blacklistToken.model');

module.exports.captainRegister= async (req, res)=>{
   const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const{fullname, email, password, vehicle}= req.body;

    const hashPassword= await captainModel.hashPassword(password);
    const isCaptainExist= await captainModel.findOne({email});
    if(isCaptainExist){
        return res.status(400).json({errors: [{msg: 'Captain already exists'}]});
    }
    const captain=await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,
    });

    const token= await captain.generateAuthToken();
    res.status(201).json({captain, token});

};

module.exports.captainLogin= async (req, res)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const{email, password}= req.body;
    const captain= await captainModel.findOne({email}).select('+password');
    if(!captain){
        return res.status(400).json({errors: [{msg: 'Invalid email or password'}]});
    }

    const isPasswordMatch= await captain.comparePassword(password);
    if(!isPasswordMatch){
        return res.status(400).json({errors: [{msg: 'Invalid email or password'}]});
    }

    const token= await captain.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({captain, token});
}

module.exports.captainProfile= async (req, res)=>{
    res.status(200).json({captain: req.captain});
}

module.exports.captainLogout= async (req, res)=>{
    const token=req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blacklistModel.create({token});
    res.clearCookie('token');
    res.status(200).json({message: 'Logged out successfully'});
}