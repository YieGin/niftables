import React from "react";
import { CoreList } from "@/lib/constant";
import LaunchpadItem from "./LaunchpadItem";

const Launchpad: React.FC = () => {
  return (
    <div className="relative w-full h-max overflow-hidden">
      <section className="grid w-full relative overflow-scroll xl:overflow-hidden hide-scrollbar px-5 md:px-20 2xl:px-[219px]">
        <div className="flex gap-5 md:gap-10 font-satoshi-Bold py-10">
          {CoreList.map((item, index) => (
            <LaunchpadItem key={index} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Launchpad;
