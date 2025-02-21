import React, { useContext } from "react";
import uberCar from "../assets/uber_car.png";
import motorcycle from "../assets/uber_cycle.png";
import { SocketContext } from "../context/SocketContext";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import LiveTracking from "../components/LiveTracking";

const Riding = () => {
  const location = useLocation();
  const { ride } = location.state || {};
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();

  socket.on("ride-ended", () => {
    navigate("/home");
  });

  return (
    <div className="h-screen">
      <Link
        to={"/home"}
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className=" text-lg font-medium ri-home-4-fill"></i>
      </Link>
      <div className="h-[40%]">
        <LiveTracking/>
      </div>
      <div className="h-1/2 p-4">
        <div className="flex justify-between items-center">
          {ride?.captain.vehicle.vehicleType === "car" ? <img className="h-24" src={uberCar} alt="" /> : <img className="h-20" src={motorcycle} alt="" />}
          <div className="text-right mb-3">
            <h2 className="text-lg font-medium">{ride?.captain.fullname.firstname+ " " + ride?.captain.fullname.lastname}</h2>
            <h4 className="text-xl font-semibold">{ride?.captain.vehicle.plate}</h4>
            <p className="text-sm text-gray-600">Capacity {ride?.captain.vehicle.capacity} & color {ride?.captain.vehicle.color}</p>
          </div>
        </div>
        <div className="flex gap-2 flex-col justify-between items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-2 border-2 mb-2 rounded-lg bg-gray-50">
              <i className=" text-lg ri-map-pin-range-fill"></i>
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
        <button className="w-full text-lg mt-5 bg-emerald-600 text-white font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
