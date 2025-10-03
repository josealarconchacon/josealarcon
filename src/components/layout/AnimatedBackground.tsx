"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

const AnimatedBackground = () => {
  const mousePosition = useMousePosition();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl transition-all duration-300"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div
        className="absolute top-1/4 right-1/4 w-32 h-32 border border-purple-500/20 rotate-45 animate-spin"
        style={{ animationDuration: "20s" }}
      />
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-cyan-500/20 rotate-12" />
    </div>
  );
};

export default AnimatedBackground;
