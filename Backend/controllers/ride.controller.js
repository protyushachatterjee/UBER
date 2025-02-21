const rideService = require("../services/ride.service");
const { validationResult } = require("express-validator");
const mapService = require("../services/maps.service");
const { sendMessageToSocketId } = require("../socket");
const rideModel = require("../models/ride.model");

module.exports.createRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { pickup, destination, vehicle } = req.body;
    const newRide = await rideService.createRide({
      user: req.user._id,
      pickup,
      destination,
      vehicle,
    });
    res.status(201).json(newRide);

    const pickupCoordinates = await mapService.getAddressesCoordinate(pickup);

    const captainsPresent = await mapService.getCaptainsInTheRadius(
      pickupCoordinates.ltd,
      pickupCoordinates.lng,
      2000
    );
    newRide.otp = "";

    const rideWithUser = await rideModel
      .findOne({ _id: newRide._id })
      .populate("user");

    captainsPresent.map((captain) => {
      sendMessageToSocketId(captain.socketId, {
        event: "new-ride",
        data: rideWithUser,
      });
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports.getRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { pickup, destination } = req.query;
  try {
    const fare = await rideService.getFare(pickup, destination);
    res.status(200).json(fare);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports.confirmRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { rideId } = req.body;
    const ride = await rideService.confirmRide({ rideId, captain: req.captain });

    sendMessageToSocketId(ride.user.socketId, {
      event: "ride-confirmed",
      data: ride,
    });

    res.status(200).json(ride);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports.startRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { rideId, otp } = req.query;
        const ride = await rideService.startRide({ rideId, otp, captain: req.captain });
    
        sendMessageToSocketId(ride.user.socketId, {
        event: "ride-started",
        data: ride,
        });
    
        res.status(200).json(ride);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
}

module.exports.endRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { rideId } = req.body;
        const ride = await rideService.endRide({ rideId, captain: req.captain });
    
        sendMessageToSocketId(ride.user.socketId, {
        event: "ride-ended",
        data: ride,
        });
    
        res.status(200).json(ride);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
}