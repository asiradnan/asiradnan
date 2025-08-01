"use client";

import { Github, Linkedin, Mail, Youtube, Facebook } from "lucide-react";
import Link from "next/link";

export const SocialSidebar = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-r-lg shadow-md">
        <Link 
          href="https://github.com/asiradnan" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </Link>
        <Link 
          href="https://linkedin.com/in/asiradnan" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </Link>
        <Link 
          href="https://youtube.com/@asironscreen" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
          aria-label="YouTube"
        >
          <Youtube size={20} />
        </Link>
        <Link 
          href="https://facebook.com/asiradnan23" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
          aria-label="Facebook"
        >
          <Facebook size={20} />
        </Link>
        <Link 
          href="mailto:hello@asiradnan.com" 
          className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
          aria-label="Email"
        >
          <Mail size={20} />
        </Link>
      </div>
    </div>
  );
};

export default SocialSidebar;