import React, { useContext, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CaptainDetail from "../components/CaptainDetail";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import LiveTracking from "../components/LiveTracking";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(false);
  const ridePopupPanelRef = useRef(null);
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false);
  const confirmRidePopUpPanelRef = useRef(null);

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);
  const [ride, setRide] = useState(null);

  useEffect(() => {
    socket.emit("join", {
      userId: captain._id,
      userType: "captain",
    });
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          socket.emit("update-location-captain", {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        });
      }
    };

    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation();
  }, []);

  socket.on("new-ride", (data) => {
    // console.log(data);
    setRide(data);
    setRidePopupPanel(true);
  });

  async function confirmRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`,{
      rideId: ride._id,
      captainId: captain._id,
    },{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })

    setRidePopupPanel(false);
    setConfirmRidePopUp(true);
    setRide(ride)
  }

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          y: 0,
          duration: 0.45,
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          y: "100%",
          duration: 0.6,
        });
      }
    },
    [ridePopupPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopUp) {
        gsap.to(confirmRidePopUpPanelRef.current, {
          y: 0,
          duration: 0.45,
        });
      } else {
        gsap.to(confirmRidePopUpPanelRef.current, {
          y: "100%",
          duration: 0.6,
        });
      }
    },
    [confirmRidePopUp]
  );

  return (
    <div className="h-screen">
      <div className="fixed right-0 top-0 p-3 flex items-center justify-between w-full">
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
        <Link
          to={"/captain-login"}
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className=" text-lg ri-logout-box-r-fill"></i>
        </Link>
      </div>
      <div className="h-[60%]">
        <LiveTracking/>
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetail />
      </div>
      <div
        ref={ridePopupPanelRef}
        className="fixed z-10 bottom-0 px-3 py-8 bg-white w-full translate-y-full"
      >
        <RidePopUp
          ridePopupPanel={ridePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopUp={setConfirmRidePopUp}
          ride={ride}
          confirmRide={confirmRide}
        />
      </div>
      <div
        ref={confirmRidePopUpPanelRef}
        className="fixed z-10 h-screen bottom-0 px-3 py-8 bg-white w-full translate-y-full"
      >
        <ConfirmRidePopUp
          ride={ride}
          setConfirmRidePopUp={setConfirmRidePopUp}
          setRidePopupPanel={setRidePopupPanel}
          confirmRidePopUp={confirmRidePopUp}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
