import PlanetItem from "./PlanetItem";

const PlanetOrbit = ({
  planets,
  active,
  prev,
  next,
  setActive,
  screen,
}: any) => {
  const sizes = {
    lg: { active: 280, side: 150 },
    md: { active: 200, side: 130 },
    sm: { active: 150, side: 90 },
  };

  const currentSize = sizes[screen as keyof typeof sizes];

  const visible = [prev, active, next];

  return (
    <div className="relative flex w-full flex-1 items-center justify-center px-2 md:px-6">
      {visible.map((index) => (
        <PlanetItem
          key={index}
          planet={planets[index]}
          index={index}
          active={active}
          prev={prev}
          next={next}
          screen={screen}
          setActive={setActive}
          size={currentSize}
        />
      ))}
    </div>
  );
};

export default PlanetOrbit;
