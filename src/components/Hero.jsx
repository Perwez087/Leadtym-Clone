import React from "react";
import { ReactTyped } from "react-typed";
import land1 from "/land1.png";
import land2 from "/land2.png";
import land3 from "/land3.png";

const Hero = () => {
  return (
    <div className="pt-20">
      <div className="text-center relative">
        <h1 className="sm:text-[63px] text-[40px] leading-tight font-bold">
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            Transform
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            Marketing
          </span>
        </h1>
        <h2 className="text-white sm:text-[50px] text-[30px] py-4 font-bold">
          Leadtym{" "}
          <ReactTyped
            strings={["Publish", "Influence", "Advertise"]}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent"
          />
        </h2>
        <div className="mt-4 z-10 relative">
          <a
            className="bg-indigo-600 text-lg px-6 py-3 rounded-md text-white font-semibold hover:bg-blue-700  "
            href="/join">
            Register now
          </a>
        </div>
      </div>

      <div className="flex p-6 mt-5 flex-wrap gap-6 justify-center">
        <img src={land1} alt="land1" />
        <img src={land2} alt="land2" />
        <img src={land3} alt="land3" />
      </div>
      <p className="text-center text-[#BABFC5] my-12 text-[18px] md:w-[63%] mx-6 md:mx-auto">
        Maximize your earnings with Leadtym's integrated platform, connecting
        advertisers, publishers, and influencers for seamless collaboration and
        optimized revenue streams. Join our thriving network and unlock
        lucrative opportunities to monetize your brand, content, and influence
        like never before.
      </p>
      <img src="https://leadtym.com/static/media/glow-img.3a5922fc9ffe47bf382f.png" className="absolute top-52 right-[30%] opacity-70 hidden lg:flex"/>
    </div>
  );
};

export default Hero;
