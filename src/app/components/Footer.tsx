'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-black py-16 z-10 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              {language === 'zh' ? '灵霄命理' : 'LingXiao Metaphysics'}
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {language === 'zh'
                ? '一个面向国际用户的中国命理平台：用内容建立认知，用工具建立体验，用报告完成变现。'
                : 'A global Chinese metaphysics platform where content builds understanding, tools create engagement, and reports create monetization.'}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-4">
              {language === 'zh' ? '站点导航' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-[#7dd3fc] transition-colors">Home</Link></li>
              <li><Link href="/tools" className="hover:text-[#7dd3fc] transition-colors">Tools</Link></li>
              <li><Link href="/learn" className="hover:text-[#7dd3fc] transition-colors">Learn</Link></li>
              <li><Link href="/getting-started" className="hover:text-[#7dd3fc] transition-colors">Getting Started</Link></li>
              <li><Link href="/reports" className="hover:text-[#7dd3fc] transition-colors">Reports</Link></li>
              <li><Link href="/methodology" className="hover:text-[#7dd3fc] transition-colors">Methodology</Link></li>
              <li><Link href="/editorial-policy" className="hover:text-[#7dd3fc] transition-colors">Editorial Policy</Link></li>
              <li><Link href="/sources" className="hover:text-[#7dd3fc] transition-colors">Sources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-4">
              {language === 'zh' ? '法务与说明' : 'Legal & Trust'}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy" className="hover:text-[#7dd3fc] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-[#7dd3fc] transition-colors">Disclaimer</Link></li>
              <li><Link href="/terms" className="hover:text-[#7dd3fc] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-4">
              {language === 'zh' ? '当前上线建议' : 'Launch Notes'}
            </h4>
            <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
              <p>{language === 'zh' ? '先上线内容 + 工具 + 报告三层结构。' : 'Launch the content + tools + reports structure first.'}</p>
              <p>{language === 'zh' ? '避免 100% 准确、保证预测等表述。' : 'Avoid guarantee language such as 100% accuracy.'}</p>
              <p>{language === 'zh' ? '法务页上线前应补成正式版本。' : 'Legal pages should be finalized before a broader launch.'}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-700 text-xs">
            © 2026 LingXiao Metaphysics. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
