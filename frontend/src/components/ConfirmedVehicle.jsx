import React from "react";
import uberCar from "../assets/uber_car.png";
import motorcycle from "../assets/uber_cycle.png";
import { Link } from "react-router-dom";

const ConfirmedVehicle = ({confirmRidePanel, setConfirmRidePanel, setVehicleFound, createRide, pickup, destination, fare, selectVehicle}) => {
  return (
    <div>
      <h5
        onClick={() => {
          setConfirmRidePanel(!confirmRidePanel)
        }}
        className="p-3 text-center w-full absolute top-0"
      >
        <i className="ri-arrow-down-wide-line font-bold text-xl"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm Your Ride</h3>
      <div className="flex gap-2 flex-col justify-between items-center">
        {selectVehicle === 'car' ? <img className="h-36" src={uberCar} alt="" /> : <img className="h-32" src={motorcycle} alt="" />}
        
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-2 border-2 mb-2 rounded-lg bg-gray-50">
            <i className=" text-lg ri-map-pin-range-fill"></i>
            <div>
              <h3 className="text-md font-medium">{pickup}</h3>
              <p className="text-sm text-gray-600">Pickup</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-2 mb-2 rounded-lg bg-gray-50">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-md font-medium">{destination}</h3>
              <p className="text-sm text-gray-600">Destination</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-2 mb-2 rounded-lg bg-gray-50">
            <i className="text-lg ri-money-rupee-circle-fill"></i>
            <div>
              {selectVehicle === 'car' ? <h3 className="text-lg font-medium">₹{fare.car}</h3> : <h3 className="text-lg font-medium">₹{fare.motorcycle}</h3>}
              <h4 className="text-sm text-gray-600">Cash Cash</h4>      
            </div>
          </div>
        </div>
        <button onClick={()=>{
            setVehicleFound(true)
            setConfirmRidePanel(false)
            createRide();
        }} className="w-full flex items-center justify-center text-xl mt-5 bg-emerald-600 text-white font-semibold p-2 rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedVehicle;
