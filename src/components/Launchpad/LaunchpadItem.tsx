import React from "react";
import Image from "next/image";
import { CoreType } from "@/types";

interface LaunchpadItemProps {
  item: CoreType;
}

const LaunchpadItem: React.FC<LaunchpadItemProps> = ({ item }) => {
  return (
    <article className="group rounded-lg py-[30px] h-full relative bg-[#13171D] bg-opacity-60 md:w-[400px] sm:w-[80vw] w-[80vw] xl:w-full">
      <header className="xl:px-[30px] px-5 mb-5 xl:mb-0 h-[100px] xl:h-[180px] xxl:h-[160px]">
        <div className="absolute -top-3 right-7 bg-white rounded-full px-[6px] py-[3px]">
          <p className="text-[12px] text-black uppercase">Coming soon</p>
        </div>
        <h2 className="2xl:text-[38px] xl:text-[28px] text-[20px] font-monument uppercase mb-3">
          {item.title}
        </h2>
        <h3 className="xl:text-[22px] font-satoshi-Bold leading-[130%] text-[18px] lg:text-[17px] bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {item.Utility}
        </h3>
      </header>
      <div className="overflow-hidden mr-8 rounded-r-lg">
        <Image
          width={600}
          height={600}
          className="transition-transform duration-500 group-hover:scale-[115%] lg:w-full w-full"
          src={item.Image}
          alt={item.title}
        />
      </div>
      <h3 className="font-satoshi-Regular xl:text-[18px] leading-[130%] xl:px-[30px] px-5 pt-7 mr-[14px]">
        {item.Details}
      </h3>
    </article>
  );
};

export default LaunchpadItem;
