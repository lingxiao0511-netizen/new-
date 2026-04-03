'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="method" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            {language === 'zh' ? 'Clarity, Trust & Boundaries' : 'Clarity, Trust & Boundaries'}
          </h2>
          <div className="w-12 h-0.5 bg-[#5ba4a4] mx-auto opacity-50"></div>
          <p className="text-lg text-[#c8c0b6] max-w-3xl mx-auto mt-4">
            {language === 'zh'
              ? '要让国际用户愿意继续用，核心不是神秘感，而是结构感、边界感和可信表达。'
              : 'For global users, trust comes less from mystique and more from structure, boundaries, and clear explanation.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="organics rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              {language === 'zh' ? '这个站应该怎么介绍自己' : 'How the Site Should Present Itself'}
            </h3>
            <div className="space-y-4 text-[#c8c0b6] leading-relaxed">
              <p>
                {language === 'zh'
                  ? '不是 "AI fortune telling website"。更好的定义是：面向国际用户的 Chinese Metaphysics content + tools + personalized insights platform。'
                  : 'It should not position itself as an "AI fortune telling website." A better definition is: a global Chinese metaphysics platform built from content, tools, and personalized insights.'}
              </p>
              <p>
                {language === 'zh'
                  ? '这样用户会把它理解为一个学习与探索的平台，而不是只会随机生成神秘文案的页面。'
                  : 'This makes users see it as a platform for learning and exploration, not a page that generates random mystical copy.'}
              </p>
            </div>
          </div>

          <div className="organics rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              {language === 'zh' ? '必须明确的边界' : 'Boundaries That Must Be Clear'}
            </h3>
            <ul className="space-y-3 text-[#c8c0b6] text-sm leading-relaxed">
              <li><span className="text-[#5ba4a4] mr-2">◆</span>{language === 'zh' ? '不承诺 guaranteed prediction / 100% accuracy' : 'No guaranteed prediction or 100% accuracy claims'}</li>
              <li><span className="text-[#5ba4a4] mr-2">◆</span>{language === 'zh' ? '不输出医疗、法律、投资等高风险建议' : 'No medical, legal, or investment advice'}</li>
              <li><span className="text-[#5ba4a4] mr-2">◆</span>{language === 'zh' ? '明确出生数据如何使用、是否存储、能否删除' : 'Clearly explain how birth data is used, stored, and deleted'}</li>
              <li><span className="text-[#5ba4a4] mr-2">◆</span>{language === 'zh' ? '把系统表述成 reflection / guidance / interpretation' : 'Frame the product as reflection, guidance, and interpretation'}</li>
            </ul>
          </div>
        </div>

        <div className="organics rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-serif font-bold text-white mb-6">
            {language === 'zh' ? '帮助你继续了解的页面' : 'Pages that help you learn more'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['About', 'Methodology', 'FAQ', 'Disclaimer', 'Privacy Policy', 'Terms'].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[#f0ebe4] text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
