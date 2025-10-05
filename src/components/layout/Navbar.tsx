"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { scrollToSection } from "@/utils/scrollToSection";
import { NAV_ITEMS } from "@/data/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-40 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight">
              Jose Carlos
            </span>
            <span className="text-xs text-gray-400">Alarcon Chacon</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="/Jose_Alarcon_Chacon_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 relative group text-sm font-medium flex items-center gap-2"
            >
              <Download size={16} />
              Resume
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:w-full transition-all duration-300" />
            </a>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group text-sm font-medium"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800/50 animate-fadeIn">
          <div className="px-4 py-4 space-y-2">
            <a
              href="/Jose_Alarcon_Chacon_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </a>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
