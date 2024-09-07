"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectExp() {
  const scrollContainerRef = useRef<HTMLDivElement>(null); // 引用滚动容器
  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(null); // 保存定时器

  const projects = [
    {
      title: "UNSW Memes",
      period: "Apr 2023 - Apr 2023",
      description: [
        "Build the backend Typescript server for the communication platform UNSW Memes.",
        "Write registration and login/register functions, communication functions for different channels, user personalization, etc.",
        "Wrote Typescript test files for the project.",
        "High-distinction in this group project.",
      ],
    },
    {
      title: "Traffic Sign Recognition Classifier",
      period: "Jul 2023 - Jul 2023",
      description: [
        "The traffic sign classification system is for classifying traffic signs using deep learning techniques with enhanced accuracy and efficiency.",
        "To achieve this, it uses some popular deep-learning object detection models: LeNet, YOLOv5, and VGG.",
        "High-distinction (34/35) in this group project.",
      ],
    },
    {
      title: "Presto",
      period: "Apr 2024 - Apr 2024",
      description: [
        "Designed and developed a single-page application (SPA) using ReactJS to create an alternative to slides.com, including slide creation, editing, and navigation, ensuring a smooth and responsive user interface.",
        "Integrate with backend RESTful API: Interfaced with a lightweight backend built by team members, utilizing a predefined RESTful API specification to handle data retrieval and submission.",
        "Developed and tested functionalities for user registration, login, and personalized user experiences.",
        "Ensure high standards of UI/UX and accessibility: Adhered to modern UI/UX standards, ensuring a high level of accessibility for all users.",
        "High-distinction in this project.",
      ],
    },
    {
      title: "Personal Website",
      period: "Jul 2024 - Sep 2024",
      description: [
        "Developed a personal website using the Next.js framework.",
        "The website showcases a portfolio, blog, and contact features with a focus on visual design and responsiveness.",
      ],
    },
  ];

  // 向左滚动的函数
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -450, // 每次滚动10px
        behavior: "smooth", // 平滑滚动
      });
    }
  };

  // 向右滚动的函数
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 450, // 每次滚动10px
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
          Project Experience
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
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-md shadow-md min-w-[400px] w-[450px] flex-shrink-0"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-xl text-white font-semibold mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-2">{project.period}</p>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
              {project.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
