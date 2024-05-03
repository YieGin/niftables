import { CoreList } from "@/lib/constant";
import Image from "next/image";
import React from "react";

const Launchpad = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-10 font-satoshi-Bold">
      <h1 className="sr-only">Main Title of the Page</h1>{" "}
      {CoreList.map((item, index) => (
        <div
          key={index}
          className="group rounded-lg py-[30px] h-full relative bg-[#13171D] bg-opacity-60 flex flex-col"
        >
          <div className="xl:px-[30px] px-5 mb-5 xl:mb-0 lg:h-[100px] xl:h-[180px] xxl:h-[160px]">
            <div className="absolute -top-3 right-7 bg-white rounded-full px-[6px] py-[3px]">
              <p className="text-[12px] text-black uppercase">Coming soon</p>
            </div>
            <h2 className="2xl:text-[38px] xl:text-[28px] text-[20px] font-monument uppercase mb-3">
              {item.title}
            </h2>
            <h3 className="xl:text-[22px] text-[18px] lg:text-[17px] font-satoshi-Bold bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text">
              {item.Utility}
            </h3>
          </div>
          <div className="overflow-hidden mr-8 rounded-r-lg">
            <Image
              className="transition-transform duration-500 group-hover:scale-110 object-cover rounded-r-lg lg:w-full w-full"
              src={item.Image}
              alt={item.title}
            />
          </div>
          <h3 className="font-satoshi-Regular xl:text-[18px] xl:px-[30px] px-5 pt-7">
            {item.Details}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Launchpad;
