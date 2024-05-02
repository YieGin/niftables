import React from "react";

const Synergy = () => {
  const videoUrl = "https://yiegin.s3.eu-north-1.amazonaws.com/creon-logo.mp4";
  return (
    <div>
      <div className="w-full flex flex-col gap-5">
        <h1 className="uppercase font-monument text-base sm:text-2xl md:text-4xl md:leading-[4rem] xxl:text-[68px] xxl:leading-[4.7rem] text-white text-center">
          Profiting Through
        </h1>
        <h1 className="ml-auto uppercase font-monument text-base sm:text-2xl md:text-4xl text-center xl:mr-16 bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text">
          AI Innovation & Decentralization
        </h1>
      </div>
      <div className="flex justify-between xl:flex-row flex-col gap-10 mt-[83px] h-full">
        <div className="xl:w-[70%] h-[485px] rounded-md bg-gradient-to-t from-[#3D8BFF] from-0% to-[#AB23FF] to-99%">
          <video
            autoPlay
            loop
            muted
            preload="none"
            playsInline
            className="w-full h-full object-cover mix-blend-hard-light"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="xl:w-[30%] sm:px-[30px] px-5 border-x-[1px] border-[#13171D] flex flex-col justify-center py-10">
          <h1 className="font-satoshi-Bold text-[18px] sm:text-[22px]">The dynamic community driven business model of the future.</h1>
          <p className="mt-7 font-satoshi-Regular text-sm sm:text-[18px]">
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