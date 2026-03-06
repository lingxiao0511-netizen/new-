'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface FiveElementsResult {
  element: string;
  strength: number;
  description: {
    zh: string;
    en: string;
  };
}

interface FortuneResult {
  wuXing: FiveElementsResult[];
  mainElement: {
    zh: string;
    en: string;
  };
  personality: {
    zh: string[];
    en: string[];
  };
  fortune: {
    zh: string;
    en: string;
  };
  advice: {
    zh: string;
    en: string;
  };
}

const FreeFortune: React.FC = () => {
  const { language } = useLanguage();
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [gender, setGender] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<FortuneResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState('');

  // 五行计算（简化版）
  const calculateFiveElements = (date: Date): FiveElementsResult[] => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    // 简化的五行计算逻辑
    const wood = ((day % 5) + 1) * 20;
    const fire = ((month % 5) + 1) * 20;
    const earth = ((year % 5) + 1) * 20;
    const metal = ((day + month) % 5 + 1) * 20;
    const water = 100 - wood - fire - earth - metal;
    
    return [
      {
        element: '木',
        strength: wood,
        description: {
          zh: '木代表生长、创造力、仁慈。木旺的人富有创意，性格温和。',
          en: 'Wood represents growth, creativity, benevolence. People with strong wood are creative and gentle.'
        }
      },
      {
        element: '火',
        strength: fire,
        description: {
          zh: '火代表热情、活力、礼仪。火旺的人热情开朗，善于表达。',
          en: 'Fire represents passion, vitality, etiquette. People with strong fire are enthusiastic and expressive.'
        }
      },
      {
        element: '土',
        strength: earth,
        description: {
          zh: '土代表稳定、诚信、包容。土旺的人踏实可靠，善于包容。',
          en: 'Earth represents stability, honesty, tolerance. People with strong earth are reliable and tolerant.'
        }
      },
      {
        element: '金',
        strength: metal,
        description: {
          zh: '金代表坚毅、果断、正义。金旺的人意志坚定，讲义气。',
          en: 'Metal represents determination, decisiveness, justice. People with strong metal are determined and righteous.'
        }
      },
      {
        element: '水',
        strength: Math.max(0, water),
        description: {
          zh: '水代表智慧、灵活、变通。水旺的人聪明机智，善于应变。',
          en: 'Water represents wisdom, flexibility, adaptability. People with strong water are intelligent and adaptable.'
        }
      }
    ];
  };

  const getMainElement = (elements: FiveElementsResult[]): FiveElementsResult => {
    return elements.reduce((max, current) => 
      current.strength > max.strength ? current : max
    );
  };

  const generateFortune = (date: Date, mainElement: FiveElementsResult): FortuneResult => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    
    const personalities = {
      zh: [
        '你天生具有领导才能，善于组织和规划',
        '你富有创造力，思维活跃，适合艺术创作',
        '你性格温和，善于倾听，是朋友的好倾诉对象',
        '你意志坚定，目标明确，不轻易放弃',
        '你聪明机智，反应快，善于解决问题'
      ],
      en: [
        'You have natural leadership abilities, good at organizing and planning',
        'You are creative with active thinking, suitable for artistic creation',
        'You have a gentle personality, good at listening, a great confidant',
        'You are determined with clear goals, never give up easily',
        'You are intelligent and quick-witted, good at solving problems'
      ]
    };

    const fortunes = {
      zh: [
        '近期运势上扬，事业和财运都有不错的发展机会。把握 3 月的好时机，会有意外收获。',
        '感情运势良好，单身者有机会遇到心仪对象。已有伴侣者关系会更加甜蜜。',
        '健康方面需注意劳逸结合，避免过度劳累。适当运动有助于提升运势。',
        '财运亨通，适合理财投资。但需谨慎决策，避免冲动消费。',
        '事业上有贵人相助，工作中会有新的突破。保持积极心态，机会即将到来。'
      ],
      en: [
        'Fortune is rising, career and wealth have good development opportunities. Seize March\'s timing for unexpected gains.',
        'Relationship luck is good, singles may meet someone special. Couples will have sweeter relationships.',
        'Pay attention to work-rest balance for health. Avoid overwork. Exercise helps improve fortune.',
        'Financial luck is excellent, suitable for investment. But make decisions carefully, avoid impulsive spending.',
        'Helpful people in career, new breakthroughs at work. Stay positive, opportunities are coming.'
      ]
    };

    const advices = {
      zh: [
        '建议佩戴木质饰品增强运势，绿色是你的幸运色。',
        '多参与社交活动，扩大人脉圈会带来好运。',
        '保持耐心，重要的事情适合在下半月进行。',
        '注意财务管理，制定合理的预算计划。',
        '多学习新知识，提升自我会带来新机遇。'
      ],
      en: [
        'Wear wooden accessories to enhance fortune, green is your lucky color.',
        'Participate in social activities, expanding network brings good luck.',
        'Stay patient, important matters are better in the second half of the month.',
        'Pay attention to financial management, create a reasonable budget plan.',
        'Learn new knowledge, self-improvement brings new opportunities.'
      ]
    };

    const mainElementMap: Record<string, { zh: string; en: string }> = {
      '木': { zh: '木', en: 'Wood' },
      '火': { zh: '火', en: 'Fire' },
      '土': { zh: '土', en: 'Earth' },
      '金': { zh: '金', en: 'Metal' },
      '水': { zh: '水', en: 'Water' }
    };

    const personalityIndex = (day + month) % 5;
    const fortuneIndex = day % 5;
    const adviceIndex = month % 5;

    return {
      wuXing: calculateFiveElements(date),
      mainElement: mainElementMap[mainElement.element],
      personality: {
        zh: [personalities.zh[personalityIndex]],
        en: [personalities.en[personalityIndex]]
      },
      fortune: {
        zh: fortunes.zh[fortuneIndex],
        en: fortunes.en[fortuneIndex]
      },
      advice: {
        zh: advices.zh[adviceIndex],
        en: advices.en[adviceIndex]
      }
    };
  };

  const handleCalculate = () => {
    setError('');
    
    if (!birthDate) {
      setError(language === 'zh' ? '请选择出生日期' : 'Please select birth date');
      return;
    }

    if (!gender) {
      setError(language === 'zh' ? '请选择性别' : 'Please select gender');
      return;
    }

    setIsCalculating(true);

    // 模拟计算延迟
    setTimeout(() => {
      const date = new Date(birthDate);
      const elements = calculateFiveElements(date);
      const mainElement = getMainElement(elements);
      const fortune = generateFortune(date, mainElement);
      
      setResult(fortune);
      setIsCalculating(false);
      setShowResult(true);
      
      // 滚动到结果区域
      setTimeout(() => {
        document.getElementById('fortune-result')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }, 1500);
  };

  const handleReset = () => {
    setBirthDate('');
    setBirthTime('');
    setGender('');
    setResult(null);
    setShowResult(false);
    setError('');
  };

  return (
    <section id="free-reading" className="py-24 relative z-10 bg-gradient-to-b from-[#0f3460]/50 to-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-[#7dd3fc]/10 backdrop-blur-sm border border-[#7dd3fc]/30 rounded-full">
              <span className="text-[#7dd3fc] text-xs tracking-widest uppercase">
                {language === 'zh' ? '免费测算 • 限时开放' : 'Free Reading • Limited Time'}
              </span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {language === 'zh' ? '免费五行分析' : 'Free Five Elements Analysis'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {language === 'zh' 
              ? '输入您的出生信息，获取免费的五行分析、性格解读和运势建议。首次测算完全免费！' 
              : 'Enter your birth information to get free five elements analysis, personality reading, and fortune advice. First reading is completely free!'}
          </p>
        </div>

        {/* 测算表单 */}
        {!showResult ? (
          <div className="max-w-2xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                {/* 出生日期 */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    {language === 'zh' ? '出生日期' : 'Birth Date'} *
                  </label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7dd3fc] focus:border-transparent text-white text-lg"
                    max={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* 出生时辰（可选） */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    {language === 'zh' ? '出生时辰' : 'Birth Time'} 
                    <span className="text-gray-500 text-sm ml-2">
                      {language === 'zh' ? '（可选，更精准）' : '(Optional, more accurate)'}
                    </span>
                  </label>
                  <select
                    value={birthTime}
                    onChange={(e) => setBirthTime(e.target.value)}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7dd3fc] focus:border-transparent text-white text-lg"
                  >
                    <option value="">
                      {language === 'zh' ? '请选择时辰' : 'Select time'}
                    </option>
                    <option value="23-1">
                      {language === 'zh' ? '子时 (23:00-01:00)' : 'Zi Hour (23:00-01:00)'}
                    </option>
                    <option value="1-3">
                      {language === 'zh' ? '丑时 (01:00-03:00)' : 'Chou Hour (01:00-03:00)'}
                    </option>
                    <option value="3-5">
                      {language === 'zh' ? '寅时 (03:00-05:00)' : 'Yin Hour (03:00-05:00)'}
                    </option>
                    <option value="5-7">
                      {language === 'zh' ? '卯时 (05:00-07:00)' : 'Mao Hour (05:00-07:00)'}
                    </option>
                    <option value="7-9">
                      {language === 'zh' ? '辰时 (07:00-09:00)' : 'Chen Hour (07:00-09:00)'}
                    </option>
                    <option value="9-11">
                      {language === 'zh' ? '巳时 (09:00-11:00)' : 'Si Hour (09:00-11:00)'}
                    </option>
                    <option value="11-13">
                      {language === 'zh' ? '午时 (11:00-13:00)' : 'Wu Hour (11:00-13:00)'}
                    </option>
                    <option value="13-15">
                      {language === 'zh' ? '未时 (13:00-15:00)' : 'Wei Hour (13:00-15:00)'}
                    </option>
                    <option value="15-17">
                      {language === 'zh' ? '申时 (15:00-17:00)' : 'Shen Hour (15:00-17:00)'}
                    </option>
                    <option value="17-19">
                      {language === 'zh' ? '酉时 (17:00-19:00)' : 'You Hour (17:00-19:00)'}
                    </option>
                    <option value="19-21">
                      {language === 'zh' ? '戌时 (19:00-21:00)' : 'Xu Hour (19:00-21:00)'}
                    </option>
                    <option value="21-23">
                      {language === 'zh' ? '亥时 (21:00-23:00)' : 'Hai Hour (21:00-23:00)'}
                    </option>
                  </select>
                </div>

                {/* 性别 */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    {language === 'zh' ? '性别' : 'Gender'} *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setGender('male')}
                      className={`py-3 px-6 rounded-lg transition-all duration-300 ${
                        gender === 'male'
                          ? 'bg-[#7dd3fc] text-black font-medium'
                          : 'bg-black/30 text-gray-400 hover:bg-black/50'
                      }`}
                    >
                      {language === 'zh' ? '男' : 'Male'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('female')}
                      className={`py-3 px-6 rounded-lg transition-all duration-300 ${
                        gender === 'female'
                          ? 'bg-[#a78bfa] text-black font-medium'
                          : 'bg-black/30 text-gray-400 hover:bg-black/50'
                      }`}
                    >
                      {language === 'zh' ? '女' : 'Female'}
                    </button>
                  </div>
                </div>

                {/* 错误提示 */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-center">
                    {error}
                  </div>
                )}

                {/* 提交按钮 */}
                <button
                  onClick={handleCalculate}
                  disabled={isCalculating}
                  className={`w-full py-4 px-6 rounded-lg transition-all duration-300 font-medium text-lg ${
                    isCalculating
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#7dd3fc] to-[#a78bfa] text-black hover:from-[#a78bfa] hover:to-[#7dd3fc] transform hover:scale-[1.02] shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isCalculating 
                    ? (language === 'zh' ? '正在测算...' : 'Calculating...') 
                    : (language === 'zh' ? '立即免费测算' : 'Calculate Now - Free')}
                </button>

                {/* 说明文字 */}
                <p className="text-gray-500 text-sm text-center">
                  {language === 'zh' 
                    ? '🔒 您的信息严格保密，仅用于本次测算' 
                    : '🔒 Your information is strictly confidential, used only for this reading'}
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* 测算结果 */
          <div id="fortune-result" className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12 mb-8">
              {/* 结果标题 */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">
                  {language === 'zh' ? '您的五行分析结果' : 'Your Five Elements Analysis'}
                </h3>
                <p className="text-gray-400">
                  {language === 'zh' ? '基于您的出生信息推算' : 'Calculated based on your birth information'}
                </p>
              </div>

              {/* 主五行 */}
              {result && (
                <>
                  <div className="text-center mb-12">
                    <div className="inline-block">
                      <div className="text-6xl mb-4">🔮</div>
                      <p className="text-gray-400 mb-2">
                        {language === 'zh' ? '您的主五行为' : 'Your main element is'}
                      </p>
                      <p className="text-5xl font-bold text-[#7dd3fc]">
                        {result.mainElement[language]}
                      </p>
                    </div>
                  </div>

                  {/* 五行强度图表 */}
                  <div className="mb-12">
                    <h4 className="text-xl font-bold text-white mb-6 text-center">
                      {language === 'zh' ? '五行能量分布' : 'Five Elements Energy Distribution'}
                    </h4>
                    <div className="space-y-4">
                      {result.wuXing.map((item, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white font-medium">{item.element}</span>
                            <span className="text-gray-400 text-sm">{item.strength}%</span>
                          </div>
                          <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full transition-all duration-1000 ${
                                item.element === '木' ? 'bg-green-500' :
                                item.element === '火' ? 'bg-red-500' :
                                item.element === '土' ? 'bg-yellow-500' :
                                item.element === '金' ? 'bg-yellow-300' :
                                'bg-blue-500'
                              }`}
                              style={{ width: `${item.strength}%` }}
                            />
                          </div>
                          <p className="text-gray-500 text-xs mt-1">{item.description[language]}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 性格解读 */}
                  <div className="glass-card rounded-xl p-6 mb-8">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="mr-2">✨</span>
                      {language === 'zh' ? '性格特点' : 'Personality Traits'}
                    </h4>
                    <ul className="space-y-2">
                      {result.personality[language].map((item, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <svg className="h-5 w-5 text-[#7dd3fc] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 运势分析 */}
                  <div className="glass-card rounded-xl p-6 mb-8">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="mr-2">📅</span>
                      {language === 'zh' ? '近期运势' : 'Recent Fortune'}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {result.fortune[language]}
                    </p>
                  </div>

                  {/* 开运建议 */}
                  <div className="glass-card rounded-xl p-6 mb-8 bg-[#7dd3fc]/5 border border-[#7dd3fc]/20">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                      <span className="mr-2">💡</span>
                      {language === 'zh' ? '开运建议' : 'Luck Enhancement Advice'}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {result.advice[language]}
                    </p>
                  </div>

                  {/* CTA 按钮 */}
                  <div className="text-center space-y-4">
                    <p className="text-gray-400">
                      {language === 'zh' 
                        ? '想要更详细的解读？获取完整命盘分析' 
                        : 'Want more detailed reading? Get complete chart analysis'}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="#contact"
                        className="btn-primary inline-block"
                      >
                        {language === 'zh' ? '预约大师咨询' : 'Book Master Consultation'}
                      </a>
                      <button
                        onClick={handleReset}
                        className="btn-secondary inline-block"
                      >
                        {language === 'zh' ? '重新测算' : 'Calculate Again'}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* 服务推广 */}
            <div className="glass-card rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-serif font-bold text-white mb-4">
                {language === 'zh' ? '解锁完整命盘解读' : 'Unlock Complete Chart Reading'}
              </h4>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                {language === 'zh' 
                  ? '免费测算仅提供基础分析。预约专业服务，获取完整紫薇斗数命盘、流年运势、事业财运详解。' 
                  : 'Free reading provides basic analysis only. Book professional service for complete Zi Wei Dou Shu chart, annual fortune, career and wealth analysis.'}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <svg className="h-4 w-4 text-[#7dd3fc] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {language === 'zh' ? '完整 14 主星分析' : 'Complete 14 Stars Analysis'}
                </span>
                <span className="flex items-center">
                  <svg className="h-4 w-4 text-[#7dd3fc] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {language === 'zh' ? '12 宫位详解' : '12 Palaces Analysis'}
                </span>
                <span className="flex items-center">
                  <svg className="h-4 w-4 text-[#7dd3fc] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {language === 'zh' ? '流年运势预测' : 'Annual Fortune Prediction'}
                </span>
                <span className="flex items-center">
                  <svg className="h-4 w-4 text-[#7dd3fc] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {language === 'zh' ? 'PDF 详细报告' : 'Detailed PDF Report'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 特性说明 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#7dd3fc]/10 rounded-full flex items-center justify-center">
              <svg className="h-8 w-8 text-[#7dd3fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              {language === 'zh' ? '严格保密' : 'Strictly Confidential'}
            </h4>
            <p className="text-gray-400 text-sm">
              {language === 'zh' ? '信息仅用于测算，用后即删' : 'Information used only for reading, deleted after'}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#7dd3fc]/10 rounded-full flex items-center justify-center">
              <svg className="h-8 w-8 text-[#7dd3fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              {language === 'zh' ? '即时出结果' : 'Instant Results'}
            </h4>
            <p className="text-gray-400 text-sm">
              {language === 'zh' ? '无需等待，立即获取分析' : 'No waiting, get analysis immediately'}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#7dd3fc]/10 rounded-full flex items-center justify-center">
              <svg className="h-8 w-8 text-[#7dd3fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              {language === 'zh' ? '完全免费' : 'Completely Free'}
            </h4>
            <p className="text-gray-400 text-sm">
              {language === 'zh' ? '基础分析永久免费' : 'Basic analysis is permanently free'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeFortune;
