import React from "react";
import CountUp from "react-countup";

const Community = () => {
  return (
    <div className="bg-[#150B29] min-h-[300px] h-full relative">
      <h2 className="sm:text-5xl text-center text-4xl font-bold text-transparent py-4 pt-9 bg-clip-text bg-gradient-to-r from-[#2600FC] to-[#FF00EA]">
        Community Power
      </h2>

      <div className="flex flex-wrap items-center gap-y-10 md:gap-y-0 justify-between p-10 w-10/12 mx-auto">
        <div className="w-full sm:w-auto text-center mb-4 sm:mb-0">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white">
              <CountUp start={0} end={100} delay={0}></CountUp> +
            </h1>
            100+
          </div>
          <div className="text-[20px] text-[#BABFC5] font-normal sm:mt-6 mt-2">
            Wishlist Advertiser
          </div>
        </div>

        <div className="w-full sm:w-auto text-center mb-4 sm:mb-0">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white">
              <CountUp start={0} end={3000} delay={0}></CountUp> +
            </h1>
            3000+
          </div>
          <div className="text-[20px] text-[#BABFC5] font-normal sm:mt-6 mt-2">
            Wishlist Publisher
          </div>
        </div>

        <div className="w-full sm:w-auto text-center mb-4 sm:mb-0">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white">
              <CountUp start={0} end={200} delay={0}></CountUp> +
            </h1>
            200+
          </div>
          <div className="text-[20px] text-[#BABFC5] font-normal sm:mt-6 mt-2">
            Influencer
          </div>
        </div>

        <div className="w-full sm:w-auto text-center mb-4 sm:mb-0">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white">
              <CountUp start={0} end={200} delay={0}></CountUp> +
            </h1>
            200+
          </div>
          <div className="text-[20px] text-[#BABFC5] font-normal sm:mt-6 mt-2">
            Campaigns
          </div>
        </div>
      </div>
      <img
        src="https://leadtym.com/static/media/bggg.f143356141a942c2c9eb.png"
        className="w-screen absolute hidden md:flex top-12 left-0"
      />
    </div>
  );
};
export default Community;
