'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface PricingTier {
  id: string;
  name: {
    zh: string;
    en: string;
  };
  price: {
    zh: string;
    en: string;
  };
  description: {
    zh: string;
    en: string;
  };
  features: {
    zh: string[];
    en: string[];
  };
  cta: {
    zh: string;
    en: string;
  };
  popular?: boolean;
  savings?: {
    zh: string;
    en: string;
  };
}

const PricingCard: React.FC<PricingTier> = ({ name, price, description, features, cta, popular, savings }) => {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`glass-card relative overflow-hidden transition-all duration-700 ${popular ? 'border-t-2 border-t-[#7dd3fc] scale-105' : ''} ${isHovered ? 'shadow-2xl shadow-[#7dd3fc]/20 scale-[1.02]' : 'shadow-lg'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] text-black text-sm font-bold px-6 py-1 rounded-full shadow-lg z-10 breathing">
          {language === 'zh' ? '最受欢迎' : 'Most Popular'}
        </div>
      )}
      
      {savings && (
        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {language === 'zh' ? '立省 ¥200' : 'Save ¥200'}
        </div>
      )}

      <div className="p-8">
        <h3 className="text-2xl font-serif font-bold text-white mb-2">
          {name[language]}
        </h3>
        
        <p className="text-gray-400 text-sm mb-6">
          {description[language]}
        </p>

        <div className="mb-6">
          <span className="text-4xl font-bold text-[#7dd3fc]">{price[language]}</span>
          {popular && (
            <span className="block text-sm text-gray-400 mt-2 line-through">
              {language === 'zh' ? '原价 ¥798' : 'Was ¥798'}
            </span>
          )}
        </div>

        <ul className="space-y-4 mb-8">
          {features[language].map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7dd3fc] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <button className={`w-full py-3 px-6 rounded transition-all duration-300 font-medium transform ${isHovered ? '-translate-y-1' : ''} ${popular ? 'btn-primary shadow-lg hover:shadow-xl' : 'btn-secondary'}`}>
          {cta[language]}
        </button>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pricingTiers: PricingTier[] = [
    {
      id: 'free',
      name: {
        zh: '免费体验',
        en: 'Free Trial'
      },
      price: {
        zh: '¥0',
        en: '¥0'
      },
      description: {
        zh: '适合初次体验，了解基本运势',
        en: 'Perfect for first-time experience, understand basic fortune'
      },
      features: {
        zh: [
          '五行分析',
          '性格解读',
          '基础运势特点',
          '电子邮件报告'
        ],
        en: [
          'Five Elements Analysis',
          'Personality Interpretation',
          'Basic Fortune Characteristics',
          'Email Report'
        ]
      },
      cta: {
        zh: '免费测算',
        en: 'Calculate Now'
      }
    },
    {
      id: 'standard',
      name: {
        zh: '标准服务',
        en: 'Standard Service'
      },
      price: {
        zh: '¥599',
        en: '¥599'
      },
      description: {
        zh: '适合深度了解个人运势，全面分析',
        en: 'In-depth personal fortune analysis, comprehensive'
      },
      features: {
        zh: [
          '完整紫薇斗数命盘',
          '事业财运详解',
          '爱情婚姻分析',
          '健康运势解读',
          '流年运势预测',
          '7 天免费追问',
          'PDF 详细报告'
        ],
        en: [
          'Complete Zi Wei Dou Shu Chart',
          'Career & Wealth Analysis',
          'Love & Marriage Analysis',
          'Health Fortune Reading',
          'Annual Fortune Prediction',
          '7 Days Free Follow-up',
          'Detailed PDF Report'
        ]
      },
      cta: {
        zh: '立即预约',
        en: 'Book Now'
      },
      popular: true,
      savings: {
        zh: '立省 ¥200',
        en: 'Save ¥200'
      }
    },
    {
      id: 'premium',
      name: {
        zh: '专业服务',
        en: 'Premium Service'
      },
      price: {
        zh: '¥1,299',
        en: '¥1,299'
      },
      description: {
        zh: '适合需要全面指导和长期规划',
        en: 'Comprehensive guidance and long-term planning'
      },
      features: {
        zh: [
          '1v1 大师咨询 (60 分钟)',
          '紫薇斗数全盘详解',
          '风水布局方案',
          '全年 12 月运势',
          '视频/语音咨询',
          '咨询录音',
          '30 天免费追问',
          '优先预约权'
        ],
        en: [
          '1v1 Master Consultation (60min)',
          'Complete Zi Wei Dou Shu Analysis',
          'Feng Shui Layout Plan',
          '12-Month Fortune Forecast',
          'Video/Voice Consultation',
          'Consultation Recording',
          '30 Days Free Follow-up',
          'Priority Booking'
        ]
      },
      cta: {
        zh: '联系大师',
        en: 'Contact Master'
      }
    },
    {
      id: 'vip',
      name: {
        zh: '全年会员',
        en: 'Annual Membership'
      },
      price: {
        zh: '¥2,999',
        en: '¥2,999'
      },
      description: {
        zh: '适合长期咨询，全年无忧',
        en: 'Long-term consultation, worry-free year'
      },
      features: {
        zh: [
          '无限次文字咨询',
          '4 次 1v1 咨询 (每次 60 分钟)',
          '每月运势报告',
          '季度运势更新',
          '年度运势详解',
          '风水调整建议',
          '紧急咨询优先',
          '会员专属优惠'
        ],
        en: [
          'Unlimited Text Consultation',
          '4x 1v1 Consultation (60min each)',
          'Monthly Fortune Report',
          'Quarterly Fortune Update',
          'Annual Fortune Analysis',
          'Feng Shui Adjustment Advice',
          'Priority Emergency Consultation',
          'Member Exclusive Discounts'
        ]
      },
      cta: {
        zh: '成为会员',
        en: 'Become Member'
      },
      savings: {
        zh: '立省 ¥1,000',
        en: 'Save ¥1,000'
      }
    }
  ];

  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-8">
            <span className="px-6 py-2 bg-[#7dd3fc]/10 backdrop-blur-sm border border-[#7dd3fc]/30 rounded-full">
              <span className="text-[#7dd3fc] text-xs tracking-widest uppercase">
                {language === 'zh' ? '透明定价 • 超值服务' : 'Transparent Pricing • Great Value'}
              </span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {language === 'zh' ? '服务定价' : 'Pricing'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            {language === 'zh' 
              ? '选择适合您的服务套餐，首次咨询享 5 折优惠' 
              : 'Choose the service package that suits you, 50% off for first consultation'}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} {...tier} />
          ))}
        </div>

        {/* 限时优惠横幅 */}
        <div className={`glass-card rounded-2xl p-8 md:p-12 mb-20 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full text-red-400 text-sm font-bold">
                  {language === 'zh' ? '⏰ 限时优惠' : '⏰ Limited Time Offer'}
                </span>
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-4">
                {language === 'zh' ? '新用户首单 5 折！' : 'New User 50% Off!'}
              </h3>
              <p className="text-lg text-gray-400 mb-6">
                {language === 'zh' 
                  ? '首次咨询所有服务享受 5 折优惠，使用优惠码：FIRST50' 
                  : 'Get 50% off all services for first consultation, use code: FIRST50'}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7dd3fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{language === 'zh' ? '有效期至 2026-03-31' : 'Valid until 2026-03-31'}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7dd3fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{language === 'zh' ? '不可与其他优惠同享' : 'Cannot be combined with other offers'}</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 text-center">
              <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-2xl px-8 py-4 rounded-lg shadow-lg">
                FIRST50
              </div>
            </div>
          </div>
        </div>

        {/* 服务保障 */}
        <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-serif font-bold text-white mb-12">
            {language === 'zh' ? '服务保障' : 'Our Guarantee'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#7dd3fc]/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#7dd3fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {language === 'zh' ? '严格保密' : 'Strict Confidentiality'}
              </h4>
              <p className="text-gray-400 text-sm">
                {language === 'zh' ? '客户信息严格保密，咨询后删除' : 'Client information strictly confidential, deleted after consultation'}
              </p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#7dd3fc]/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#7dd3fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {language === 'zh' ? '20 年经验' : '20 Years Experience'}
              </h4>
              <p className="text-gray-400 text-sm">
                {language === 'zh' ? '灵霄大师 20 年从业经验，10000+ 案例' : 'Master LingXiao with 20 years experience, 10000+ cases'}
              </p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#7dd3fc]/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#7dd3fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {language === 'zh' ? '满意保证' : 'Satisfaction Guaranteed'}
              </h4>
              <p className="text-gray-400 text-sm">
                {language === 'zh' ? '不满意可退款，7 天内免费修改' : 'Refund if not satisfied, free revision within 7 days'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
