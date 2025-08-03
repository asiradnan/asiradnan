'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/ThemeContext';
import Link from 'next/link';
import { 
  Trophy, 
  ArrowRight, 
  ChevronDown, 
  Code2,
  Smartphone,
  Database,
  Brain,
  Server,
  Monitor,
  Folder,
  Globe,
  Layers
} from 'lucide-react';

export default function ProjectsSection() {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Floating background icons
  const floatingIcons = [
    { Icon: Code2, delay: 0, x: 10, y: 15 },
    { Icon: Smartphone, delay: 0.5, x: -15, y: 10 },
    { Icon: Database, delay: 1, x: 20, y: -10 },
    { Icon: Server, delay: 1.5, x: -10, y: -15 },
    { Icon: Monitor, delay: 2, x: 25, y: 20 },
    { Icon: Brain, delay: 2.5, x: -20, y: 18 }
  ];

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            sectionRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }, 100);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  return (
    <section
      id="projects-section"
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-12 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10 sm:opacity-20">
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

      {/* Floating background icons - Hidden on mobile for better performance */}
      <div className="hidden sm:block">
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
              left: `${20 + (index * 12)}%`,
              top: `${15 + (index * 8)}%`
            }}
          >
            <Icon size={24} />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="text-center z-10 px-4 sm:px-6 max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Section title */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
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
            Projects
          </motion.span>
        </motion.h2>

        {/* Project Description */}
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.p
            variants={itemVariants}
            className={`text-lg sm:text-xl md:text-2xl ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            } leading-relaxed mb-6`}
          >
            I have built diverse projects across multiple domains including{' '}
            <motion.span 
              className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
              whileHover={{ scale: 1.05 }}
            >
              Full Stack Web Applications
            </motion.span>
            ,{' '}
            <motion.span 
              className={`font-semibold ${isDark ? 'text-green-400' : 'text-green-600'}`}
              whileHover={{ scale: 1.05 }}
            >
              Frontend Interfaces
            </motion.span>
            ,{' '}
            <motion.span 
              className={`font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}
              whileHover={{ scale: 1.05 }}
            >
              Android Mobile Apps
            </motion.span>
            {' '}and many more innovative solutions.
          </motion.p>

          {/* Project Categories Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-4 sm:gap-8 mb-8"
          >
            {[
              { Icon: Globe, label: "Full Stack", color: "text-blue-500" },
              { Icon: Monitor, label: "Frontend", color: "text-green-500" },
              { Icon: Smartphone, label: "Android", color: "text-purple-500" },
              { Icon: Layers, label: "More", color: "text-orange-500" }
            ].map(({ Icon, label, color }, index) => (
              <motion.div
                key={label}
                className={`flex flex-col items-center gap-2 ${color}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1 + (index * 0.2) }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <motion.div
                  className={`p-3 sm:p-4 rounded-full ${
                    isDark ? 'bg-white/10' : 'bg-black/10'
                  } backdrop-blur-sm`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={24} className="sm:w-8 sm:h-8" />
                </motion.div>
                <span className={`text-xs sm:text-sm font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`text-base sm:text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } leading-relaxed`}
          >
            Each project showcases different technologies, problem-solving approaches, 
            and creative implementations. Explore my portfolio to see the full range 
            of my development capabilities.
          </motion.p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-row justify-center gap-2 sm:gap-4 px-2"
        >
          <motion.button
            className={`flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium sm:font-semibold text-xs sm:text-lg border-2 flex-1 sm:flex-none sm:w-auto max-w-[160px] sm:max-w-none ${isDark
              ? 'border-gray-400 text-gray-200 hover:bg-gray-700'
              : 'border-gray-500 text-gray-800 hover:bg-gray-100'
              } transition-all duration-300`}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const achievementsSection = document.getElementById("achievements-section");
              achievementsSection?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            <Trophy size={14} className="sm:w-5 sm:h-5" />
            <span className="whitespace-nowrap text-[10px] sm:text-base">Achievements</span>
            <motion.div
              animate={{ y: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            >
              <ChevronDown size={14} className="sm:w-5 sm:h-5" />
            </motion.div>
          </motion.button>

          <Link href="/projects">
            <motion.a
              className={`flex items-center justify-center gap-1 sm:gap-3 px-3 sm:px-7 py-2 sm:py-3 rounded-full font-medium sm:font-semibold text-xs sm:text-lg flex-1 sm:flex-none sm:w-auto max-w-[160px] sm:max-w-none ${isDark
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-black text-white hover:bg-gray-800'
                } transition-all duration-300`}
              whileHover={{ scale: 1.02, x: 2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Folder size={14} className="sm:w-5 sm:h-5" />
              <span className="whitespace-nowrap text-[10px] sm:text-base">All Projects</span>
              <motion.div
                animate={{ x: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              >
                <ArrowRight size={16} className="sm:w-7 sm:h-7" />
              </motion.div>
            </motion.a>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}