'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Award,
    Building,
    ExternalLink,
    Star,
    Shield,
    Code,
    Trophy,
    User
} from 'lucide-react';
import { useTheme } from '@/components/ThemeContext';
import { certificatesData, competitiveProgrammingData } from '@/data/projectsData';

const AchievementsPage = () => {
    const { isDark } = useTheme();
    const [activeTab, setActiveTab] = useState('all');
    const [mounted, setMounted] = useState(false);

    // Simple mount check to prevent SSR issues
    useEffect(() => {
        setMounted(true);
    }, []);

    const tabs = [
        { id: 'all', label: 'All', icon: Award },
        { id: 'certificates', label: 'Certificates', icon: Shield },
        { id: 'competitive', label: 'Competitive Programming', icon: Trophy }
    ];

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

    const { certificates, competitive } = getFilteredData();

    return (
        <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto">
                    {/* Header */}

                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-2 mt-4 md:mt-6 lg:mt-8 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Achievements
                        </h1>
                        <p className={`text-base sm:text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} px-4 sm:px-6 md:px-10 lg:px-12 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium`}>
                            Professional certifications, competitive programming achievements, and profiles
                        </p>
                    </motion.div>

                    {/* Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className={`flex rounded-xl p-1 ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                            {tabs.map((tab) => (
                                <button
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
                                >
                                    <tab.icon size={16} />
                                    <span className="hidden sm:inline">{tab.label}</span>
                                    <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-12"
                        >
                            {/* Competitive Programming Profiles */}
                            {competitive.length > 0 && (
                                <div>
                                    <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'} flex items-center gap-3`}>
                                        <Trophy className="text-yellow-500" size={28} />
                                        Competitive Programming
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {competitive.map((platform) => (
                                            <div
                                                key={platform.id}
                                                className={`p-6 rounded-2xl border ${isDark
                                                    ? 'bg-gray-800/30 border-gray-700/50'
                                                    : 'bg-white/50 border-gray-200/50'
                                                    } hover:scale-[1.02] transition-transform duration-200`}
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
                                                    <div className="space-y-2 mb-4">
                                                        {Object.entries(platform.stats).map(([key, value]) => (
                                                            <div key={key} className="flex justify-between items-center">
                                                                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
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
                                                            Achievements:
                                                        </h4>
                                                        <div className="space-y-1">
                                                            {platform.achievements.slice(0, 2).map((achievement, idx) => (
                                                                <div key={idx} className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'} flex items-center gap-2`}>
                                                                    <Star size={12} className="text-yellow-500" />
                                                                    <span>{achievement}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Profile Link */}
                                                <a
                                                    href={platform.profileLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${isDark
                                                        ? 'bg-white/10 text-white hover:bg-white/20'
                                                        : 'bg-black/10 text-gray-900 hover:bg-black/20'
                                                        } transition-colors duration-200`}
                                                >
                                                    <User size={16} />
                                                    View Profile
                                                    <ExternalLink size={14} />
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Certificates Grid */}
                            {certificates.length > 0 && (
                                <div>
                                    {activeTab === 'all' && competitive.length > 0 && (
                                        <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'} flex items-center gap-3`}>
                                            <Shield className="text-blue-500" size={28} />
                                            Professional Certificates
                                        </h2>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {certificates.map((certificate) => (
                                            <div
                                                key={certificate.id}
                                                className={`p-4 rounded-xl border ${isDark
                                                    ? 'bg-gray-800/30 border-gray-700/50'
                                                    : 'bg-white/50 border-gray-200/50'
                                                    } hover:scale-[1.01] transition-transform duration-200`}
                                            >
                                                {/* Certificate Image */}
                                                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3 bg-gradient-to-br from-gray-100 to-gray-200">
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
                                                <div className="space-y-2">
                                                    {/* Certificate Name */}
                                                    {certificate.verificationLink ? (
                                                        <a
                                                            href={certificate.verificationLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`block text-base font-semibold ${isDark ? 'text-white hover:text-blue-300' : 'text-gray-900 hover:text-blue-600'} transition-colors duration-200`}
                                                        >
                                                            <div className="flex items-center gap-1.5">
                                                                <span className="line-clamp-2 hover:underline">
                                                                    {certificate.name}
                                                                </span>
                                                                <ExternalLink size={14} className="flex-shrink-0 opacity-70" />
                                                            </div>
                                                        </a>
                                                    ) : (
                                                        <h3 className={`text-base font-semibold ${isDark ? 'text-white' : 'text-gray-900'} line-clamp-2`}>
                                                            {certificate.name}
                                                        </h3>
                                                    )}

                                                    {/* Issuing Organization */}
                                                    <div className="flex items-center gap-1.5">
                                                        <Building size={14} className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                                                        <span className={`text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                            {certificate.issuingOrganization}
                                                        </span>
                                                    </div>

                                                    {/* Description */}
                                                    {certificate.description && (
                                                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed line-clamp-2`}>
                                                            {certificate.description}
                                                        </p>
                                                    )}

                                                    {/* Skills */}
                                                    {certificate.skills && certificate.skills.length > 0 && (
                                                        <div className="space-y-1.5">
                                                            <div className="flex items-center gap-1.5">
                                                                <Code size={12} className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                                                                <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                                    Skills:
                                                                </span>
                                                            </div>
                                                            <div className="flex flex-wrap gap-1.5">
                                                                {certificate.skills.slice(0, 4).map((skill, skillIndex) => (
                                                                    <span
                                                                        key={skillIndex}
                                                                        className={`px-2 py-0.5 text-xs rounded-full ${isDark
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
                                                        <div className="flex items-center gap-1.5 pt-1">
                                                            <Shield size={12} className="text-green-500" />
                                                            <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                                Click name to verify certificate
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AchievementsPage;