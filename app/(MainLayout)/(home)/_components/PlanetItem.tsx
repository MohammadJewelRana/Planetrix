"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PlanetItem = ({
  planet,
  index,
  active,
  prev,
  next,
  screen,
  setActive,
  size,
}: any) => {
  const isActive = index === active;
  const isPrev = index === prev;
  const isNext = index === next;

  return (
    <motion.button
      onClick={() => setActive(index)}
      className={`
        absolute top-1/2
        ${isActive ? "left-1/2" : ""}
        ${isPrev ? "left-2 md:left-0" : ""}
        ${isNext ? "right-2 md:right-0" : ""}
      `}
      animate={{
        x: isActive
          ? "-50%"
          : isPrev
            ? screen === "sm"
              ? "-20%"
              : "-30%"
            : screen === "sm"
              ? "20%"
              : "30%",

        y: isActive
          ? screen === "sm"
            ? "-100%"
            : screen === "md"
              ? "-65%"
              : "-70%"
          : "-35%",

        scale: isActive ? 1 : 0.85,
        opacity: isActive ? 1 : 0.9,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      style={{
        width: isActive ? size.active : size.side,
        height: isActive ? size.active : size.side,
      }}
    >
      <Image
        src={planet.planetImage}
        alt={planet.name}
        fill
        className="object-contain"
      />

      {/* center light */}
      {isActive && (
        <div
          className="absolute inset-0 rounded-full
          bg-[radial-gradient(circle_at_40%_40%,rgba(255,180,120,0.25)_0%,rgba(255,180,120,0.1)_35%,transparent_40%)]
        "
        />
      )}


      {/*  PLANET NAME */}
      {!isActive && (
        <div
          className={`
      absolute 
      text-white/70 uppercase tracking-[0.3em]
      text-[10px] md:text-xs lg:text-sm
      whitespace-nowrap

      /* ✅ DESKTOP FIX */
      ${isPrev ? "right-0 translate-x-full pl-3" : ""}
      ${isNext ? "left-0 -translate-x-full pr-3" : ""}

      top-1/2 -translate-y-1/2

      /* 📱 MOBILE */
      max-sm:top-full max-sm:left-1/2 
      max-sm:-translate-x-1/2 max-sm:translate-y-2
      max-sm:pl-0 max-sm:pr-0 max-sm:text-center
    `}
        >
          {planet.name}
        </div>
      )}
    </motion.button>
  );
};

export default PlanetItem;
