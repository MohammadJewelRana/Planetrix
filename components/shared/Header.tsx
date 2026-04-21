type Props = {
  planet: any;
};

export default function Header({ planet }: Props) {
  return (
    <div className="text-center mt-6 space-y-3">
      <h1 className="text-2xl md:text-3xl font-bold">
        {planet?.name}
      </h1>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-gray-300">
        <p>GALAXY<br />{planet?.galaxy}</p>
        <p>DIAMETER<br />{planet?.diameter}</p>
        <p>LENGTH OF DAY<br />{planet?.day}</p>
        <p>AVG TEMP<br />{planet?.temp}</p>
      </div>
    </div>
  );
}