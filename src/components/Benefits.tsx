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
    <div className="flex justify-between w-full gap-10 px-10 md:px-20 2xl:px-60 font-satoshi-Bold">
      <div className="w-1/2">
        <h1 className="text-[68px] font-monument uppercase leading-[4.5rem]">
          Creon Pass NFT
        </h1>
        <div className="bg-[#13171D] w-full h-[1px] my-[30px]" />
        <p className="bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text w-2/3">
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools
        </p>
        <div className="space-y-5 mt-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border-[1px] rounded-md border-[#13171D] px-[18px] py-3 w-max"
            >
              {benefit}
            </div>
          ))}
        </div>
        <div className="mt-[72px]">
          <Button className="w-[453px] h-[54px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] hover:bg-none border-none">
            <p>Buy Creon Pass</p>
            <p>Buy Creon Pass</p>
          </Button>
        </div>
      </div>
      <div className="w-1/2 flex relative">
        <Image
          src={DarkShape}
          alt="Video Frame"
          className="absolute top-0 left-0 w-full h-full z-20"
        />
        <video
          autoPlay
          loop
          muted
          preload="none"
          playsInline
          className="w-full h-[99%] object-cover "
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Benefits;
