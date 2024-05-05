"use client";
import { useRef } from "react";
import { InnovationList } from "@/lib/constant";
import VideoSection from "./VideoSection";
import InnovationItem from "./InnovationItem";
import Footer from "../Footer";
import { smoothScroll } from "../Launchpad/scrollUtils";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videoUrl = "https://yiegin.s3.eu-north-1.amazonaws.com/roadmap-video.mp4";

const Innovation = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "next" | "prev") => {
    smoothScroll(scrollContainer.current, direction, 500);
    console.log("test");
  };

  return (
    <section className="relative">
      <button
        className="absolute left-0 top-[35%] z-20 -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-800 rounded-full p-3 block xl:hidden"
        onClick={() => handleScroll("prev")}
      >
        <FaChevronLeft size={10} />
      </button>
      <VideoSection src={videoUrl} />
      <div className="grid w-full relative mb-24">
        <div
          className="flex xl:flex-col z-10 relative overflow-x-scroll hide-scrollbar md:gap-y-5 px-5 md:px-20 2xl:px-[219px] gap-5 md:gap-x-10"
          ref={scrollContainer}
        >
          {InnovationList.map((item, index) => (
            <InnovationItem key={index} item={item} />
          ))}
        </div>
      </div>
      <button
        className="absolute right-0 top-[35%] z-10 -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-800 rounded-full p-3 block xl:hidden"
        onClick={() => handleScroll("next")}
      >
        <FaChevronRight size={10} />
      </button>
      <Footer />
    </section>
  );
};

export default Innovation;
