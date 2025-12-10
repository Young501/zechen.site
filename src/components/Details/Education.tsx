"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

export default function Education() {
  return (
    <div className="p-6">
      <motion.h2
        className="text-3xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      {/* University of Melbourne */}
      <motion.div
        className="flex items-start space-x-4 mb-8"
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
        <motion.div
          className="flex-shrink-0"
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Image
            src="/images/unimelb.jpg"
            alt="University of Melbourne Logo"
            width={100}
            height={100}
            className="rounded-md"
          />
        </motion.div>
        <motion.div
          className="flex flex-col"
          variants={{
            hidden: { opacity: 0, x: 10 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="text-white text-xl font-bold">University of Melbourne</span>
          <span className="text-white text-lg mt-2 flex items-baseline justify-between">
            <span>Master of Information Technology (AI)</span>
            <span className="text-gray-400 text-sm ml-4">2025-2026</span>
          </span>
          <div className="flex items-center mt-2 gap-8 text-white text-md">
            <div className="flex items-baseline gap-2 min-w-[180px]">
              <strong>WAM:</strong>
              <span>....</span>
            </div>
            <div className="flex items-baseline gap-2">
              <strong>Course Taken</strong>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* University of New South Wales */}
      <motion.div
        className="flex items-start space-x-4"
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
        {/* 左侧图标 */}
        <motion.div
          className="flex-shrink-0"
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Image
            src="/images/unsw.png"  // 你需要提供学校的图标路径
            alt="UNSW Logo"
            width={100}
            height={100}
            className="rounded-md"
          />
        </motion.div>

        {/* 右侧内容 */}
        <motion.div
          className="flex flex-col"
          variants={{
            hidden: { opacity: 0, x: 10 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="text-white text-xl font-bold">University of New South Wales</span>
          <span className="text-white text-lg mt-2 flex items-baseline justify-between">
            <span>Bachelor of Computer Science (AI)</span>
            <span className="text-gray-400 text-sm ml-4">2022-2024</span>
          </span>
          <div className="flex items-center mt-2 gap-8 text-white text-md">
            <div className="flex items-baseline gap-2 min-w-[180px]">
              <strong>WAM:</strong>
              <span>Distinct</span>
            </div>
            <div className="flex items-baseline gap-2">
              <strong>Course Taken</strong>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
