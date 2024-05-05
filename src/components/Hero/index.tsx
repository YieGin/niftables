import React from "react";

const Hero = () => {
  const videoUrl =
    "https://yiegin.s3.eu-north-1.amazonaws.com/main-background-video.mp4";

  return (
    <div className="lg:h-screen h-[75vh] relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover h-full w-full z-10"
      >
        <source src={videoUrl} type="video/mp4" />
        <track kind="captions" label="English" default />
        Your browser does not support the video tag.
      </video>
      <div className="bg-video-overlay-hero absolute top-0 z-10 rotate-180 mix-blend-soft-light w-full h-full" />
      <div className="px-5 md:px-20 2xl:px-60 inset-0 absolute flex flex-col justify-end h-full lg:pb-[114px] z-10">
        <h1 className="uppercase font-monument text-2xl leading-10 sm:text-3xl md:text-4xl md:leading-[4rem] xxl:text-[68px] xxl:leading-[4.7rem] text-white">
          The world&apos;s first <br /> platform for tokenizing <br /> ai
          blockchain projects
        </h1>
        <div className="md:w-max font-satoshi-Bold text-base md:text-[22px] mt-10 z-10">
          <div className="w-full h-[2px] bg-gradient-to-r from-[#3D8BFF] from-0% via-[#AB23FF] via-100%" />
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-3 mt-2 md:text-[22px]">
            Hold the Creon Pass NFT and earn passive income from AI Tools
          </p>
          <div className="w-full h-[2px] bg-gradient-to-r from-[#3D8BFF] from-0% via-[#AB23FF] via-100%" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
