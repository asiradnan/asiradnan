'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Trophy,
    Award,
    Medal,
    Star,
    Code,
    ChevronDown,
    ArrowRight,
    ExternalLink,
    Send
} from 'lucide-react';
import { useTheme } from '@/components/ThemeContext'

export default function AchievementsSection() {
    const { isDark } = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const achievements = React.useMemo(() => [
        {
            name: "ICPC Regional Finalist",
            icon: Trophy
        },
        {
            name: "Problem Solving (Intermediate) - HackerRank",
            icon: Trophy
        },
        {
            name: "Python (Advanced) - HackerRank",
            icon: Code
        },
        {
            name: "Data Structures & Algorithms - Coursera",
            icon: Award
        },
        {
            name: "4 Star Coder - CodeChef",
            icon: Star
        },
        {
            name: "Web Development - freeCodeCamp",
            icon: Medal
        }
    ], []);

    const floatingIcons = [
        { Icon: Trophy, delay: 0, x: 20, y: 30 },
        { Icon: Award, delay: 0.5, x: -30, y: 20 },
        { Icon: Medal, delay: 1, x: 40, y: -20 },
        { Icon: Trophy, delay: 1.5, x: -20, y: -30 },
        { Icon: Star, delay: 2, x: 50, y: 40 }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Auto-scroll to center the achievements section
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
            id="achievements-section"
            ref={sectionRef}
            className={`min-h-screen flex items-center justify-center relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}`}
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
                {/* Section title */}
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
                        Achievements
                    </motion.span>
                </motion.h2>

                {/* Main description */}
                <motion.p
                    variants={itemVariants}
                    className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-12 max-w-3xl mx-auto leading-relaxed`}
                >
                    I'm constantly challenging myself through competitive programming and various certification programs.
                    Here are some of my notable achievements and certifications.
                </motion.p>

                {/* Achievements - simple horizontal layout like skills */}
                <motion.div
                    variants={itemVariants}
                    className="mb-12"
                >
                    <div className="flex flex-wrap justify-center gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.name}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${isDark
                                    ? 'border-gray-600 text-gray-300'
                                    : 'border-gray-300 text-gray-700'
                                    }`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ delay: 0.8 + (index * 0.1) }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <achievement.icon size={20} />
                                <span className="text-sm font-medium">{achievement.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Final statement */}
                <motion.p
                    variants={itemVariants}
                    className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto leading-relaxed mb-12`}
                >
                    These achievements represent my commitment to continuous learning and
                    excellence in software development and problem-solving.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center gap-4 flex-wrap"
                >
                    <motion.button
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-lg border-2 ${isDark
                            ? 'border-gray-400 text-gray-200 hover:bg-gray-700'
                            : 'border-gray-500 text-gray-800 hover:bg-gray-100'
                            } transition-all duration-300`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const contactSection = document.getElementById("contact-section");
                            contactSection?.scrollIntoView({ behavior: "smooth", block: "center" });
                        }}
                    >
                        <Send size={20} />
                        Contact Me
                        <motion.div
                            animate={{ y: [0, 4, 0] }}
                            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                        >
                            <ChevronDown size={20} />
                        </motion.div>
                    </motion.button>

                    <motion.button
                        className={`flex items-center gap-3 px-7 py-3 rounded-full font-semibold text-lg ${isDark
                            ? 'bg-white text-black hover:bg-gray-200'
                            : 'bg-black text-white hover:bg-gray-800'
                            } transition-all duration-300`}
                        whileHover={{ scale: 1.05, x: 4 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            window.location.href = "/achievements";
                        }}
                    >
                        <Trophy size={22} />
                        View All Achievements
                        <motion.div
                            animate={{ x: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                        >
                            <ArrowRight size={28} />
                        </motion.div>
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}