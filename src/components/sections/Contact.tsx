"use client";

import { Linkedin, Github } from "lucide-react";
import { scrollToSection } from "@/utils/scrollToSection";
import {
  NAV_ITEMS,
  SOCIAL_LINKS,
  type NavItem,
  type SocialLink,
} from "@/data/navigation";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let&apos;s get in touch
          </h2>
          <p className="text-lg text-gray-300">
            Ready to start your next project? Let&apos;s connect!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Menu</h3>
            {NAV_ITEMS.map((item: NavItem) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block text-gray-400 hover:text-white transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6">Follow & Contact</h3>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social: SocialLink) => {
                const Icon = social.icon === "linkedin" ? Linkedin : Github;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-${social.color}-600 transition-all duration-300 hover:scale-110`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
