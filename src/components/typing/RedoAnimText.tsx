"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export interface IRedoAnimTextProps {
  delay: number;
}

const texts = [
  "Building AI learning tools",
  "Shipping full-stack features",
  "Automating document workflows",
  "Oracle-certified in MySQL",
  "Teaching ML and data structures",
  "Open Details for the full resume",
];

export default function RedoAnimText({ delay }: IRedoAnimTextProps) {
  const textIndex = useMotionValue(0);
  const count = useMotionValue(0);
  const maxLength = Math.max(...texts.map((text) => text.length));
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    const controls = animate(count, maxLength, {
      type: "tween",
      delay,
      duration: 1.4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.7,
      onUpdate(latest) {
        if (updatedThisRound.get() && latest > 0) {
          updatedThisRound.set(false);
        } else if (!updatedThisRound.get() && latest === 0) {
          textIndex.set((textIndex.get() + 1) % texts.length);
          updatedThisRound.set(true);
        }
      },
    });

    return controls.stop;
  }, [count, delay, maxLength, textIndex, updatedThisRound]);

  return <motion.span className="inline">{displayText}</motion.span>;
}
