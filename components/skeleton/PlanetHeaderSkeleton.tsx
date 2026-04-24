import SkeletonBox from "./SkeletonBox";

 

 

const PlanetHeaderSkeleton = () => {
  return (
    <div className="px-4 pt-4 md:px-14 md:pt-6">
      <div className="mx-auto max-w-6xl text-center">

        {/* Planet Name */}
        <SkeletonBox className="mx-auto h-6 w-40 md:h-8 md:w-60" />

        {/* Stats */}
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 md:gap-6 justify-items-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <SkeletonBox className="h-3 w-16" />
              <SkeletonBox className="h-4 w-20" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PlanetHeaderSkeleton;