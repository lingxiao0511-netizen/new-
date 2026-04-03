'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface CaseProps {
  title: {
    zh: string;
    en: string;
  };
  description: {
    zh: string;
    en: string;
  };
  image: string;
  result: {
    zh: string;
    en: string;
  };
}

const CaseCard: React.FC<CaseProps> = ({ title, description, image, result }) => {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="organics relative overflow-hidden transition-all duration-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? 'translateY(-10px)' : 'translateY(0)', boxShadow: isHovered ? '0 25px 50px -12px rgba(229, 193, 133, 0.25)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}
    >
      <div className="rounded-xl overflow-hidden mb-6 transform transition-all duration-700">
        <div className="relative">
          <img 
            src={image} 
            alt={language === 'zh' ? `灵霄玄学${title.zh}成功案例 - ${result.zh.substring(0, 30)}...` : `${title.en} Success Case - ${result.en.substring(0, 30)}...`}
            className="w-full h-48 object-cover transition-all duration-700"
            style={{ filter: isHovered ? 'grayscale(0%) contrast(100%) brightness(100%)' : 'grayscale(100%) contrast(125%) brightness(90%)' }}
            width={400}
            height={400}
            loading="lazy"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>
      </div>
      <h3 className="text-xl font-serif font-bold text-primary mb-3 transition-colors duration-300" style={{ color: isHovered ? '#5ba4a4' : '#ffffff' }}>
        {title[language]}
      </h3>
      <p className="text-[var\(--light-text\)\] mb-6">{description[language]}</p>
      <div className="bg-gradient-to-br from-[#5ba4a4]/10 to-[#c2704e]/5 p-6 rounded-xl border border-[#5ba4a4]/20 transition-all duration-300" style={{ borderColor: isHovered ? 'rgba(125, 211, 252, 0.4)' : 'rgba(125, 211, 252, 0.2)' }}>
        <h4 className="font-bold text-[#5ba4a4] mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {language === 'zh' ? '调理结果：' : 'Results:'}
        </h4>
        <p className="text-[var\(--light-text\)\]">{result[language]}</p>
      </div>
    </div>
  );
};

const Cases: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cases: CaseProps[] = [
    {
      title: {
        zh: '办公室风水调整',
        en: 'Office Feng Shui Adjustment'
      },
      description: {
        zh: '某公司办公室布局不合理，导致员工士气低落，业绩下滑。通过风水调整，改善了空间气场。',
        en: 'A company had unreasonable office layout, leading to low employee morale and declining performance. Through feng shui adjustment, the spatial energy was improved.'
      },
      image: 'https://images.pexels.com/photos/8100495/pexels-photo-8100495.jpeg?auto=format&fit=crop&q=80&w=400&h=400',
      result: {
        zh: '员工工作积极性提高，团队凝聚力增强，三个月内业绩提升30%。',
        en: 'Employee work enthusiasm increased, team cohesion strengthened, and performance improved by 30% within three months.'
      },
    },
    {
      title: {
        zh: '住宅风水改善',
        en: 'Home Feng Shui Improvement'
      },
      description: {
        zh: '某家庭运势低迷，成员健康问题频发。通过调整住宅风水布局，改善了居住环境。',
        en: 'A family had low fortune and frequent health problems. Through adjusting home feng shui layout, the living environment was improved.'
      },
      image: 'https://images.pexels.com/photos/8100495/pexels-photo-8100495.jpeg?auto=format&fit=crop&q=80&w=400&h=400',
      result: {
        zh: '家庭成员健康状况改善，财运增强，人际关系更加和谐。',
        en: 'Family members\' health improved, financial fortune strengthened, and relationships became more harmonious.'
      },
    },
    {
      title: {
        zh: '命理指导职业规划',
        en: 'Numerology Career Guidance'
      },
      description: {
        zh: '某客户对职业发展感到迷茫，通过命理分析，找到了适合自己的职业方向。',
        en: 'A client was confused about career development. Through numerology analysis, they found a suitable career direction.'
      },
      image: 'https://images.pexels.com/photos/3569284/pexels-photo-3569284.jpeg?auto=format&fit=crop&q=80&w=400&h=400',
      result: {
        zh: '客户成功转型到适合的行业，职业发展顺利，收入大幅增加。',
        en: 'The client successfully transitioned to a suitable industry, career development went smoothly, and income increased significantly.'
      },
    },
    {
      title: {
        zh: '感情问题塔罗指导',
        en: 'Relationship Tarot Guidance'
      },
      description: {
        zh: '某客户面临感情困扰，通过塔罗牌占卜，获得了清晰的指引。',
        en: 'A client faced relationship troubles. Through tarot card reading, they received clear guidance.'
      },
      image: 'https://images.pexels.com/photos/2537652/pexels-photo-2537652.jpeg?auto=format&fit=crop&q=80&w=400&h=400',
      result: {
        zh: '客户明确了感情方向，成功解决了关系中的问题，感情更加稳定。',
        en: 'The client clarified their relationship direction, successfully resolved relationship issues, and the relationship became more stable.'
      },
    },
    {
      title: {
        zh: '水晶疗愈情绪问题',
        en: 'Crystal Healing for Emotional Issues'
      },
      description: {
        zh: '某客户长期情绪低落，通过水晶能量疗愈，改善了心理状态。',
        en: 'A client had long-term low mood. Through crystal energy healing, their mental state improved.'
      },
      image: 'https://images.pexels.com/photos/5639377/pexels-photo-5639377.jpeg?auto=format&fit=crop&q=80&w=400&h=400',
      result: {
        zh: '客户情绪逐渐稳定，自信心增强，生活态度更加积极乐观。',
        en: 'The client\'s mood gradually stabilized, confidence increased, and life attitude became more positive and optimistic.'
      },
    },
    {
      title: {
        zh: '开店择吉日',
        en: 'Auspicious Date for Business Opening'
      },
      description: {
        zh: '某创业者计划开店，通过择吉日服务，选择了最适合的开业时间。',
        en: 'An entrepreneur planned to open a shop. Through auspicious date selection service, the most suitable opening time was chosen.'
      },
      image: 'https://images.pexels.com/photos/1287508/pexels-photo-1287508.jpeg?auto=format&fit=crop&q=80&w=400&h=400',
      result: {
        zh: '店铺开业后生意兴隆，客户络绎不绝，三个月内实现盈利。',
        en: 'The shop had prosperous business after opening, with a steady stream of customers, and achieved profitability within three months.'
      },
    },
  ];

  return (
    <section id="cases" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className={`text-lightenter mb-20 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-8">
            <span className="px-6 py-2 bg-[#5ba4a4]/10 backdrop-blur-sm border border-[#5ba4a4]/30 rounded-full">
              <span className="text-[#5ba4a4] text-xs tracking-widest uppercase">
                {language === 'zh' ? '真实见证 • 成功案例' : 'Real Testimonials • Success Stories'}
              </span>
            </span>
          </div>
          <h2 className="text-primaryxl md:text-5xl font-serif font-bold text-primary mb-6">{language === 'zh' ? '成功案例' : 'Success Cases'}</h2>
          <p className="text-xl text-[var\(--light-text\)\] max-w-3xl mx-auto mb-12">
            {language === 'zh' ? 
              '真实客户案例，展示玄学服务如何帮助人们改善生活和运势' : 
              'Real customer cases showing how mysticism services help people improve their lives and fortune'
            }
          </p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {cases.map((caseItem, index) => (
            <div key={index} className={`transition-all duration-500`} style={{ transitionDelay: `${index * 100}ms` }}>
              <CaseCard 
                title={caseItem.title} 
                description={caseItem.description} 
                image={caseItem.image} 
                result={caseItem.result} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
