"use client";
import React, { useEffect, useRef } from "react";

// get children from props
const TopologyWrap = ({ children }: { children: React.ReactNode }) => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect: { destroy: () => void } | null = null;
    const p5 = require("p5"); // Import p5 only on the client-side

    // Function to initialize Vanta.js background
    const initializeVanta = () => {
      if (vantaEffect) vantaEffect.destroy(); // 销毁现有的实例，以便创建新实例

      import("vanta/dist/vanta.topology.min")
        .then((VANTA) => {
          if (vantaRef.current) {
            vantaEffect = VANTA.default({
              el: vantaRef.current,
              p5: p5,
              mouseControls: true,
              touchControls: true,
              minHeight: 200.0, // 设置默认最小高度
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0x678aa0,
              backgroundColor: 0x070f1a,
            });
          }
        })
        .catch((e) => console.error(e));
    };

    initializeVanta(); // 初始化 Vanta.js 动态背景

    // 处理窗口调整大小事件时重新初始化背景
    const handleResize = () => {
      initializeVanta();
    };

    window.addEventListener("resize", handleResize); // 当窗口大小调整时重新初始化背景

    // 清理 Vanta 动态背景
    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener("resize", handleResize); // 清理事件监听器
    };
  }, []);

  return (
    <div
      className="flex flex-col dark min-h-screen w-full bg-[#070f1a]"
      ref={vantaRef}
    >
      {children}
    </div>
  );
};

export default TopologyWrap;
