const rideModel = require('../models/ride.model');
const mapService = require('../services/maps.service');
const crypto=require('crypto');

async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    const baseFare = {
        car: 50,
        motorcycle: 20
    };

    const perKmRate = {
        car: 15,
        motorcycle: 8
    };

    const perMinuteRate = {
        car: 3,
        motorcycle: 1.5
    };

    const fare = {
        car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car)),
        motorcycle: Math.round(baseFare.motorcycle + ((distanceTime.distance.value / 1000) * perKmRate.motorcycle) + ((distanceTime.duration.value / 60) * perMinuteRate.motorcycle))
    };

    return fare;
}

module.exports.getFare = getFare;

function getOtp(num){
    function generateOtp(num){
        const otp= crypto.randomInt(Math.pow(10,num-1), Math.pow(10,num)).toString();
        return otp;
    }
    return generateOtp(num);
}

module.exports.createRide = async ({ user, pickup, destination, vehicle }) => {
    if (!user || !pickup || !destination || !vehicle || !vehicle.vehicleType) {
        throw new Error('User, pickup, destination and vehicle type are required');
    }
    const fareObject = await getFare(pickup, destination);
    const fare = fareObject[vehicle.vehicleType]; // Select the appropriate fare based on vehicle type
    const newRide = await rideModel.create({
        user,
        pickup,
        destination,
        fare,
        otp: getOtp(4),
        vehicle: {
            vehicleType: vehicle.vehicleType
        }
    });
    return newRide;
}