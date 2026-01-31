'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-background bg-opacity-95 backdrop-blur-sm oriental-gradient border-b border-secondary border-opacity-20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xl">灵</span>
            </div>
            <span className="text-2xl font-serif font-bold text-primary">{language === 'zh' ? '灵霄玄学' : 'LingXiao Mysticism'}</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-primary hover:text-secondary transition-colors font-medium">{language === 'zh' ? '首页' : 'Home'}</Link>
            <Link href="#services" className="text-primary hover:text-secondary transition-colors font-medium">{language === 'zh' ? '服务' : 'Services'}</Link>
            <Link href="#cases" className="text-primary hover:text-secondary transition-colors font-medium">{language === 'zh' ? '案例' : 'Cases'}</Link>
            <Link href="#blog" className="text-primary hover:text-secondary transition-colors font-medium">{language === 'zh' ? '科普' : 'Blog'}</Link>
            <Link href="#contact" className="text-primary hover:text-secondary transition-colors font-medium">{language === 'zh' ? '咨询' : 'Contact'}</Link>
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 border border-primary text-primary hover:bg-primary hover:text-white font-medium py-1 px-3 rounded-lg transition-colors mr-4"
            >
              <span>{language === 'zh' ? '中文' : 'English'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* CTA Button */}
            <Link 
              href="#contact" 
              className="bg-primary hover:bg-secondary text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md"
            >
              {language === 'zh' ? '免费测算' : 'Free Reading'}
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center">
            {/* Mobile Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="md:hidden text-primary mr-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
            <button 
              className="md:hidden text-primary" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <nav className="md:hidden mt-4 py-4 oriental-border rounded-lg">
            <div className="flex flex-col space-y-4 px-4">
              <Link href="/" className="text-primary hover:text-secondary transition-colors font-medium py-2">{language === 'zh' ? '首页' : 'Home'}</Link>
              <Link href="#services" className="text-primary hover:text-secondary transition-colors font-medium py-2">{language === 'zh' ? '服务' : 'Services'}</Link>
              <Link href="#cases" className="text-primary hover:text-secondary transition-colors font-medium py-2">{language === 'zh' ? '案例' : 'Cases'}</Link>
              <Link href="#blog" className="text-primary hover:text-secondary transition-colors font-medium py-2">{language === 'zh' ? '科普' : 'Blog'}</Link>
              <Link href="#contact" className="text-primary hover:text-secondary transition-colors font-medium py-2">{language === 'zh' ? '咨询' : 'Contact'}</Link>
              <Link 
                href="#contact" 
                className="bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded-lg transition-colors text-center mt-2"
              >
                {language === 'zh' ? '免费测算' : 'Free Reading'}
              </Link>
              <div className="flex items-center justify-center mt-4">
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 border border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-4 rounded-lg transition-colors"
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
