'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: language === 'zh' ? '首页' : 'Home' },
    { href: '/tools', label: language === 'zh' ? '工具' : 'Tools' },
    { href: '/learn', label: language === 'zh' ? '学习' : 'Learn' },
    { href: '/getting-started', label: language === 'zh' ? '开始' : 'Start Here' },
    { href: '/reports', label: language === 'zh' ? '报告' : 'Reports' },
    { href: '/disclaimer', label: language === 'zh' ? '声明' : 'Disclaimer' },
    { href: '/privacy', label: language === 'zh' ? '隐私' : 'Privacy' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#f5f0e8]/90 backdrop-blur-xl shadow-sm' : 'bg-transparent'} border-b border-[var(--border)]/30`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[rgba(160,148,136,0.35)] rotate-45 flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-to-r from-[#5ba4a4] to-[#c2704e] rotate-45"></div>
            </div>
            <span className="text-xl font-bold tracking-widest font-serif" style={{ color: 'var(--text)' }}>
              {language === 'zh' ? '灵霄命理' : 'LingXiao Metaphysics'}
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[var(--text-light)] hover:text-[#5ba4a4] transition-colors text-sm relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5ba4a4] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-[var(--text-light)] hover:text-[#5ba4a4] text-sm border border-[rgba(160,148,136,0.3)] rounded-full px-3 py-1 transition-all"
            >
              <span>{language === 'zh' ? '中文' : 'English'}</span>
            </button>

            <Link
              href="/tools"
              className="bg-gradient-to-r from-[#5ba4a4] to-[#c2704e] text-white px-5 py-2 rounded-lg text-sm font-bold hover:from-[#6ab5b5] hover:to-[#c2704e] transition-all transform hover:scale-105 shadow-md"
            >
              {language === 'zh' ? '免费体验' : 'Try Free Tools'}
            </Link>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--text-light)] hover:text-[#5ba4a4]"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#f5f0e8] border-b border-[var(--border)]">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-[var(--text-light)] hover:text-[#5ba4a4] py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-[var(--border)] mt-2">
              <button
                onClick={toggleLanguage}
                className="text-xs text-[#5ba4a4] border border-[#5ba4a4] px-2 py-0.5 rounded-full"
              >
                {language === 'zh' ? '中文' : 'English'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
