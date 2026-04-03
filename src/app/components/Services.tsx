'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { language } = useLanguage();

  const cards = [
    {
      title: language === 'zh' ? 'Learn / Blog' : 'Learn / Blog',
      desc:
        language === 'zh'
          ? '从基础知识、常见问题和对比文章开始，帮助你更自然地理解这个系统�?
          : 'Start with foundational guides, common questions, and comparison articles that make the system easier to understand.',
      points:
        language === 'zh'
          ? ['What is Bazi?', 'Five Elements explained', 'Bazi vs Western astrology']
          : ['What is Bazi?', 'Five Elements explained', 'Bazi vs Western astrology'],
    },
    {
      title: language === 'zh' ? 'Tools' : 'Tools',
      desc:
        language === 'zh'
          ? '先从实用工具开始，快速看到自己的图表与核心结构�?
          : 'Begin with practical tools that make it easier to see your chart and core symbolic patterns.',
      points:
        language === 'zh'
          ? ['Free Bazi Chart', 'Five Elements Profile', 'Compatibility Checker']
          : ['Free Bazi Chart', 'Five Elements Profile', 'Compatibility Checker'],
    },
    {
      title: language === 'zh' ? 'Premium Reports' : 'Premium Reports',
      desc:
        language === 'zh'
          ? '如果你想要更完整的解读，可以进一步查看详细报告�?
          : 'If you want more than a quick overview, you can continue into more detailed reports.',
      points:
        language === 'zh'
          ? ['$19 Basic Report', '$29 Compatibility Report', '$49�?79 Deep Readings']
          : ['$19 Basic Report', '$29 Compatibility Report', '$49�?79 Deep Readings'],
    },
  ];

  return (
    <section id="method" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <span className="px-6 py-2 bg-[#5ba4a4]/10 backdrop-blur-sm border border-[#5ba4a4]/30 rounded-full">
              <span className="text-[#5ba4a4] text-xs tracking-widest uppercase">
                {language === 'zh' ? '学习 �?工具 �?解读' : 'Learn �?Tools �?Readings'}
              </span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {language === 'zh' ? '你可以从哪里开�? : 'Different ways to explore'}
          </h2>
          <p className="text-xl text-[#c8c0b6] max-w-3xl mx-auto mb-12">
            {language === 'zh'
              ? '你可以先学习基础，再试用工具，最后在需要时查看更深入的个性化解读�?
              : 'You can begin with learning, continue with tools, and explore more detailed readings whenever you want to go deeper.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card) => {
            const href = card.title === 'Learn / Blog' ? '/learn' : card.title === 'Tools' ? '/tools' : '/reports';
            return (
              <a key={card.title} href={href} className="organics rounded-2xl block">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{card.title}</h3>
                <p className="text-[#c8c0b6] mb-6 leading-relaxed">{card.desc}</p>
                <ul className="space-y-3">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start text-[#c8c0b6] text-sm">
                      <span className="text-[#5ba4a4] mr-3">�?/span>
                      {point}
                    </li>
                  ))}
                </ul>
              </a>
            );
          })}
        </div>

        <div className="organics rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                {language === 'zh' ? '为什么这样安�? : 'Why this approach helps'}
              </h3>
              <div className="space-y-4 text-[#c8c0b6] leading-relaxed">
                <p>
                  {language === 'zh'
                    ? '复杂的命理概念如果表达得太随意，会让人更困惑。更好的做法是先把结构算清楚，再用更容易理解的语言解释它�?
                    : 'Chinese metaphysics can feel difficult if it is explained too loosely. A better experience begins with clear structure and then makes that structure easier to understand.'}
                </p>
                <p>
                  {language === 'zh'
                    ? '这样读者会更容易理解，也更容易知道哪些内容适合作为参考、哪些地方需要保留弹性�?
                    : 'That makes the experience easier to follow and helps readers understand where interpretation can be useful without turning everything into certainty.'}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <p className="text-sm uppercase tracking-widest text-[#5ba4a4] mb-4">
                {language === 'zh' ? '平台体验' : 'Platform Experience'}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  'Next.js',
                  'Tailwind CSS',
                  'MDX / Markdown',
                  'Supabase / Postgres',
                  'Stripe',
                  'Resend / ConvertKit',
                  'Plausible / PostHog',
                  'Vercel',
                ].map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[#f0ebe4]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
