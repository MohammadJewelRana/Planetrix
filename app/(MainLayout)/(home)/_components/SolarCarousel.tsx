"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "@/components/shared/Footer";
import { planets } from "@/app/data/planet";
import Header from "@/components/shared/Header";

export default function SolarCarousel() {
  const [active, setActive] = useState(0);
  const [screen, setScreen] = useState<"sm" | "md" | "lg">("lg");

  // ✅ responsive detection
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
  const visible = [prev, active, next];

  // ✅ FIXED responsive sizes
  const sizes = {
    lg: { active: 280, side: 150 },
    md: { active: 200, side: 110 },
    sm: { active: 150, side: 80 },
  };

  const currentSize = sizes[screen];

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden text-white">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePlanet.name}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={activePlanet.bgImage}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,22,0.2)_0%,rgba(5,10,22,0.8)_100%)]" />

      <Header />

      <section className="relative z-10 flex flex-1 flex-col">

        {/* HEADER FIX */}
        <div className="px-4 pt-4 md:px-14 md:pt-6">
          <div className="mx-auto max-w-6xl text-center">

            <p
              className="
              text-lg md:text-2xl lg:text-3xl
              font-semibold uppercase
              tracking-[0.3em] md:tracking-[0.4em] lg:tracking-[0.5em]
              text-white/70
            "
            >
              {activePlanet.name}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 text-left md:grid-cols-4">
              <Info label="Galaxy" value={activePlanet.stats.galaxy} />
              <Info label="Diameter" value={activePlanet.stats.diameter} />
              <Info label="Length of day" value={activePlanet.stats.length} />
              <Info label="Avg Temp" value={activePlanet.stats.temp} />
            </div>
          </div>
        </div>

        {/* PLANETS */}
        <div className="relative flex w-full flex-1 items-center justify-center px-2 md:px-6">

          {visible.map((index) => {
            const planet = planets[index];
            const isActive = index === active;
            const isPrev = index === prev;
            const isNext = index === next;

            return (
              <motion.button
                key={planet.name}
                onClick={() => setActive(index)}
                className={`
                  absolute top-1/2
                  ${isActive ? "left-1/2" : ""}
                  ${isPrev ? "left-2 md:left-0" : ""}
                  ${isNext ? "right-2 md:right-0" : ""}
                `}
                initial={false}
                animate={{
                  x: isActive
                    ? "-50%"
                    : isPrev
                    ? screen === "sm"
                      ? "-10%"
                      : "-30%"
                    : screen === "sm"
                    ? "10%"
                    : "30%",

                  y: isActive
                    ? screen === "sm"
                      ? "-45%"
                      : screen === "md"
                      ? "-60%"
                      : "-70%"
                    : "-35%",

                  scale: isActive
                    ? 1
                    : screen === "sm"
                    ? 0.7
                    : 0.8,

                  opacity: isActive ? 1 : 0.9,
                  zIndex: isActive ? 30 : 10,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                style={{
                  width: isActive
                    ? currentSize.active
                    : currentSize.side,
                  height: isActive
                    ? currentSize.active
                    : currentSize.side,
                }}
              >
                <Image
                  src={planet.planetImage}
                  alt={planet.name}
                  fill
                  className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                />

                {/* ✅ BLENDED LIGHT (NO HARD GLOW) */}
                {isActive && (
                  <div className="absolute inset-0 rounded-full 
                    bg-[radial-gradient(circle_at_center,rgba(255,140,60,0.25)_0%,rgba(255,140,60,0.15)_30%,transparent_70%)]" 
                  />
                )}

                {/* SIDE SHADOW */}
                {!isActive && (
                  <div
                    className={`
                      absolute inset-0 rounded-full
                      ${
                        isPrev
                          ? "bg-gradient-to-r from-black/70 to-transparent"
                          : "bg-gradient-to-l from-black/70 to-transparent"
                      }
                    `}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        <Footer />
      </section>
    </main>
  );
}

/* Info Component */
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/45">
        {label}
      </div>
      <div className="mt-1 md:mt-2 text-xs md:text-sm text-white/80">
        {value}
      </div>
    </div>
  );
}