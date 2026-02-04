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

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/98 backdrop-blur-md shadow-lg' : 'bg-background/95 backdrop-blur-sm'} oriental-gradient border-b border-secondary/20`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary">
              <span className="text-white font-serif font-bold text-xl">灵</span>
            </div>
            <span className="text-2xl md:text-3xl font-serif font-bold text-primary transition-colors duration-300 group-hover:text-secondary">{language === 'zh' ? '灵霄玄学' : 'LingXiao Mysticism'}</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {[
              { href: '/', label: language === 'zh' ? '首页' : 'Home' },
              { href: '#services', label: language === 'zh' ? '服务' : 'Services' },
              { href: '#cases', label: language === 'zh' ? '案例' : 'Cases' },
              { href: '#blog', label: language === 'zh' ? '科普' : 'Blog' },
              { href: '#contact', label: language === 'zh' ? '咨询' : 'Contact' }
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-primary hover:text-secondary transition-all duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 border border-primary/30 text-primary hover:bg-primary hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 mr-4"
            >
              <span>{language === 'zh' ? '中文' : 'English'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* CTA Button */}
            <Link 
              href="#contact" 
              className="btn-primary transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              {language === 'zh' ? '免费测算' : 'Free Reading'}
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Mobile Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="md:hidden text-primary hover:text-secondary transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
            <button 
              className="md:hidden text-primary hover:text-secondary transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 py-6 oriental-border rounded-xl bg-white/95 backdrop-blur-md shadow-xl animate-fade-in">
            <div className="flex flex-col space-y-5 px-5">
              {[
                { href: '/', label: language === 'zh' ? '首页' : 'Home' },
                { href: '#services', label: language === 'zh' ? '服务' : 'Services' },
                { href: '#cases', label: language === 'zh' ? '案例' : 'Cases' },
                { href: '#blog', label: language === 'zh' ? '科普' : 'Blog' },
                { href: '#contact', label: language === 'zh' ? '咨询' : 'Contact' }
              ].map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="text-primary hover:text-secondary transition-colors duration-300 font-medium py-3 border-b border-secondary/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="#contact" 
                className="btn-primary text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'zh' ? '免费测算' : 'Free Reading'}
              </Link>
              <div className="flex items-center justify-center mt-6">
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 border border-primary/30 text-primary hover:bg-primary hover:text-white font-medium py-2 px-6 rounded-lg transition-all duration-300"
                >
                  <span>{language === 'zh' ? '切换到英文' : 'Switch to Chinese'}</span>
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
