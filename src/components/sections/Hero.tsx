"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { scrollToSection } from "@/utils/scrollToSection";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="relative z-10 space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Hi! I Am Jose Alarcon
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
              Front-end developer based in New York, previously an apprentice at
              one of the leading financial institutions.
            </p>
          </div>

          <button
            onClick={() => scrollToSection("projects")}
            className="group bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-3 hover:gap-4 hover:scale-105"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-full blur-3xl scale-150 animate-pulse" />
            <div className="absolute -right-12 top-1/2 w-64 h-64 bg-gray-800/30 rounded-full border border-gray-700/30" />
            <div
              className="absolute -left-8 bottom-0 w-48 h-48 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            />

            <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700/50">
              <Image
                src="/jose_portolio_img.jpeg"
                alt="Jose Alarcon - Front-end Developer"
                width={400}
                height={500}
                className="w-full h-full object-cover"
                priority
                unoptimized={true}
                onError={(e) => console.error("Image failed to load:", e)}
                onLoad={() => console.log("Image loaded successfully")}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
