'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/ThemeContext';

export default function AnimatedBackground() {
    const { isDark } = useTheme();
    return (
        <div className="fixed inset-0 opacity-20 pointer-events-none z-0">
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
    );
}
