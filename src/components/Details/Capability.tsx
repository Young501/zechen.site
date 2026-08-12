"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Skill = {
  name: string;
  icon?: string;
};

const capabilities: Record<string, Skill[]> = {
  "Programming Languages": [
    { name: "C", icon: "/images/C.png" },
    { name: "C++", icon: "/images/cpp.svg" },
    { name: "Python", icon: "/images/python.png" },
    { name: "Java", icon: "/images/java.png" },
    { name: "JavaScript", icon: "/images/javascript.png" },
    { name: "TypeScript", icon: "/images/typescript.png" },
    { name: "Shell", icon: "/images/shell.png" },
  ],
  "Front-End": [
    { name: "HTML5", icon: "/images/html5.png" },
    { name: "CSS3", icon: "/images/css3.png" },
    { name: "React", icon: "/images/react.png" },
    { name: "Tailwind CSS" },
    { name: "Figma" },
  ],
  "Back-End": [
    { name: "Node.js", icon: "/images/nodejs.png" },
    { name: "Next.js", icon: "/images/nextjs.png" },
    { name: "Express" },
    { name: "TypeScript", icon: "/images/typescript.png" },
    { name: "JSON", icon: "/images/json.png" },
    { name: "Postman" },
  ],
  "AI & Data": [
    { name: "TensorFlow", icon: "/images/tensorflow.png" },
    { name: "PyTorch", icon: "/images/pytorch.png" },
    { name: "Keras", icon: "/images/keras.png" },
    { name: "scikit-learn", icon: "/images/scikit-learn.png" },
    { name: "CNN / RNN / Transformers", icon: "/images/machine learning.png" },
    { name: "Codex", icon: "/images/gpt.png" },
  ],
  "Databases & Cloud": [
    { name: "SQL", icon: "/images/sql.png" },
    { name: "MySQL" },
    { name: "MySQL HeatWave" },
    { name: "Oracle Database" },
    { name: "PL/pgSQL", icon: "/images/plpgsql.svg" },
    { name: "Firebase" },
    { name: "Supabase" },
    { name: "Git", icon: "/images/git.png" },
    { name: "Jira" },
    { name: "AWS" },
  ],
  "Tools": [
    { name: "Adobe Photoshop", icon: "/images/photoshop.png" },
    { name: "Adobe Premiere Pro", icon: "/images/premiere.png" },
    { name: "Adobe Audition" },
    { name: "XMind", icon: "/images/xmind.png" },
    { name: "NetLogo" },
  ],
};

const getInitials = (name: string) =>
  name
    .replace(/[()/.]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export default function Capability() {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Programming Languages",
  );
  const skills = capabilities[selectedCategory];

  return (
    <section className="p-3 sm:p-6">
      <motion.h2
        className="heading-text mb-5 text-2xl font-bold sm:text-3xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
      >
        Technical Skills
      </motion.h2>

      <div
        className="scrollbar-hide mb-5 flex gap-2 overflow-x-auto pb-2"
        role="tablist"
        aria-label="Skill categories"
      >
        {Object.keys(capabilities).map((category) => (
          <button
            type="button"
            key={category}
            className={`relative shrink-0 rounded-md border px-3 py-2 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 ${
              selectedCategory === category
                ? "border-cyan-200/50 bg-cyan-100 text-slate-950"
                : "border-white/10 bg-white/5 text-slate-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
            }`}
            onClick={() => setSelectedCategory(category)}
            role="tab"
            aria-selected={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          className="grid grid-cols-[repeat(auto-fit,minmax(108px,1fr))] gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          role="tabpanel"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex min-h-28 flex-col items-center justify-center rounded-md border border-white/10 bg-slate-950/70 p-3 text-center text-white shadow-xl shadow-black/10 backdrop-blur transition-colors duration-200 hover:border-cyan-200/45"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 190,
                damping: 16,
                delay: index * 0.03,
              }}
              whileHover={{ y: -2 }}
            >
              {skill.icon ? (
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  width={42}
                  height={42}
                  className="mb-3 size-10 object-contain"
                />
              ) : (
                <span className="mb-3 inline-flex size-10 items-center justify-center rounded-md border border-cyan-200/35 bg-cyan-100/10 font-mono text-xs text-cyan-100">
                  {getInitials(skill.name)}
                </span>
              )}
              <p className="text-balance text-sm font-medium leading-5 text-slate-100">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
