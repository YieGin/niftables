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
    <div className="flex font-satoshi-Bold w-full">
      <div className="w-[60%]">
        <p className="font-monument text-[38px] leading-[120%] uppercase">
          Our vision is to <br /> support the innovation <br /> of AI blockchain <br /> projects{" "}
          <span className="bg-gradient-to-tr from-[#3D8BFF] from-0% to-[#AB23FF] to-100% text-transparent bg-clip-text">
            while <br /> prioritizing communities <br /> and democratizing <br /> profits
          </span>
        </p>
        <Image
          src={ImageLog}
          className="object-cover w-[45%] absolute mt-10 ml-20"
          alt="Vision logo"
        />
      </div>
      <div className="w-[40%] flex flex-col z-10 space-y-5">
        {VisionList.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => handleIsActive(index)}
              className={`flex gap-[30px] w-full cursor-pointer ${
                activeIndices.includes(index)
                  ? "text-white"
                  : "hover:text-[#3b86f6] delay-75 transition-all ease-linear"
              }`}
            >
              <item.icon isActive={activeIndices.includes(index)} />
              <div className="flex flex-col w-full">
                <div className="flex items-center my-6">
                  <h2 className="text-[22px]">{renderTitle(item.title)}</h2>
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
                  <p className="overflow-hidden font-satoshi-Regular text-[18px] mr-10">
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
