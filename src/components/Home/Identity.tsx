"use client";

import { BrainCircuit, Braces, GraduationCap, Presentation } from "lucide-react";

const FramedRole = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="group relative bg-white/5 px-2 py-1 text-cyan-100">
      <span>{children}</span>
      <span className="pointer-events-none absolute inset-0 border border-cyan-300/70 opacity-80 transition-all duration-200 group-hover:border-dashed group-hover:opacity-100">
        <span className="absolute -left-[3.5px] -top-[3.5px] size-1.5 border border-cyan-300 bg-[#070f1a]" />
        <span className="absolute -bottom-[3.5px] -right-[3.5px] size-1.5 border border-cyan-300 bg-[#070f1a]" />
        <span className="absolute -bottom-[3.5px] -left-[3.5px] size-1.5 border border-cyan-300 bg-[#070f1a]" />
        <span className="absolute -right-[3.5px] -top-[3.5px] size-1.5 border border-cyan-300 bg-[#070f1a]" />
      </span>
    </span>
  );
};

const Role = ({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) => {
  return (
    <span className="group inline-flex items-center gap-1.5 text-slate-200">
      <Icon className="size-4 text-cyan-200 transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span>{label}</span>
    </span>
  );
};

const Identity: React.FC = () => {
  return (
    <div className="space-y-2 text-sm sm:text-base">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <Role icon={Braces} label="Full-stack Developer" />
        <span className="text-slate-500">/</span>
        <FramedRole>
          <span className="inline-flex items-center gap-1.5">
            <BrainCircuit className="size-4" />
            AI Builder
          </span>
        </FramedRole>
        <span className="text-slate-500">/</span>
        <Role icon={Presentation} label="Academic Tutor" />
      </div>
      <Role icon={GraduationCap} label="MIT (AI) at University of Melbourne" />
    </div>
  );
};

export default Identity;
