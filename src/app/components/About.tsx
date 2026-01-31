'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* 关于我们 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">{language === 'zh' ? '关于灵霄玄学' : 'About LingXiao Mysticism'}</h2>
          <p className="text-lg text-light-text max-w-2xl mx-auto">
            {language === 'zh' ? '传承千年智慧，融合现代需求，为您提供专业、精准的玄学咨询服务' : 'Inheriting ancient wisdom, integrating modern needs, providing professional and accurate mystical consultation services'}
          </p>
        </div>

        {/* 大师介绍 */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/3">
            <div className="oriental-border rounded-xl overflow-hidden">
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20chinese%20mystic%20master%2C%20traditional%20chinese%20clothing%2C%20wise%20expression%2C%20soft%20golden%20lighting%2C%20professional%20portrait%2C%20high%20quality%20photography&image_size=square" 
                alt={language === 'zh' ? '灵霄大师' : 'Master LingXiao'}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">{language === 'zh' ? '灵霄大师 | Master LingXiao' : 'Master LingXiao'}</h3>
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-secondary bg-opacity-20 text-secondary rounded-full text-sm">{language === 'zh' ? '20年经验' : '20 Years Experience'}</span>
                <span className="px-3 py-1 bg-secondary bg-opacity-20 text-secondary rounded-full text-sm">{language === 'zh' ? '祖传秘法' : 'Ancestral Secrets'}</span>
                <span className="px-3 py-1 bg-secondary bg-opacity-20 text-secondary rounded-full text-sm">{language === 'zh' ? '易经大师' : 'I Ching Master'}</span>
                <span className="px-3 py-1 bg-secondary bg-opacity-20 text-secondary rounded-full text-sm">{language === 'zh' ? '风水专家' : 'Feng Shui Expert'}</span>
              </div>
            </div>
            <p className="text-light-text mb-6 leading-relaxed">
              {language === 'zh' ? 
                '灵霄大师出身玄学世家，自幼研习易经、风水、命理等传统玄学，师承多位名师，融合各家之长，形成独特的预测体系。20年来，已为万余名客户提供专业咨询，帮助他们趋吉避凶，开启好运人生。\n\n大师秉承「道法自然，以人为本」的理念，坚持「诚心、专业、保密」的服务原则，以慈悲之心，智慧之眼，为每一位有缘人指引方向。' : 
                'Master LingXiao comes from a mystical family, studying I Ching, feng shui, numerology and other traditional mysticism since childhood. He has learned from many famous masters, integrating the strengths of various schools to form a unique prediction system. Over the past 20 years, he has provided professional consultation to tens of thousands of clients, helping them avoid misfortune and start a lucky life.\n\nAdhering to the concept of "Tao follows nature, people-oriented", Master LingXiao insists on the service principle of "sincerity, professionalism, and confidentiality", guiding every destined person with a compassionate heart and wise eyes.'
              }
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-primary hover:bg-secondary text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center">
                {language === 'zh' ? '预约咨询' : 'Book Consultation'}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 客户评价 */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-primary mb-8 text-center">{language === 'zh' ? '客户见证' : 'Client Testimonials'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 评价 1 */}
            <div className="oriental-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=asian%20businessman%20portrait%2C%20professional%20headshot%2C%20confident%20expression&image_size=square" 
                    alt="Client 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-primary">张先生</h4>
                  <p className="text-sm text-light-text">{language === 'zh' ? '企业高管' : 'Business Executive'}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-light-text italic">
                {language === 'zh' ? 
                  '大师的风水布局建议非常专业，调整办公室布局后，公司业绩在三个月内提升了30%，团队氛围也变得更加和谐。非常感谢！' : 
                  "Master's feng shui layout suggestions are very professional. After adjusting the office layout, the company's performance increased by 30% within three months, and the team atmosphere became more harmonious. Thank you very much!"
                }
              </p>
            </div>

            {/* 评价 2 */}
            <div className="oriental-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=asian%20woman%20portrait%2C%20professional%20headshot%2C%20warm%20smile&image_size=square" 
                    alt="Client 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-primary">李女士</h4>
                  <p className="text-sm text-light-text">{language === 'zh' ? '市场营销' : 'Marketing Professional'}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-light-text italic">
                {language === 'zh' ? 
                  '感情一直不顺，经朋友介绍找到灵霄大师。大师的命理分析非常准确，指出了问题所在，并给出了针对性建议。现在我已经找到了合适的伴侣，感情生活很幸福。' : 
                  "I've always had bad luck in relationships. A friend introduced me to Master LingXiao. The master's numerology analysis was very accurate, pointing out the problem and giving targeted suggestions. Now I've found the right partner and my relationship life is very happy."
                }
              </p>
            </div>

            {/* 评价 3 */}
            <div className="oriental-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=middle%20aged%20asian%20man%20portrait%2C%20professional%20headshot%2C%20serious%20expression&image_size=square" 
                    alt="Client 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-primary">王先生</h4>
                  <p className="text-sm text-light-text">{language === 'zh' ? '创业者' : 'Entrepreneur'}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-light-text italic">
                {language === 'zh' ? 
                  '开店前找大师看了风水，选了吉日。开业后生意一直很兴隆，不到半年就收回了成本。大师的建议非常灵验，推荐给所有想创业的朋友！' : 
                  "I consulted the master about feng shui and chose an auspicious date before opening my store. Business has been booming since opening, and I recovered my costs in less than half a year. The master's advice is very effective, recommended to all friends who want to start a business!"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;