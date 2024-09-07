"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function WorkExp() {
  const scrollContainerRef = useRef<HTMLDivElement>(null); // 用来引用滚动容器

  const experiences = [
    {
      title: "Publicity Assistant",
      period: "Jun 2021 - Sep 2022",
      company: "Shanghai Media Interactive Television Co. LTD",
      description: [
        "Video editing: Utilized video editing software to create engaging content, resulting in increased audience engagement.",
        "Communicating with personnel and checking scripts: Coordinated with team members to ensure accurate and timely script reviews, improving internal communication efficiency and project workflows.",
        "Activity publicity document writing: Drafting and editing high-quality company event writing, which effectively increased the reading volume of the event by 30%.",
      ],
    },
    {
      title: "Administrative Assistant",
      period: "Jun 2020 - Sep 2021",
      company: "Shanghai Fanci Enterprise Management Consulting Co. LTD",
      description: [
        "A simple batch file and folder processing software was customized for the company, which reduced the time consumption of manpower on such repeated work by 80%.",
        "Handle simple company affairs and administrative tasks: handle administrative tasks in a timely manner, skillfully use various office software, and work 30% more efficiently than ordinary first-year employees.",
      ],
    },
  ];

  // 向左滚动的函数
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400, // 设置为滚动的距离
        behavior: "smooth", // 平滑滚动
      });
    }
  };

  // 向右滚动的函数
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
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
          Work Experience
        </motion.h2>
        
        {/* 左右按钮放在标题右边 */}
        <div className="flex space-x-6">
          <button
            className="bg-gray-700 text-white p-2 rounded-full shadow-lg"
            onClick={scrollLeft}
          >
            {"<"}
          </button>
          <button
            className="bg-gray-700 text-white p-2 rounded-full shadow-lg"
            onClick={scrollRight}
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
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl text-white font-semibold">
                {experience.title}
              </h3>
              <span className="text-gray-400 text-sm">{experience.period}</span>
            </div>
            <p className="text-gray-100 text-md italic font-medium mb-4">
              {experience.company}
            </p>
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
