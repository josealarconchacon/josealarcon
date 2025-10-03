"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { scrollToSection } from "@/utils/scrollToSection";
import { SIDE_PROJECTS } from "@/data/projects";

const SideProjects = () => {
  return (
    <section
      id="side-projects"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Projects
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              A collection of personal projects showcasing creativity,
              problem-solving, and self-driven work. Focused on skill-building
              and exploring new technologies.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3"
            >
              Take Me There
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {SIDE_PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] shadow-2xl hover:shadow-purple-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Image Container - Larger aspect ratio */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-950">
                  {project.icon.startsWith("/") ? (
                    <Image
                      src={project.icon}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top"
                      quality={100}
                      priority={index < 2}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-6xl sm:text-7xl">
                      {project.icon}
                    </div>
                  )}
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6 sm:p-8 pt-20 z-20">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideProjects;
