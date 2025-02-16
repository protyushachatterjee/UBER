import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = ({setConfirmRidePopUp,setRidePopupPanel,confirmRidePopUp}) => {
  const [otp, setOtp] = useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
  }

  return (
    <div>
              <h3 className="text-2xl font-semibold mb-5">Confirm Ride</h3>
              <div className='flex items-center justify-between mb-3 bg-amber-500 p-2 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFkeXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <h2 className='text-lg font-semibold'>Shivani Sharma</h2>
                </div>
                <h5 className='font-semibold'>2.7 KM</h5>
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
                
                <div className='flex flex-col w-full gap-2'>
               <form onSubmit={()=>{
                submitHandler(e)
               }}>
                <input value={otp} onChange={(e)=>{
                  setOtp(e.target.value)
                }} type="number" placeholder='Enter OTP' className='bg-[#eeeeee] px-8 py-3 font-medium rounded-lg mb-2 w-full mt-4'/>
               <Link to={'/captain-riding'} className="w-full flex items-center justify-center text-xl mt-3 bg-emerald-600 text-white font-semibold p-2 rounded-lg">
                  Confirm
                </Link>
                <button onClick={()=>{
                    setConfirmRidePopUp(!confirmRidePopUp)
                    setRidePopupPanel(false)
                }} className="w-full flex items-center justify-center text-xl mt-2 bg-red-700 text-white font-semibold p-2 rounded-lg">
                  Cancel
                </button>
               </form>
                </div>
              </div>
    </div>
  )
}

export default ConfirmRidePopUp