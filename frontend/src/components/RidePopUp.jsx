import React from 'react'
import motorcycle from "../assets/uber_cycle.png";
import uberCar from "../assets/uber_car.png";
import { Link } from "react-router-dom";


const RidePopUp = ({ridePopupPanel, setRidePopupPanel, setConfirmRidePopUp}) => {
  return (
    <div>
              <h3 className="text-2xl font-semibold mb-5">New Ride Available</h3>
              <div className='flex items-center justify-between mb-3'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFkeXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <h2 className='text-lg font-semibold'>Shivani Sharma</h2>
                </div>
                <h5 className='font-semibold'>2.2 KM</h5>
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
                      <h3 className="text-lg font-medium">22/B</h3>
                      <p className="text-sm text-gray-600">MahaKali, Kolkata</p>
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
                <button onClick={()=>{
                   setConfirmRidePopUp(true)
                }} className="w-full flex items-center justify-center text-xl mt-5 bg-emerald-600 text-white font-semibold p-2 rounded-lg">
                  Accept
                </button>
                <button onClick={()=>{
                    setRidePopupPanel(!ridePopupPanel)
                }} className="w-full flex items-center justify-center text-xl mt-1 bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg">
                  Ignore
                </button>
              </div>
    </div>
  )
}

export default RidePopUp