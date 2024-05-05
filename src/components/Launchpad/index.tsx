'use client'
import React, { useRef } from "react";
import { CoreList } from "@/lib/constant";
import LaunchpadItem from "./LaunchpadItem";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { smoothScroll } from './scrollUtils';  // Adjust the path as necessary

const Launchpad: React.FC = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'next' | 'prev') => {
    smoothScroll(scrollContainer.current, direction, 500); // You can adjust the duration as needed
  };

  return (
    <div className="relative w-full h-max overflow-hidden">
      <button
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-800 rounded-full p-3 block xl:hidden"
        onClick={() => handleScroll('prev')}
      >
        <FaChevronLeft size={10} />
      </button>
      <section className="grid w-full relative overflow-scroll xl:overflow-hidden hide-scrollbar">
        <div ref={scrollContainer} className="xl:grid xl:grid-cols-3 scroll-smooth flex gap-5 md:gap-10 font-satoshi-Bold py-10 overflow-x-scroll hide-scrollbar px-5 md:px-20 2xl:px-[219px]">
          {CoreList.map((item, index) => (
            <LaunchpadItem key={index} item={item} />
          ))}
        </div>
      </section>
      <button
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-800 rounded-full p-3 block xl:hidden"
        onClick={() => handleScroll('next')}
      >
        <FaChevronRight size={10} />
      </button>
    </div>
  );
};

export default Launchpad;
