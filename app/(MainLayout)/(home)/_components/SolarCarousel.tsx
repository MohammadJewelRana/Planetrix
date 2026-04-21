'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from '@/components/shared/Footer';
import { planets } from '@/app/data/planet';
import Header from '@/components/shared/Header';

export default function SolarCarousel() {
  const [active, setActive] = useState(0);

  const prev = (active - 1 + planets.length) % planets.length;
  const next = (active + 1) % planets.length;

  const activePlanet = planets[active];
  const visible = [prev, active, next];

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={activePlanet.name}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
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
<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,22,0.01)_0%,rgba(15,22,40,0.12)_35%,rgba(20,29,51,0.24)_72%,rgba(5,10,22,0.62)_100%)]" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,41,72,0.04)_0%,rgba(15,22,40,0.08)_42%,rgba(5,10,22,0.36)_100%)]" />


      <Header />

      <section className="relative z-10 flex flex-1 flex-col">
        <div className="px-6 pt-6 md:px-14">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-white/70">
              {activePlanet.name}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-left md:grid-cols-4">
              <div>
                <div className="text-[11px] uppercase tracking-[0.4em] text-white/45">
                  Galaxy
                </div>
                <div className="mt-2 text-sm text-white/80">
                  {activePlanet.stats.galaxy}
                </div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.4em] text-white/45">
                  Diameter
                </div>
                <div className="mt-2 text-sm text-white/80">
                  {activePlanet.stats.diameter}
                </div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.4em] text-white/45">
                  Length of day
                </div>
                <div className="mt-2 text-sm text-white/80">
                  {activePlanet.stats.length}
                </div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.4em] text-white/45">
                  Average temperature
                </div>
                <div className="mt-2 text-sm text-white/80">
                  {activePlanet.stats.temp}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute h-[540px] w-[540px] rounded-full border border-white/8" />
            <div className="absolute h-[430px] w-[430px] rounded-full border border-white/8" />
            <div className="absolute h-[320px] w-[320px] rounded-full border border-white/8" />
            <div className="absolute h-[210px] w-[210px] rounded-full border border-white/8" />
          </div>

          {visible.map((index) => {
            const planet = planets[index];
            const isActive = index === active;
            const isPrev = index === prev;

            return (
              <motion.button
                key={planet.name}
                onClick={() => setActive(index)}
                className="absolute left-1/2 top-1/2"
                initial={false}
                animate={{
                  x: isActive ? '-50%' : isPrev ? '-175%' : '85%',
                  y: isActive ? '-50%' : isPrev ? '-22%' : '-18%',
                  scale: isActive ? 1 : 0.38,
                  opacity: isActive ? 1 : 0.55,
                  zIndex: isActive ? 30 : 10,
                  filter: isActive ? 'blur(0px)' : 'blur(1px)',
                }}
                transition={{ type: 'spring', stiffness: 110, damping: 20 }}
                style={{
                  width: isActive ? 360 : 170,
                  height: isActive ? 360 : 170,
                }}
              >
                <Image
                  src={planet.planetImage}
                  alt={planet.name}
                  fill
                  className="object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.12)]"
                />
                {isActive && (
                  <div className="absolute inset-0 rounded-full shadow-[0_0_130px_rgba(255,120,0,0.42)]" />
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
