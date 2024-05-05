import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { VisionType } from "@/types";

interface VisionItemProps {
  item: VisionType;
  isActive: boolean;
  onToggle: () => void;
}

const renderTitle = (title: string) => {
  const parts = title.split("<br />");
  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < parts.length - 1 && <br />}
    </React.Fragment>
  ));
};

const VisionItem: React.FC<VisionItemProps> = ({ item, isActive, onToggle }) => {
  return (
    <div onClick={onToggle} className={`flex gap-2 lg:gap-[30px] w-full cursor-pointer ${
        isActive ? "text-white" : "hover:text-[#3b86f6] delay-75 transition-all ease-linear"
      }`}>
      <item.icon isActive={isActive} />
      <div className="flex flex-col w-full">
        <div className="flex items-center my-6">
          <h2 className="md:text-[22px] leading-[130%] mt-1">{renderTitle(item.title)}</h2>
          {isActive ? (
            <IoIosArrowUp className="text-[22px] ml-auto transition-all" />
          ) : (
            <IoIosArrowDown className="text-[22px] ml-auto transition-all" />
          )}
        </div>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
            isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}>
          <p className="overflow-hidden font-satoshi-Regular md:text-[18px] leading-[130%] text-sm lg:mr-8">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionItem;
