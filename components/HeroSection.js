'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Smartphone, Database, Palette, Zap, Coffee } from 'lucide-react';
import { useTheme } from '@/components/ThemeContext'

// JetBrains Mono font
import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export default function HeroSection() {
  const { isDark } = useTheme();
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Move roles inside useMemo or define it dynamically so it updates with theme changes
  const roles = React.useMemo(() => [
    { text: "Full Stack Developer", icon: Code2, color: isDark ? "text-blue-400" : "text-blue-600" },
    { text: "Native Android Developer", icon: Smartphone, color: isDark ? "text-green-400" : "text-green-600" },
    { text: "Backend Engineer", icon: Database, color: isDark ? "text-purple-400" : "text-purple-600" },
    { text: "UI/UX Enthusiast", icon: Palette, color: isDark ? "text-pink-400" : "text-pink-600" }
  ], [isDark]);

  const floatingIcons = [
    { Icon: Code2, delay: 0, x: 20, y: 30 },
    { Icon: Smartphone, delay: 0.5, x: -30, y: 20 },
    { Icon: Database, delay: 1, x: 40, y: -20 },
    { Icon: Zap, delay: 1.5, x: -20, y: -30 },
    { Icon: Coffee, delay: 2, x: 50, y: 40 }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    // Auto-scroll observer for hero section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Auto-scroll to center the hero section
          setTimeout(() => {
            sectionRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
          }, 100);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [roles.length]); // Add dependency

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const roleVariants = {
    initial: { opacity: 0, y: 20, scale: 0.8 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section
      id="hero-section"
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'} ${jetbrainsMono.className}`}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className={`w-full h-full ${isDark ? 'bg-grid-white/[0.05]' : 'bg-grid-black/[0.05]'}`}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating background icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className={`absolute ${isDark ? 'text-gray-700' : 'text-gray-300'} opacity-30`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.3,
            scale: 1,
            x: [0, x, 0],
            y: [0, y, 0],
            rotate: [0, 360]
          }}
          transition={{
            delay: delay,
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${20 + (index * 15)}%`,
            top: `${15 + (index * 10)}%`
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        className="text-center z-10 px-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.span
            className={`inline-block text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Hello, I'm
          </motion.span>
        </motion.div>

        {/* Name with gradient */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <motion.span
            className={`bg-gradient-to-r ${isDark
              ? 'from-white via-blue-100 to-white'
              : 'from-gray-900 via-blue-600 to-gray-900'
              } bg-clip-text text-transparent`}
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            Asir Adnan
          </motion.span>
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
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                {React.createElement(roles[currentRole].icon, { size: 32 })}
              </motion.div>
              <span className={`text-2xl md:text-4xl font-semibold ${roles[currentRole].color}`}>
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
          Crafting digital experiences with clean code and intuitive design.
          From responsive web applications to native mobile solutions,
          I bring ideas to life with modern technologies and best practices.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${isDark
              ? 'bg-white text-black hover:bg-gray-200 shadow-lg hover:shadow-white/20'
              : 'bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-black/20'
              }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>

          <motion.button
            className={`px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 ${isDark
              ? 'border-white text-white hover:bg-white hover:text-black'
              : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
          >
            Learn About Me
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          onClick={scrollToAbout}
        >
          <motion.div
            className={`w-6 h-10 border-2 ${isDark ? 'border-gray-400' : 'border-gray-600'} rounded-full flex justify-center`}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className={`w-1 h-3 ${isDark ? 'bg-gray-400' : 'bg-gray-600'} rounded-full mt-2`}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}