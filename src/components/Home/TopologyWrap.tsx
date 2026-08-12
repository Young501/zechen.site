"use client";

import React, { useEffect, useRef } from "react";

const TopologyWrap = ({ children }: { children: React.ReactNode }) => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaEffect: { destroy: () => void } | null = null;
    let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
    const p5 = require("p5");

    const initializeVanta = () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }

      import("vanta/dist/vanta.topology.min")
        .then((VANTA) => {
          if (vantaRef.current) {
            vantaEffect = VANTA.default({
              el: vantaRef.current,
              p5,
              mouseControls: true,
              touchControls: true,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0x7fb9cc,
              backgroundColor: 0x070f1a,
            });
          }
        })
        .catch((e) => console.error(e));
    };

    initializeVanta();

    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      resizeTimeout = setTimeout(initializeVanta, 160);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      if (vantaEffect) {
        vantaEffect.destroy();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#070f1a] dark"
      ref={vantaRef}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,15,26,0.2)_0%,rgba(7,15,26,0.7)_58%,rgba(7,15,26,0.92)_100%)]" />
      <div className="relative z-10 flex min-h-screen w-full flex-col">
        {children}
      </div>
    </div>
  );
};

export default TopologyWrap;
