import React from "react";

const Hero = () => {
  return (
    <div>
      {/* Kajal Ko pasand nhi hai baad me dekheng */}
      {/* <video
        className="max-h-[90vh] relative w-full object-cover"
        loop
        autoPlay
      >
        <source src="./video_hero.mp4" type="video/mp4" />
      </video> */}
      <div className="absolute top-0 flex flex-col items-center justify-center left-0 right-0 w-full h-full bg-[url('/bg.png')] bg-cover ">
        <h1 className="text-gray-300 font-black text-center  text-[100px] leading-[1] ">
          Welcome <br /> world of{" "}
          <span className="gradient_text text-[110px] ">Blog</span>
          <br /> writing
        </h1>
        <p className="text-gray-400 mt-10 w-[40vw] text-center mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum magni
          eaque molestiae inventore dolores sunt.
        </p>
      </div>
    </div>
  );
};

export default Hero;
