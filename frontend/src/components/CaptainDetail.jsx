import React, { useContext, useEffect } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'


const CaptainDetail = () => {

  const {captain, setCaptain, isLoading, error}=useContext(CaptainDataContext);
  useEffect(() => {
    if (captain) {
      // console.log(captain);
    }
  }, [captain]);

  if (!captain) {
    console.log('Captain not found');
  }

  return (
    <div>
         <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start gap-3'>
            <img className='h-10 w-10 rounded-full object-cover' src="https://images.unsplash.com/photo-1626565244872-206f4c1f9e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRyaXZlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <h4 className='text-lg font-medium capitalize'>{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>₹2095.20</h4>
            <p className='text-sm text-gray-600'>Earned</p>
          </div>
        </div>
        <div className='flex justify-center gap-5 items-start p-3 mt-7 bg-gray-100 rounded-xl'>
          <div className='text-center'>
          <i className=" text-3xl mb-2 font-thin ri-timer-line"></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
          <i className=" text-3xl mb-2 font-thin ri-speed-up-line"></i>
          <h5 className='text-lg font-medium'>80.2</h5>
          <p className='text-sm text-gray-600'>Average Speed</p>
          </div>
          <div className='text-center'>
          <i className=" text-3xl mb-2 font-thin ri-booklet-line"></i>
          <h5 className='text-lg font-medium'>5</h5>
          <p className='text-sm text-gray-600'>Rides Number</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetail