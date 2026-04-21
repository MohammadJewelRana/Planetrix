"use client";

import Header from "@/components/shared/Header";
import React, { useState } from "react";
import PlanetSlider from "./_components/PlanetSlider";
import { planets } from "@/app/data/planet";

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-screen w-full overflow-hidden bg-[#0B1220] text-white flex flex-col">

      {/* Header (dynamic) */}
      <Header planet={planets[activeIndex]} />

      {/* Slider */}
      <div className="flex-1 flex items-center justify-center">
        <PlanetSlider setActive={setActiveIndex} />
      </div>

    </div>
  );
};

export default Page;