'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Calendar,
    MapPin,
    Building,
    Clock,
    CheckCircle,
    ExternalLink
} from 'lucide-react';
import { useTheme } from '@/components/ThemeContext';

export default function ExperiencePage() {
    const { isDark } = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Experience data
    const experiences = [
        {
            id: 9,
            company: "Altux Studio",
            position: "Android Developer",
            duration: "Jul 2025 - September 2025",
            location: "Dhaka (Remote)",
            type: "Internship",
            description: "Developed native Android applications using Kotlin. Worked on mobile app optimization and user experience improvements.",
            achievements: [
                "Integrated RESTful APIs and third-party services",
                "Worked on Device Admin and Lock for EMI application"
            ],
            technologies: ["Kotlin", "Android SDK", "Retrofit", "Firebase"]
        },
        {
            id: 10,
            company: "BRAC Business School",
            position: "Web Developer",
            duration: "Nov 2024 - Present",
            location: "Dhaka, Bangladesh",
            type: "Contractual",
            description: "Developed International Conference Websites, hosted and maintained them using Django, HTML, CSS, JavaScript",
            achievements: [
                "Led end-to-end development of public-facing web systems, including requirements gathering, testing, and deployment",
                "Single-handedly built the official ICCBM 2025 conference website: iccbm.bracu.ac.bd/2025",
                "Built a research paper submission portal using Django with email notifications; handled 150+ submissions efficiently",
                "Deployed a PHP-based internal portal on Hostinger with a custom domain for streamlined faculty collaboration",
            ],
            technologies: ["Django", "HTML", "CSS", "JavaScript", "Nginx", "Linux"]
        }
    ];

    // Calculate total experience
    const calculateTotalExperience = () => {
        const startDate = new Date('2024-11-01');
        const currentDate = new Date();
        const diffTime = Math.abs(currentDate - startDate);
        const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
        const years = Math.floor(diffMonths / 12);
        const months = diffMonths % 12;
        
        if (years === 0) {
            return `${months} months`;
        } else if (months === 0) {
            return `${years} ${years === 1 ? 'year' : 'years'}`;
        } else {
            return `${years} ${years === 1 ? 'year' : 'years'} ${months} months`;
        }
    };

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
                duration: 0.5
            }
        }
    };

    return (
        <div className={`w-full min-h-screen ${isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}`}>
            <section
                id="experience-section"
                ref={sectionRef}
                className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
            >
                {/* Animated background grid */}
                <div className="absolute inset-0 opacity-20">
                    <motion.div
                        className="w-full h-full"
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

                {/* Main content */}
                <motion.div
                    className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {/* Header Section */}
                    <motion.div
                        className="text-center mb-16"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                    >
                        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-2 mt-4 md:mt-6 lg:mt-8 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Experience
                        </h1>
                        
                        <motion.p
                            variants={itemVariants}
                            className={`text-base sm:text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} px-4 sm:px-6 md:px-10 lg:px-12 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium`}
                        >
                            My professional journey in software development and technology
                        </motion.p>

                        {/* Total Experience Summary */}
                        <motion.div
                            variants={itemVariants}
                            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border mt-8 ${isDark
                                ? 'bg-gray-800/50 border-gray-600 text-white'
                                : 'bg-white/50 border-gray-300 text-gray-900'
                            } backdrop-blur-sm`}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Clock size={20} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                            <span className="font-semibold text-sm md:text-base">
                                Total Experience: {calculateTotalExperience()}
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Experience Cards */}
                    <div className="space-y-6 md:space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                variants={itemVariants}
                                className={`${isDark
                                    ? 'bg-gray-800/50 border-gray-600'
                                    : 'bg-white/50 border-gray-200'
                                } border backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300`}
                            >
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                                            <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                {exp.position}
                                            </h3>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${
                                                exp.type === 'Full-time' 
                                                    ? (isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700')
                                                    : (isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700')
                                            }`}>
                                                {exp.type}
                                            </span>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 mb-2">
                                            <Building size={18} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                                            <span className={`text-lg font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                                {exp.company}
                                            </span>
                                        </div>

                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                                                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    {exp.duration}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                                                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    {exp.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className={`text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-6 leading-relaxed`}>
                                    {exp.description}
                                </p>

                                {/* Achievements */}
                                <div className="mb-6">
                                    <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                                        Key Achievements:
                                    </h4>
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <li key={achIndex} className="flex items-start gap-3">
                                                <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    {achievement}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                                        Technologies Used:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className={`px-3 py-1 rounded-full text-xs ${isDark
                                                    ? 'bg-white/10 text-gray-300 border border-gray-600'
                                                    : 'bg-gray-100 text-gray-700 border border-gray-300'
                                                }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mt-12"
                    >
                        <motion.div
                            className={`inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-xl border ${isDark
                                ? 'bg-gray-800/50 border-gray-600'
                                : 'bg-white/50 border-gray-200'
                            } backdrop-blur-sm`}
                            whileHover={{ scale: 1.01 }}
                        >
                            <div className="text-center sm:text-left">
                                <h3 className={`text-lg md:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                                    Interested in working together?
                                </h3>
                                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Let's discuss how I can contribute to your team.
                                </p>
                            </div>
                            <motion.button
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold ${isDark
                                    ? 'bg-white text-black hover:bg-gray-200'
                                    : 'bg-black text-white hover:bg-gray-800'
                                } transition-colors duration-300`}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => {
                                    window.location.href = '/resume';
                                }}
                            >
                                View Resume
                                <ExternalLink size={16} />
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Copyright */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 text-center"
                    >
                        <p className={`text-xs md:text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                            © {new Date().getFullYear()} Asir Adnan. All rights reserved.
                        </p>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}