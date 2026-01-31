'use client';

import React from 'react';
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

  return (
    <div className="oriental-card">
      <div className="oriental-border rounded-lg overflow-hidden mb-4">
        <img src={image} alt={title[language]} className="w-full h-48 object-cover" />
      </div>
      <h3 className="text-xl font-serif font-bold text-primary mb-2">{title[language]}</h3>
      <p className="text-text mb-4">{description[language]}</p>
      <div className="bg-secondary bg-opacity-10 p-3 rounded-lg">
        <h4 className="font-bold text-secondary mb-1">{language === 'zh' ? '调理结果：' : 'Results:'}</h4>
        <p className="text-text">{result[language]}</p>
      </div>
    </div>
  );
};

const Cases: React.FC = () => {
  const { language } = useLanguage();

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
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20office%20space%20with%20feng%20shui%20elements%2C%20plants%2C%20harmonious%20layout%2C%20professional%20atmosphere&image_size=square',
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
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=harmonious%20home%20interior%20with%20feng%20shui%20elements%2C%20plants%2C%20natural%20light%2C%20peaceful%20atmosphere&image_size=square',
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
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=person%20analyzing%20career%20options%2C%20professional%20setting%2C%20chinese%20astrology%20elements%2C%20mystical%20atmosphere&image_size=square',
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
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tarot%20cards%20spread%20for%20relationship%20advice%2C%20mystical%20lighting%2C%20emotional%20atmosphere%2C%20oriental%20elements&image_size=square',
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
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=person%20receiving%20crystal%20healing%2C%20crystals%20arranged%20around%2C%20peaceful%20atmosphere%2C%20soft%20lighting&image_size=square',
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
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=new%20business%20opening%20ceremony%2C%20traditional%20chinese%20elements%2C%20red%20decorations%2C%20lucky%20symbols%2C%20joyful%20atmosphere&image_size=square',
      result: {
        zh: '店铺开业后生意兴隆，客户络绎不绝，三个月内实现盈利。',
        en: 'The shop had prosperous business after opening, with a steady stream of customers, and achieved profitability within three months.'
      },
    },
  ];

  return (
    <section id="cases" className="py-20 oriental-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            {language === 'zh' ? '成功案例' : 'Success Cases'}
          </h2>
          <p className="text-lg text-text max-w-2xl mx-auto">
            {language === 'zh' ? 
              '真实客户案例，展示玄学服务如何帮助人们改善生活和运势' : 
              'Real customer cases showing how mysticism services help people improve their lives and fortune'
            }
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <CaseCard 
              key={index} 
              title={caseItem.title} 
              description={caseItem.description} 
              image={caseItem.image} 
              result={caseItem.result} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
