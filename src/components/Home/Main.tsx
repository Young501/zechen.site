"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileDown, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Identity from "./Identity";
import AnimText from "../typing/AnimText";

const highlights = [
  "Software Developer Intern at Untapped Talent, building Next.js, React, TypeScript, Firebase, and LLM-powered guidance flows.",
  "Full-Stack Developer for Fanci, automating Excel, PDF, CRM, and batch document workflows with Python and Pandas.",
  "Master of Information Technology student in Artificial Intelligence at the University of Melbourne.",
  "Academic Tutor teaching machine learning and data structures to university-level students.",
  "Oracle-certified in MySQL implementation, MySQL 8.0 database administration, and MySQL HeatWave implementation.",
];

const Main = () => {
  return (
    <motion.main
      className="container mx-auto flex max-w-3xl flex-1 flex-col justify-center px-6 py-10"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 130, damping: 16, delay: 0.06 }}
      >
        <Image
          className="rounded-full border border-white/15 shadow-[0_0_40px_rgba(125,211,252,0.18)] transition-all duration-300 hover:scale-[1.03]"
          src="/images/icon.jpg"
          alt="Zechen Yang"
          width={132}
          height={132}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-100">
          <MapPin className="size-3.5" />
          Melbourne CBD
        </div>
        <h1 className="heading-text mb-5 text-3xl font-bold sm:text-4xl">
          Zechen Yang (Young)
        </h1>
      </motion.div>

      <motion.div
        className="mb-7"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.16 }}
      >
        <Identity />
      </motion.div>

      <motion.p
        className="mb-7 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.22 }}
      >
        I build AI-enabled web products and workflow automation systems, with a
        practical mix of Next.js, React, TypeScript, Firebase, Python, Pandas,
        and deep-learning tools.
      </motion.p>

      <motion.ul
        className="mb-8 grid gap-3 text-sm leading-6 text-slate-300"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.28 },
          },
        }}
      >
        {highlights.map((item) => (
          <motion.li
            key={item}
            className="border-l border-cyan-200/35 pl-4"
            variants={{
              hidden: { opacity: 0, x: -8 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="mb-8 flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.5 }}
      >
        <Link
          href="/details"
          className="inline-flex items-center gap-2 rounded-md border border-cyan-200/40 bg-cyan-100 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
        >
          View details
          <ArrowRight className="size-4" />
        </Link>
        <a
          href="/Zechen Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-200"
        >
          <FileDown className="size-4" />
          Resume PDF
        </a>
      </motion.div>

      <div className="min-h-7 text-sm leading-7 text-slate-300 sm:text-base">
        <AnimText delay={0.2} />
      </div>
    </motion.main>
  );
};

export default Main;
