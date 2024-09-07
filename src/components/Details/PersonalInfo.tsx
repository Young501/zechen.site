"use client";

import { motion } from "framer-motion";

export default function PersonalInfo() {
  const info = [
    { label: "Age", value: "20" },
    { label: "Gender", value: "Male" },
    { label: "Nationality", value: "Chinese" },
    { label: "Visa Status", value: "Student 500" },
    { label: "Personality", value: "ENTJ" },
    { label: "Disability", value: "No" },
  ];

  return (
    <div className="p-6">
      <motion.h2
        className="text-3xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Personal Information
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
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
      >
        {info.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-gray-900 p-4 rounded-md shadow-md"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="text-gray-400 text-sm">{item.label}</span>
            <span className="text-white text-lg font-medium">{item.value}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: info.length * 0.2 + 0.5, // 延迟时间与前面项目的动画时间匹配
        }}
      >
        <div className="flex flex-col bg-gray-900 p-4 rounded-md shadow-md">
          <span className="text-gray-400 text-sm">Language</span>
          <span className="text-white text-lg font-medium">
            English - Competent
          </span>
          <span className="text-white text-lg font-medium">
            Mandarin - Native
          </span>
        </div>
      </motion.div>
    </div>
  );
}
