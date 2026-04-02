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
          ? '用于验证付费意愿的轻量报告。'
          : 'A low-ticket report designed to validate willingness to pay.',
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
          ? '适合传播与分享，也是最自然的升级产品之一。'
          : 'Shareable, interactive, and one of the most natural upgrade products.',
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
          ? '中价深度产品，最有希望成为核心利润层。'
          : 'A mid-tier deep product likely to become the main profit layer.',
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
                {language === 'zh' ? '付费产品 • 验证变现' : 'Paid Products • Monetization Layer'}
              </span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {language === 'zh' ? '第一版报告产品' : 'Phase-One Reports'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            {language === 'zh'
              ? '不建议一开始做太复杂套餐。先用 3 个产品验证点击、下单和复购。'
              : 'Do not overbuild pricing at the start. Use three focused products to validate clicks, purchases, and repeat demand.'}
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
