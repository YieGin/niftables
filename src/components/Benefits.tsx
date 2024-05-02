import React from "react";
import Button from "./Button";
import { DarkShape } from "../../public";
import Image from "next/image";

const benefits = [
  "Pre-launch investment opportunities for upcoming AI projects",
  "Free and early access to Creon built AI projects",
  "Higher allocation limits on the Creon AI Launchpad",
  "Revenue share distribution from Creon built AI projects",
];

const Benefits = () => {
  const videoUrl = "https://yiegin.s3.eu-north-1.amazonaws.com/nft-video.mp4";

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full gap-10 font-satoshi-Bold">
      <div id="creon-pass" className="lg:w-1/2 md:w-full w-full mt-20">
        <h1 className="uppercase font-monument text-2xl sm:text-3xl md:text-4xl md:leading-[4rem] xxl:text-[68px] xxl:leading-[4.7rem] text-white">
          Creon Pass <br className="hidden lg:block" /> NFT
        </h1>
        <div className="bg-[#13171D] w-full h-[1px] my-[30px]" />
        <p className="bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text lg:w-[80%] text-[22px]">
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools
        </p>
        <div className="space-y-5 mt-10 font-satoshi-Regular">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border-[1px] rounded-md border-[#13171D] px-[18px] py-3 lg:w-max"
            >
              {benefit}
            </div>
          ))}
        </div>
        <div className="mt-[72px]">
          <Button className="lg:w-[453px] w-full h-[54px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] hover:bg-none border-none">
            <p>Buy Creon Pass</p>
            <p>Buy Creon Pass</p>
          </Button>
        </div>
      </div>
      <div className="md:w-full lg:w-1/2 relative md:right-0 h-full">
        <Image
          src={DarkShape}
          alt="Video Frame"
          className="absolute top-0 left-0 w-max h-full z-10"
        />
        <video
          autoPlay
          loop
          muted
          preload="none"
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Benefits;
