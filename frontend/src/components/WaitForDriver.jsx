import React from 'react'
import uberCar from "../assets/uber_car.png";
import motorcycle from "../assets/uber_cycle.png";

const WaitForDriver = ({waitingForDriver, setWaitingForDriver}) => {
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
          <img className="h-12" src={motorcycle} alt="" />
            <div className='text-right mb-3'>
              <h2 className='text-lg font-medium'>Driver</h2>
              <h4 className='text-xl font-semibold'>WB 24V 6512</h4>
              <p className='text-sm text-gray-600'>Maruti Suzuki S-23</p>
            </div>
          </div>
          <div className="flex gap-2 flex-col justify-between items-center">
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

export default WaitForDriver