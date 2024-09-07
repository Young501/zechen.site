"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const capabilities = {
  "Programming Language": [
    { name: "C", icon: "/images/c.png" },
    { name: "C++", icon: "/images/cpp.svg" },
    { name: "Python", icon: "/images/python.png" },
    { name: "Java", icon: "/images/java.png" },
    { name: "JavaScript", icon: "/images/javascript.png" },
    { name: "TypeScript", icon: "/images/typescript.png" },
    { name: "HTML5", icon: "/images/html5.png" },
    { name: "CSS3", icon: "/images/css3.png" },
    { name: "SQL", icon: "/images/sql.png" },
    { name: "PLpgSQL", icon: "/images/plpgsql.svg" },
  ],
  Frontend: [
    { name: "HTML5", icon: "/images/html5.png" },
    { name: "CSS3", icon: "/images/css3.png" },
    { name: "JavaScript", icon: "/images/javascript.png" },
    { name: "React", icon: "/images/react.png" },
    { name: "Next.js", icon: "/images/nextjs.png" },
    { name: "Node.js", icon: "/images/nodejs.png" },
    { name: "Jest", icon: "/images/jest.png" },
  ],
  Backend: [
    { name: "JavaScript", icon: "/images/javascript.png" },
    { name: "TypeScript", icon: "/images/typescript.png" },
    { name: "NodeJS", icon: "/images/nodejs.png" },
    { name: "JSON", icon: "/images/json.png" },
    { name: "SQL", icon: "/images/sql.png" },
    { name: "PLpgSQL", icon: "/images/plpgsql.svg" },
  ],
  "Database & AI": [
    { name: "Machine Learning", icon: "/images/machine learning.png" },
    { name: "Algorithms...", icon: "/images/algorithms.png" },
    { name: "TensorFlow", icon: "/images/tensorflow.png" },
    { name: "PyTorch", icon: "/images/pytorch.png" },
    { name: "Keras", icon: "/images/keras.png" },
    { name: "Scikit-learn", icon: "/images/scikit-learn.png" },
    { name: "SQL", icon: "/images/sql.png" },
    { name: "PLpgSQL", icon: "/images/plpgsql.svg" },
  ],
  Other: [
    { name: "Git", icon: "/images/git.png" },
    { name: "Github", icon: "/images/github.png" },
    { name: "Adobe Photoshop", icon: "/images/photoshop.png" },
    { name: "Adobe Premiere Pro", icon: "/images/premiere.png" },
    { name: "Xmind", icon: "/images/xmind.png" },
    { name: "GPT", icon: "/images/gpt.png" },
    { name: "Linux", icon: "/images/linux.png" },
    { name: "Shell", icon: "/images/shell.png" }, 
    { name: "Word", icon: "/images/word.png" },
    { name: "Excel", icon: "/images/excel.png" },
    { name: "PowerPoint", icon: "/images/powerPoint.png" },
    { name: "Outlook", icon: "/images/outlook.png" },
    { name: "SSH", icon: "/images/ssh.png" },
  ],
};

export default function Capability() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Programming Language");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-6">
      {/* 分类导航栏 */}
      <div className="relative">
        <div className="flex justify-center space-x-4 mb-4">
          {Object.keys(capabilities).map((category) => (
            <button
              key={category}
              className={`relative text-white px-4 py-2 transition-all ${
                selectedCategory === category ? "text-white-400" : "text-gray-400"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
              {/* 动画线条 */}
              {selectedCategory === category && (
                <motion.div
                  className="absolute bottom-[5px] left-[20%] right-[20%] h-1.5 bg-white rounded-full"
                  layoutId="underline" // 使用layoutId确保线条切换时的动画效果
                  style={{ height: '3px' }} // 使线条更粗
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 只显示当前选中的分类内容 */}
      {Object.entries(capabilities)
        .filter(([category]) => category === selectedCategory)
        .map(([category, skills]) => (
          <div key={category} className="mb-8">
            {/* 技能图标展示容器 */}
            <motion.div
              className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
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
              style={{
                minHeight: "200px", // 保证位置不变
              }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                  <p className="text-white text-sm">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
    </div>
  );
}
