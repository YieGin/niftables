import React from "react";

const Hero = () => {
  const videoUrl =
    "https://yiegin.s3.eu-north-1.amazonaws.com/main-background-video.mp4";

  return (
    <div className="h-screen relative overflow-hidden bg-gradient-to-t from-black from-0% via-[#3D8BFF] via-47% to-[#5d0285] to-99%">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full left-1/2 top-1/2 h-full object-cover transform -translate-x-1/2 -translate-y-1/2 mix-blend-hard-light"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="inset-0 absolute flex flex-col px-10 md:px-20 2xl:px-60 justify-center h-full mt-[14%]">
        <h1 className="uppercase font-monument text-2xl sm:text-3xl md:text-4xl md:leading-[4rem] xxl:text-[68px] xxl:leading-[4.7rem] text-white">
          The world&apos;s first <br /> platform for tokenizing <br /> ai
          blockchain projects
        </h1>
        <div className="md:w-max font-satoshi-Bold text-base md:text-[22px] mt-10">
          <div className="w-full h-[2px] bg-gradient-to-r from-[#3D8BFF] from-0% via-[#AB23FF] via-100%" />
          <p className="bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text my-1 mb-2 text-[22px]">
            Hold the Creon Pass NFT and earn passive income from AI Tools
          </p>
          <div className="w-full h-[2px] bg-gradient-to-r from-[#3D8BFF] from-0% via-[#AB23FF] via-100%" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
