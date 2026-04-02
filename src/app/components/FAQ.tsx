'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  const items = [
    {
      q: language === 'zh' ? '这个站是算命站，还是内容平台？' : 'Is this a fortune telling site or a content platform?',
      a:
        language === 'zh'
          ? '更准确地说，它是一个 Chinese Metaphysics 平台：你可以在这里学习基础知识、试用工具，并在需要时查看更深入的解读。'
          : 'More accurately, it is a Chinese metaphysics platform where you can learn the basics, try practical tools, and explore deeper readings when you want more detail.',
    },
    {
      q: language === 'zh' ? 'AI 是直接算出来的吗？' : 'Does AI generate the reading directly?',
      a:
        language === 'zh'
          ? '不建议让 AI 直接凭空生成结论。更稳妥的方式是先把图表结构算清楚，再用 AI 帮助解释。'
          : 'Ideally, AI should not invent the chart from scratch. A more reliable approach is to calculate the structure clearly first and then use AI to help explain it.',
    },
    {
      q: language === 'zh' ? '第一阶段最该先做什么？' : 'What should be built first?',
      a:
        language === 'zh'
          ? '先做 BaZi 作为核心系统，再上线 Free Chart、Five Elements Profile、基础报告页和 10–20 篇内容。'
          : 'Start with BaZi as the core system, then launch a free chart, Five Elements profile, report pages, and 10–20 educational articles.',
    },
    {
      q: language === 'zh' ? '如何避免合规风险？' : 'How do you reduce compliance risk?',
      a:
        language === 'zh'
          ? '避免 guaranteed prediction、100% accuracy 等表述；突出 symbolic interpretation、reflective insight、tradition-informed guidance。'
          : 'Avoid guarantee language such as 100% accuracy. Emphasize symbolic interpretation, reflective insight, and tradition-informed guidance instead.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-8">
            <span className="px-6 py-2 bg-[#7dd3fc]/10 backdrop-blur-sm border border-[#7dd3fc]/30 rounded-full">
              <span className="text-[#7dd3fc] text-xs tracking-widest uppercase">FAQ</span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {language === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {language === 'zh'
              ? '先把用户最容易犹豫的点解释清楚，能明显提高首页信任感。'
              : 'Clarifying these concerns early makes the homepage feel much more trustworthy.'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div key={item.q} className="glass-card rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between"
                onClick={() => setOpen(open === index ? null : index)}
              >
                <span className="text-white font-medium pr-6">{item.q}</span>
                <span className="text-[#7dd3fc] text-xl">{open === index ? '−' : '+'}</span>
              </button>
              {open === index && <div className="px-6 pb-5 text-gray-400 leading-relaxed">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
