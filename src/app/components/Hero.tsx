'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden oriental-gradient">
      {/* 背景图案 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
        <img 
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20chinese%20ink%20painting%20style%2C%20mystical%20oriental%20scene%2C%20mountains%20and%20clouds%2C%20incense%20burning%2C%20tarot%20cards%20spread%2C%20soft%20golden%20light%2C%20ethereal%20atmosphere%2C%20high%20quality%20photography&image_size=landscape_16_9" 
          alt="Oriental Mysticism" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <div className="inline-block mb-6">
              <span className="px-4 py-1 bg-secondary bg-opacity-20 text-secondary rounded-full text-sm font-medium">
                {language === 'zh' ? '千年智慧 • 现代指引' : 'Ancient Wisdom • Modern Guidance'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
              {language === 'zh' ? '在不确定的时代，寻找确定的指引' : 'Seek Certain Guidance in Uncertain Times'}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-light-text max-w-lg mx-auto md:mx-0">
              {language === 'zh' ? 
                '结合传统玄学智慧与现代生活需求，为您提供专业的命理咨询、风水布局和心灵指引，助您趋吉避凶，掌控人生方向。' : 
                'Combining traditional mystical wisdom with modern life needs, we provide professional numerology consultation, feng shui layout and spiritual guidance to help you avoid misfortune and control your life direction.'
              }
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a 
                href="#services" 
                className="bg-primary hover:bg-secondary text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-center shadow-lg"
              >
                {language === 'zh' ? '探索服务' : 'Explore Services'}
              </a>
              <a 
                href="#contact" 
                className="border border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                {language === 'zh' ? '预约咨询' : 'Book Consultation'}
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="oriental-border rounded-xl p-2 bg-white bg-opacity-90">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=close%20up%20of%20tarot%20cards%20and%20crystals%20on%20traditional%20chinese%20scroll%20background%2C%20soft%20golden%20lighting%2C%20mystical%20atmosphere%2C%20high%20quality%20photography&image_size=landscape_16_9" 
                alt={language === 'zh' ? '东方玄学' : 'Oriental Mysticism'} 
                className="w-full h-auto rounded-lg" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
