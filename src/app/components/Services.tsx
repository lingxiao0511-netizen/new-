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
          ? '用内容拿搜索流量、建立信任，并把用户自然导向工具和报告。'
          : 'Use educational content to capture search traffic, build trust, and guide visitors into tools and paid reports.',
      points:
        language === 'zh'
          ? ['What is Bazi?', 'Five Elements explained', 'Bazi vs Western astrology']
          : ['What is Bazi?', 'Five Elements explained', 'Bazi vs Western astrology'],
    },
    {
      title: language === 'zh' ? 'Tools' : 'Tools',
      desc:
        language === 'zh'
          ? '让用户先获得可感知价值，再升级到更完整的结构化解读。'
          : 'Let users get immediate value first, then upgrade to deeper structured interpretation.',
      points:
        language === 'zh'
          ? ['Free Bazi Chart', 'Five Elements Profile', 'Compatibility Checker']
          : ['Free Bazi Chart', 'Five Elements Profile', 'Compatibility Checker'],
    },
    {
      title: language === 'zh' ? 'Premium Reports' : 'Premium Reports',
      desc:
        language === 'zh'
          ? '低价报告验证付费意愿，中价深度报告形成核心利润层。'
          : 'Use low-ticket reports to validate demand and mid-tier reports as the core profit layer.',
      points:
        language === 'zh'
          ? ['$19 Basic Report', '$29 Compatibility Report', '$49–$79 Deep Readings']
          : ['$19 Basic Report', '$29 Compatibility Report', '$49–$79 Deep Readings'],
    },
  ];

  return (
    <section id="method" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <span className="px-6 py-2 bg-[#7dd3fc]/10 backdrop-blur-sm border border-[#7dd3fc]/30 rounded-full">
              <span className="text-[#7dd3fc] text-xs tracking-widest uppercase">
                {language === 'zh' ? '网站结构 • 商业闭环' : 'Site Architecture • Business Model'}
              </span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {language === 'zh' ? '这个站应该怎么搭' : 'How This Site Should Be Built'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            {language === 'zh'
              ? '不是单页接单站，而是“内容资产 + 工具产品 + 付费服务”的组合。'
              : 'Not a single-page consultation site, but a combination of content assets, practical tools, and paid services.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card) => {
            const href = card.title === 'Learn / Blog' ? '/learn' : card.title === 'Tools' ? '/tools' : '/reports';
            return (
              <a key={card.title} href={href} className="glass-card rounded-2xl block">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{card.desc}</p>
                <ul className="space-y-3">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start text-gray-300 text-sm">
                      <span className="text-[#7dd3fc] mr-3">✦</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </a>
            );
          })}
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                {language === 'zh' ? '最关键的产品逻辑' : 'The Core Product Logic'}
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  {language === 'zh'
                    ? '不要让大模型直接自由发挥“算命”。正确做法是：规则引擎先算结构，AI 再负责解释。'
                    : 'Do not let the language model improvise the reading. The correct approach is: a rules engine calculates structure first, then AI explains it.'}
                </p>
                <p>
                  {language === 'zh'
                    ? '这样结果才会稳定、一致、可控，也更容易建立国际用户信任。'
                    : 'That keeps the experience stable, consistent, controllable, and much more trustworthy for global users.'}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <p className="text-sm uppercase tracking-widest text-[#7dd3fc] mb-4">
                {language === 'zh' ? '推荐技术栈' : 'Recommended Stack'}
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
                  <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-gray-200">
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
