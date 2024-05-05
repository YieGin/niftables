'use client'
import React, { useState } from 'react';
import VisionItem from './VisionItem';
import { VisionList } from "@/lib/constant";

const VisionItems: React.FC = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([0]);

  const handleIsActive = (index: number) => {
    setActiveIndices((prevIndices) => {
      const currentIndex = prevIndices.indexOf(index);
      if (currentIndex === -1) {
        return [...prevIndices, index];
      } else {
        return prevIndices.filter(i => i !== index);
      }
    });
  };

  return (
    <div className="xl:w-[40%] lg:w-[50%] flex flex-col z-10 space-y-5">
      {VisionList.map((item, index) => (
        <VisionItem
          key={index}
          item={item}
          isActive={activeIndices.includes(index)}
          onToggle={() => handleIsActive(index)}
        />
      ))}
    </div>
  );
};

export default VisionItems;
