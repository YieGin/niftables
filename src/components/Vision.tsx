"use client";
import React, { useState } from "react";
import Image from "next/image";
import { VisionList } from "@/lib/constant";
import { ImageLog } from "../../public";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Vision = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([0]);

  const handleIsActive = (index: number) => {
    setActiveIndices(prevIndices => {
      const currentIndex = prevIndices.indexOf(index);
      if (currentIndex === -1) {
        return [...prevIndices, index];
      } else {
        return prevIndices.filter(i => i !== index);
      }
    });
  };

  const renderTitle = (title: string) => {
    const parts = title.split("<br />");
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < parts.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="flex lg:flex-row flex-col gap-10 font-satoshi-Bold w-full">
      <div className="lg:w-[60%]">
        <h2 className="font-monument text-base md:text-[25px] lg:text-[38px] md:leading-[120%] uppercase">
          Our vision is to <br className="lg:block hidden" /> support the innovation <br className="lg:block hidden" /> of AI blockchain <br className="lg:block hidden" /> projects{" "}
          <span className="bg-gradient-to-tr from-[#3D8BFF] from-0% to-[#AB23FF] to-100% text-transparent bg-clip-text">
            while <br className="lg:block hidden" /> prioritizing communities <br className="lg:block hidden" /> and democratizing <br className="lg:block hidden" /> profits
          </span>
        </h2>
        <Image
          src={ImageLog}
          className="object-cover lg:w-[45%] lg:absolute mt-10 lg:ml-20"
          alt="Vision logo"
        />
      </div>
      <div className="lg:w-[40%] flex flex-col z-10 space-y-5">
        {VisionList.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => handleIsActive(index)}
              className={`flex gap-2 lg:gap-[30px] w-full cursor-pointer ${
                activeIndices.includes(index)
                  ? "text-white"
                  : "hover:text-[#3b86f6] delay-75 transition-all ease-linear"
              }`}
            >
              <item.icon isActive={activeIndices.includes(index)} />
              <div className="flex flex-col w-full">
                <div className="flex items-center my-6">
                  <h2 className="md:text-[22px]">{renderTitle(item.title)}</h2>
                  {activeIndices.includes(index) ? (
                    <IoIosArrowUp className="text-[22px] ml-auto transition-all" />
                  ) : (
                    <IoIosArrowDown className="text-[22px] ml-auto transition-all" />
                  )}
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndices.includes(index)
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden font-satoshi-Regular md:text-[18px] text-sm lg:mr-10">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#13171D] mt-[30px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vision;
