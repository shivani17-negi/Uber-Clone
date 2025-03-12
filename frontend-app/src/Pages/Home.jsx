import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../Components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [activeField, setActiveField] = useState(null);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  // Panel animation using GSAP
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  function findTrip() {
    alert("Looking for a trip!");
    // Later you can add: setVehiclePanel(true); setPanelOpen(false);
  }

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="h-screen w-screen">
        {/* Map background */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Map"
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="fixed w-full z-10 bottom-0 bg-white px-3 py-6">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 right-6 top-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>

          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form className="relative py-3" onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
                setActiveField("pickup");
              }}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
                setActiveField("destination");
              }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
          <button
            onClick={findTrip}
            className="bg-black text-white px-4 py-2 rounded-lg mt-3 w-full"
          >
            Find Trip
          </button>

          {/* Vehicle options - you can show/hide this based on your application state */}
          <h3 className="text-2xl font-semibold mb-5 mt-8">Choose a Vehicle</h3>

          <div className="flex border-2 border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
            <img
              className="h-10"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className="ml-2 w-1/2">
              <h4 className="font-medium text-base">
                UberGo <span className="ri-user-3-fill">/4</span>
              </h4>
              <h5 className="font-medium text-sm">2 mins away</h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable, compact rides
              </p>
            </div>
            <h2 className="text-xl font-semibold">₹193.20</h2>
          </div>

          <div className="flex border-2 border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
            <img
              className="h-10"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1649230978/assets/a2/553a18-2f77-4722-a4ba-f736f4cb405e/original/Uber_Moto_Orange_558x372_pixels_Desktop.png"
              alt=""
            />
            <div className="ml-2 w-1/2">
              <h4 className="font-medium text-base">
                Moto <span className="ri-user-3-fill">/1</span>
              </h4>
              <h5 className="font-medium text-sm">3 mins away</h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable motorcycle rides
              </p>
            </div>
            <h2 className="text-xl font-semibold">₹65</h2>
          </div>

          <div className="flex border-2 border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
            <img
              className="h-10"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
              alt=""
            />
            <div className="ml-2 w-1/2">
              <h4 className="font-medium text-base">
                UberAuto <span className="ri-user-3-fill">/3</span>
              </h4>
              <h5 className="font-medium text-sm">3 mins away</h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable Auto rides
              </p>
            </div>
            <h2 className="text-xl font-semibold">₹110.80</h2>
          </div>
        </div>

        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel
            suggestions={
              activeField === "pickup"
                ? pickupSuggestions
                : destinationSuggestions
            }
            setPanelOpen={setPanelOpen}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
