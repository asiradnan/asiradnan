"use client";
import React, { createContext, useContext, useState, useEffect, useLayoutEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const applyDocumentTheme = (dark) => {
  const root = document.documentElement;
  root.classList.toggle('dark', dark);
  root.classList.toggle('light', !dark);
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (meta) {
    meta.content = dark ? 'dark' : 'light';
  }
};

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  // Sync theme before first browser paint after hydration
  useIsomorphicLayoutEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      const resolvedDark = savedTheme ? savedTheme === 'dark' : true;
      setIsDark(resolvedDark);
      applyDocumentTheme(resolvedDark);
    } catch {
      applyDocumentTheme(true);
    }
    document.documentElement.dataset.hydrated = 'true';
  }, []);

  // Keep tabs in sync when theme changes in another tab
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === 'theme' && e.newValue) {
        const nextDark = e.newValue === 'dark';
        setIsDark(nextDark);
        applyDocumentTheme(nextDark);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const nextDark = !prev;
      applyDocumentTheme(nextDark);
      try {
        localStorage.setItem('theme', nextDark ? 'dark' : 'light');
      } catch {}
      return nextDark;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
