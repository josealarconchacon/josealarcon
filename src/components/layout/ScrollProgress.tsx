"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
      <div
        className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
