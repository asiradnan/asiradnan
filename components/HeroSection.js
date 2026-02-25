'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Smartphone, Database, ChevronDown, Zap, Coffee, Phone, BrainCircuit, Cpu, User, Mail } from 'lucide-react';
import { useTheme } from '@/components/ThemeContext'

export default function HeroSection() {
  const { isDark } = useTheme();
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Move roles inside useMemo or define it dynamically so it updates with theme changes
  const roles = React.useMemo(() => [
    { text: "Software Engineer", icon: Code2, color: isDark ? "text-blue-400" : "text-blue-600" },
    { text: "Full Stack Developer", icon: Database, color: isDark ? "text-cyan-400" : "text-cyan-600" },
    // { text: "Native Android Developer", icon: Smartphone, color: isDark ? "text-green-400" : "text-green-600" }
  ], [isDark]);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [roles.length]); 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const roleVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section
      id="hero-section"
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden py-20 md:py-0 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      {/* Main content */}
      <motion.div
        className="text-center z-10 px-4 sm:px-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-8">
          <span
            className={`inline-block text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}
          >
            I&apos;m
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          Asir Adnan
        </motion.h1>

        {/* Dynamic role with icon */}
        <motion.div
          variants={itemVariants}
          className="mb-8 h-20 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              variants={roleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex items-center space-x-4"
            >
              <motion.div
                className={roles[currentRole].color}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {React.createElement(roles[currentRole].icon, { size: 24, className: "md:w-8 md:h-8" })}
              </motion.div>
              <span className={`text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold ${roles[currentRole].color}`}>
                {roles[currentRole].text}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-12 max-w-3xl mx-auto leading-relaxed`}
        >
          Backend-focused developer with freelance and professional experience delivering scalable solutions. 
          Passionate about turning ideas into production-ready applications with clean, efficient code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-3 sm:gap-4 flex-wrap"
        >
          <motion.button
            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg border-2 ${isDark
              ? 'border-gray-400 text-gray-200 hover:bg-gray-700'
              : 'border-gray-500 text-gray-800 hover:bg-gray-100'
              } transition-all duration-300`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const aboutSection = document.getElementById("about-section");
              aboutSection?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            <User size={22} />
            About Me
            <ChevronDown size={20} />
          </motion.button>

          <motion.button
            className={`flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg ${isDark
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-black text-white hover:bg-gray-800'
              } transition-colors duration-300`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const contactSection = document.getElementById("contact-section");
              contactSection?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            <Mail size={20} />
            <span>Contact</span>
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
}