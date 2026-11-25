'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Home,
  Search,
  AlertCircle,
  Code2,
  Smartphone,
  Database,
  Server,
  Monitor,
  Brain,
  Zap,
  FileQuestion,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '@/components/ThemeContext';

const floatingIcons = [
  { Icon: Code2, delay: 0, x: 20, y: 30 },
  { Icon: Smartphone, delay: 0.5, x: -30, y: 20 },
  { Icon: Database, delay: 1, x: 40, y: -20 },
  { Icon: Server, delay: 1.5, x: -20, y: -30 },
  { Icon: Monitor, delay: 2, x: 50, y: 40 },
  { Icon: Brain, delay: 2.5, x: -40, y: 35 },
  { Icon: Zap, delay: 3, x: 30, y: -40 },
  { Icon: AlertCircle, delay: 3.5, x: -50, y: 25 }
];

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
  hidden: { y: 30, opacity: 0 },
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

export default function NotFound() {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      {/* Floating background icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className={`absolute opacity-30 pointer-events-none ${isDark ? 'text-gray-700' : 'text-gray-300'}`}
          style={{
            left: `${20 + (index * 10)}%`,
            top: `${15 + (index * 8)}%`
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.3,
            scale: 1,
            x: [0, x, 0],
            y: [0, y, 0],
            rotate: [0, 360]
          }}
          transition={{
            delay,
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6 pt-16 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Error Icon with animation */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className={`mx-auto w-24 h-24 rounded-full border-2 flex items-center justify-center ${
              isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-300'
            }`}
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <FileQuestion
              size={40}
              className={isDark ? 'text-red-400' : 'text-pink-600'}
            />
          </motion.div>
        </motion.div>

        {/* Main title */}
        <motion.h2
          variants={itemVariants}
          className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Oops! The page you&apos;re looking for seems to have vanished into the digital void.
          It might have been moved, deleted, or maybe it never existed at all.
        </motion.p>

        {/* Fun message */}
        <motion.div
          variants={itemVariants}
          className={`p-4 rounded-lg border mb-8 max-w-md mx-auto backdrop-blur-sm ${
            isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-gray-100/50 border-gray-300/50'
          }`}
        >
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            💡 <strong>Developer&apos;s Note:</strong> While you&apos;re here, why not check out some of my actual work?
            I promise my projects exist! 😄
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className={`flex items-center gap-3 px-7 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg ${
                isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              <Home size={20} />
              Go Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/projects"
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-lg border-2 transition-all duration-300 ${
                isDark
                  ? 'border-gray-400 text-gray-200 hover:bg-gray-800'
                  : 'border-gray-500 text-gray-800 hover:bg-gray-100'
              }`}
            >
              <Search size={20} />
              Explore Projects
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
