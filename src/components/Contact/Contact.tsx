"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence, motion } from "framer-motion";

type ContactType = "email" | "phone" | "linkedin" | "instagram" | "wechat";

const contactInfo = {
  email: "yangzechenau@gmail.com",
  phone: "+61 493 495 813",
  phoneHref: "tel:+61493495813",
  linkedin: "https://www.linkedin.com/in/zechen-yang-111236259/",
  instagram: "https://www.instagram.com/young501501/",
  wechat: "Young501501",
};

const icons: Array<{
  type: ContactType;
  src: string;
  alt: string;
  label: string;
}> = [
  { type: "email", src: "/images/email.png", alt: "Email", label: "Email" },
  { type: "phone", src: "/images/phone-flip.png", alt: "Phone", label: "Phone" },
  {
    type: "linkedin",
    src: "/images/linkedin.png",
    alt: "LinkedIn",
    label: "LinkedIn",
  },
  {
    type: "instagram",
    src: "/images/instagram.png",
    alt: "Instagram",
    label: "Instagram",
  },
  { type: "wechat", src: "/images/comments.png", alt: "WeChat", label: "WeChat" },
];

const getDetail = (type: ContactType) => {
  switch (type) {
    case "email":
      return {
        label: "Email",
        value: contactInfo.email,
        href: `mailto:${contactInfo.email}`,
      };
    case "phone":
      return {
        label: "Phone",
        value: contactInfo.phone,
        href: contactInfo.phoneHref,
      };
    case "linkedin":
      return {
        label: "LinkedIn",
        value: "Zechen Yang",
        href: contactInfo.linkedin,
      };
    case "instagram":
      return {
        label: "Instagram",
        value: "Young",
        href: contactInfo.instagram,
      };
    case "wechat":
      return {
        label: "WeChat",
        value: contactInfo.wechat,
      };
  }
};

export default function Contact() {
  const [hoveredIcon, setHoveredIcon] = useState<ContactType | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const clearHideTimeout = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = (type: ContactType) => {
    clearHideTimeout();
    setHoveredIcon(type);
  };

  const handleMouseLeave = () => {
    clearHideTimeout();
    hideTimeoutRef.current = setTimeout(() => {
      setHoveredIcon(null);
    }, 2400);
  };

  const copyToClipboard = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success(`${label} copied to clipboard`, {
        position: "top-right",
        autoClose: 2200,
        theme: "dark",
        style: { marginTop: "60px" },
      });
    } catch {
      toast.error(`Could not copy ${label}`, {
        position: "top-right",
        autoClose: 2600,
        theme: "dark",
        style: { marginTop: "60px" },
      });
    }
  };

  const handleIconClick = (type: ContactType) => {
    if (type === "wechat") {
      void copyToClipboard(contactInfo.wechat, "WeChat");
    } else if (type === "email") {
      void copyToClipboard(contactInfo.email, "Email");
    } else if (type === "phone") {
      window.location.href = contactInfo.phoneHref;
    } else if (type === "linkedin") {
      window.open(contactInfo.linkedin, "_blank", "noopener,noreferrer");
    } else if (type === "instagram") {
      window.open(contactInfo.instagram, "_blank", "noopener,noreferrer");
    }
  };

  const detail = hoveredIcon ? getDetail(hoveredIcon) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 125, damping: 18 }}
      className="container mx-auto flex max-w-3xl flex-1 flex-col justify-center px-6 py-10"
    >
      <ToastContainer />

      <motion.div
        className="mb-4"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 130, damping: 16, delay: 0.06 }}
      >
        <Image
          className="rounded-full border border-white/15 shadow-[0_0_40px_rgba(125,211,252,0.18)]"
          src="/images/icon.jpg"
          alt="Zechen Yang"
          width={132}
          height={132}
          priority
        />
      </motion.div>

      <motion.h1
        className="heading-text mb-3 text-3xl font-bold sm:text-4xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32, delay: 0.1 }}
      >
        Zechen Yang (Young)
      </motion.h1>
      <motion.p
        className="mb-8 max-w-xl text-sm leading-6 text-slate-300"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32, delay: 0.16 }}
      >
        Melbourne CBD - available through email, phone, LinkedIn, Instagram, or
        WeChat.
      </motion.p>

      <motion.div
        className="mb-4 flex flex-wrap gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.24,
              staggerChildren: 0.07,
            },
          },
        }}
      >
        {icons.map((icon) => (
          <motion.button
            type="button"
            key={icon.type}
            onMouseEnter={() => handleMouseEnter(icon.type)}
            onFocus={() => handleMouseEnter(icon.type)}
            onMouseLeave={handleMouseLeave}
            onBlur={handleMouseLeave}
            onClick={() => handleIconClick(icon.type)}
            className="relative inline-flex size-14 cursor-pointer items-center justify-center rounded-md border border-white/10 bg-white/5 transition-all duration-200 hover:border-cyan-200/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            aria-label={icon.label}
            title={icon.label}
            variants={{
              hidden: { opacity: 0, y: 10, scale: 0.96 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={34}
              height={34}
              className="size-8 object-contain invert"
            />
          </motion.button>
        ))}
      </motion.div>

      <div className="min-h-[92px]">
        <AnimatePresence mode="wait">
          {detail && (
            <motion.div
              key={detail.label}
              className="glass-panel mt-4 flex min-h-[84px] items-center rounded-md p-4 text-white"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 170, damping: 18 }}
              onMouseEnter={clearHideTimeout}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <div className="mb-1 font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                  {detail.label}
                </div>
                {detail.href ? (
                  <a
                    href={detail.href}
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      detail.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="break-all text-sm font-semibold text-cyan-100 hover:underline sm:text-base"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-cyan-100 sm:text-base">
                    {detail.value}
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
