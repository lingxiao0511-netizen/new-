'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const DailyFortune: React.FC = () => {
  const { language } = useLanguage();
  const [fortune, setFortune] = useState('');

  const fortunes = {
    zh: [
      '���ղ��˺�ͨ���ʺ����Ͷ�ʡ����ֻ�����̬�����˼���������',
      '������������ʺϱ�׺�Լ�ᡣ���Ĺ�ͨ����ϵ������һ����',
      '��ҵ����˳�����������й���������ץס���ᣬչ�����������',
      '�����������ã��ʺ��˶���������ע�����ݽ�ϣ����ֳ��澫����',
      '�����˳��У��ʺ����κͳ�����ֿ�����̬�����������ջ�',
      'ѧϰ���Ƽ��ѣ��ʺϿ��Ժͽ��ޡ�רע��ǿ��ѧϰЧ�ʺܸߡ�'
    ],
    en: [
      'Great financial luck today, suitable for investment. Stay positive, good luck is coming.',
      'Relationship luck is rising, perfect for confession and dates. Communicate with heart, relationship will progress.',
      'Career luck is smooth, there will be helpful people at work. Seize opportunities and show your abilities.',
      'Health luck is good, suitable for exercise and wellness. Pay attention to work-rest balance, maintain energy.',
      'Good day for travel, business trips. Keep an open mind, there will be unexpected gains.',
      'Excellent study luck, perfect for exams and learning. Strong focus, high learning efficiency.'
    ]
  };

  useEffect(() => {
    const today = new Date().getDay();
    setFortune(fortunes[language][today % fortunes[language].length]);
  }, [language]);

  return (
    <section id="daily-fortune" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-[#5ba4a4]/10 backdrop-blur-sm border border-[#5ba4a4]/30 rounded-full">
              <span className="text-[#5ba4a4] text-xs tracking-widest uppercase">
                {language === 'zh' ? '��������' : 'Daily Fortune'}
              </span>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            {language === 'zh' ? '��Ľ���ָ��' : 'Your Daily Guidance'}
          </h2>
          <p className="text-[#c8c0b6] max-w-2xl mx-auto">
            {language === 'zh' ? '���ڽ�������Ϊ���ṩר������ָ��' : 'Based on today\'s astrology, providing you with exclusive fortune guidance'}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="organics rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="text-[#5ba4a4] opacity-10 absolute -right-8 -bottom-8 text-[150px] font-serif">
              {language === 'zh' ? '��' : '??'}
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-[#5ba4a4]/20 to-[#c2704e]/20 rounded-full flex items-center justify-center breathing border border-[#5ba4a4]/30">
                <span className="text-4xl">?</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl md:text-2xl text-[#c8c0b6] leading-relaxed font-serif">
                "{fortune}"
              </p>
            </div>

            <div className="mt-10 text-center">
              <a href="#contact" className="btn-secondary inline-block">
                {language === 'zh' ? '��ȡ��ϸ���' : 'Get Detailed Reading'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyFortune;


