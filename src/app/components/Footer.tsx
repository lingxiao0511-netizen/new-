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
            <p className="text-[var\(--light-text\)\] mb-4 leading-relaxed">
              {language === 'zh'
                ? '一个面向国际用户的中国命理平台，帮助你通过内容、工具与更深入的解读来理解 Chinese Metaphysics。'
                : 'A global Chinese metaphysics platform for learning through guides, practical tools, and more detailed readings.'}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-4">
              {language === 'zh' ? '站点导航' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-[var\(--light-text\)\]">
              <li><Link href="/" className="hover:text-[#5ba4a4] transition-colors">Home</Link></li>
              <li><Link href="/tools" className="hover:text-[#5ba4a4] transition-colors">Tools</Link></li>
              <li><Link href="/learn" className="hover:text-[#5ba4a4] transition-colors">Learn</Link></li>
              <li><Link href="/getting-started" className="hover:text-[#5ba4a4] transition-colors">Getting Started</Link></li>
              <li><Link href="/reports" className="hover:text-[#5ba4a4] transition-colors">Reports</Link></li>
              <li><Link href="/methodology" className="hover:text-[#5ba4a4] transition-colors">Our Approach</Link></li>
              <li><Link href="/editorial-policy" className="hover:text-[#5ba4a4] transition-colors">Editorial Policy</Link></li>
              <li><Link href="/sources" className="hover:text-[#5ba4a4] transition-colors">Sources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-4">
              {language === 'zh' ? '法务与说明' : 'Legal & Trust'}
            </h4>
            <ul className="space-y-2 text-[var\(--light-text\)\]">
              <li><Link href="/privacy" className="hover:text-[#5ba4a4] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-[#5ba4a4] transition-colors">Disclaimer</Link></li>
              <li><Link href="/terms" className="hover:text-[#5ba4a4] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-4">
              {language === 'zh' ? '使用说明' : 'Helpful Notes'}
            </h4>
            <div className="space-y-3 text-[var\(--light-text\)\] text-sm leading-relaxed">
              <p>{language === 'zh' ? '如果你是新读者，可以先从 Learn 或 Tools 开始。' : 'If you are new here, it often helps to begin with Learn or Tools.'}</p>
              <p>{language === 'zh' ? '这里提供的是象征性解读与参考，不是保证式预测。' : 'The site offers symbolic interpretation and guidance, not guarantee-based prediction.'}</p>
              <p>{language === 'zh' ? '在提供出生信息前，你也可以先阅读隐私与说明页面。' : 'You can also review the privacy and trust pages before sharing birth information.'}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[var\(--border\)\] mt-12 pt-8 text-center">
          <p className="text-[var\(--muted-text\)\] text-xs">
            © 2026 LingXiao Metaphysics. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
