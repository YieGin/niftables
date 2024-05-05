import Image from 'next/image';
import React from 'react';

const VisionStatement: React.FC = () => {
  return (
    <div className="lg:w-[50%] xl:w-[60%]">
      <h2 className="font-monument text-base md:text-[25px] lg:text-3xl xl:text-[38px] md:leading-[120%] uppercase">
        Our vision is to <br className="lg:block hidden" /> support the innovation <br className="lg:block hidden" /> of AI blockchain <br className="lg:block hidden" /> projects{" "}
        <span className="bg-gradient-to-tr from-[#3D8BFF] from-0% to-[#AB23FF] to-100% text-transparent bg-clip-text test">
          while <br className="lg:block hidden" /> prioritizing communities <br className="lg:block hidden" /> and democratizing <br className="lg:block hidden" /> profits
        </span>
      </h2>
      <Image
        width={1000}
        height={1000}
        src="/images/VisionImage.webp"
        className="object-cover mt-10 lg:ml-20 w-full"
        alt="Vision Image"
      />
    </div>
  );
};

export default VisionStatement;
