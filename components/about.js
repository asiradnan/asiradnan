'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Database, Brain, Trophy } from 'lucide-react';
import { useTheme } from '@/components/ThemeContext'

// JetBrains Mono font
import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  display: 'swap',
});

export default function AboutSection() {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = React.useMemo(() => [
    { name: "Python", icon: Code2 },
    { name: "Django", icon: Database },
    { name: "FastAPI", icon: Smartphone },
    { name: "DRF", icon: Brain },
    { name: "Competitive Programming", icon: Trophy }
  ], []);

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
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'} ${jetbrainsMono.className}`}
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
          className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-12 max-w-3xl mx-auto leading-relaxed`}
        >
          Hey there! I'm Asir Adnan — a passionate Full-Stack Developer who loves building 
          real-world solutions with clean, scalable code. I specialize in Python development, 
          with a strong focus on backend technologies like Django, FastAPI, and DRF, and I 
          sharpen my thinking through Competitive Programming.
        </motion.p>

        {/* Skills - simple horizontal layout */}
        <motion.div 
          variants={itemVariants}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${
                  isDark 
                    ? 'border-gray-600 text-gray-300' 
                    : 'border-gray-300 text-gray-700'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.8 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <skill.icon size={20} />
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final statement */}
        <motion.p 
          variants={itemVariants}
          className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto leading-relaxed`}
        >
          Self-taught and deeply curious, I constantly push myself to explore new tools 
          and build fun, impactful Projects!
        </motion.p>
      </motion.div>
    </section>
  );
}