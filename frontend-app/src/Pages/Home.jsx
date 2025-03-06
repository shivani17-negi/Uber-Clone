import React from "react";

const Home = () => {
  return (
    <div>
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        alt="Uber Logo"
      />
      <div className="h-screen w-screen">
        {/* Static map image as placeholder */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Map"
        />
      </div>
    </div>
  );
};

export default Home;
