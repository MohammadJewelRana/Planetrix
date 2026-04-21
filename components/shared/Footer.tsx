"use client";

import Image from "next/image";
import footerLogo from "@/assets/logo/logo.png";

export default function Footer() {
  return (
    <footer className="relative z-20 w-full">

      {/* FULL WIDTH GLASS STRIP */}
      <div className="w-full border-t border-white/10 bg-white/[0.04] backdrop-blur-xl">

        <div className="mx-auto max-w-7xl px-6 py-6 md:px-12">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            {/* LEFT SIDE */}
            <div className="max-w-md">
              <div className="flex items-center gap-3">
                <Image
                  src={footerLogo}
                  alt="Planetrix"
                  width={30}
                  height={30}
                />
                <span className="text-sm tracking-[0.25em] text-white font-semibold">
                  PLANETRIX
                </span>
              </div>

              {/* 🔥 DESCRIPTION (missing before) */}
              <p className="mt-3 text-xs leading-5 text-white/60">
                Lorem ipsum dolor sit amet consectetur. Fusce sed aliquam amet 
                curabitur eget quam. Tortor nam volutpat tincidunt nibh lacus vitae sed mi.
                Viverra eu commodo sed sed commodo commodo urna sed.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="text-xs text-white/70 space-y-2 text-left md:text-right">
              <div className="hover:text-white cursor-pointer">About Us</div>
              <div className="hover:text-white cursor-pointer">Blog</div>
              <div className="hover:text-white cursor-pointer">Career</div>
              <div className="hover:text-white cursor-pointer">FAQ</div>
              <div className="hover:text-white cursor-pointer">Contact Us</div>
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}