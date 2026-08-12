"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Languages, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const info = [
  {
    label: "Email",
    value: "yangzechenau@gmail.com",
    href: "mailto:yangzechenau@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+61 493 495 813",
    href: "tel:+61493495813",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Melbourne CBD",
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: "zechen-yang-111236259",
    href: "https://www.linkedin.com/in/zechen-yang-111236259/",
    icon: Linkedin,
  },
  {
    label: "Languages",
    value: "English - Competent, Mandarin - Native",
    icon: Languages,
  },
  {
    label: "Current focus",
    value: "AI-enabled products, full-stack systems, and workflow automation",
    icon: BrainCircuit,
  },
];

export default function PersonalInfo() {
  return (
    <section className="p-3 sm:p-6">
      <motion.h2
        className="heading-text mb-3 text-2xl font-bold sm:text-3xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
      >
        Profile
      </motion.h2>

      <motion.p
        className="mb-5 max-w-2xl text-sm leading-6 text-slate-300"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, delay: 0.08 }}
      >
        Melbourne-based AI and full-stack developer with experience in LLM chat
        systems, Firebase-backed products, CRM platforms, and Python automation.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.12,
              staggerChildren: 0.07,
            },
          },
        }}
      >
        {info.map((item) => {
          const Icon = item.icon;
          const content = (
            <motion.div
              className="h-full rounded-md border border-white/10 bg-slate-950/70 p-4 text-white shadow-xl shadow-black/15 backdrop-blur transition-colors duration-200 hover:border-cyan-200/45"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -2 }}
            >
              <div className="mb-3 flex items-center gap-2 text-slate-400">
                <Icon className="size-4 text-cyan-100" />
                <span className="text-xs uppercase tracking-[0.16em]">
                  {item.label}
                </span>
              </div>
              <span className="text-sm font-medium leading-6 text-slate-100">
                {item.value}
              </span>
            </motion.div>
          );

          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              {content}
            </a>
          ) : (
            <div key={item.label}>{content}</div>
          );
        })}
      </motion.div>
    </section>
  );
}
