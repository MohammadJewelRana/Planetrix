"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Background=({ activePlanet }: any) =>{
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={activePlanet.name}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
        >
          <Image src={activePlanet.bgImage} alt="" fill className="object-cover" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,22,0.05)_0%,rgba(5,10,22,0.5)_100%)]" />
    </>
  );
}

export default  Background;