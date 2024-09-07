"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Award() {
  const scrollContainerRef = useRef<HTMLDivElement>(null); // 引用滚动容器
  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(null); // 保存定时器

  const awards = [
    {
      title: "Australia's Global University Award",
      description:
        "The Australia's Global University Award by UNSW Sydney offers significant financial support of up to $10,000 for international students, recognizing outstanding academic achievements and enhancing the university's global diversity and academic excellence.",
      year: "2023",
    },
    {
      title: "College Scholar",
      description:
        "College Scholar is a prestigious academic recognition awarded to students at Warrane College, affiliated with UNSW. This honor recognizes students with a distinction average in academic, exceptional leadership, and contributions to the college community.",
      year: "2023 & 2024",
    },
  ];

  // 向左滚动的函数
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -450, // 每次滚动450px
        behavior: "smooth", // 平滑滚动
      });
    }
  };

  // 向右滚动的函数
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 450, // 每次滚动450px
        behavior: "smooth",
      });
    }
  };

  // 按下按钮时启动滚动
  const startScroll = (direction: "left" | "right") => {
    const interval = setInterval(() => {
      if (direction === "left") {
        scrollLeft();
      } else {
        scrollRight();
      }
    }, 30); // 每隔30ms滚动一次
    setScrollInterval(interval);
  };

  // 松开按钮时停止滚动
  const stopScroll = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  };

  return (
    <div className="p-6">
      {/* 标题和按钮的容器 */}
      <div className="flex justify-between items-center mb-4">
        <motion.h2
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Awards & Honors
        </motion.h2>

        {/* 左右按钮放在标题右边，增加按钮之间的间隙 */}
        <div className="flex space-x-6">
          <button
            className="bg-gray-700 text-white p-2 rounded-full shadow-lg"
            onMouseDown={() => startScroll("left")} // 按下时开始滚动
            onMouseUp={stopScroll} // 松开时停止滚动
            onMouseLeave={stopScroll} // 鼠标离开时停止滚动
          >
            {"<"}
          </button>
          <button
            className="bg-gray-700 text-white p-2 rounded-full shadow-lg"
            onMouseDown={() => startScroll("right")}
            onMouseUp={stopScroll}
            onMouseLeave={stopScroll}
          >
            {">"}
          </button>
        </div>
      </div>

      {/* 横向滚动容器 */}
      <motion.div
        ref={scrollContainerRef}
        className="flex space-x-6 overflow-x-hidden scrollbar-hide"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
        style={{ display: "flex", gap: "20px", paddingBottom: "10px" }}
      >
        {awards.map((award, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-md shadow-md min-w-[400px] w-[450px] flex-shrink-0"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-xl text-white font-semibold mb-2">
              {award.title}
            </h3>
            <p className="text-gray-300 text-sm">{award.description}</p>
            <p className="text-gray-400 text-sm mt-2">
              <strong>Year:</strong> {award.year}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
