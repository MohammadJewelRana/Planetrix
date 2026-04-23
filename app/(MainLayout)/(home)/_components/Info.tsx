const Info = ({ label, value }: any) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-white/45">
        {label}
      </div>
      <div className="mt-1 md:mt-2 text-xs md:text-sm text-white/80">
        {value}
      </div>
    </div>
  );
};

export default Info;
