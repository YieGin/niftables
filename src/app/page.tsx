import React from "react";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Synergy from "@/components/Synergy";
import Vision from "@/components/Vision";

const Home = () => {
  return (
    <div className="mb-20">
      <Hero />
      <div className="px-5 md:px-20 2xl:px-60 space-y-20 lg:space-y-40">
        <Benefits />
        <Synergy />
        <Vision />
      </div>
    </div>
  );
};

export default Home;
