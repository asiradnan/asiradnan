'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Award,
    Building,
    ExternalLink,
    Star,
    Shield,
    CheckCircle,
    Code,
    Trophy,
    User
} from 'lucide-react';
import { useTheme } from '@/components/ThemeContext';
import { certificatesData, competitiveProgrammingData } from '@/data/projectsData';

const AchievementsPage = () => {
    const { isDark } = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('all');
    const sectionRef = useRef(null);

    const floatingIcons = [
        { Icon: Award, delay: 0, x: 20, y: 30 },
        { Icon: Star, delay: 0.5, x: -30, y: 20 },
        { Icon: Shield, delay: 1, x: 40, y: -20 },
        { Icon: CheckCircle, delay: 1.5, x: -20, y: -30 },
        { Icon: Trophy, delay: 2, x: 50, y: 40 },
        { Icon: Building, delay: 2.5, x: -40, y: 35 }
    ];

    const tabs = [
        { id: 'all', label: 'All', icon: Award },
        { id: 'certificates', label: 'Certificates', icon: Shield },
        { id: 'competitive', label: 'Competitive Programming', icon: Trophy }
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
                staggerChildren: 0.2,
                delayChildren: 0.3
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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const getFilteredData = () => {
        switch (activeTab) {
            case 'certificates':
                return { certificates: certificatesData, competitive: [] };
            case 'competitive':
                return { certificates: [], competitive: competitiveProgrammingData };
            case 'all':
            default:
                return { certificates: certificatesData, competitive: competitiveProgrammingData };
        }
    };

    const { certificates, competitive } = getFilteredData();

    return (
        <div
            ref={sectionRef}
            className={`min-h-screen relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}`}
        >
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    className={`w-full h-full ${isDark ? 'bg-grid-white/[0.03]' : 'bg-grid-black/[0.03]'}`}
                    animate={{
                        backgroundPosition: ['0px 0px', '60px 60px'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        backgroundImage: `radial-gradient(circle, ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'} 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            {/* Floating background icons */}
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                <motion.div
                    key={index}
                    className={`absolute ${isDark ? 'text-gray-700' : 'text-gray-300'} opacity-20`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 0.2,
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
                    <Icon size={32} />
                </motion.div>
            ))}

            <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header - Fixed animation issue */}
                    <motion.div
                        className="text-center mb-16"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                    >
                        <motion.h1 
                            variants={itemVariants}
                            className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-2 mt-4 md:mt-6 lg:mt-8 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
                        >
                            Achievements
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className={`text-base sm:text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} px-4 sm:px-6 md:px-10 lg:px-12 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium`}
                        >
                            Professional certifications, competitive programming achievements, and profiles
                        </motion.p>
                    </motion.div>

                    {/* Tabs */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        className="flex justify-center mb-12"
                    >
                        <div className={`flex rounded-xl p-1 ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                            {tabs.map((tab) => (
                                <motion.button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === tab.id
                                            ? isDark
                                                ? 'bg-white text-black shadow-lg'
                                                : 'bg-black text-white shadow-lg'
                                            : isDark
                                                ? 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                                                : 'text-gray-700 hover:text-black hover:bg-gray-100/50'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <tab.icon size={16} />
                                    <span className="hidden sm:inline">{tab.label}</span>
                                    <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        key={activeTab} // Force re-render when tab changes
                        className="space-y-12"
                    >
                        {/* Competitive Programming Profiles */}
                        {competitive.length > 0 && (
                            <div>
                                <motion.h2
                                    variants={itemVariants}
                                    className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'} flex items-center gap-3`}
                                >
                                    <Trophy className="text-yellow-500" size={28} />
                                    Competitive Programming
                                </motion.h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {competitive.map((platform, index) => (
                                        <motion.div
                                            key={platform.id}
                                            variants={cardVariants}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{ delay: 0.1 + (index * 0.1) }}
                                            className={`relative p-6 rounded-2xl border backdrop-blur-sm ${isDark
                                                ? 'bg-gray-800/10 border-gray-700/30'
                                                : 'bg-white/30 border-gray-200/40'
                                                } group`}
                                            whileHover={{
                                                scale: 1.02,
                                                y: -5,
                                                transition: { duration: 0.3 }
                                            }}
                                        >
                                            {/* Platform Logo/Icon */}
                                            <div className="flex items-center gap-3 mb-4">
                                                {platform.logo ? (
                                                    <img
                                                        src={platform.logo}
                                                        alt={platform.platform}
                                                        className="w-10 h-10 rounded-lg object-cover"
                                                    />
                                                ) : (
                                                    <div className={`p-2 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                                        <Code size={24} className={`${isDark ? 'text-white' : 'text-gray-700'}`} />
                                                    </div>
                                                )}
                                                <div>
                                                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                        {platform.platform}
                                                    </h3>
                                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                        {platform.username}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Stats */}
                                            {platform.stats && (
                                                <div className="space-y-3 mb-4">
                                                    {Object.entries(platform.stats).map(([key, value]) => (
                                                        <div key={key} className="flex justify-between items-center">
                                                            <span className={`text-sm capitalize ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                                {key.replace(/([A-Z])/g, ' $1').trim()}:
                                                            </span>
                                                            <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                                {value}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Achievements */}
                                            {platform.achievements && platform.achievements.length > 0 && (
                                                <div className="mb-4">
                                                    <h4 className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                        Recent Achievements:
                                                    </h4>
                                                    <div className="space-y-1">
                                                        {platform.achievements.slice(0, 2).map((achievement, idx) => (
                                                            <div key={idx} className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'} flex items-center gap-2`}>
                                                                <Star size={12} className="text-yellow-500 flex-shrink-0" />
                                                                <span className="line-clamp-1">{achievement}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Profile Link */}
                                            <motion.a
                                                href={platform.profileLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${isDark
                                                    ? 'bg-white/10 text-white hover:bg-white/20'
                                                    : 'bg-black/10 text-gray-900 hover:bg-black/20'
                                                    } transition-colors duration-200`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <User size={16} />
                                                View Profile
                                                <ExternalLink size={14} />
                                            </motion.a>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Certificates Grid */}
                        {certificates.length > 0 && (
                            <div>
                                {activeTab === 'all' && competitive.length > 0 && (
                                    <motion.h2
                                        variants={itemVariants}
                                        className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'} flex items-center gap-3`}
                                    >
                                        <Shield className="text-blue-500" size={28} />
                                        Professional Certificates
                                    </motion.h2>
                                )}

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {certificates.map((certificate, index) => (
                                        <motion.div
                                            key={certificate.id}
                                            variants={cardVariants}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{ delay: 0.1 + (index * 0.1) }}
                                            className={`relative p-6 rounded-2xl border backdrop-blur-sm ${isDark
                                                ? 'bg-gray-800/10 border-gray-700/30'
                                                : 'bg-white/30 border-gray-200/40'
                                                } group`}
                                            whileHover={{
                                                scale: 1.005,
                                                y: -2,
                                                transition: { duration: 0.3 }
                                            }}
                                        >
                                            {/* Certificate Image */}
                                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-gray-100 to-gray-200">
                                                {certificate.image ? (
                                                    <img
                                                        src={certificate.image}
                                                        alt={certificate.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex items-center justify-center h-full">
                                                        <Award size={48} className="text-gray-400" />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Certificate Info */}
                                            <div className="space-y-3">
                                                {/* Certificate Name - Clickable for verification */}
                                                {certificate.verificationLink ? (
                                                    <motion.a
                                                        href={certificate.verificationLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`block text-xl font-semibold ${isDark ? 'text-white hover:text-blue-300' : 'text-gray-900 hover:text-blue-600'} transition-colors duration-200 group/link`}
                                                        whileHover={{ x: 2 }}
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <span className="line-clamp-2 group-hover/link:underline">
                                                                {certificate.name}
                                                            </span>
                                                            <ExternalLink size={16} className="flex-shrink-0 opacity-70 group-hover/link:opacity-100 transition-opacity" />
                                                        </div>
                                                    </motion.a>
                                                ) : (
                                                    <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} line-clamp-2`}>
                                                        {certificate.name}
                                                    </h3>
                                                )}

                                                {/* Issuing Organization */}
                                                <div className="flex items-center gap-2">
                                                    <Building size={16} className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                                                    <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                        {certificate.issuingOrganization}
                                                    </span>
                                                </div>

                                                {/* Description */}
                                                {certificate.description && (
                                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                                                        {certificate.description}
                                                    </p>
                                                )}

                                                {/* Skills */}
                                                {certificate.skills && certificate.skills.length > 0 && (
                                                    <div className="space-y-2">
                                                        <div className="flex items-center gap-2">
                                                            <Code size={14} className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                                                            <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                                Skills Covered:
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {certificate.skills.map((skill, skillIndex) => (
                                                                <span
                                                                    key={skillIndex}
                                                                    className={`px-2 py-1 text-xs rounded-full ${isDark
                                                                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                                                        : 'bg-blue-100 text-blue-700 border border-blue-200'
                                                                        }`}
                                                                >
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Verification Status */}
                                                {certificate.verificationLink && (
                                                    <div className="flex items-center gap-2 pt-2">
                                                        <Shield size={14} className="text-green-500" />
                                                        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                            Click name to verify certificate
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AchievementsPage;