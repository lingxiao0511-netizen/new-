'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Pricing: React.FC = () => {
  const { language } = useLanguage();

  const tiers = [
    {
      name: language === 'zh' ? '基础解读' : 'Basic Reading',
      price: '$19',
      desc:
        language === 'zh'
          ? '适合第一次想更系统了解自己图表的人。'
          : 'A good starting point for readers who want a more structured introduction to their chart.',
      features:
        language === 'zh'
          ? ['BaZi 结构解析', '五行强弱分析', '年度运势简述', '基础建议']
          : ['BaZi chart structure', 'Five Elements strength analysis', 'Annual trends overview', 'Basic advice'],
    },
    {
      name: language === 'zh' ? '关系解读' : 'Relationship Reading',
      price: '$29',
      desc:
        language === 'zh'
          ? '适合想从两个人关系角度来理解图表的人。'
          : 'A useful option when your question centers on two people and their relationship patterns.',
      features:
        language === 'zh'
          ? ['双人结构匹配', '强项与摩擦点', '关系趋势参考']
          : ['Two-chart compatibility view', 'Strengths and friction points', 'Relationship trend guidance'],
    },
    {
      name: language === 'zh' ? '深度解读' : 'Deep Reading',
      price: '$49',
      desc:
        language === 'zh'
          ? '适合想获得更全面、更深入的解读的人。'
          : 'A good option if you want a more comprehensive and detailed reading.',
      features:
        language === 'zh'
          ? ['完整命盘分析', '五行流年解读', '个性化建议', '进阶技巧']
          : ['Full chart analysis', 'Five Elements annual trends', 'Personalized advice', 'Advanced techniques'],
    },
  ];

  return (
    <section id="pricing" className="py-24 relative z-10 bg-gradient-to-b from-[#0f3460]/50 to-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-8">
            <span className="px-6 py-2 bg-[#5ba4a4]/10 backdrop-blur-sm border border-[#5ba4a4]/30 rounded-full">
              <span className="text-[#5ba4a4] text-xs tracking-widest uppercase">
                {language === 'zh' ? '价格方案' : 'Pricing Plans'}
              </span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {language === 'zh' ? '选择适合你的方案' : 'Choose Your Plan'}
          </h2>
          <p className="text-xl text-[#c8c0b6] max-w-3xl mx-auto">
            {language === 'zh'
              ? '每个方案都包含基础分析，不同层级提供不同深度和个性化程度的解读。'
              : 'Each plan includes basic analysis, with different levels of depth and personalization.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div key={tier.name} className="organics rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif font-bold text-white">{tier.name}</h3>
                <span className="text-2xl font-bold text-[#5ba4a4]">{tier.price}</span>
              </div>
              <p className="text-[#c8c0b6] mb-6 leading-relaxed">{tier.desc}</p>
              <ul className="space-y-3 text-[#c8c0b6] text-sm leading-relaxed">
                {tier.features.map((feature) => (
                  <li key={feature}><span className="text-[#5ba4a4] mr-2">■</span>{feature}</li>
                ))}
              </ul>
              <button className="mt-8 w-full py-3 rounded-lg bg-gradient-to-r from-[#5ba4a4] to-[#c2704e] text-black font-semibold hover:from-[#c2704e] hover:to-[#5ba4a4] transition-all">
                {language === 'zh' ? '选择此方案' : 'Choose This Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
