import React from 'react'
import uberCar from "../assets/uber_car.png";
import motorcycle from "../assets/uber_cycle.png";

const VehiclePanel = ({setVehiclePanel, vehiclePanel, setConfirmRidePanel}) => {
  return (
    <div><h5
    onClick={() => {
      setVehiclePanel(!vehiclePanel);
    }}
    className="p-3 text-center w-full absolute top-0"
  >
    <i className="ri-arrow-down-wide-line font-bold text-xl"></i>
  </h5>
  <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
  <div onClick={()=>{
    setConfirmRidePanel(true)
  }} className="flex items-center justify-between w-full p-3 bg-gray-50 border-2 active:border-black rounded-xl mb-3">
    <img className="h-12" src={uberCar} alt="" />
    <div className="w-1/2 ml-2">
      <h4 className="font-medium text-lg">
        UberGo{" "}
        <span>
          <i className="ri-user-fill"></i>4
        </span>
      </h4>
      <h5 className="font-medium text-sm">2 mins away</h5>
      <p className="font-base text-xs text-gray-600">
        Affordable, compact rides
      </p>
    </div>
    <h2 className="text-xl font-semibold">₹198.20</h2>
  </div>
  <div onClick={()=>{
    setConfirmRidePanel(true)
  }} className="flex items-center justify-between w-full p-3 bg-gray-50 border-2 active:border-black rounded-xl mb-3">
    <img className="h-12" src={motorcycle} alt="" />
    <div className="w-1/2 ">
      <h4 className="font-medium text-lg">
        Moto{" "}
        <span>
          <i className="ri-user-fill"></i>1
        </span>
      </h4>
      <h5 className="font-medium text-sm">3 mins away</h5>
      <p className="font-base text-xs text-gray-600">
        Affordable, motorcycle rides
      </p>
    </div>
    <h2 className="text-xl font-semibold">₹65</h2>
  </div>
  </div>
  )
}

export default VehiclePanel