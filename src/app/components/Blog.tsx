'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Blog: React.FC = () => {
  const { language } = useLanguage();

  const posts = [
    {
      title: language === 'zh' ? '八字 vs 西方占星：有何不同？' : 'What Makes BaZi Different from Western Astrology?',
      href: '/blog/2026-04-04-what-makes-bazi-different-from-western-astrology',
      excerpt: language === 'zh' ? '对比两大体系的核心差异，了解各适合什么场景。' : 'A clear comparison of two ancient systems looking at the same sky from different angles.',
    },
    {
      title: language === 'zh' ? '五行能量解读：你的个人元素图' : 'Understanding Your Five Elements Profile',
      href: '/blog/2026-04-04-understanding-five-elements',
      excerpt: language === 'zh' ? '看懂你的五行分布：木、火、土、金、水如何影响你的能量和选择。' : 'How your personal balance of Wood, Fire, Earth, Metal, and Water reveals patterns in energy, health, and work.',
    },
    {
      title: language === 'zh' ? '如何用八字辅助职业决策？' : 'How BaZi Can Help with Career Choices',
      href: '/blog/2026-04-04-how-bazi-can-help-with-career-choices',
      excerpt: language === 'zh' ? '八字不告诉你"该做什么工作"，但它能揭示结构性倾向：何时行动、何时等待。' : 'A responsible BaZi reading reveals structural tendencies about timing, environment fit, and energy patterns.',
    },
    {
      title: language === 'zh' ? '什么是八字？' : 'What Is BaZi?',
      href: '/learn/what-is-bazi',
      excerpt: language === 'zh' ? '四柱系统入门，给国际读者的清晰介绍。' : 'A beginner-friendly introduction to the Four Pillars system.',
    },
    {
      title: language === 'zh' ? '五行解析' : 'Five Elements Explained',
      href: '/learn/five-elements-explained',
      excerpt: language === 'zh' ? '学习中国玄学术语背后的关系模型。' : 'Learn the relationship model behind much of Chinese metaphysics vocabulary.',
    },
    {
      title: language === 'zh' ? 'AI 能准确解读八字吗？' : 'Can AI Read BaZi Correctly?',
      href: '/learn/can-ai-read-bazi',
      excerpt: language === 'zh' ? '在信任 AI 解读之前，你需要知道它的优势和局限。' : 'What AI does well in chart reading, and where human judgment still matters.',
    },
  ];

  return (
    <section id="blog" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <span className="px-6 py-2 bg-[#5ba4a4]/10 backdrop-blur-sm border border-[#5ba4a4]/30 rounded-full">
              <span className="text-[#5ba4a4] text-xs tracking-widest uppercase">
                {language === 'zh' ? '最新文章' : 'Blog'}
              </span>
            </span>
          </div>
          <h2 style={{ color: "var(--text)" }} className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {language === 'zh' ? '最新文章与指南' : 'Latest Articles & Guides'}
          </h2>
          <p className="text-xl text-light max-w-3xl mx-auto mb-12">
            {language === 'zh'
              ? '清晰的八字文章、五行解读和实用指南，帮你从不同角度认识这门古老智慧。'
              : 'Clear, practical writing on BaZi, the Five Elements, and related topics for international readers.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a key={post.href} href={post.href} className="organics rounded-2xl block hover:border-[#5ba4a4]/30 transition-colors">
              <div className="mb-4 inline-flex px-3 py-1 rounded-full bg-[#5ba4a4]/10 text-[#5ba4a4] text-xs tracking-widest uppercase">
                {post.href.startsWith('/blog') ? 'Blog' : 'Learn'}
              </div>
              <h3 style={{ color: "var(--text)" }} className="text-xl font-serif font-bold mb-3">{post.title}</h3>
              <p className="text-light text-sm leading-relaxed">{post.excerpt}</p>
              <div className="mt-5 text-sm text-[#5ba4a4] font-medium">
                {language === 'zh' ? '阅读更多 →' : 'Read more →'}
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/blog" style={{ color: "var(--primary)" }} className="text-lg font-medium hover:underline">
            {language === 'zh' ? '查看全部文章' : 'View all articles'} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
