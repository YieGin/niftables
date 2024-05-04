import { InnovationList } from "@/lib/constant";
import Image from "next/image";
import React from "react";
import Footer from "./Footer";

const Innovation = () => {
  const videoUrl =
    "https://yiegin.s3.eu-north-1.amazonaws.com/roadmap-video.mp4";

  return (
    <div className="relative">
      <div>
        <div className="video-overlay-Innovation-video-top" />
        <video
          autoPlay
          loop
          muted
          preload="none"
          playsInline
          className="w-full h-[75%] bottom-0 object-cover absolute z-[-1] opacity-20"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay-Innovation-video-bottom" />
      </div>
      <div className="grid w-full relative overflow-scroll xl:overflow-hidden hide-scrollbar">
        <div className="flex lg:flex-col z-10 relative lg:overflow-hidden hide-scrollbar md:gap-y-5 px-5 md:px-20 2xl:px-[219px] gap-5 md:gap-x-10">
          {InnovationList.map((item, index) => (
            <div
              key={index}
              className="flex lg:flex-row flex-col-reverse lg:justify-between rounded-md bg-[#13171D] bg-opacity-60 h-full md:w-[400px] sm:w-[80vw] w-[80vw] lg:w-full"
            >
              <div className="lg:w-[70%] p-5 lg:p-8 mb-auto">
                <h1 className="xl:text-[38px] leading-[120%] md:text-[20px] text-sm sm:text-[18px] font-monument uppercase lg:min-h-max md:min-h-[4.5rem] min-h-[2.5rem]">
                  {item.title}
                </h1>
                <p className="font-satoshi-Regular md:text-[15px] sm:text-[15px] text-sm lg:text-[18px] leading-[130%] text-white lg:mr-10 mt-2">
                  {item.description}
                </p>
              </div>
              <div className="relative lg:w-[480px] rounded-md z-20">
                <div className="video-overlay-Innovation-video-bottom rounded-l-md rounded-r-md lg:rounded-r-none opacity-70" />
                <Image
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full rounded-r-md rounded-l-md lg:rounded-l-none z-20"
                  src={item.image}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Innovation;
