'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden oriental-gradient">
      {/* 背景图案 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1586899028614-4b1a79b1f3d0?auto=format&fit=crop&q=80&w=1920&h=1080" 
          alt="Oriental Mysticism" 
          className="w-full h-full object-cover transition-transform duration-10000 ease-in-out hover:scale-105"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-8">
              <span className="px-6 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium backdrop-blur-sm">
                {language === 'zh' ? '千年智慧 • 现代指引' : 'Ancient Wisdom • Modern Guidance'}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary mb-8 leading-tight tracking-tight">
              {language === 'zh' ? '在不确定的时代，寻找确定的指引' : 'Seek Certain Guidance in Uncertain Times'}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-light-text max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {language === 'zh' ? 
                '结合传统玄学智慧与现代生活需求，为您提供专业的命理咨询、风水布局和心灵指引，助您趋吉避凶，掌控人生方向。' : 
                'Combining traditional mystical wisdom with modern life needs, we provide professional numerology consultation, feng shui layout and spiritual guidance to help you avoid misfortune and control your life direction.'
              }
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
              <a 
                href="#services" 
                className="btn-primary text-center"
              >
                {language === 'zh' ? '探索服务' : 'Explore Services'}
              </a>
              <a 
                href="#contact" 
                className="btn-secondary text-center"
              >
                {language === 'zh' ? '预约咨询' : 'Book Consultation'}
              </a>
            </div>
          </div>
          <div className={`lg:w-1/2 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="oriental-border rounded-2xl p-4 bg-white/95 backdrop-blur-md shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=1920&h=1080" 
                alt={language === 'zh' ? '东方玄学' : 'Oriental Mysticism'} 
                className="w-full h-auto rounded-xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-white px-6 py-3 rounded-full shadow-lg font-medium">
                {language === 'zh' ? '专业认证' : 'Professional Certified'}
              </div>
            </div>
          </div>
        </div>
        
        {/* 波浪装饰 */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="var(--background)" fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,218.7C672,213,768,171,864,160C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
