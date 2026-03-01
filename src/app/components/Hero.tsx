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
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="fixed inset-0 z-0 bg-grid opacity-30"></div>
      
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900 rounded-full blur-[120px] opacity-20 pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 relative z-20 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-8 px-6 py-2 bg-[#7dd3fc]/10 backdrop-blur-sm border border-[#7dd3fc]/30 rounded-full">
              <span className="text-[#7dd3fc] text-xs tracking-widest uppercase">
                {language === 'zh' ? '千年智慧 • 现代指引' : 'Ancient Wisdom • Modern Guidance'}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight text-white">
              {language === 'zh' ? '你的命运' : 'Your Destiny'}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa]">
                {language === 'zh' ? '是一张精密的星图' : 'Is a Precise Star Chart'}
              </span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-lg text-gray-400 font-light leading-relaxed">
              {language === 'zh' ? 
                '结合传统玄学智慧与现代生活需求，为您提供专业的命理咨询、风水布局和心灵指引，助您趋吉避凶，掌控人生方向。' : 
                'Combining traditional mystical wisdom with modern life needs, we provide professional numerology consultation, feng shui layout and spiritual guidance to help you avoid misfortune and control your life direction.'
              }
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <a 
                href="#services" 
                className="group relative px-8 py-3 overflow-hidden rounded-none border border-white/20 hover:border-[#7dd3fc] transition-all duration-300"
              >
                <div className="absolute inset-0 w-3 bg-[#7dd3fc] transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                <span className="relative text-white group-hover:text-[#7dd3fc] font-medium tracking-widest">
                  {language === 'zh' ? '探索服务' : 'Explore Services'}
                </span>
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] text-black font-bold tracking-widest hover:from-[#a78bfa] hover:to-[#7dd3fc] transition-all shadow-[0_0_20px_rgba(125,211,252,0.3)]"
              >
                {language === 'zh' ? '预约详解' : 'Book Consultation'}
              </a>
            </div>
          </div>
          
          <div className={`lg:w-1/2 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="glass-card rounded-2xl p-4 relative overflow-hidden floating">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=1920&h=1080" 
                alt={language === 'zh' ? '东方玄学' : 'Oriental Mysticism'} 
                className="w-full h-auto rounded-xl object-cover grayscale contrast-125 brightness-90"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] text-black px-6 py-3 rounded-full shadow-lg font-bold">
                {language === 'zh' ? '专业认证' : 'Professional Certified'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
