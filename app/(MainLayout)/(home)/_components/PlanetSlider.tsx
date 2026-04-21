"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";

import img from "@/assets/sun.png";

type Props = {
  setActive: (index: number) => void;
};

const planets = [
  {
    name: "Mercury",
    img: img,
    galaxy: "Milky Way",
    diameter: "4,879 km",
    day: "58d 15h",
    temp: "167°C",
  },
  {
    name: "Venus",
    img: img,
    galaxy: "Milky Way",
    diameter: "12,104 km",
    day: "243d",
    temp: "464°C",
  },
  {
    name: "Earth",
    img: img,
    galaxy: "Milky Way",
    diameter: "12,742 km",
    day: "24h",
    temp: "15°C",
  },
];

export default function PlanetSlider({ setActive }: Props) {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={1.3}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 2.5,
        slideShadows: false,
      }}
      onSlideChange={(swiper) => setActive?.(swiper.realIndex)}
      modules={[EffectCoverflow]}
      className="w-full max-w-5xl"
    >
      {planets.map((planet, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          
          <Image
            src={planet.img}
            alt={planet.name}
            className="w-[180px] sm:w-[250px] md:w-[400px] transition-all duration-500"
          />

        </SwiperSlide>
      ))}
    </Swiper>
  );
}