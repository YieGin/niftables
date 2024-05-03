import { InnovationList } from "@/lib/constant";
import Image from "next/image";
import React from "react";

const Innovation = () => {
  return (
    <div className="flex flex-col gap-y-5 ">
      {InnovationList.map((item, index) => (
        <div key={index} className="flex md:flex-row flex-col rounded-md bg-[#13171D] bg-opacity-60">
          <div className="md:w-[70%] p-5 md:p-8">
            <h1 className="lg:text-[38px] md:text-[20px] text-[18px] font-monument">{item.title}</h1>
            <p className="mt-[15px] font-satoshi-Regular md:text-[15px] text-[15px] lg:text-[18px]">
              {item.description}
            </p>
          </div>
          <Image
            className="object-cover md:w-[40%] lg:w-[30%]"
            src={item.image}
            alt={item.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Innovation;
