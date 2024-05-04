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
      <div className="flex flex-col md:gap-y-5 px-5 md:px-20 2xl:px-[219px] z-10 relative ">
        {InnovationList.map((item, index) => (
          <div
            key={index}
            className="flex md:flex-row flex-col-reverse justify-between rounded-md bg-[#13171D] bg-opacity-60 h-full"
          >
            <div className="md:w-[70%] p-5 md:p-8">
              <h1 className="xl:text-[38px] leading-[120%] md:text-[20px] text-[18px] font-monument uppercase">
                {item.title}
              </h1>
              <p className="mt-[15px] font-satoshi-Regular md:text-[15px] text-[15px] lg:text-[18px] leading-[130%] text-white mr-10">
                {item.description}
              </p>
            </div>
            <div className="relative w-[480px] md:rounded-md z-20">
              <div className="video-overlay-bottom md:rounded-l-md opacity-70" />
              <Image
                width={1000}
                height={1000}
                className="object-cover w-full h-full md:rounded-r-md z-20"
                src={item.image}
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Innovation;
