import React from "react";
import VisionStatement from "./VisionStatement";
import VisionItems from "./VisionItems";

const Vision: React.FC = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-10 font-satoshi-Bold w-full px-5 md:px-20 2xl:px-60">
      <VisionStatement />
      <VisionItems />
    </div>
  );
};

export default Vision;
