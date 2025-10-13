'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Download,
    Eye,
    Code,
    Server,
    Monitor,
    Smartphone,
    FileText,
    Mail,
    Github,
    Linkedin,
    Twitter,
    Send,
    MessageSquare,
    Copy,
    Check,
    ExternalLink
} from 'lucide-react';
import { useTheme } from '@/components/ThemeContext'
import emailjs from '@emailjs/browser';

export default function ResumePage() {
    const { isDark } = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const [copyStatus, setCopyStatus] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageInput, setMessageInput] = useState('Hello Asir, \nI -');
    const sectionRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const formRef = useRef(null);
    const [downloadingFile, setDownloadingFile] = useState('');
    const [previewingFile, setPreviewingFile] = useState('');

    const resumeOptions = React.useMemo(() => [
        {
            name: "Full Stack Resume",
            icon: FileText,
            filename: "AsirAdnan_October2025_FullStack.pdf"
        },
        {
            name: "Android Resume",
            icon: FileText,
            filename: "AsirAdnan_August2025_Android.pdf"
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

    const floatingIcons = [
        { Icon: Mail, delay: 0, x: 20, y: 30 },
        { Icon: Github, delay: 0.5, x: -30, y: 20 },
        { Icon: Linkedin, delay: 1, x: 40, y: -20 },
        { Icon: Twitter, delay: 1.5, x: -20, y: -30 },
        { Icon: MessageSquare, delay: 2, x: 50, y: 40 }
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

    useEffect(() => {
        emailjs.init("f-0ojQvjSEp6cb5W0");
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

    const copyToClipboard = (text, name) => {
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

            const result = await emailjs.send(
                'service_fid9w8v',
                'template_m9h4xmi',
                templateParams,
                'f-0ojQvjSEp6cb5W0'
            );

            setSubmitStatus('success');
            setEmailInput('');
            setMessageInput('Hello Asir, \nI -');
            setTimeout(() => setSubmitStatus(''), 5000);

        } catch (error) {
            console.error('Failed to send email:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(''), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDownload = async (filename, resumeType) => {
        setDownloadingFile(filename);
        try {
            // Check if file exists first
            const response = await fetch(`/resumes/${filename}`, { method: 'HEAD' });
            if (!response.ok) {
                throw new Error('File not found');
            }
            
            const link = document.createElement('a');
            link.href = `/resumes/${filename}`;
            link.download = filename.split('/').pop();
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Resume file not found. Please contact me directly.');
        } finally {
            setDownloadingFile('');
        }
    };

    const handlePreview = async (filename, resumeType) => {
        setPreviewingFile(filename);
        try {
            // Check if file exists first
            const response = await fetch(`/resumes/${filename}`, { method: 'HEAD' });
            if (!response.ok) {
                throw new Error('File not found');
            }
            
            window.open(`/resumes/${filename}`, '_blank');
        } catch (error) {
            console.error('Preview failed:', error);
            alert('Resume file not found. Please contact me directly.');
        } finally {
            setPreviewingFile('');
        }
    };

    return (
        <div className={`w-full min-h-screen ${isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}`}>
            <section
                id="resume-section"
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

                {/* Floating background icons - hidden on mobile */}
                <div className="hidden md:block">
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
                </div>

                {/* Main content */}
                <motion.div
                    className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {/* Header - Made consistent with other pages */}
                    <motion.div
                        className="text-center mb-16"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                    >
                        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-2 mt-4 md:mt-6 lg:mt-8 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
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
                                    ? 'border-gray-600 bg-gray-800/30 hover:bg-gray-800/50'
                                    : 'border-gray-300 bg-white/30 hover:bg-white/50'
                                    } transition-all duration-300 group space-y-4 sm:space-y-0`}
                                initial={{ opacity: 0, x: -50 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
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
                                        <p className={`text-xs md:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} break-all`}>
                                            {resume.filename}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex gap-2 md:gap-3 w-full sm:w-auto">
                                    <motion.button
                                        onClick={() => handlePreview(resume.filename, resume.name)}
                                        disabled={previewingFile === resume.filename}
                                        className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-lg border text-sm md:text-base ${isDark
                                            ? 'border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50'
                                            : 'border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50'
                                            } transition-colors duration-300 disabled:cursor-not-allowed`}
                                        whileHover={{ scale: previewingFile === resume.filename ? 1 : 1.02 }}
                                        whileTap={{ scale: previewingFile === resume.filename ? 1 : 0.98 }}
                                    >
                                        {previewingFile === resume.filename ? (
                                            <motion.div
                                                className="w-3 h-3 border-2 border-current border-t-transparent rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            />
                                        ) : (
                                            <Eye size={14} className="md:w-4 md:h-4" />
                                        )}
                                        {previewingFile === resume.filename ? 'Opening...' : 'Preview'}
                                    </motion.button>
                                    
                                    <motion.button
                                        onClick={() => handleDownload(resume.filename, resume.name)}
                                        disabled={downloadingFile === resume.filename}
                                        className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-lg text-sm md:text-base ${isDark
                                            ? 'bg-white text-black hover:bg-gray-200 disabled:opacity-50'
                                            : 'bg-black text-white hover:bg-gray-800 disabled:opacity-50'
                                            } transition-colors duration-300 disabled:cursor-not-allowed`}
                                        whileHover={{ scale: downloadingFile === resume.filename ? 1 : 1.02 }}
                                        whileTap={{ scale: downloadingFile === resume.filename ? 1 : 0.98 }}
                                    >
                                        {downloadingFile === resume.filename ? (
                                            <motion.div
                                                className="w-3 h-3 border-2 border-current border-t-transparent rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            />
                                        ) : (
                                            <Download size={14} className="md:w-4 md:h-4" />
                                        )}
                                        {downloadingFile === resume.filename ? 'Downloading...' : 'Download'}
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
                                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                    transition={{ delay: 0.5 + (index * 0.1) }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    onClick={() => {
                                        if (social.name === "Email") copyToClipboard(social.value, social.name);
                                        else copyToClipboard(social.link, social.name);
                                    }}
                                >
                                    <div className={`p-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                        <social.icon size={20} className={`md:w-6 md:h-6 group-hover:${isDark ? 'text-white' : 'text-black'}`} />
                                    </div>
                                    <div className="flex-grow min-w-0">
                                        <div className="text-sm font-semibold">{social.name}</div>
                                        <div className="text-xs md:text-sm opacity-80 truncate">{social.handle}</div>
                                    </div>
                                    {copyStatus === social.name ? (
                                        <Check size={16} className={`md:w-5 md:h-5 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                                    ) : (
                                        <Copy size={16} className="md:w-5 md:h-5 opacity-60 group-hover:opacity-100" />
                                    )}
                                </motion.div>
                            ))}

                            <motion.p
                                className={`mt-2 md:mt-4 text-xs md:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                                initial={{ opacity: 0 }}
                                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 1 }}
                            >
                                Click on any of the above to copy to clipboard
                            </motion.p>
                        </motion.div>

                        {/* Right column - Contact Form */}
                        <motion.div
                            className="flex flex-col justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ delay: 0.7 }}
                        >
                            <h3 className={`text-xl md:text-2xl font-bold mb-2 md:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                                Send Me a Message
                            </h3>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-4 p-3 rounded-lg bg-green-100 border border-green-300 text-green-800"
                                >
                                    <div className="flex items-center gap-2">
                                        <Check size={16} className="md:w-5 md:h-5" />
                                        <span className="text-sm md:text-base">I received your message! Will get back to you soon.</span>
                                    </div>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-4 p-3 rounded-lg bg-red-100 border border-red-300 text-red-800"
                                >
                                    <span className="text-sm md:text-base">Failed to send message.</span>
                                </motion.div>
                            )}

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
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Hello Asir, \nI -"
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

                    {/* Copyright text at bottom */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 md:mt-16 text-center"
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