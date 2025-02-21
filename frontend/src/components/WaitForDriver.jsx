import React from 'react'
import uberCar from "../assets/uber_car.png";
import motorcycle from "../assets/uber_cycle.png";

const WaitForDriver = ({waitingForDriver, setWaitingForDriver, ride}) => {
  return (
    <div>
          <h5
            onClick={() => {
              setWaitingForDriver(!waitingForDriver)
            }}
            className="p-3 text-center w-full absolute top-0"
          >
            <i className="ri-arrow-down-wide-line font-bold text-xl"></i>
          </h5>
          <div className='flex justify-between items-center'>
          {ride?.captain.vehicle.vehicleType === 'car' ? <img className="h-20" src={uberCar} alt="" /> : <img className="h-14" src={motorcycle} alt="" />}
            <div className='text-right mb-3 '>
              <h2 className='text-lg font-medium'>{ride?.captain.fullname.firstname + " " + ride?.captain.fullname.lastname}</h2>
              <h4 className='text-md font-semibold'>{ride?.captain.vehicle.plate}</h4>
              <p className='text-sm text-gray-600'>Capacity {ride?.captain.vehicle.capacity} & color {ride?.captain.vehicle.color}</p>
              <h1 className='text-lg font-semibold text-yellow-700'>{ride?.otp}</h1>
            </div>
          </div>
          <div className="flex gap-2 flex-col justify-between items-center">
            <div className="w-full mt-5">
              <div className="flex items-center gap-5 p-2 border-2 mb-2 rounded-lg bg-gray-50">
                <i className=" text-lg ri-map-pin-range-fill"></i>
                <div>
                  <h3 className="text-md font-medium">{ride?.pickup}</h3>
                  <p className="text-sm text-gray-600">Pickup</p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-2 border-2 mb-2 rounded-lg bg-gray-50">
                <i className=" text-lg ri-map-pin-2-fill"></i>
                <div>
                  <h3 className="text-md font-medium">{ride?.destination}</h3>
                  <p className="text-sm text-gray-600">Destination</p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-2 border-2 mb-2 rounded-lg bg-gray-50">
                <i className="text-lg ri-money-rupee-circle-fill"></i>
                <div>
                  <h3 className="text-lg font-medium">₹{ride?.fare}</h3>
                  <p className="text-sm text-gray-600">Cash</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default WaitForDriver