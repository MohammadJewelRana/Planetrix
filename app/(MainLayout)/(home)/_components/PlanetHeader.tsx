import Info from "./Info";

const PlanetHeader = ({ planet }: any) => {
  return (
    <div className="px-4 pt-4 md:px-14 md:pt-6">
      <div className="mx-auto max-w-6xl text-center">
        <p
          className="
          text-lg md:text-2xl lg:text-3xl
          font-semibold uppercase
          tracking-[0.25em] md:tracking-[0.4em] lg:tracking-[0.5em]
          text-white/70
        "
        >
          {planet.name}
        </p>

        <div
          className="
          mt-5 grid grid-cols-2 md:grid-cols-4
          gap-y-4 gap-x-2 md:gap-6
          justify-items-center text-center
        "
        >
          <Info label="Galaxy" value={planet.stats.galaxy} />
          <Info label="Diameter" value={planet.stats.diameter} />
          <Info label="Length" value={planet.stats.length} />
          <Info label="Temp" value={planet.stats.temp} />
        </div>
      </div>
    </div>
  );
};

export default PlanetHeader;
