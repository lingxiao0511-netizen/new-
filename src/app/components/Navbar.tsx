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
    { href: '/reports', label: language === 'zh' ? '报告' : 'Reports' },
    { href: '/disclaimer', label: language === 'zh' ? '声明' : 'Disclaimer' },
    { href: '/privacy', label: language === 'zh' ? '隐私' : 'Privacy' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#090a0f]/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'} border-b border-gray-800/50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-white/20 rotate-45 flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] rotate-45"></div>
            </div>
            <span className="text-xl font-bold text-white tracking-widest font-serif">
              {language === 'zh' ? '灵霄命理' : 'LingXiao Metaphysics'}
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors text-sm relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7dd3fc] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-gray-300 hover:text-white text-sm border border-gray-700 rounded-full px-3 py-1 transition-all"
            >
              <span>{language === 'zh' ? '中文' : 'English'}</span>
            </button>

            <Link
              href="/tools"
              className="bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] text-black px-5 py-2 rounded text-sm font-bold hover:from-[#a78bfa] hover:to-[#7dd3fc] transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(125,211,252,0.3)]"
            >
              {language === 'zh' ? '免费体验' : 'Try Free Tools'}
            </Link>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
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
        <div className="md:hidden bg-[#090a0f] border-b border-gray-800">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-300 hover:text-white py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-gray-800 mt-2">
              <button
                onClick={toggleLanguage}
                className="text-xs text-[#7dd3fc] border border-[#7dd3fc] px-2 py-0.5 rounded"
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
