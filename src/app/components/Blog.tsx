'use client';

import React, { useState, useEffect } from 'react';
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
  category: {
    zh: string;
    en: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, image, date, category }) => {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="glass-card relative overflow-hidden transition-all duration-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="rounded-xl overflow-hidden mb-6">
        <div className="relative">
          <img 
            src={image} 
            alt={language === 'zh' ? `灵霄玄学${category.zh}文章：${title.zh} - ${excerpt.zh.substring(0, 40)}...` : `${category.en} Article: ${title.en} - ${excerpt.en.substring(0, 40)}...`}
            className="w-full h-52 object-cover"
            width={400}
            height={400}
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="px-4 py-1 bg-gradient-to-r from-[#7dd3fc]/90 to-[#a78bfa]/90 text-black text-xs font-bold rounded-full backdrop-blur-sm">
              {category[language]}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#7dd3fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {date}
      </div>
      <h3 className="text-xl font-serif font-bold text-white mb-4">
        {title[language]}
      </h3>
      <p className="text-gray-400 mb-6 line-clamp-3">{excerpt[language]}</p>
      <a href="#" className="text-[#7dd3fc] hover:text-[#a78bfa] font-medium transition-colors flex items-center">
        {language === 'zh' ? '阅读更多' : 'Read More'}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
};

const Blog: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      image: 'https://images.pexels.com/photos/8100495/pexels-photo-8100495.jpeg?auto=format&fit=crop&q=80&w=400&h=400',
      date: '2026-01-15',
      category: {
        zh: '风水',
        en: 'Feng Shui'
      }
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
      image: 'https://images.pexels.com/photos/3569284/pexels-photo-3569284.jpeg?auto=format&fit=crop&q=80&w=400&h=400',
      date: '2026-01-10',
      category: {
        zh: '命理',
        en: 'Numerology'
      }
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
      image: 'https://images.pexels.com/photos/2537652/pexels-photo-2537652.jpeg?auto=format&fit=crop&q=80&w=400&h=400',
      date: '2026-01-05',
      category: {
        zh: '塔罗',
        en: 'Tarot'
      }
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
      image: 'https://images.pexels.com/photos/5639377/pexels-photo-5639377.jpeg?auto=format&fit=crop&q=80&w=400&h=400',
      date: '2025-12-28',
      category: {
        zh: '水晶',
        en: 'Crystals'
      }
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
      image: 'https://images.pexels.com/photos/1601076/pexels-photo-1601076.jpeg?auto=format&fit=crop&q=80&w=400&h=400',
      date: '2025-12-20',
      category: {
        zh: '姓名学',
        en: 'Nameology'
      }
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
      image: 'https://images.pexels.com/photos/1287508/pexels-photo-1287508.jpeg?auto=format&fit=crop&q=80&w=400&h=400',
      date: '2025-12-15',
      category: {
        zh: '择日',
        en: 'Date Selection'
      }
    },
  ];

  return (
    <section id="blog" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <span className="px-6 py-2 bg-[#7dd3fc]/10 backdrop-blur-sm border border-[#7dd3fc]/30 rounded-full">
              <span className="text-[#7dd3fc] text-xs tracking-widest uppercase">
                {language === 'zh' ? '玄学科普 • 智慧分享' : 'Mysticism Insights • Wisdom Sharing'}
              </span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{language === 'zh' ? '玄学科普' : 'Mysticism Blog'}</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            {language === 'zh' ? '探索玄学的奥秘，了解传统智慧与现代生活的结合之道' : 'Explore the mysteries of mysticism and understand how traditional wisdom combines with modern life'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <div key={index}>
              <BlogPost 
                title={post.title} 
                excerpt={post.excerpt} 
                image={post.image} 
                date={post.date}
                category={post.category}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
