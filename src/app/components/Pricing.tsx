'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Pricing: React.FC = () => {
  const { language } = useLanguage();

  const tiers = [
    {
      name: language === 'zh' ? 'Basic Report' : 'Basic Report',
      price: '$19',
      desc:
        language === 'zh'
          ? '适合第一次想更系统了解自己图表的读者。'
          : 'A good starting point for readers who want a more structured introduction to their chart.',
      features:
        language === 'zh'
          ? ['BaZi 核心结构摘要', '五行平衡解读', '基础个性与建议']
          : ['Core BaZi structure summary', 'Five Elements balance overview', 'Foundational personality insights'],
    },
    {
      name: language === 'zh' ? 'Compatibility Report' : 'Compatibility Report',
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
      name: language === 'zh' ? 'Deep Reading' : 'Deep Reading',
      price: '$49–$79',
      desc:
        language === 'zh'
          ? '适合希望获得更完整、更深入说明的读者。'
          : 'Designed for readers who want a broader and more detailed interpretation.',
      features:
        language === 'zh'
          ? ['完整 BaZi Insight', 'Career / relationship / timing focus', '更完整解释与行动建议']
          : ['Full BaZi insight', 'Career / relationship / timing focus', 'More actionable explanation'],
    },
  ];

  return (
    <section id="reports" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <span className="px-6 py-2 bg-[#7dd3fc]/10 backdrop-blur-sm border border-[#7dd3fc]/30 rounded-full">
              <span className="text-[#7dd3fc] text-xs tracking-widest uppercase">
                {language === 'zh' ? '详细报告' : 'Detailed Reports'}
              </span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {language === 'zh' ? '选择适合你的报告' : 'Choose the report that fits you'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            {language === 'zh'
              ? '如果你已经了解基础内容，这里可以帮助你选择更适合自己问题的解读方式。'
              : 'If you already understand the basics, this section can help you choose the type of reading that fits your question best.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div key={tier.name} className={`glass-card rounded-2xl ${index === 1 ? 'border-t-2 border-t-[#7dd3fc]' : ''}`}>
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-white">{tier.name}</h3>
                <p className="text-4xl text-[#7dd3fc] font-bold mt-4">{tier.price}</p>
                <p className="text-gray-400 mt-4">{tier.desc}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start text-gray-300 text-sm">
                    <span className="text-[#7dd3fc] mr-3">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="/reports" className={index === 1 ? 'btn-primary inline-block w-full text-center' : 'btn-secondary inline-block w-full text-center'}>
                {language === 'zh' ? '查看报告详情' : 'View Report Details'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
