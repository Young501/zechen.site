"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type DetailCard = {
  title: string;
  period: string;
  organization?: string;
  description: string[];
  tags?: string[];
};

type CardCarouselProps = {
  title: string;
  items: DetailCard[];
};

export default function CardCarousel({ title, items }: CardCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }

    const distance = Math.max(320, container.clientWidth * 0.72);
    container.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="p-3 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <motion.h2
          className="heading-text text-2xl font-bold sm:text-3xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28 }}
        >
          {title}
        </motion.h2>

        <div className="flex gap-2">
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition-all duration-200 hover:-translate-x-0.5 hover:border-cyan-200/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            onClick={() => scroll("left")}
            aria-label={`Scroll ${title} left`}
            title="Scroll left"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition-all duration-200 hover:translate-x-0.5 hover:border-cyan-200/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            onClick={() => scroll("right")}
            aria-label={`Scroll ${title} right`}
            title="Scroll right"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <motion.div
        ref={scrollContainerRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pr-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.08,
              staggerChildren: 0.09,
            },
          },
        }}
      >
        {items.map((item) => (
          <motion.article
            key={`${item.title}-${item.period}`}
            className="w-[min(86vw,400px)] max-w-[400px] flex-shrink-0 snap-start rounded-md border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-black/20 backdrop-blur transition-colors duration-200 hover:border-cyan-200/45 hover:bg-slate-950/80"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 190, damping: 18 }}
          >
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold leading-snug text-white">
                  {item.title}
                </h3>
                {item.organization && (
                  <p className="mt-1 text-sm font-medium italic text-cyan-100/90">
                    {item.organization}
                  </p>
                )}
              </div>
              <span className="shrink-0 font-mono text-xs text-slate-400">
                {item.period}
              </span>
            </div>

            <ul className="space-y-2 text-sm leading-6 text-slate-300">
              {item.description.map((point) => (
                <li key={point} className="border-l border-white/10 pl-3">
                  {point}
                </li>
              ))}
            </ul>

            {item.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
