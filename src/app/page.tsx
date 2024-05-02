import React from "react";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Synergy from "@/components/Synergy";

const Home = () => {
  return (
    <div className="mb-20">
      <Hero />
      <div className="px-10 md:px-20 2xl:px-60 space-y-40">
        <Benefits />
        <Synergy />
      </div>
    </div>
  );
};

export default Home;
