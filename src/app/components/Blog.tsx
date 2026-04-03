'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Blog: React.FC = () => {
  const { language } = useLanguage();

  const posts = [
    'What is Bazi?',
    'What is Zi Wei Dou Shu?',
    'Bazi vs Western Astrology',
    'Five Elements Explained',
    'What Does Your Day Master Mean?',
    'Can AI Read Bazi Correctly?',
  ];

  return (
    <section id="learn" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-lightenter mb-20">
          <div className="inline-block mb-8">
            <span className="px-6 py-2 bg-[#5ba4a4]/10 backdrop-blur-sm border border-[#5ba4a4]/30 rounded-full">
              <span className="text-[#5ba4a4] text-xs tracking-widest uppercase">
                {language === 'zh' ? '学习内容' : 'Learning Guides'}
              </span>
            </span>
          </div>
          <h2 style={{ color: "var(--text)" }} className="text-primaryxl md:text-5xl font-serif font-bold font-bold mb-6">
            {language === 'zh' ? '从这些主题开始了解' : 'A few good places to begin'}
          </h2>
          <p className="text-xl text-light max-w-3xl mx-auto mb-12">
            {language === 'zh'
              ? '如果你想先通过阅读来了解这个体系，这些主题会是很自然的起点。'
              : 'If you prefer to start by reading, these topics are a natural way to become familiar with the system.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((title) => (
            <a key={title} href="/learn" className="organics rounded-2xl block">
              <div className="mb-4 inline-flex px-3 py-1 rounded-full bg-[#5ba4a4]/10 text-[#5ba4a4] text-xs tracking-widest uppercase">
                Learn
              </div>
              <h3 style={{ color: "var(--text)" }} className="text-xl font-serif font-bold font-bold mb-4">{title}</h3>
              <p className="text-light text-sm leading-relaxed">
                {language === 'zh'
                  ? '如果某个主题正好是你关心的问题，可以从这里读起，再决定是否继续看工具或更深入的解读。'
                  : 'If one of these topics matches what you are curious about, it can be a natural place to begin before moving into tools or more detailed readings.'}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
