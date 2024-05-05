import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const Hero = dynamic(() => import("@/components").then(mod => mod.Hero), { ssr: true });
const Benefits = dynamic(() => import("@/components").then(mod => mod.Benefits), { ssr: true });
const Synergy = dynamic(() => import("@/components").then(mod => mod.Synergy), { ssr: true });
const Vision = dynamic(() => import("@/components").then(mod => mod.Vision), { ssr: true });
const Launchpad = dynamic(() => import("@/components").then(mod => mod.Launchpad), { ssr: true });
const Innovation = dynamic(() => import("@/components").then(mod => mod.Innovation), { ssr: true });

const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-y-20 xl:gap-y-56 lg:mt-10">
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
