"use client";
import { Braces, GraduationCap } from "lucide-react";
import Image from 'next/image';

const Designer = () => {
  return (
    <span className="group relative bg-black/5 p-1 dark:bg-white/5">
      <span>Designer</span>
      <span className="pointer-events-none absolute inset-0 border border-cyan-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-cyan-400/90">
        <span className="absolute -left-[3.5px] -top-[3.5px] size-1.5 border border-cyan-700 bg-zinc-50 dark:border-cyan-400" />
        <span className="absolute -bottom-[3.5px] -right-[3.5px] size-1.5 border border-cyan-700 bg-zinc-50 dark:border-cyan-400" />
        <span className="absolute -bottom-[3.5px] -left-[3.5px] size-1.5 border border-cyan-700 bg-zinc-50 dark:border-cyan-400" />
        <span className="absolute -right-[3.5px] -top-[3.5px] size-1.5 border border-cyan-700 bg-zinc-50 dark:border-cyan-400" />
      </span>
    </span>
  );
};

const Developer = () => {
  return (
    <span className="group items-center space-x-1">
      <span>Developer</span>
      <Braces className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
    </span>
  );
};

const Student = () => {
  return (
    <span className="group items-center space-x-1">
      <span>Student in UNSW</span>
      <GraduationCap className="mr-1 inline-flex group-hover:fill-white" />
    </span>
  );
};

const Educator = () => {
  return (
    <span className="group flex items-center space-x-1">
      <span>Educator</span>
      <div className="relative w-5 h-5 inline-block -translate-y-0.5">
        <Image
          src="/images/triangle.png"
          alt="triangle icon"
          fill
          className="object-contain group-hover:animate-pulse"
        />
      </div>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }
        .animate-pulse {
          animation: pulse 0.5s infinite;
        }
      `}</style>
    </span>
  );
};

const Identity: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap items-center space-x-3">
      <Developer /> 
      <span className="mx-2">/</span> 
      <Designer />
      <span className="mx-2">/</span> 
      <Educator />
      </div>
      <span className="block h-2" />
      <Student />
    </>
  );
};

export default Identity;