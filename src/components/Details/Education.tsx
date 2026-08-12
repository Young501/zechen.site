"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const education = [
  {
    school: "The University of Melbourne",
    logo: "/images/unimelb.jpg",
    alt: "University of Melbourne logo",
    degree: "Master of Information Technology in Artificial Intelligence",
    period: "Jul 2025 - Dec 2026",
    location: "Melbourne",
    status: "In progress",
  },
  {
    school: "The University of New South Wales",
    logo: "/images/unsw.png",
    alt: "UNSW logo",
    degree: "Bachelor of Science in Computer Science (Artificial Intelligence)",
    period: "Sep 2022 - Dec 2024",
    location: "Sydney",
    status: "Distinction",
  },
];

export default function Education() {
  return (
    <section className="p-3 sm:p-6">
      <motion.h2
        className="heading-text mb-5 text-2xl font-bold sm:text-3xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
      >
        Education
      </motion.h2>

      <motion.div
        className="grid gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.1,
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {education.map((item) => (
          <motion.article
            key={item.school}
            className="rounded-md border border-white/10 bg-slate-950/70 p-4 shadow-xl shadow-black/15 backdrop-blur sm:p-5"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -2 }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <Image
                src={item.logo}
                alt={item.alt}
                width={72}
                height={72}
                className="rounded-md border border-white/10 object-cover"
              />

              <div className="flex-1">
                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {item.school}
                  </h3>
                  <span className="font-mono text-xs text-slate-400">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm leading-6 text-slate-200">
                  {item.degree}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-md border border-cyan-200/20 bg-cyan-100/10 px-2 py-1 font-mono text-xs text-cyan-100">
                    {item.status}
                  </span>
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-slate-300">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
