"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AdditionalExp() {
  const scrollContainerRef = useRef<HTMLDivElement>(null); // 引用滚动容器
  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(null); // 保存定时器

  const experiences = [
    {
      title: "Member of UNSW Academic Board",
      period: "Nov 2023 - Present",
      company: "UNSW",
      description: [
        "Oversees academic governance and maintenance of academic standards.",
        "Advises the Vice-Chancellor and Council on the conduct and standards of teaching, scholarship and research.",
        "Meet with the Head of School and Executive to provide feedback.",
        "Liaises with the faculties and makes recommendations to the Council.",
      ],
    },
    {
      title: "UNSW CSE Student Representative",
      period: "July 2023 - Jun 2024",
      company: "UNSW CSE Department",
      description: [
        "Deal with the complaints, questions and feedback from UG or PG and research students. Help to improve the COMP1531, COMP2521, COMP3121 class experience and course quality, etc.",
        "Meet with the Head of School and Executive to provide feedback. Participated in the 2023 and 2024 CSE department's beginning of the year full staff meeting, and the end of the year full staff meeting.",
        "Maintain the Stureps webpage.",
      ],
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
          Extracurricular Experience
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
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-md shadow-md min-w-[400px] w-[450px] flex-shrink-0"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-xl text-white font-semibold mb-2">
              {experience.title}
            </h3>

            {/* Company 和 Period 放在同一行 */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-100 text-md italic font-medium">
                {experience.company}
              </p>
              <span className="text-gray-400 text-sm">
                {experience.period}
              </span>
            </div>

            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
              {experience.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
