import React from 'react'
import uberCar from "../assets/uber_car.png";
import motorcycle from "../assets/uber_cycle.png";

const LookingForDriver = ({vehicleFound, setVehicleFound}) => {
  return (
    <div>
      <h5
        onClick={() => {
          setVehicleFound(!vehicleFound)
        }}
        className="p-3 text-center w-full absolute top-0"
      >
        <i className="ri-arrow-down-wide-line font-bold text-xl"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Looking For Driver</h3>
      <div className="flex gap-2 flex-col justify-between items-center">
        <img className="h-32" src={uberCar} alt="" />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-2 border-2 mb-2 rounded-lg bg-gray-50">
            <i className=" text-lg ri-map-pin-range-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11/A</h3>
              <p className="text-sm text-gray-600">Kali Charan, Kolkata</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-2 mb-2 rounded-lg bg-gray-50">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11/A</h3>
              <p className="text-sm text-gray-600">Kali Charan, Kolkata</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-2 mb-2 rounded-lg bg-gray-50">
            <i className="text-lg ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm text-gray-600">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LookingForDriver