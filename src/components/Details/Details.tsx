"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award as AwardIcon,
  BriefcaseBusiness,
  FolderKanban,
  GraduationCap,
  Sparkles,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import WorkExp from "./WorkExp";
import ProjectExp from "./ProjectExp";
import Capability from "./Capability";
import AdditionalExp from "./AdditionalExp";
import Award from "./Award";

const items = [
  {
    type: "personalInfo",
    label: "Profile",
    summary: "Contact, location, languages, and current focus",
    icon: UserRound,
    component: <PersonalInfo />,
  },
  {
    type: "education",
    label: "Education",
    summary: "University of Melbourne and UNSW",
    icon: GraduationCap,
    component: <Education />,
  },
  {
    type: "workExperience",
    label: "Work",
    summary: "Full-stack, AI, automation, and CRM delivery",
    icon: BriefcaseBusiness,
    component: <WorkExp />,
  },
  {
    type: "projectExperience",
    label: "Projects",
    summary: "UntappedMe, Fanzi platform, traffic sign recognition",
    icon: FolderKanban,
    component: <ProjectExp />,
  },
  {
    type: "capability",
    label: "Skills",
    summary: "Languages, frontend, backend, AI, data, cloud",
    icon: Sparkles,
    component: <Capability />,
  },
  {
    type: "additionalExperience",
    label: "Leadership",
    summary: "Tutoring, academic governance, student representation",
    icon: UsersRound,
    component: <AdditionalExp />,
  },
  {
    type: "award",
    label: "Awards & Certs",
    summary: "Academic honors and Oracle MySQL credentials",
    icon: AwardIcon,
    component: <Award />,
  },
];

export default function Details() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const selected = items.find((item) => item.type === selectedItem);

  return (
    <div className="container mx-auto flex w-full max-w-[900px] flex-col justify-start px-6 py-8">
      <AnimatePresence mode="wait">
        {!selected && (
          <motion.div
            key="index"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <h1 className="heading-text mb-3 text-3xl font-bold">
              Hi, I&apos;m Young:)
            </h1>
            <p className="mb-7 max-w-2xl text-sm leading-6 text-slate-300">
              AI-focused full-stack developer, University of Melbourne MIT
              student, and tutor working across product features, LLM systems,
              data pipelines, and workflow automation.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.button
                    type="button"
                    key={item.type}
                    className="group rounded-md border border-white/10 bg-slate-950/58 p-4 text-left text-white shadow-xl shadow-black/15 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-slate-950/78 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 170,
                      damping: 18,
                      delay: index * 0.045,
                    }}
                    onClick={() => setSelectedItem(item.type)}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <Icon className="size-5 text-cyan-100 transition-transform duration-200 group-hover:-translate-y-0.5" />
                      <span className="font-mono text-xs text-slate-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="text-lg font-semibold">{item.label}</div>
                    <div className="mt-1 text-sm leading-5 text-slate-400">
                      {item.summary}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

        {selected && (
          <motion.div
            key={selected.type}
            className="relative"
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -8 }}
            transition={{ type: "spring", stiffness: 155, damping: 18 }}
          >
            <button
              type="button"
              className="absolute -top-8 right-2 z-10 inline-flex size-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition-all duration-200 hover:border-cyan-200/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-200 sm:-top-7"
              onClick={() => setSelectedItem(null)}
              aria-label="Close section"
              title="Close"
            >
              <X className="size-4" />
            </button>

            {selected.component}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
