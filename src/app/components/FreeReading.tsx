'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const FreeReading: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthDate: '',
    question: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟API调用
    setTimeout(() => {
      console.log('Free reading form submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      // 重置表单
      setFormData({
        name: '',
        email: '',
        birthDate: '',
        question: '',
      });
      // 5秒后重置成功状态
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <section className="py-20 oriental-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto oriental-card text-center">
            <div className="mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">{language === 'zh' ? '测算请求已提交' : 'Reading Request Submitted'}</h3>
            <p className="text-light-text mb-6">
              {language === 'zh' ? 
                '感谢您的提交！我们的大师将在24小时内通过邮件为您提供详细的测算结果和运势分析。' : 
                'Thank you for your submission! Our master will provide you with detailed calculation results and fortune analysis via email within 24 hours.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#services" 
                className="bg-primary hover:bg-secondary text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                {language === 'zh' ? '浏览更多服务' : 'Browse More Services'}
              </a>
              <a 
                href="#contact" 
                className="border border-primary text-primary hover:bg-primary hover:text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                {language === 'zh' ? '预约专业咨询' : 'Book Professional Consultation'}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 oriental-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-1 bg-secondary bg-opacity-20 text-secondary rounded-full text-sm font-medium">
              {language === 'zh' ? '免费测算 • 精准分析' : 'Free Reading • Accurate Analysis'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">{language === 'zh' ? '免费八字测算' : 'Free Birth Chart Reading'}</h2>
          <p className="text-lg text-light-text max-w-2xl mx-auto">
            {language === 'zh' ? 
              '输入您的出生信息，获取免费的八字分析、五行解读和基本运势预测，了解您的先天禀赋和后天发展趋势。' : 
              'Enter your birth information to get free eight characters analysis, five elements interpretation and basic fortune prediction, and understand your innate endowments and acquired development trends.'
            }
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 表单部分 */}
            <div className="oriental-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-text font-medium mb-2">{language === 'zh' ? '姓名' : 'Name'}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder={language === 'zh' ? '请输入您的姓名' : 'Please enter your name'}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-text font-medium mb-2">{language === 'zh' ? '邮箱' : 'Email'}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder={language === 'zh' ? '请输入您的邮箱' : 'Please enter your email'}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="birthDate" className="block text-text font-medium mb-2">{language === 'zh' ? '出生日期' : 'Date of Birth'}</label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="question" className="block text-text font-medium mb-2">{language === 'zh' ? '您最关心的问题' : 'Your Main Question'}</label>
                  <textarea
                    id="question"
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={language === 'zh' ? '例如：事业发展、感情婚姻、财运健康等' : 'E.g., career development, relationship marriage, wealth health, etc.'}
                  ></textarea>
                </div>
                
                <div className="text-sm text-light-text">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    required 
                    className="mr-2"
                  />
                  <label htmlFor="consent">
                    {language === 'zh' ? 
                      '我同意接收相关的玄学资讯和运势提醒，并承诺保护我的个人隐私。' : 
                      'I agree to receive relevant mysticism information and fortune reminders, and promise to protect my personal privacy.'
                    }
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {language === 'zh' ? '提交中...' : 'Submitting...'}
                    </>
                  ) : (
                    language === 'zh' ? '获取免费测算' : 'Get Free Reading'
                  )}
                </button>
              </form>
            </div>
            
            {/* 右侧说明 */}
            <div>
              <div className="oriental-border rounded-xl overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1555421689-ca7b66d2c868?auto=format&fit=crop&q=80&w=600&h=400" 
                  alt={language === 'zh' ? '八字测算' : 'Birth Chart Reading'} 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-4">{language === 'zh' ? '测算内容' : 'Reading Contents'}</h3>
                  <ul className="space-y-3">
                    {[
                      { zh: '八字格局分析', en: 'Birth Chart Pattern Analysis' },
                      { zh: '五行强弱解读', en: 'Five Elements Strength Analysis' },
                      { zh: '性格特质解析', en: 'Personality Traits Analysis' },
                      { zh: '事业财运趋势', en: 'Career & Wealth Trends' },
                      { zh: '感情婚姻状况', en: 'Relationship & Marriage Status' },
                      { zh: '健康运势提醒', en: 'Health Fortune Reminders' },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-light-text">{item[language]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-secondary bg-opacity-10 rounded-lg">
                  <h4 className="font-medium text-primary mb-2">{language === 'zh' ? '测算说明' : 'Reading Instructions'}</h4>
                  <p className="text-light-text text-sm">
                    {language === 'zh' ? 
                      '本测算基于传统八字命理学原理，仅供参考。如需更详细的运势分析和改运建议，请预约我们的专业咨询服务。' : 
                      'This reading is based on traditional eight characters numerology principles and is for reference only. For more detailed fortune analysis and improvement suggestions, please book our professional consultation services.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeReading;