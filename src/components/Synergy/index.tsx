import React from "react";
import VideoSection from "./VideoSection";

const Synergy = () => {
  const videoUrl = "https://yiegin.s3.eu-north-1.amazonaws.com/creon-logo.mp4";

  return (
    <div className="px-5 md:px-20 2xl:px-60">
      <div className="w-full flex flex-col">
        <h1 className="uppercase font-monument sm:text-xl lg:text-4xl xl:text-4xl 2xl:text-[68px] xl:ml-16 2xl:ml-0 text-white">
          Profiting Through
        </h1>
        <h1 className="ml-auto uppercase font-monument text-xs sm:text-[15px] md:text-xl lg:text-3xl xl:text-3xl xl:mr-16 2xl:mr-0 2xl:text-[38px] bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary md:mt-3 lg:mt-10">
          AI Innovation & Decentralization
        </h1>
      </div>
      <div className="flex justify-between xl:flex-row flex-col gap-10 mt-10 md:mt-[83px] h-full">
        <VideoSection src={videoUrl} />
        <div className="xl:w-[32%] sm:px-[30px] px-5 border-x-[1px] border-[#13171D] flex flex-col justify-center py-10">
          <h1 className="font-satoshi-Bold text-[18px] sm:text-[22px]">
            The dynamic community driven business model of the future.
          </h1>
          <p className="mt-7 font-satoshi-Regular text-sm sm:text-[18px] leading-[130%]">
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Synergy;
