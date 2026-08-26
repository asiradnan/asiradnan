'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Download,
    Eye,
    FileText,
    Mail,
    Github,
    Linkedin,
    Send,
    Copy,
    Check
} from 'lucide-react';
import { useTheme } from '@/components/ThemeContext'
import emailjs from '@emailjs/browser';

// Initialize once per app load, not once per component mount
emailjs.init("f-0ojQvjSEp6cb5W0");

export default function ResumePage() {
    const { isDark } = useTheme();
    const [copyStatus, setCopyStatus] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageInput, setMessageInput] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const formRef = useRef(null);

    const resumeOptions = React.useMemo(() => [
        {
            name: "General Resume",
            icon: FileText,
            driveId: "1MvFYCofksG_L5p__N2tvXCWvV8pwgBMV",
            filename: "AsirAdnan_MasterResume.pdf",
            updated: "Jul 2026"
        },
        {
            name: "Backend Resume",
            icon: FileText,
            driveId: "1Mc8PzaeLYzf1NFtnA9Ko70Eu5l_cbkK3",
            filename: "AsirAdnan_Backend.pdf",
            updated: "Jul 2026"
        },
        {
            name: "FullStack Resume",
            icon: FileText,
            driveId: "15X8szOsVd2dEB8p4AvscxqMDnhBV9NMM",
            filename: "AsirAdnan_FullStack.pdf",
            updated: "Jul 2026"
        },
    ], []);

    const socialLinks = React.useMemo(() => [
        {
            name: "Email",
            icon: Mail,
            value: "hello@asiradnan.com",
            link: "mailto:hello@asiradnan.com",
            handle: "hello@asiradnan.com"
        },
        {
            name: "GitHub",
            icon: Github,
            value: "asiradnan",
            link: "https://github.com/asiradnan",
            handle: "@asiradnan"
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            value: "asiradnan",
            link: "https://linkedin.com/in/asiradnan",
            handle: "in/asiradnan"
        }
    ], []);

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

    const copyToClipboard = (text, name) => {
        if (!navigator?.clipboard?.writeText) {
            console.error('Clipboard API not available');
            alert('Copy to clipboard is not supported in your browser');
            return;
        }
        try {
            navigator.clipboard.writeText(text)
                .then(() => {
                    setCopyStatus(name);
                    setTimeout(() => {
                        setCopyStatus('');
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                    alert('Failed to copy to clipboard');
                });
        } catch (err) {
            console.error('Copy failed: ', err);
            alert('Copy to clipboard is not supported in your browser');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            const templateParams = {
                from_name: 'Portfolio Visitor',
                from_email: emailInput,
                message: messageInput,
                to_name: 'Asir',
            };

            await emailjs.send(
                'service_fid9w8v',
                'template_m9h4xmi',
                templateParams,
                'f-0ojQvjSEp6cb5W0'
            );

            setSubmitStatus('success');
            setEmailInput('');
            setMessageInput('');
            setTimeout(() => setSubmitStatus(''), 5000);

        } catch (error) {
            console.error('Failed to send email:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(''), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Direct Drive links — no existence check needed, no async/loading state
    const handleDownload = (resume) => {
        window.open(`https://drive.google.com/uc?export=download&id=${resume.driveId}`, '_blank');
    };

    const handlePreview = (resume) => {
        window.open(`https://drive.google.com/file/d/${resume.driveId}/view`, '_blank');
    };

    return (
        <div className={`w-full min-h-screen flex items-center justify-center transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <section
                id="resume-section"
                className="w-full min-h-screen flex items-center justify-center relative"
            >
                <motion.div
                    className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        variants={containerVariants}
                    >
                        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 mt-4 md:mt-6 lg:mt-8 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Resume
                        </h1>

                        <motion.p
                            variants={itemVariants}
                            className={`text-base sm:text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} px-4 sm:px-6 md:px-10 lg:px-12 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium`}
                        >
                            Download or preview my resume tailored for different roles and expertise areas
                        </motion.p>
                    </motion.div>

                    {/* Resume Options */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-3 md:space-y-4 mb-12 md:mb-16"
                    >
                        {resumeOptions.map((resume, index) => (
                            <motion.div
                                key={resume.name}
                                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 md:p-6 rounded-lg border ${isDark
                                    ? 'bg-gray-800/30 border-gray-700/50 hover:bg-gray-800/50 hover:border-gray-600'
                                    : 'bg-white/50 border-gray-200/50 hover:bg-white hover:border-gray-300'
                                    } transition-colors transition-shadow duration-300 group space-y-4 sm:space-y-0`}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                whileHover={{ scale: 1.01, x: 2 }}
                            >
                                <div className="flex items-center space-x-3 md:space-x-4">
                                    <div className={`p-2 md:p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                        <resume.icon size={20} className={`md:w-6 md:h-6 ${isDark ? 'text-white' : 'text-gray-700'}`} />
                                    </div>
                                    <div>
                                        <h3 className={`text-base md:text-lg font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                                            {resume.name}
                                        </h3>
                                        {/* Filename hidden on mobile, replaced with an "updated" hint */}
                                        <p className={`hidden sm:block text-xs md:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} break-all`}>
                                            {resume.filename}
                                        </p>
                                        <p className={`sm:hidden text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                            PDF · Updated {resume.updated}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-2 md:gap-3 w-full sm:w-auto">
                                    <motion.button
                                        onClick={() => handlePreview(resume)}
                                        className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-lg border text-sm md:text-base ${isDark
                                            ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                                            : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                                            } transition-colors duration-300`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Eye size={14} className="md:w-4 md:h-4" />
                                        Preview
                                    </motion.button>

                                    <motion.button
                                        onClick={() => handleDownload(resume)}
                                        className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-lg text-sm md:text-base ${isDark
                                            ? 'bg-white text-black hover:bg-gray-200'
                                            : 'bg-black text-white hover:bg-gray-800'
                                            } transition-colors duration-300`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Download size={14} className="md:w-4 md:h-4" />
                                        Download
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Two column layout for social links and form */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
                    >
                        {/* Left column - Social Links */}
                        <motion.div className="flex flex-col space-y-3 md:space-y-4 items-start justify-center">
                            <h3 className={`text-xl md:text-2xl font-bold mb-2 md:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                                Connect With Me
                            </h3>

                            {socialLinks.map((social, index) => (
                                <motion.div
                                    key={social.name}
                                    className={`flex items-center space-x-3 w-full max-w-sm px-3 md:px-4 py-3 rounded-lg border ${isDark
                                        ? 'border-gray-600 text-gray-300 hover:border-gray-400 bg-gray-800/30'
                                        : 'border-gray-300 text-gray-700 hover:border-gray-500 bg-white/30'
                                        } cursor-pointer group transition-colors duration-300`}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + (index * 0.1) }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    onClick={() => {
                                        if (social.name === "Email") window.location.href = social.link;
                                        else window.open(social.link, '_blank', 'noopener,noreferrer');
                                    }}
                                >
                                    <div className={`p-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                        <social.icon size={20} className={`md:w-6 md:h-6 group-hover:${isDark ? 'text-white' : 'text-black'}`} />
                                    </div>
                                    <div className="flex-grow min-w-0">
                                        <div className="text-sm font-semibold">{social.name}</div>
                                        <div className="text-xs md:text-sm opacity-80 truncate">{social.handle}</div>
                                    </div>
                                    <div
                                        className={`p-2 -mr-2 rounded-full transition-colors ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (social.name === "Email") copyToClipboard(social.value, social.name);
                                            else copyToClipboard(social.link, social.name);
                                        }}
                                        title="Copy to clipboard"
                                    >
                                        {copyStatus === social.name ? (
                                            <Check size={16} className={`md:w-5 md:h-5 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                                        ) : (
                                            <Copy size={16} className="md:w-5 md:h-5 opacity-60 hover:opacity-100" />
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Right column - Contact Form */}
                        <motion.div
                            className="flex flex-col justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <h3 className={`text-xl md:text-2xl font-bold mb-2 md:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                                Send Me a Message
                            </h3>

                            <AnimatePresence>
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                                        animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                        className="p-3 rounded-lg bg-green-100 border border-green-300 text-green-800 overflow-hidden"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Check size={16} className="md:w-5 md:h-5" />
                                            <span className="text-sm md:text-base">I received your message! Will get back to you soon.</span>
                                        </div>
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                                        animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                        className="p-3 rounded-lg bg-red-100 border border-red-300 text-red-800 overflow-hidden"
                                    >
                                        <span className="text-sm md:text-base">Failed to send message.</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={emailInput}
                                        onChange={(e) => setEmailInput(e.target.value)}
                                        className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border shadow-sm text-sm md:text-base ${isDark
                                            ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400'
                                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500 focus:ring-1 focus:ring-gray-500'
                                            } focus:outline-none transition-colors duration-300`}
                                        pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                                        title="Please enter a valid email address (e.g., name@example.com)"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder={"Hello Asir,\nI -"}
                                        value={messageInput}
                                        onChange={(e) => setMessageInput(e.target.value)}
                                        rows={4}
                                        className={`w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border shadow-sm text-sm md:text-base resize-none ${isDark
                                            ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400'
                                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500 focus:ring-1 focus:ring-gray-500'
                                            } focus:outline-none transition-colors duration-300`}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full flex items-center justify-center gap-2 py-2 md:py-3 rounded-lg font-medium shadow-sm text-sm md:text-base ${isDark
                                        ? 'bg-white text-black hover:bg-gray-200 disabled:bg-gray-400 disabled:text-gray-700'
                                        : 'bg-black text-white hover:bg-gray-800 disabled:bg-gray-400 disabled:text-gray-600'
                                        } transition-colors duration-300 disabled:cursor-not-allowed`}
                                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} className="md:w-5 md:h-5" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>

                </motion.div>
            </section>
        </div>
    );
}