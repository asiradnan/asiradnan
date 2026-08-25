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
import { useRouter } from 'next/navigation';

export default function ExperiencePage() {
    const { isDark } = useTheme();
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Experience data
    const experiences = [
        {
            id: 12,
            company: "CPS Academy",
            logo: "/company-logos/cps_academy.png",
            position: "Junior Software Engineer",
            duration: "Nov 2025 - Feb 2026",
            location: "Remote",
            type: "Full-time",
            description: "Managing and developing the learning platform for CPS Academy, a competitive programming and technical training institute using Next.js and Strapi CMS",
            achievements: [
                "Developing course management and student enrollment features for programming courses",
                "Building interactive quiz system and progress tracking for student assessment",
                "Managing content delivery through Strapi CMS for dynamic course materials",
                "Collaborating with team using Scrum methodology for agile development and sprint planning",
                "Ensuring platform reliability and performance optimization for seamless learning experience"
            ],
            technologies: ["Next.js", "React", "Strapi", "JavaScript", "Node.js", "REST APIs", "Git"]
        },
        // {
        //     id: 13,
        //     company: "Upwork",
        //     logo: "/company-logos/upwork.png",
        //     position: "Freelance Software Engineer",
        //     duration: "Sep 2025 - Present",
        //     location: "Remote",
        //     type: "Freelance",
        //     description: "Developing full-stack web applications with Django and Next.js for international clients on Upwork platform",
        //     achievements: [
        //         "Building, fixing, testing and deploying web applications using Django and Next.js",
        //         "Delivering high-quality full-stack solutions for diverse client requirements",
        //         "Managing complete project lifecycle from requirements to deployment",
        //         "Providing technical consultation and support for web development projects"
        //     ],
        //     technologies: ["Python", "Django", "Django REST Framework", "Next.js", "React", "Web Hosting"]
        // },
        {
            id: 11,
            company: "Fiverr",
            logo: "/company-logos/fiverr.png",
            position: "Freelance Software Engineer",
            duration: "Aug 2025 - Present",
            location: "Remote",
            type: "Freelance",
            description: "Building, fixing, testing and deploying web apps made with Django, Next.JS, ReactJS",
            achievements: [
                "Achieved 5.0/5.0 rating with 100% response rate and success score of 8/10",
                "Completed 6 orders earning $250 with 2 unique international clients",
                "Built full-stack web applications with Django, React, and Next.js for the clients",
                "Managed end-to-end project delivery including requirements gathering, development, testing, and deployment",
                "Maintained high service quality standards ensuring on-time delivery and 100% client satisfaction"
            ],
            technologies: ["Django", "Django REST Framework", "Next.js", "React", "Web Hosting", "Python"]
        },
        {
            id: 10,
            company: "BRAC Business School",
            logo: "/company-logos/bbs.png",
            position: "Web Developer",
            duration: "Nov 2024 - Jul 2025",
            location: "Dhaka, Bangladesh",
            type: "Part-time",
            description: "Developed International Conference Websites, hosted and maintained them using Django, HTML, CSS, JavaScript",
            achievements: [
                "Led end-to-end development of public-facing web systems, including requirements gathering, testing, and deployment",
                {
                    text: "Single-handedly built the official ICCBM 2025 conference website: ",
                    link: { url: "https://iccbm.bracu.ac.bd/2025", text: "iccbm.bracu.ac.bd/2025" }
                },
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

    if (!mounted) {
        return (
            <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
                <div className="text-center">
                    <div className={`animate-spin rounded-full h-8 w-8 border-b-2 mb-4 mx-auto ${isDark ? 'border-white' : 'border-black'}`}></div>
                    <p className={`${isDark ? 'text-white' : 'text-black'}`}>Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`w-full min-h-screen transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <section
                id="experience-section"
                className="w-full min-h-screen relative overflow-hidden"
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
                    className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header Section */}
                    <motion.div
                        className="text-center mb-8 md:mb-16"
                        variants={itemVariants}
                    >
                        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 mt-4 md:mt-6 lg:mt-8 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Experience
                        </h1>

                        <motion.p
                            variants={itemVariants}
                            className={`text-sm sm:text-base md:text-lg lg:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} px-4 sm:px-6 md:px-10 lg:px-12 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium`}
                        >
                            My professional journey in software development and technology
                        </motion.p>

                        {/* Total Experience Summary */}
                        <motion.div
                            variants={itemVariants}
                            className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border mt-4 sm:mt-6 md:mt-8 ${isDark
                                ? 'bg-gray-800/50 border-gray-600 text-white'
                                : 'bg-white/50 border-gray-300 text-gray-900'
                                } backdrop-blur-sm`}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Clock size={18} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                            <span className="font-semibold text-xs sm:text-sm md:text-base">
                                Total Experience: {calculateTotalExperience()}
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Experience Cards */}
                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                variants={itemVariants}
                                className={`${isDark
                                    ? 'bg-gray-800/50 border-gray-600'
                                    : 'bg-white/50 border-gray-200'
                                    } border backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300`}
                            >
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="flex gap-3 sm:gap-4 flex-1">
                                        {/* Company Logo */}
                                        {exp.logo && (
                                            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-white/10' : 'bg-gray-100'
                                                }`}>
                                                <img
                                                    src={exp.logo}
                                                    alt={`${exp.company} logo`}
                                                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.parentElement.innerHTML = `<div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center text-lg sm:text-xl font-bold ${isDark ? 'text-gray-400' : 'text-gray-600'}">${exp.company.charAt(0)}</div>`;
                                                    }}
                                                />
                                            </div>
                                        )}

                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} break-words`}>
                                                    {exp.position}
                                                </h3>
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${exp.type === 'Full-time'
                                                    ? (isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700')
                                                    : exp.type === 'Freelance'
                                                        ? (isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700')
                                                        : (isDark ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-700')
                                                    }`}>
                                                    {exp.type}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2 mb-1 sm:mb-2">
                                                <Building size={16} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                                                <span className={`text-base sm:text-lg font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'} break-words`}>
                                                    {exp.company}
                                                </span>
                                            </div>

                                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 md:gap-6 mt-1 sm:mt-2">
                                                <div className="flex items-center gap-1.5 sm:gap-2">
                                                    <Calendar size={14} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                                                    <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                        {exp.duration}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1.5 sm:gap-2">
                                                    <MapPin size={14} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                                                    <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                        {exp.location}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className={`text-xs sm:text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4 sm:mb-6 leading-relaxed`}>
                                    {exp.description}
                                </p>

                                {/* Achievements */}
                                <div className="mb-4 sm:mb-6">
                                    <h4 className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2 sm:mb-3`}>
                                        Key Achievements:
                                    </h4>
                                    <ul className="space-y-1.5 sm:space-y-2">
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <li key={achIndex} className="flex items-start gap-2 sm:gap-3">
                                                <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'} break-words`}>
                                                    {typeof achievement === 'string' ? (
                                                        achievement
                                                    ) : (
                                                        <>
                                                            {achievement.text}
                                                            <a
                                                                href={achievement.link.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className={`underline ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                                                            >
                                                                {achievement.link.text}
                                                            </a>
                                                        </>
                                                    )}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2 sm:mb-3`}>
                                        Technologies Used:
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs ${isDark
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
                        className="text-center mt-8 sm:mt-10 md:mt-12"
                    >
                        <motion.div
                            className={`inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl border ${isDark
                                ? 'bg-gray-800/50 border-gray-600'
                                : 'bg-white/50 border-gray-200'
                                } backdrop-blur-sm w-full sm:w-auto`}
                            whileHover={{ scale: 1.01 }}
                        >
                            <div className="text-center sm:text-left">
                                <h3 className={`text-base sm:text-lg md:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1 sm:mb-2`}>
                                    Interested in working together?
                                </h3>
                                <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Let&apos;s discuss how I can contribute to your team.
                                </p>
                            </div>
                            <motion.button
                                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base ${isDark
                                    ? 'bg-white text-black hover:bg-gray-200'
                                    : 'bg-black text-white hover:bg-gray-800'
                                    } transition-colors duration-300 w-full sm:w-auto justify-center`}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => {
                                    router.push('/resume');
                                }}
                            >
                                View Resume
                                <ExternalLink size={14} className="sm:w-4 sm:h-4" />
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