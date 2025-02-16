import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import RidePopUp from '../components/RidePopUp';
import FinishRide from './FinishRide';


const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(
        function () {
          if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
              y: 0,
              duration: 0.45,
            });
          } else {
            gsap.to(finishRidePanelRef.current, {
              y: "100%",
              duration: 0.6,
            });
          }
        },
        [finishRidePanel]
      );

  return (
    <div className='h-screen w-screen overflow-hidden'>
      <div className='fixed right-0 top-0 p-3 flex items-center justify-between w-full'>
        <div className="w-full flex justify-start items-end">
          <img
            className="w-14"
            src="https://imgs.search.brave.com/4ATIxs0SwT-DsZ4ajF7jlixEaXFqw5Ys2I5OFQa8JEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
            alt=""
          />
          <img
            className="w-5 ml-1"
            src="https://imgs.search.brave.com/GdHwOqtWpOsrMrn40RRsmQNX9rl3YRvMALto5Xz51ck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvY2FyLTEtMS81/MC82My02NC5wbmc"
            alt=""
          />
        </div>
        <Link to={'/captain-home'} className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className=" text-lg ri-logout-box-r-fill"></i>
        </Link>
      </div>
      <div className='h-4/5 w-full'>
        <img className='w-full h-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" alt="" />
      </div>
      <div className='h-1/5 w-full p-6 bg-yellow-400 flex items-center justify-between relative'>
        <h5 className='absolute text-center pr-20 top-0 p-1  w-screen'><i className="ri-arrow-up-wide-fill text-3xl text-black"></i></h5>
            <h4 className='font-semibold text-2xl '>4.3 KM Away</h4>
            <button onClick={()=>{
                setFinishRidePanel(true)
            }} className='bg-green-600 text-white font-semibold p-3 px-8 rounded-lg'>Complete Ride</button>
      </div>
      <div ref={finishRidePanelRef} className="fixed z-10 bottom-0 px-3 py-8 bg-white w-full translate-y-full">
        <FinishRide finishRidePanel={finishRidePanel} setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  )
}

export default CaptainRiding