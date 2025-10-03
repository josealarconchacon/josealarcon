"use client";

import { Code2, ExternalLink } from "lucide-react";
import Image from "next/image";
import { FEATURED_PROJECT } from "@/data/projects";

const FeaturedProject = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
              <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <Image
                  src={FEATURED_PROJECT.icon}
                  alt={FEATURED_PROJECT.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-2xl" />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <p className="text-sm text-purple-400 font-semibold mb-2 tracking-wider uppercase">
                {FEATURED_PROJECT.tag}
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                {FEATURED_PROJECT.title}
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              {FEATURED_PROJECT.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={FEATURED_PROJECT.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Code2 size={20} />
                Check source code
              </a>
              <a
                href={FEATURED_PROJECT.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
              >
                <ExternalLink size={20} />
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
