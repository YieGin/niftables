import React from "react";

const Hero = () => {
  const videoUrl = "https://yiegin.s3.eu-north-1.amazonaws.com/main-background-video.mp4";

  return (
    <div className="lg:h-screen h-[75vh] relative overflow-hidden">
      <div className="video-overlay-hero" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full left-1/2 top-1/2 h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay-hero-bottom" />
      <div className="px-5 md:px-20 2xl:px-60 inset-0 absolute flex flex-col justify-end h-full pb-[114px]">
        <h1 className="uppercase font-monument text-2xl leading-10 sm:text-3xl md:text-4xl md:leading-[4rem] xxl:text-[68px] xxl:leading-[4.7rem] text-white">
          The world&apos;s first <br /> platform for tokenizing <br /> ai blockchain projects
        </h1>
        <div className="md:w-max font-satoshi-Bold text-base md:text-[22px] mt-10 z-10">
          <div className="w-full h-[2px] bg-gradient-to-r from-[#3D8BFF] from-0% via-[#AB23FF] via-100%" />
          <p className="creon-pass-linear my-1 mb-2 md:text-[22px]">
            Hold the Creon Pass NFT and earn passive income from AI Tools
          </p>
          <div className="w-full h-[2px] bg-gradient-to-r from-[#3D8BFF] from-0% via-[#AB23FF] via-100%" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
