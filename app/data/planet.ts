import bgImg1 from "@/assets/SolarSystem1.png";
import bgImg2 from "@/assets/SolarSystem2.png";
import bgImg3 from "@/assets/SolarSystem1.png";
import bgImg4 from "@/assets/SolarSystem2.png";
import bgImg5 from "@/assets/SolarSystem1.png";
import bgImg6 from "@/assets/SolarSystem2.png";
import bgImg7 from "@/assets/SolarSystem2.png";
import bgImg8 from "@/assets/SolarSystem2.png";
import bgImg9 from "@/assets/SolarSystem2.png";

import planetImg1 from "@/assets/sun.png";
import planetImg2 from "@/assets/murcury.png";
import planetImg3 from "@/assets/venus.png";
import planetImg4 from "@/assets/earth.png";
import planetImg5 from "@/assets/mars.png";
import planetImg6 from "@/assets/jupiter.png";
import planetImg7 from "@/assets/saturn.png";
import planetImg8 from "@/assets/uranus.png";
import planetImg9 from "@/assets/neptune.png";

export const planets = [
  {
    name: "Sun",
    bgImage: bgImg1,
    planetImage: planetImg1,
    stats: {
      galaxy: "Milky Way",
      diameter: "1,392,684 km",
      length: "—",
      temp: "6000 Kelvin",
    },
  },
  {
    name: "Mercury",
    bgImage: bgImg2,
    planetImage: planetImg2,
    stats: {
      galaxy: "Milky Way",
      diameter: "4,879 km",
      length: "58.6 days",
      temp: "430°C",
    },
  },
  {
    name: "Venus",
    bgImage: bgImg3,
    planetImage: planetImg3,
    stats: {
      galaxy: "Milky Way",
      diameter: "12,104 km",
      length: "243 days",
      temp: "465°C",
    },
  },
  {
    name: "Earth",
    bgImage: bgImg4,
    planetImage: planetImg4,
    stats: {
      galaxy: "Milky Way",
      diameter: "12,742 km",
      length: "24 hours",
      temp: "15°C",
    },
  },
  {
    name: "Mars",
    bgImage: bgImg5,
    planetImage: planetImg5,
    stats: {
      galaxy: "Milky Way",
      diameter: "6,779 km",
      length: "24.6 hours",
      temp: "-65°C",
    },
  },
  {
    name: "Jupiter",
    bgImage: bgImg6,
    planetImage: planetImg6,
    stats: {
      galaxy: "Milky Way",
      diameter: "139,820 km",
      length: "9.9 hours",
      temp: "-110°C",
    },
  },
  {
    name: "Saturn",
    bgImage: bgImg7,
    planetImage: planetImg7,
    stats: {
      galaxy: "Milky Way",
      diameter: "116,460 km",
      length: "10.7 hours",
      temp: "-140°C",
    },
  },
  {
    name: "Uranus",
    bgImage: bgImg8,
    planetImage: planetImg8,
    stats: {
      galaxy: "Milky Way",
      diameter: "50,724 km",
      length: "17.2 hours",
      temp: "-195°C",
    },
  },
  {
    name: "Neptune",
    bgImage: bgImg9,
    planetImage: planetImg9,
    stats: {
      galaxy: "Milky Way",
      diameter: "49,244 km",
      length: "16.1 hours",
      temp: "-200°C",
    },
  },
];
