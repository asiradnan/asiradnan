'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Github,
    Linkedin,
    Twitter,
    Send,
    MessageSquare,
    Copy,
    Check,
    ExternalLink,
    ArrowUp
} from 'lucide-react';
import { useTheme } from '@/components/ThemeContext'

export default function ContactSection() {
    const { isDark } = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const [copyStatus, setCopyStatus] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageInput, setMessageInput] = useState('Hello Asir, \nI -');
    const [showScrollTop, setShowScrollTop] = useState(false);
    const sectionRef = useRef(null);

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
        },
        // { 
        //   name: "Twitter", 
        //   icon: Twitter, 
        //   value: "yourhandle",
        //   link: "https://twitter.com/yourhandle",
        //   handle: "@yourhandle" 
        // }
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
                    setShowScrollTop(true);
                    // Auto-scroll to center the contact section
                    setTimeout(() => {
                        sectionRef.current?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }, 100);
                } else {
                    setShowScrollTop(false);
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

    const copyToClipboard = (text, name) => {
        try {
            // Use the actual value to copy, not the handle display text
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle the form submission logic
        // For now, let's just reset the form
        alert(`Thank you for your message! I'll get back to you soon at ${emailInput}.`);
        setNameInput('');
        setEmailInput('');
        setMessageInput('Hello Asir, \nI -');
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    return (
        <section
            id="contact-section"
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

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg ${isDark
                        ? 'bg-white text-black hover:bg-gray-200'
                        : 'bg-black text-white hover:bg-gray-800'
                    } transition-colors duration-300`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: showScrollTop ? 1 : 0,
                    scale: showScrollTop ? 1 : 0
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }}
                style={{
                    pointerEvents: showScrollTop ? 'auto' : 'none'
                }}
                aria-label="Scroll to top"
            >
                <ArrowUp size={24} />
            </motion.button>

            {/* Main content */}
            <motion.div
                className="z-10 px-6 py-12 w-full max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
            >
                {/* Section title */}
                <motion.h2
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-center"
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
                        Get In Touch
                    </motion.span>
                </motion.h2>

                {/* Main description */}
                <motion.p
                    variants={itemVariants}
                    className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-12 max-w-3xl mx-auto text-center leading-relaxed`}
                >
                    Have a project in mind or just want to chat? You reaching out will make my day!
                </motion.p>

                {/* Two column layout for social links and form */}
                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
                >
                    {/* Left column - Social Links (Stacked) */}
                    <motion.div className="flex flex-col space-y-4 items-start justify-center">
                        <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                            Connect With Me
                        </h3>

                        {socialLinks.map((social, index) => (
                            <motion.div
                                key={social.name}
                                className={`flex items-center space-x-3 w-full max-w-sm px-4 py-3 rounded-lg border ${isDark
                                    ? 'border-gray-600 text-gray-300 hover:border-gray-400 bg-gray-800/30'
                                    : 'border-gray-300 text-gray-700 hover:border-gray-500 bg-white/30'
                                    } cursor-pointer group transition-colors duration-300`}
                                initial={{ opacity: 0, x: -50 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ delay: 0.5 + (index * 0.1) }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                onClick={() => 
                                    {
                                        if (social.name == "Email") copyToClipboard(social.value, social.name)
                                        else copyToClipboard(social.link, social.name)
                                    }
                                }
                            >
                                <div className={`p-2 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'
                                    }`}>
                                    <social.icon size={24} className={`group-hover:${isDark ? 'text-white' : 'text-black'}`} />
                                </div>
                                <div className="flex-grow">
                                    <div className="text-sm font-semibold">{social.name}</div>
                                    <div className="text-sm opacity-80">{social.handle}</div>
                                </div>
                                {copyStatus === social.name ? (
                                    <Check size={18} className={`${isDark ? 'text-green-400' : 'text-green-600'}`} />
                                ) : (
                                    <Copy size={18} className="opacity-60 group-hover:opacity-100" />
                                )}
                            </motion.div>
                        ))}

                        <motion.p
                            className={`mt-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
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
                        <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                            Send Me a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={emailInput}
                                    onChange={(e) => setEmailInput(e.target.value)}
                                    className={`w-full px-4 py-3 rounded-lg border shadow-sm ${isDark
                                        ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400'
                                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500 focus:ring-1 focus:ring-gray-500'
                                        } focus:outline-none transition-colors duration-300`}
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder={`Hello Asir, \nI -`}
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    rows={5}
                                    className={`w-full px-4 py-3 rounded-lg border shadow-sm ${isDark
                                        ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400'
                                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500 focus:ring-1 focus:ring-gray-500'
                                        } focus:outline-none transition-colors duration-300`}
                                    required
                                />
                            </div>
                            <motion.button
                                type="submit"
                                className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium shadow-sm ${isDark
                                    ? 'bg-white text-black hover:bg-gray-200'
                                    : 'bg-black text-white hover:bg-gray-800'
                                    } transition-colors duration-300`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Send size={18} />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>

                {/* Copyright text at bottom */}
                <motion.div
                    variants={itemVariants}
                    className="mt-16 text-center"
                >
                    <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        © {new Date().getFullYear()} Asir Adnan. All rights reserved.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
