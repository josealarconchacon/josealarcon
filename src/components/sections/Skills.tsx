import React from "react";
import { Code2, Download, Zap, Wrench, Cloud, Award } from "lucide-react";
import { SKILLS } from "@/data/skills";

interface Skill {
  color: string;
  icon: React.ReactNode;
  name: string;
  level?: string;
  cert?: string;
}
const SkillBadge = ({ skill }: { skill: Skill }) => (
  <div className="group relative">
    <div
      className={`bg-gradient-to-br ${skill.color} rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1`}
    >
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold text-white/90 min-w-[2.5rem] text-center">
          {skill.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
          {skill.cert && (
            <p className="text-xs text-white/70 mt-0.5">
              Certified: {skill.cert}
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-4">
            <Zap size={16} className="text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">
              Tech Stack
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Skills & Expertise
            </h2>
            <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-2 hover:scale-105">
              <Download size={18} />
              Download Resume
            </button>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Code2 size={20} className="text-purple-400" />
            <h3 className="text-xl font-bold text-white">Core Languages</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILLS.languages.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Zap size={20} className="text-cyan-400" />
            <h3 className="text-xl font-bold text-white">
              Frameworks & Libraries
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILLS.frameworks.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Wrench size={20} className="text-orange-400" />
              <h3 className="text-xl font-bold text-white">
                Development Tools
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS.devTools.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award size={20} className="text-sky-400" />
              <h3 className="text-xl font-bold text-white">
                Cloud & Certifications
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {SKILLS.cloud.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
