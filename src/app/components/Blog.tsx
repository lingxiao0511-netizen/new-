'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface BlogPostProps {
  title: {
    zh: string;
    en: string;
  };
  excerpt: {
    zh: string;
    en: string;
  };
  image: string;
  date: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, image, date }) => {
  const { language } = useLanguage();

  return (
    <div className="oriental-card">
      <div className="oriental-border rounded-lg overflow-hidden mb-4">
        <img src={image} alt={title[language]} className="w-full h-48 object-cover" />
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {date}
      </div>
      <h3 className="text-xl font-serif font-bold text-primary mb-2">{title[language]}</h3>
      <p className="text-text mb-4">{excerpt[language]}</p>
      <a href="#" className="text-primary hover:text-secondary font-medium transition-colors flex items-center">
        {language === 'zh' ? '阅读更多' : 'Read More'}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
};

const Blog: React.FC = () => {
  const { language } = useLanguage();

  const blogPosts: BlogPostProps[] = [
    {
      title: {
        zh: '风水基础知识：如何判断住宅气场',
        en: 'Feng Shui Basics: How to Judge Home Energy'
      },
      excerpt: {
        zh: '了解风水的基本原理，学会观察住宅的气场状态，为自己和家人创造更和谐的居住环境。',
        en: 'Understand the basic principles of feng shui, learn to observe the energy state of your home, and create a more harmonious living environment for yourself and your family.'
      },
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=feng%20shui%20basics%20concept%2C%20compass%2C%20energy%20flow%2C%20traditional%20chinese%20elements%2C%20educational%20atmosphere&image_size=square',
      date: '2026-01-15',
    },
    {
      title: {
        zh: '命理分析入门：生辰八字的奥秘',
        en: 'Introduction to Numerology: The Mystery of Birth Chart'
      },
      excerpt: {
        zh: '探索生辰八字的构成和意义，了解如何通过命理分析获得人生指引。',
        en: 'Explore the composition and meaning of birth chart, and learn how to gain life guidance through numerology analysis.'
      },
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20astrology%20birth%20chart%2C%20eight%20characters%2C%20traditional%20chinese%20calendar%2C%20mystical%20atmosphere&image_size=square',
      date: '2026-01-10',
    },
    {
      title: {
        zh: '塔罗牌与东方玄学的结合应用',
        en: 'Combining Tarot Cards with Oriental Mysticism'
      },
      excerpt: {
        zh: '了解塔罗牌的基本原理，以及如何将其与东方玄学相结合，获得更全面的人生指引。',
        en: 'Understand the basic principles of tarot cards and how to combine them with oriental mysticism to gain more comprehensive life guidance.'
      },
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tarot%20cards%20with%20oriental%20elements%2C%20fusion%20of%20western%20and%20eastern%20mysticism%2C%20mystical%20atmosphere&image_size=square',
      date: '2026-01-05',
    },
    {
      title: {
        zh: '水晶能量的科学与玄学解读',
        en: 'Scientific and Mystical Interpretation of Crystal Energy'
      },
      excerpt: {
        zh: '探索水晶的物理特性和能量属性，了解如何利用水晶的能量改善生活。',
        en: 'Explore the physical properties and energy attributes of crystals, and learn how to use crystal energy to improve your life.'
      },
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=crystals%20collection%2C%20energy%20vibration%2C%20scientific%20and%20mystical%20elements%2C%20educational%20atmosphere&image_size=square',
      date: '2025-12-28',
    },
    {
      title: {
        zh: '姓名学原理：名字对人生的影响',
        en: 'Nameology Principles: The Impact of Names on Life'
      },
      excerpt: {
        zh: '了解姓名学的基本原理，学会分析名字的吉凶，为自己和家人选择合适的名字。',
        en: 'Understand the basic principles of nameology, learn to analyze the auspiciousness of names, and choose appropriate names for yourself and your family.'
      },
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20calligraphy%20with%20name%20analysis%2C%20traditional%20characters%2C%20mystical%20atmosphere%2C%20educational%20setting&image_size=square',
      date: '2025-12-20',
    },
    {
      title: {
        zh: '择吉日的科学依据与传统方法',
        en: 'Scientific Basis and Traditional Methods of Auspicious Date Selection'
      },
      excerpt: {
        zh: '了解择吉日的传统方法和现代科学解读，学会为重要事件选择合适的时间。',
        en: 'Understand the traditional methods and modern scientific interpretation of auspicious date selection, and learn to choose appropriate times for important events.'
      },
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20calendar%20with%20auspicious%20dates%2C%20traditional%20and%20modern%20elements%2C%20educational%20atmosphere&image_size=square',
      date: '2025-12-15',
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">{language === 'zh' ? '玄学科普' : 'Mysticism Science'}</h2>
          <p className="text-lg text-text max-w-2xl mx-auto">
            {language === 'zh' ? '探索玄学的奥秘，了解传统智慧与现代生活的结合之道' : 'Explore the mysteries of mysticism and understand how traditional wisdom combines with modern life'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost 
              key={index} 
              title={post.title} 
              excerpt={post.excerpt} 
              image={post.image} 
              date={post.date} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
