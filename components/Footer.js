'use client'
import React from 'react';
import { useTheme } from '@/components/ThemeContext';

export default function Footer() {
    const { isDark } = useTheme();
    return (
        <div className={`py-8 text-center w-full relative z-10 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <p className={`text-xs md:text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                © {new Date().getFullYear()} Asir Adnan. All rights reserved.
            </p>
        </div>
    );
}
