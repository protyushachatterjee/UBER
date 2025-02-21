const mapService = require('../services/maps.service');
const {validationResult} = require('express-validator');


module.exports.getAddressesCoordinate = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { address } = req.query;
    try {
        const location = await mapService.getAddressesCoordinate(address);
        res.json(location);
    } catch (error) {
        res.status(404).json({ message: 'Coordinate not found' });
    }
}

module.exports.getDistanceTime = async (req, res) => {
    const errors = validationResult(req);
        try{
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()});
            }
            const {origin, destination} = req.query;
            const data = await mapService.getDistanceTime(origin, destination);
            res.status(200).json(data);
        }catch(err){
            console.error(err);
            res.status(500).json({message: 'Internal server error'});
        }
}

module.exports.getAutoComplete = async (req, res) => {

    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        const {input} = req.query;
        const data = await mapService.getAutoComplete(input);
        res.status(200).json(data);
    } catch(err){
        console.error(err);
        res.status(500).json({message: 'Internal server error'});
    }
}