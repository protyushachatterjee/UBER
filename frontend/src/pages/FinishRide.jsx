import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FinishRide = ({ setFinishRidePanel, rideData, finishRidePanel }) => {
  const finishRidePanelRef = useRef(null);

  const navigate = useNavigate();

  async function endRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/end-ride`,
      {
        rideId: rideData._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      navigate("/captain-home");
    }
  }

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          y: 0,
          duration: 0.6,
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
    <div className="relative">
      <h1
        ref={finishRidePanelRef}
        onClick={() => {
          setFinishRidePanel(!finishRidePanel);
        }}
        className="w-full text-center m-0 p-0 text-2xl font-semibold"
      >
        <i className="ri-arrow-down-wide-fill text-2xl"></i>
      </h1>

      <h3 className="text-2xl font-semibold mb-5">Finish This Ride</h3>
      <div className="flex items-center justify-between mb-3 border-2 border-amber-700 p-2 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFkeXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h2 className="text-lg font-semibold">
            {rideData?.user.fullname.firstname +
              " " +
              rideData?.user.fullname.lastname}
          </h2>
        </div>
      </div>
      <div className="flex gap-2 flex-col justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-2 border-2 mb-2 rounded-lg bg-gray-50">
            <i className=" text-lg ri-map-pin-range-fill"></i>
            <div>
              <h3 className="text-md font-medium">{rideData?.pickup}</h3>
              <p className="text-sm text-gray-600">Pickup</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-2 mb-2 rounded-lg bg-gray-50">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-md font-medium">{rideData?.destination}</h3>
              <p className="text-sm text-gray-600">Destination</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-2 mb-2 rounded-lg bg-gray-50">
            <i className="text-lg ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹{rideData?.fare}</h3>
              <p className="text-sm text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <button
            onClick={endRide}
            className="w-full flex items-center justify-center text-xl mt-3 bg-emerald-600 text-white font-semibold p-2 rounded-lg"
          >
            Finish Ride
          </button>
          <p className="text-red-700 text-xs mt-3 tracking-tight text-center">
            Click on finish button if you have received the payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
