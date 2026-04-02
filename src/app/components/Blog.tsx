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
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <span className="px-6 py-2 bg-[#7dd3fc]/10 backdrop-blur-sm border border-[#7dd3fc]/30 rounded-full">
              <span className="text-[#7dd3fc] text-xs tracking-widest uppercase">
                {language === 'zh' ? 'SEO 内容层' : 'SEO Content Layer'}
              </span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {language === 'zh' ? '内容中心应该先写什么' : 'What the Content Hub Should Cover'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            {language === 'zh'
              ? '首页先展示你第一阶段最值得写的内容方向：解释概念、回答问题、把搜索流量导向工具。'
              : 'The homepage should preview your most important early content: explain core concepts, answer trust questions, and guide traffic into tools.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((title) => (
            <a key={title} href="/learn" className="glass-card rounded-2xl block">
              <div className="mb-4 inline-flex px-3 py-1 rounded-full bg-[#7dd3fc]/10 text-[#7dd3fc] text-xs tracking-widest uppercase">
                Learn
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {language === 'zh'
                  ? '这类文章适合承接搜索流量，并把读者导向 Free Chart、Five Elements 或 Compatibility Tool。'
                  : 'This type of article is ideal for search traffic and for guiding readers into the free chart, the Five Elements profile, or the compatibility tool.'}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
