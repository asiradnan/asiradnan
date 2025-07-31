'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Trophy,
    Award,
    Star,
    Shield,
    ChevronDown,
    ArrowRight,
    ExternalLink
} from 'lucide-react';
import { useTheme } from '@/components/ThemeContext';
import { certificatesData } from '@/data/projectsData';

export default function AchievementsSection() {
    const { isDark } = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Show top 4 certificates for highlights (2x2 grid)
    const featuredCertificates = certificatesData.slice(0, 4);

    const floatingIcons = [
        { Icon: Trophy, delay: 0, x: 20, y: 30 },
        { Icon: Award, delay: 0.5, x: -30, y: 20 },
        { Icon: Star, delay: 1, x: 40, y: -20 },
        { Icon: Shield, delay: 1.5, x: -20, y: -30 },
        { Icon: Trophy, delay: 2, x: 50, y: 40 }
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
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
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
                className="text-center z-10 px-4 max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
            >
                {/* Section title */}
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
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
                    className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-8 max-w-3xl mx-auto leading-relaxed`}
                >
                    {certificatesData.length} professional certifications from leading platforms, 
                    with {certificatesData.filter(cert => cert.verificationLink).length} verified achievements 
                    validating my expertise in software development.
                </motion.p>

                {/* Featured Certificates - 2x2 Grid Layout */}
                <motion.div
                    variants={itemVariants}
                    className="mb-8"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {featuredCertificates.map((certificate, index) => (
                            <motion.div
                                key={certificate.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ delay: 0.6 + (index * 0.1) }}
                                className={`flex items-center space-x-3 px-4 py-4 rounded-lg border ${isDark
                                    ? 'bg-gray-800/20 border-gray-600/40 text-gray-200'
                                    : 'bg-white/40 border-gray-300/60 text-gray-800'
                                    } backdrop-blur-sm group`}
                                whileHover={{ scale: 1.05, y: -2 }}
                            >
                                <Award size={20} className="text-yellow-500 flex-shrink-0" />
                                
                                <div className="flex-1 min-w-0">
                                    {certificate.verificationLink ? (
                                        <motion.a
                                            href={certificate.verificationLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium hover:underline"
                                            whileHover={{ x: 2 }}
                                        >
                                            <span className="truncate">{certificate.name}</span>
                                            <ExternalLink size={12} className="opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                        </motion.a>
                                    ) : (
                                        <span className="text-sm font-medium truncate block">
                                            {certificate.name}
                                        </span>
                                    )}
                                </div>

                                {certificate.verificationLink && (
                                    <Shield size={16} className="text-green-500 flex-shrink-0" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* +More indicator - now centered below the grid */}
                    {certificatesData.length > 4 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 1.0 }}
                            className={`flex items-center justify-center space-x-2 mt-4 px-4 py-2 rounded-full ${isDark
                                ? 'text-gray-400'
                                : 'text-gray-600'
                                }`}
                        >
                            <Star size={16} />
                            <span className="text-sm font-medium">
                                +{certificatesData.length - 4} more
                            </span>
                        </motion.div>
                    )}
                </motion.div>

                {/* Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center gap-4 flex-wrap"
                >
                    <motion.button
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 ${isDark
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
                        <Trophy size={20} />
                        Contact Me
                        <motion.div
                            animate={{ y: [0, 3, 0] }}
                            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                        >
                            <ChevronDown size={18} />
                        </motion.div>
                    </motion.button>

                    <motion.button
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold ${isDark
                            ? 'bg-white text-black hover:bg-gray-200'
                            : 'bg-black text-white hover:bg-gray-800'
                            } transition-all duration-300`}
                        whileHover={{ scale: 1.05, x: 4 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            window.location.href = "/achievements";
                        }}
                    >
                        <Award size={20} />
                        View All Achievements
                        <motion.div
                            animate={{ x: [0, 6, 0] }}
                            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                        >
                            <ArrowRight size={24} />
                        </motion.div>
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}