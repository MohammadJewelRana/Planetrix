"use client";

import Image from "next/image";
import footerLogo from "@/assets/logo/logo.png";

export default function Footer() {
  return (
    <footer className="relative z-20 w-full">
      {/* GLASS BAR */}
      <div className="w-full border-t border-white/10 bg-white/[0.04] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-12 md:py-6">
          <div className="flex flex-col items-center gap-3 md:flex-row md:items-end md:justify-between md:gap-6">
            {/* LEFT */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="flex items-center gap-2">
                <Image
                  src={footerLogo}
                  alt="Planetrix"
                  width={26}
                  height={26}
                />
                <span className="text-xs tracking-[0.2em] text-white font-semibold md:text-sm">
                  PLANETRIX
                </span>
              </div>

              {/* ❌ hide on small */}
              <p className="  md:block mt-3 text-xs leading-5 text-white/60 max-w-md">
                Lorem ipsum dolor sit amet consectetur. Fusce sed aliquam amet
                curabitur eget quam.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-wrap justify-center gap-3 text-[11px] text-white/70 md:flex-col md:items-end md:text-right md:gap-2">
              <div className="hover:text-white cursor-pointer transition">
                About
              </div>
              <div className="hover:text-white cursor-pointer transition">
                Blog
              </div>
              <div className="hover:text-white cursor-pointer transition">
                Career
              </div>
              <div className="hover:text-white cursor-pointer transition">
                FAQ
              </div>
              <div className="hover:text-white cursor-pointer transition">
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
