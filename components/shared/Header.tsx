import Image from "next/image";
import logoImg from "@/assets/logo/logo.png";

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-center px-6 py-5 md:px-14">
      <div className="flex items-center gap-3">
        <Image
          src={logoImg}
          alt="Planetrix Logo"
          width={34}
          height={34}
          className="h-8 w-8 object-contain"
          priority
        />
        <div className="text-lg font-semibold tracking-[0.35em] text-white/90">
          PLANETRIX
        </div>
      </div>
    </header>
  );
}

 