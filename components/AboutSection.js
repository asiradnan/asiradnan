'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Database, Brain, Trophy, ChevronDown, UserRound, ArrowRight } from 'lucide-react';
import { useTheme } from '@/components/ThemeContext'
import Link from 'next/link';

export default function AboutSection() {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const floatingIcons = [
    { Icon: Code2, delay: 0, x: 20, y: 30 },
    { Icon: Database, delay: 0.5, x: -30, y: 20 },
    { Icon: Smartphone, delay: 1, x: 40, y: -20 },
    { Icon: Brain, delay: 1.5, x: -20, y: -30 },
    { Icon: Trophy, delay: 2, x: 50, y: 40 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Auto-scroll to center the about section
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

    return () => observer.disconnect();
  }, []);

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

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}`}
    >
      {/* Animated background grid - same as hero */}
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

      {/* Floating background icons - same pattern as hero */}
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
        {/* Section title - same style as hero name */}
        <motion.h2
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
            About Me
          </motion.span>
        </motion.h2>

        {/* Main description - same style as hero description */}
        <motion.p
  variants={itemVariants}
  className={`text-base sm:text-lg md:text-xl ${isDark ? 'text-gray-200' : 'text-gray-800'} px-4 sm:px-6 md:px-10 lg:px-12 py-6 sm:py-8 md:py-12 lg:py-16 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium`}
>
  I am in love with programming.
  Hence, I taught myself more of it than what the varsity taught me.
  Even though my journey began with Python,
  I learned C++ for competitive programming,
  JavaScript for Web programming,
  and Kotlin for Android along the way.
  I have also explored Java and C.
  To date, I have completed more than 20 personal web projects
  and worked professionally with more than 10.
  I have one Android app published on the Play Store,
  and more are on the way.
</motion.p>

        {/* View More About Me Button */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 flex-wrap"
          >
            {/* View My Skills (Scroll - Secondary) */}
            <motion.button
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-lg border-2 ${isDark
                ? 'border-gray-400 text-gray-200 hover:bg-gray-700'
                : 'border-gray-500 text-gray-800 hover:bg-gray-100'
                } transition-all duration-300`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const skillsSection = document.getElementById("skills-section");
                skillsSection?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              <Code2 size={20} />
              View My Skills
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </motion.button>

            {/* More About Me (Primary - New Page) */}
            <Link href="/about">
              <motion.a
                className={`flex items-center gap-3 px-7 py-3 rounded-full font-semibold text-lg ${isDark
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-black text-white hover:bg-gray-800'
                  } transition-all duration-300`}
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <UserRound size={22} />
                More About Me
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                >
                  <ArrowRight size={28} />
                </motion.div>
              </motion.a>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}