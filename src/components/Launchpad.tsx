  import { CoreList } from "@/lib/constant";
  import Image from "next/image";
  import React from "react";

  const Launchpad = () => {
    return (
      <div className="relative w-full h-max overflow-hidden pl-5 md:pl-20 2xl:px-[219px]">
        <div className="grid w-full relative overflow-scroll xl:overflow-hidden hide-scrollbar">
          <div className="flex gap-5 md:gap-10 font-satoshi-Bold py-10 mr-5 lg:mr-0">
            {CoreList.map((item, index) => (
              <div
                key={index}
                className="group rounded-lg py-[30px] h-full relative bg-[#13171D] bg-opacity-60 md:w-[400px] sm:w-[80vw] w-[80vw] xl:w-full"
              >
                <div className="xl:px-[30px] px-5 mb-5 xl:mb-0 h-[100px] xl:h-[180px] xxl:h-[160px]">
                  <div className="absolute -top-3 right-7 bg-white rounded-full px-[6px] py-[3px]">
                    <p className="text-[12px] text-black uppercase">
                      Coming soon
                    </p>
                  </div>
                  <h2 className="2xl:text-[38px] xl:text-[28px] text-[20px] font-monument uppercase mb-3">
                    {item.title}
                  </h2>
                  <h3 className="xl:text-[22px] font-satoshi-Bold leading-[130%] text-[18px] lg:text-[17px] creon-pass-linear">
                    {item.Utility}
                  </h3>
                </div>
                <div className="overflow-hidden mr-8 rounded-r-lg">
                  <Image
                    width={500}
                    height={500}
                    className="transition-transform duration-500 group-hover:scale-110 object-contain rounded-r-lg lg:w-full w-full"
                    src={item.Image}
                    alt={item.title}
                  />
                </div>
                <h3 className="font-satoshi-Regular xl:text-[18px] leading-[130%] xl:px-[30px] px-5 pt-7 mr-[14px]">
                  {item.Details}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Launchpad;
