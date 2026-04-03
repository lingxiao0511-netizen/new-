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
      {/* 温暖有机光晕 - 替代原来的赛博朋克光斑 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[120px] opacity-10" style={{ background: 'rgba(91, 164, 164, 0.3)' }}></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[100px] opacity-8" style={{ background: 'rgba(212, 168, 83, 0.3)' }}></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-6" style={{ background: 'rgba(194, 112, 78, 0.3)' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-20 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className={`lg:w-1/2 text-left lg:text-left transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-8 px-6 py-2 bg-[#5ba4a4]/10 backdrop-blur-sm border border-[#5ba4a4]/30 rounded-full">
              <span className="text-[#5ba4a4] text-xs tracking-widest uppercase">
                {language === 'zh' ? '内容 + 工具 + 个性化解读' : 'Content + Tools + Personalized Insights'}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight" style={{ color: 'var(--text)' }}>
              {language === 'zh' ? '用现代方式' : 'Explore Chinese'}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5ba4a4] to-[#c2704e]">
                {language === 'zh' ? '理解中国命理' : 'Metaphysics, Clearly'}
              </span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-lg text-light font-light leading-relaxed">
              {language === 'zh'
                ? '这是一个面向全球用户的中国命理平台。你可以从免费 BaZi 排盘、五行分析和关系匹配开始，再逐步理解八字、紫微斗数与中国象数思维。'
                : 'A global platform for learning and exploring Chinese metaphysics through educational content, practical tools, and AI-assisted personalized insights.'}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <a
                href="/tools"
                className="px-8 py-3 bg-gradient-to-r from-[#5ba4a4] to-[#c2704e] text-white font-bold tracking-widest hover:from-[#6ab5b5] hover:to-[#c2704e] transition-all rounded-lg shadow-lg"
              >
                {language === 'zh' ? '免费试用工具' : 'Try Free Tools'}
              </a>
              <a
                href="/learn"
                className="group relative px-8 py-3 overflow-hidden rounded-lg border border-[rgba(160,148,136,0.35)] hover:border-[#5ba4a4] transition-all duration-300"
              >
                <div className="absolute inset-0 w-3 bg-[#5ba4a4] transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                <span className="relative text-primary group-hover:text-[#5ba4a4] font-medium tracking-widest">
                  {language === 'zh' ? '学习基础知识' : 'Learn the Basics'}
                </span>
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {[
                language === 'zh' ? '免费 BaZi 排盘' : 'Free BaZi Chart',
                language === 'zh' ? '五行人格分析' : 'Five Elements Profile',
                language === 'zh' ? '关系匹配解读' : 'Compatibility Insights',
              ].map((item) => (
                <div key={item} className="organics p-4">
                  <p className="text-sm" style={{ color: 'var(--text-light)' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`lg:w-1/2 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <div className="organics rounded-2xl p-6 relative overflow-hidden">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[rgba(160,148,136,0.25)] pb-4">
                    <div>
                      <p className="text-sm text-[#5ba4a4] uppercase tracking-widest">
                        {language === 'zh' ? '如何开始' : 'How to Begin'}
                      </p>
                      <h3 className="text-xl font-serif mt-2" style={{ color: 'var(--text)' }}>
                        {language === 'zh' ? '从学习、工具或深度解读开始' : 'Start with learning, tools, or deeper readings'}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-light">{language === 'zh' ? '优先系统' : 'Core System'}</p>
                      <p className="text-lg text-primary">BaZi</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: language === 'zh' ? 'Learn' : 'Learn',
                        desc: language === 'zh' ? '先理解基础概念与常见问题' : 'Understand the basics and common questions first',
                      },
                      {
                        title: language === 'zh' ? 'Tools' : 'Tools',
                        desc: language === 'zh' ? '探索排盘、五行与关系匹配' : 'Explore charts, Five Elements, and compatibility',
                      },
                      {
                        title: language === 'zh' ? 'Reports' : 'Reports',
                        desc: language === 'zh' ? '获得更完整的个性化解读' : 'Go deeper with more detailed readings',
                      },
                      {
                        title: language === 'zh' ? 'Approach' : 'Approach',
                        desc: language === 'zh' ? '以清晰、尊重与边界感来呈现' : 'Presented with clarity, respect, and clear boundaries',
                      },
                    ].map((card) => (
                      <div key={card.title} className="rounded-xl border border-[rgba(160,148,136,0.25)] bg-[rgba(0,0,0,0.05)] p-4">
                        <p className="font-medium" style={{ color: 'var(--text)' }}>{card.title}</p>
                        <p className="text-sm text-light mt-2">{card.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-[#5ba4a4]/20 bg-[#5ba4a4]/5 p-4">
                    <p className="text-sm text-light leading-relaxed">
                      {language === 'zh'
                        ? '定位不是"保证预测未来"的算命页，而是一个帮助用户理解中国命理结构、获得个性化参考与文化洞察的平台。'
                        : 'This is not a certainty-based fortune telling page. It is a structured platform for cultural learning, self-reflection, and personalized interpretation.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
