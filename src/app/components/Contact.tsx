'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    alert(language === 'zh' ? '咨询提交成功，我们会尽快与您联系！' : 'Consultation submitted successfully, we will contact you soon!');
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            {language === 'zh' ? '联系我们' : 'Contact Us'}
          </h2>
          <div className="w-12 h-0.5 bg-[#5ba4a4] mx-auto opacity-50"></div>
          <p className="text-lg text-[#c8c0b6] max-w-2xl mx-auto mt-4">
            {language === 'zh' ? '如有任何问题或需求，欢迎随时咨询我们' : 'If you have any questions or needs, please feel free to consult us at any time'}
          </p>
        </div>
        <div className="max-w-3xl mx-auto organics">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[#c8c0b6] font-medium mb-2">
                  {language === 'zh' ? '姓名' : 'Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={language === 'zh' ? '请输入您的姓名' : 'Please enter your name'}
                  className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded focus:outline-none focus:border-[#5ba4a4] transition-colors text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#c8c0b6] font-medium mb-2">
                  {language === 'zh' ? '邮箱' : 'Email'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={language === 'zh' ? '请输入您的邮箱' : 'Please enter your email'}
                  className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded focus:outline-none focus:border-[#5ba4a4] transition-colors text-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-[#c8c0b6] font-medium mb-2">
                  {language === 'zh' ? '电话' : 'Phone'}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder={language === 'zh' ? '请输入您的电话' : 'Please enter your phone number'}
                  className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded focus:outline-none focus:border-[#5ba4a4] transition-colors text-white"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-[#c8c0b6] font-medium mb-2">
                  {language === 'zh' ? '咨询服务' : 'Consultation Service'}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded focus:outline-none focus:border-[#5ba4a4] transition-colors text-white"
                >
                  <option value="">
                    {language === 'zh' ? '请选择服务类型' : 'Please select service type'}
                  </option>
                  <option value="fengshui">
                    {language === 'zh' ? '风水布局咨询' : 'Feng Shui Consultation'}
                  </option>
                  <option value="mingli">
                    {language === 'zh' ? '命理分析' : 'Numerology Analysis'}
                  </option>
                  <option value="tarot">
                    {language === 'zh' ? '塔罗牌占卜' : 'Tarot Card Reading'}
                  </option>
                  <option value="crystal">
                    {language === 'zh' ? '水晶能量疗愈' : 'Crystal Energy Healing'}
                  </option>
                  <option value="name">
                    {language === 'zh' ? '姓名分析' : 'Name Analysis'}
                  </option>
                  <option value="date">
                    {language === 'zh' ? '择吉日' : 'Auspicious Date Selection'}
                  </option>
                  <option value="other">
                    {language === 'zh' ? '其他咨询' : 'Other Consultation'}
                  </option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-[#c8c0b6] font-medium mb-2">
                {language === 'zh' ? '咨询内容' : 'Consultation Content'}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={language === 'zh' ? '请详细描述您的问题或需求' : 'Please describe your question or need in detail'}
                rows={5}
                className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded focus:outline-none focus:border-[#e5c185] transition-colors text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full btn-primary"
            >
              {language === 'zh' ? '提交咨询' : 'Submit Consultation'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
