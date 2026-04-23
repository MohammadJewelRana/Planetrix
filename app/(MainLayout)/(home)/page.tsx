"use client";

import { useState, useEffect } from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { planets } from "@/app/data/planet";
import Background from "./_components/Background";
import PlanetHeader from "./_components/PlanetHeader";
import PlanetOrbit from "./_components/PlanetOrbit";

const page = () => {
  const [active, setActive] = useState(0);
  const [screen, setScreen] = useState<"sm" | "md" | "lg">("lg");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setScreen("sm");
      else if (window.innerWidth < 1024) setScreen("md");
      else setScreen("lg");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = (active - 1 + planets.length) % planets.length;
  const next = (active + 1) % planets.length;

  const activePlanet = planets[active];

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden text-white">
      <Background activePlanet={activePlanet} />

      <Header />

      <section className="relative z-10 flex flex-1 flex-col">
        <PlanetHeader planet={activePlanet} />

        <PlanetOrbit
          planets={planets}
          active={active}
          prev={prev}
          next={next}
          setActive={setActive}
          screen={screen}
        />

        <Footer />
      </section>
    </main>
  );
};

export default page;
