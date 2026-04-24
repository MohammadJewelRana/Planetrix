import SkeletonBox from "./SkeletonBox";

 

const PlanetOrbitSkeleton = () => {
  return (
    <div className="relative flex w-full flex-1 items-center justify-center">

      {/* LEFT */}
      <SkeletonBox className="absolute left-2 md:left-0 w-24 h-24 md:w-32 md:h-32 rounded-full" />

      {/* CENTER */}
      <SkeletonBox className="w-40 h-40 md:w-60 md:h-60 rounded-full" />

      {/* RIGHT */}
      <SkeletonBox className="absolute right-2 md:right-0 w-24 h-24 md:w-32 md:h-32 rounded-full" />

    </div>
  );
};

export default PlanetOrbitSkeleton;