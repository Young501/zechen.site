"use client";

import Image from 'next/image';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null); // 初始状态不显示信息框
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

  const contactInfo = {
    email: "yangzechenau@gmail.com",
    phone: "+61 49 349 5813 (Australia)",
    linkedin: "https://www.linkedin.com/in/zechen-yang-111236259/",
    instagram: "https://www.instagram.com/young501501/",
    wechat: "Young501501"
  };

  const icons = [
    { type: 'email', src: '/images/email.png', alt: 'Email Icon' },
    { type: 'phone', src: '/images/phone-flip.png', alt: 'Phone Icon' },
    { type: 'linkedin', src: '/images/linkedin.png', alt: 'LinkedIn Icon' },
    { type: 'instagram', src: '/images/instagram.png', alt: 'Instagram Icon' },
    { type: 'wechat', src: '/images/comments.png', alt: 'WeChat Icon' },
  ];

  const handleMouseEnter = (type: string) => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setHoveredIcon(type);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredIcon(null); // 鼠标离开后5秒隐藏
    }, 5000); // 5秒延迟隐藏信息框
    setHideTimeout(timeout);
  };

  const handleIconClick = (type: string) => {
    if (type === 'wechat') {
      navigator.clipboard.writeText(contactInfo.wechat);
      toast.success("You have added WeChat info into your clipboard", {
        position: "top-right",
        autoClose: 3000,
        style: {
          marginTop: '60px', // 根据导航栏高度调整
        },
      });
    } else if (type === 'email') {
      navigator.clipboard.writeText(contactInfo.email);
      toast.success("You have added E-mail info into your clipboard", {
        position: "top-right",
        autoClose: 3000,
        style: {
          marginTop: '60px', // 根据导航栏高度调整
        },
      });
    } else if (type === 'phone') {
      window.location.href = `tel:${contactInfo.phone}`;
    } else if (type === 'linkedin') {
      window.open(contactInfo.linkedin, '_blank');
    } else if (type === 'instagram') {
      window.open(contactInfo.instagram, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container flex flex-col mx-auto flex-1 max-w-3xl px-6 justify-start"
    >
      <ToastContainer />

      <motion.div
        className="mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          className="rounded-full transition-all duration-100"
          src="/images/icon.jpg"
          alt="my favourite photo"
          width={130}
          height={130}
          priority
        />
      </motion.div>

      <motion.h1
        className="font-bold mb-8 text-2xl heading-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Zechen Yang (Young)
      </motion.h1>

      <motion.div
        className="flex space-x-6 mb-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.4,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {icons.map((icon) => (
          <motion.div
            key={icon.type}
            onMouseEnter={() => handleMouseEnter(icon.type)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleIconClick(icon.type)}
            className="cursor-pointer relative"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={50}
              height={50}
              className="transition-all duration-300 hover:scale-110 filter invert"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* 使用 AnimatePresence 添加退出动画 */}
      <AnimatePresence>
        {hoveredIcon && (
          <motion.div
            className={`mt-4 p-4 rounded-lg bg-gray-800 bg-opacity-75 text-white shadow-lg h-24 flex items-center`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} // 退出动画
            transition={{ duration: 0.5 }}
            onMouseEnter={() => {
              if (hideTimeout) {
                clearTimeout(hideTimeout);
                setHideTimeout(null);
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredIcon === 'email' && (
              <>
                <strong className="mr-1">Email:</strong> 
                <a href={`mailto:${contactInfo.email}`} className="text-white-500 hover:underline">
                  {contactInfo.email}
                </a>
              </>
            )}
            {hoveredIcon === 'phone' && (
              <>
                <strong className="mr-1">Phone:</strong> 
                <a href={`tel:${contactInfo.phone}`} className="text-white-500 hover:underline">
                  {contactInfo.phone}
                </a>
              </>
            )}
            {hoveredIcon === 'linkedin' && (
              <>
                <strong className="mr-1">LinkedIn:</strong> 
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white-500 hover:underline">
                  Zechen Yang
                </a>
              </>
            )}
            {hoveredIcon === 'instagram' && (
              <>
                <strong className="mr-1">Instagram:</strong> 
                <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="text-white-500 hover:underline">
                  Young
                </a>
              </>
            )}
            {hoveredIcon === 'wechat' && (
              <>
                <strong className="mr-1">WeChat:</strong> 
                <span className="text-white-500">
                  {contactInfo.wechat}
                </span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
