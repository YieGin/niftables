import React from "react";
import { benefits } from "@/lib/constant";
import Button from "../Button";
import VideoSection from "./VideoSection";

const Benefits = () => {
  const videoUrl = "https://yiegin.s3.eu-north-1.amazonaws.com/nft-video.mp4";

  return (
    <div className="px-5 md:px-20 xl:pr-0 2xl:pl-60 flex flex-col xl:flex-row justify-between w-full gap-10 font-satoshi-Bold xl:mt-20">
      <div className="xl:w-1/2 md:w-full w-full mt-10">
        <h1 className="uppercase font-monument text-2xl sm:text-3xl md:text-4xl md:leading-[4rem] lg:text-[50px] xxl:text-[68px] xxl:leading-[110%] text-white">
          Creon Pass <br className="hidden xl:block" /> NFT
        </h1>
        <div className="bg-[#13171D] w-full h-[1px] my-[30px]" />
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary lg:w-[82%] md:text-[22px] font-satoshi-Bold leading-[130%]">
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools.
        </p>
        <div className="space-y-3 mt-10 font-satoshi-Regular">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border-[1px] rounded-md border-[#13171D] px-[18px] py-3 lg:w-max text-[18px] leading-[130%]"
            >
              {benefit}
            </div>
          ))}
        </div>
        <div className="mt-[72px]">
          <Button className="lg:w-[453px] w-full h-[54px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] hover:bg-none border-none text-[18px] leading-[130%]">
            <p>Buy Creon Pass</p>
            <p>Buy Creon Pass</p>
          </Button>
        </div>
      </div>
      <VideoSection src={videoUrl} />
    </div>
  );
};

export default Benefits;
