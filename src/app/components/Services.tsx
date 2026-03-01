'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ServiceProps {
  id: string;
  title: {
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
  image: string;
  price: string;
  duration: string;
  popular?: boolean;
}

const ServiceCard: React.FC<ServiceProps> = ({ id, title, description, features, image, price, duration, popular }) => {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`glass-card relative overflow-hidden transition-all duration-700 ${popular ? 'border-t-2 border-t-[#7dd3fc]' : ''} ${isHovered ? 'shadow-2xl shadow-[#7dd3fc]/20 scale-[1.02]' : 'shadow-lg'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] text-black text-sm font-bold px-6 py-1 rounded-full shadow-lg z-10 breathing">
          {language === 'zh' ? '热门推荐' : 'Popular'}
        </div>
      )}
      <div className={`rounded-xl overflow-hidden mb-6 transform transition-all duration-700 ${isHovered ? 'scale-105' : ''}`}>
        <div className="relative">
          <img 
            src={image} 
            alt={language === 'zh' ? `灵霄玄学${title.zh}服务 - 专业${title.zh.replace('咨询', '').replace('分析', '')}，${price}起` : `${title.en} Service - Professional ${title.en.replace(' Consultation', '').replace(' Analysis', '')} from ${price}`}
            className="w-full h-56 object-cover transition-all duration-700 grayscale contrast-125 brightness-90"
            style={{ filter: isHovered ? 'grayscale(0%) contrast(100%) brightness(100%)' : 'grayscale(100%) contrast(125%) brightness(90%)' }}
            width={400}
            height={400}
            loading="lazy"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>
      </div>
      <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3 transition-colors duration-300" style={{ color: isHovered ? '#7dd3fc' : '#ffffff' }}>
        {title[language]}
      </h3>
      <p className="text-gray-400 mb-6 line-clamp-3">{description[language]}</p>
      <div className="mb-6">
        <h4 className="font-medium text-[#7dd3fc] mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {language === 'zh' ? '服务内容：' : 'Service Includes:'}
        </h4>
        <ul className="space-y-3">
          {features[language].map((feature, index) => (
            <li key={index} className="flex items-start transform transition-all duration-300" style={{ transform: isHovered ? 'translateX(5px)' : 'translateX(0)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7dd3fc] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-400 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col space-y-4 mb-6">
        <div className="flex justify-between items-center p-3 bg-[#7dd3fc]/5 rounded-lg border border-[#7dd3fc]/10">
          <span className="text-sm text-gray-400">{language === 'zh' ? '服务时长：' : 'Duration:'}</span>
          <span className="font-medium text-white">{duration}</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-[#7dd3fc]/10 rounded-lg border border-[#7dd3fc]/20">
          <span className="text-sm text-gray-400">{language === 'zh' ? '价格：' : 'Price:'}</span>
          <span className="text-2xl font-bold text-[#7dd3fc]">{price}</span>
        </div>
      </div>
      <button className={`w-full py-3 px-6 rounded transition-all duration-300 font-medium transform ${isHovered ? '-translate-y-1' : ''} ${popular ? 'btn-primary shadow-lg hover:shadow-xl' : 'btn-secondary'}`}>
        {language === 'zh' ? '立即预约' : 'Book Now'}
      </button>
    </div>
  );
};

const Services: React.FC = () => {
  const { language } = useLanguage();
  const [services, setServices] = useState<ServiceProps[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setServices([
      {
        id: 'fengshui',
        title: {
          zh: '风水布局咨询',
          en: 'Feng Shui Consultation'
        },
        description: {
          zh: '专业风水师为您的住宅或办公空间提供详细布局建议，改善气场，提升运势。',
          en: 'Professional feng shui master provides detailed layout suggestions for your home or office space to improve energy flow and enhance fortune.'
        },
        features: {
          zh: [
            '现场勘测或线上分析',
            '详细的风水报告',
            '针对性布局建议',
            '1个月免费咨询跟进'
          ],
          en: [
            'On-site survey or online analysis',
            'Detailed feng shui report',
            'Targeted layout suggestions',
            '1 month free follow-up consultation'
          ]
        },
        image: 'https://images.unsplash.com/photo-1600080972464-98643bb7d053?auto=format&fit=crop&q=80&w=400&h=400',
        price: '$99',
        duration: language === 'zh' ? '60-90分钟' : '60-90 minutes',
        popular: true
      },
      {
        id: 'mingli',
        title: {
          zh: '事业财运详解',
          en: 'Career & Wealth Analysis'
        },
        description: {
          zh: '基于生辰八字，为您详细分析事业发展趋势、财运状况，提供针对性建议。',
          en: 'Based on your birth chart, we provide detailed analysis of career development trends, wealth status, and targeted suggestions.'
        },
        features: {
          zh: [
            '生辰八字详批',
            '事业发展分析',
            '财运趋势预测',
            '改运建议方案',
            '3个月免费咨询'
          ],
          en: [
            'Detailed birth chart analysis',
            'Career development analysis',
            'Wealth trend prediction',
            'Fortune improvement plan',
            '3 months free consultation'
          ]
        },
        image: 'https://images.unsplash.com/photo-1541783203917-83f7f0a63f8c?auto=format&fit=crop&q=80&w=400&h=400',
        price: '$149',
        duration: language === 'zh' ? '90-120分钟' : '90-120 minutes'
      },
      {
        id: 'tarot',
        title: {
          zh: '塔罗牌占卜',
          en: 'Tarot Card Reading'
        },
        description: {
          zh: '通过塔罗牌为您提供生活、事业、感情等方面的详细指引和建议。',
          en: 'Provide detailed guidance and advice on life, career, relationships and other aspects through tarot card reading.'
        },
        features: {
          zh: [
            '专项问题占卜',
            '多牌阵综合分析',
            '详细解读报告',
            '行动建议方案',
            '1个月免费咨询'
          ],
          en: [
            'Special issue divination',
            'Multi-spread comprehensive analysis',
            'Detailed interpretation report',
            'Action recommendation plan',
            '1 month free consultation'
          ]
        },
        image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80&w=400&h=400',
        price: '$79',
        duration: language === 'zh' ? '60分钟' : '60 minutes'
      },
      {
        id: 'relationship',
        title: {
          zh: '情感合盘分析',
          en: 'Relationship Compatibility Analysis'
        },
        description: {
          zh: '分析双方八字或塔罗牌合盘，评估契合度，预测发展趋势，提供相处建议。',
          en: 'Analyze both parties\' birth charts or tarot card compatibility, evaluate compatibility, predict development trends, and provide relationship advice.'
        },
        features: {
          zh: [
            '双方八字合盘',
            '契合度详细分析',
            '发展趋势预测',
            '相处建议方案',
            '2个月免费咨询'
          ],
          en: [
            'Both parties\' birth chart compatibility',
            'Detailed compatibility analysis',
            'Development trend prediction',
            'Relationship advice plan',
            '2 months free consultation'
          ]
        },
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400&h=400',
        price: '$129',
        duration: language === 'zh' ? '90分钟' : '90 minutes',
        popular: true
      },
      {
        id: 'crystal',
        title: {
          zh: '水晶能量疗愈',
          en: 'Crystal Energy Healing'
        },
        description: {
          zh: '利用天然水晶的能量，为您平衡身心，消除负面能量，提升整体运势。',
          en: 'Use the energy of natural crystals to balance your body and mind, eliminate negative energy, and enhance overall fortune.'
        },
        features: {
          zh: [
            '个人能量检测',
            '定制水晶方案',
            '远程能量疗愈',
            '水晶选择建议',
            '1个月免费跟进'
          ],
          en: [
            'Personal energy detection',
            'Custom crystal plan',
            'Remote energy healing',
            'Crystal selection advice',
            '1 month free follow-up'
          ]
        },
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400&h=400',
        price: '$89',
        duration: language === 'zh' ? '60分钟' : '60 minutes'
      },
      {
        id: 'date',
        title: {
          zh: '择吉日',
          en: 'Auspicious Date Selection'
        },
        description: {
          zh: '为重要事件（如婚礼、开业、搬家等）选择最适合的吉祥日期，提升成功率。',
          en: 'Select the most suitable auspicious dates for important events such as weddings, business openings, moving, etc. to enhance success rate.'
        },
        features: {
          zh: [
            '多事件类型选择',
            '详细吉日分析',
            '最佳时间推荐',
            '风水注意事项',
            '终身有效方案'
          ],
          en: [
            'Multiple event type options',
            'Detailed auspicious date analysis',
            'Best time recommendation',
            'Feng shui precautions',
            'Lifetime valid plan'
          ]
        },
        image: 'https://images.unsplash.com/photo-1616744619440-e030a88b89d8?auto=format&fit=crop&q=80&w=400&h=400',
        price: '$49',
        duration: language === 'zh' ? '24小时内完成' : 'Completed within 24 hours'
      },
    ]);
  }, [language]);

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-8">
            <span className="px-6 py-2 bg-[#7dd3fc]/10 backdrop-blur-sm border border-[#7dd3fc]/30 rounded-full">
              <span className="text-[#7dd3fc] text-xs tracking-widest uppercase">
                {language === 'zh' ? '专业服务 • 精准预测' : 'Professional Services • Accurate Prediction'}
              </span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{language === 'zh' ? '我们的服务' : 'Our Services'}</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            {language === 'zh' ? '提供专业的玄学服务，帮助您在各个方面获得指引和支持' : 'Provide professional mysticism services to help you gain guidance and support in all aspects'}
          </p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {services.map((service, index) => (
            <div key={service.id} className={`transition-all duration-500`}>
              <ServiceCard 
                id={service.id} 
                title={service.title} 
                description={service.description} 
                features={service.features} 
                image={service.image} 
                price={service.price} 
                duration={service.duration} 
                popular={service.popular} 
              />
            </div>
          ))}
        </div>
        
        <div className={`mt-24 glass-card rounded-2xl p-8 md:p-12 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-2/3">
              <h3 className="text-3xl font-serif font-bold text-white mb-6">{language === 'zh' ? '免费测算' : 'Free Reading'}</h3>
              <p className="text-lg text-gray-400 mb-8 max-w-xl">
                {language === 'zh' ? 
                  '输入您的出生日期，获取免费的五行分析和性格解读，了解您的基本运势特点。' : 
                  'Enter your birth date to get free five elements analysis and personality interpretation, and understand your basic fortune characteristics.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <input 
                  type="date" 
                  className="px-6 py-3 bg-black/30 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#7dd3fc] focus:border-transparent flex-grow text-lg text-white"
                  placeholder={language === 'zh' ? '选择出生日期' : 'Select birth date'}
                />
                <button className="btn-primary whitespace-nowrap">
                  {language === 'zh' ? '立即测算' : 'Calculate Now'}
                </button>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="rounded-xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1555421689-ca7b66d2c868?auto=format&fit=crop&q=80&w=400&h=400" 
                  alt={language === 'zh' ? '灵霄玄学免费测算 - 输入出生日期获取五行分析和性格解读，了解基本运势特点' : 'LingXiao Mysticism Free Reading - Enter Birth Date to Get Five Elements Analysis and Personality Interpretation'} 
                  className="w-full h-auto grayscale contrast-125 brightness-90"
                  width={400}
                  height={400}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
