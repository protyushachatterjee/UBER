import React from 'react'
import uberCar from "../assets/uber_car.png";
import motorcycle from "../assets/uber_cycle.png";
import { Link } from 'react-router-dom';

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to={'/home'} className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className=" text-lg font-medium ri-home-4-fill"></i>
            </Link>
            <div className='h-[40%]'>
                <img className='w-full h-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" alt="" />
            </div>
            <div className='h-1/2 p-4'>
                <div className='flex justify-between items-center'>
                    <img className="h-16" src={motorcycle} alt="" />
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
                            <i className="text-lg ri-money-rupee-circle-fill"></i>
                            <div>
                                <h3 className="text-lg font-medium">₹193.20</h3>
                                <p className="text-sm text-gray-600">Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='w-full text-lg mt-5 bg-emerald-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding