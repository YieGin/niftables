import { InnovationType } from "@/types";
import Image from "next/image";

interface InnovationItemProps {
  item: InnovationType;
}

const InnovationItem = ({ item }: InnovationItemProps) => (
  <article className="flex xl:flex-row flex-col-reverse xl:justify-between rounded-md bg-[#13171D] bg-opacity-60 h-full md:w-[400px] sm:w-[80vw] w-[80vw] xl:w-full">
    <div className="xl:w-[70%] p-5 pt-7 xl:p-10 mb-auto">
      <h1 className="xl:text-[38px] leading-[120%] md:text-[20px] text-sm sm:text-[18px] font-monument uppercase xl:min-h-max md:min-h-[4.5rem] min-h-[3rem] sm:min-h-[4rem]">
        {item.title}
      </h1>
      <p className="font-satoshi-Regular md:text-[15px] lg:text-[17px] sm:text-[15px] text-sm xl:text-[18px] leading-[130%] text-white xl:mr-6 mt-2">
        {item.description}
      </p>
    </div>
    <div className="relative xl:w-[480px] w-full h-[250px] xl:h-full rounded-md z-20">
      <div className="video-overlay-Innovation-video-bottom rounded-l-md rounded-r-md xl:rounded-r-none opacity-70" />
      <Image
        layout="fill"
        className="object-cover w-full h-full rounded-r-md rounded-l-md xl:rounded-l-none"
        src={item.image}
        alt={item.title}
      />
    </div>
  </article>
);

export default InnovationItem;
