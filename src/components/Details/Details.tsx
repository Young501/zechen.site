"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import WorkExp from "./WorkExp";
import ProjectExp from "./ProjectExp";
import Capability from "./Capability";
import AdditionalExp from "./AdditionalExp";
import Award from "./Award";

export default function Details() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null); // 控制哪个信息框显示
  const [isHiding, setIsHiding] = useState(false); // 控制内容行是否在隐藏状态
  const infoBoxRef = useRef<HTMLDivElement>(null); // 引用信息框

  const items = [
    { type: "personalInfo", label: "Personal Information", component: <PersonalInfo /> },
    { type: "education", label: "Education", component: <Education /> },
    { type: "workExperience", label: "Work Experience", component: <WorkExp /> },
    { type: "projectExperience", label: "Project Experience", component: <ProjectExp /> },
    { type: "capability", label: "Capability", component: <Capability /> },
    { type: "additionalExperience", label: "Extracurricular Experience", component: <AdditionalExp /> },
    { type: "award", label: "Award", component: <Award /> },
  ];

  const handleSelectItem = (type: string) => {
    setIsHiding(true); // 开始隐藏内容行
    setTimeout(() => {
      setSelectedItem(type); // 延迟后显示信息框
      setIsHiding(false); // 重置隐藏状态
    }, 100); // 500ms 延迟，确保内容行完全隐藏后显示信息框
  };

  const handleCloseInfoBox = () => {
    setSelectedItem(null); // 关闭信息框并显示所有内容行
  };

  return (
    <div className="container flex flex-col mx-auto max-w-[800px] px-6 justify-start">
      <AnimatePresence>
        {/* 如果没有选中项，显示标题和所有内容行 */}
        {!isHiding && selectedItem === null && (
          <>
            <motion.h1
              className="font-bold mb-4 text-2xl heading-text"
              initial={{ opacity: 0, y: -20 }} // 初始状态：透明度为0，位置上移
              animate={{ opacity: 1, y: 0 }} // 显示时：透明度为1，位置复位
              //exit={{ opacity: 0, y: -20 }} // 隐藏时：透明度为0，位置上移
              transition={{ duration: 0.3 }}
            >
              Hi, I&apos;m Young:)
            </motion.h1>

            <div className="flex flex-col space-y-5">
              {items.map((item, index) => (
                <motion.div
                  key={item.type}
                  className="cursor-pointer relative"
                  initial={{ opacity: 0, y: 20 }} // 动画初始状态：透明度为0，位置下移
                  animate={{ opacity: 1, y: 0 }} // 动画结束状态：透明度为1，位置回到原位
                  //exit={{ opacity: 0 }} // 退出时透明度为0
                  transition={{ duration: 0.3, delay: index * 0.1 }} // 每个项目延迟出现
                  onClick={() => handleSelectItem(item.type)} // 点击显示对应项
                >
                  <div className="p-4 bg-gray-700 text-white rounded-md hover:bg-gray-600">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </AnimatePresence>

      {/* 显示选中项的详细信息 */}
      {selectedItem !== null && (
        <motion.div
          ref={infoBoxRef}
          className="p-4 rounded-lg bg-gray-800 bg-opacity-75 text-white shadow-lg relative"
          initial={{ opacity: 0, scale: 0.95 }} // 初始状态：透明度为0，略小
          animate={{ opacity: 1, scale: 1 }} // 显示时：透明度为1，大小恢复
          transition={{ duration: 0.4, ease: "easeInOut" }} // 控制动画速度
        >
          {/* 关闭按钮 */}
          <button
            className="absolute top-2 right-2 text-white text-lg"
            onClick={handleCloseInfoBox}
          >
            ×
          </button>

          {/* 显示内容 */}
          {items.find((item) => item.type === selectedItem)?.component}
        </motion.div>
      )}
    </div>
  );
}
