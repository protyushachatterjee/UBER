import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedVehicle from "../components/ConfirmedVehicle";
import LookingForDriver from "../components/LookingForDriver";
import WaitForDriver from "../components/WaitForDriver";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelClose = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const confirmRideRef = useRef(null);
  const [vehicleFound, setVehicleFound] = useState(false)
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [waitingForDriver, setWaitingForDriver] = useState(false)


  const submitHandler = () => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          duration: 1,
          ease: "power2.out",
        });
        gsap.to(panelClose.current, {
          rotate: "180deg",
          duration: 0.6,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          duration: 1,
          ease: "power2.out",
        });
        gsap.to(panelClose.current, {
          rotate: "0deg",
          duration: 0.6,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          y: 0,
          duration: 0.6,
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          y: "100%",
          duration: 0.6,
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRideRef.current, {
          y: 0,
          duration: 0.45,
        });
      } else {
        gsap.to(confirmRideRef.current, {
          y: "100%",
          duration: 0.6,
        });
      }
    },
    [confirmRidePanel]
  );
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          y: 0,
          duration: 0.45,
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          y: "100%",
          duration: 0.6,
        });
      }
    },
    [vehicleFound]
  );
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          y: 0,
          duration: 0.45,
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          y: "100%",
          duration: 0.6,
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://imgs.search.brave.com/4ATIxs0SwT-DsZ4ajF7jlixEaXFqw5Ys2I5OFQa8JEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
        alt=""
      />
      <div className="h-screen w-screen">
        <img
          className="w-full h-full bg-center object-cover"
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            ref={panelClose}
            onClick={() => {
              setPanelOpen(!panelOpen);
            }}
            className="absolute top-3 right-3"
          >
            <i className="ri-arrow-down-wide-line font-bold text-xl"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            onClick={() => {
              setPanelOpen(true);
            }}
          >
            <div className="line absolute h-16 w-1 bg-black top-[45%] left-[10%] rounded-full"></div>
            <input
              className="bg-[#eeeeee] px-8 py-2 text-base rounded-lg mb-2 w-full mt-4"
              type="text"
              placeholder="Add a pickup location"
              value={pickUp}
              onChange={(e) => {
                setPickUp(e.target.value);
              }}
            />
            <input
              className="bg-[#eeeeee] px-8 py-2 text-base rounded-lg w-full mt-2 mb-2"
              type="text"
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
            />
          </form>
        </div>
        <div ref={panelRef} className="h-[0] bg-white ">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div ref={vehiclePanelRef} className="fixed z-10 bottom-0 px-3 py-8 bg-white w-full translate-y-full">
        <VehiclePanel setVehiclePanel={setVehiclePanel} vehiclePanel={vehiclePanel} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>
      <div ref={confirmRideRef} className="fixed z-10 bottom-0 px-3 py-8 bg-white w-full translate-y-full">
        <ConfirmedVehicle confirmRidePanel={confirmRidePanel} setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className="fixed z-10 bottom-0 px-3 py-8 bg-white w-full translate-y-full">
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={waitingForDriverRef} className="fixed z-10 bottom-0 px-3 py-8 bg-white w-full">
        <WaitForDriver waitingForDriver={waitingForDriver} setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
