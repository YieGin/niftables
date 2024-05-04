import dynamic from "next/dynamic";
import React, { Suspense } from "react";
const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const Benefits = dynamic(() => import("@/components/Benefits"), { ssr: true });
const Synergy = dynamic(() => import("@/components/Synergy"), { ssr: true });
const Vision = dynamic(() => import("@/components/Vision"), { ssr: true });
const Launchpad = dynamic(() => import("@/components/Launchpad"), { ssr: true });
const Innovation = dynamic(() => import("@/components/Innovation"), { ssr: true });

const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-y-20 lg:gap-y-56 lg:mt-10">
        <Suspense fallback={<div>Loading...</div>}>
          <Benefits />
          <Synergy />
          <Vision />
          <Launchpad />
          <Innovation />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
