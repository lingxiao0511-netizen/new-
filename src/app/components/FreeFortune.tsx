'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ToolResult {
  mainElement: string;
  summary: string;
  traits: string[];
  upgradeTitle: string;
}

const FreeFortune: React.FC = () => {
  const { language } = useLanguage();
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [gender, setGender] = useState('');
  const [result, setResult] = useState<ToolResult | null>(null);
  const [error, setError] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    setError('');
    if (!birthDate) {
      setError(language === 'zh' ? '请选择出生日期' : 'Please select your birth date');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const date = new Date(birthDate);
      const day = date.getDate();
      const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
      const zhElements = ['木', '火', '土', '金', '水'];
      const idx = day % 5;

      setResult({
        mainElement: language === 'zh' ? zhElements[idx] : elements[idx],
        summary:
          language === 'zh'
            ? '这是一个简化的免费结果，用来帮助你先理解基础结构，再决定是否继续深入查看。'
            : 'This free result is a simplified starting point designed to help you understand the basics before deciding whether you want to go deeper.',
        traits:
          language === 'zh'
            ? ['基础五行倾向', '简化性格标签', '轻量解释与建议']
            : ['Core element tendency', 'Light personality tags', 'Introductory interpretation and advice'],
        upgradeTitle:
          language === 'zh' ? '解锁完整 BaZi Insight Report' : 'Unlock the full BaZi Insight Report',
      });
      setIsCalculating(false);
    }, 1000);
  };

  return (
    <section id="tools" className="py-24 relative z-10 bg-gradient-to-b from-[#0f3460]/50 to-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <div className="text-lightenter mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-[#5ba4a4]/10 backdrop-blur-sm border border-[#5ba4a4]/30 rounded-full">
              <span className="text-[#5ba4a4] text-xs tracking-widest uppercase">
                {language === 'zh' ? '免费工具' : 'Free Tools'}
              </span>
            </span>
          </div>
          <h2 style={{ color: "var(--text)" }} className="text-primaryxl md:text-5xl font-serif font-bold font-bold mb-6">
            {language === 'zh' ? '先从免费工具开始' : 'Start with Free Tools'}
          </h2>
          <p className="text-xl text-light max-w-3xl mx-auto">
            {language === 'zh'
              ? '你可以从 3 类最容易理解的工具开始：BaZi Chart、Five Elements Profile 和 Compatibility Checker。当前这里展示的是一个简化起点。'
              : 'A practical place to begin is with three easy entry points: a BaZi chart, a Five Elements profile, and a compatibility checker. This homepage section shows a simplified starting version.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 organics rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-serif text-primary mb-6">
              {language === 'zh' ? 'Free BaZi / Five Elements Starter' : 'Free BaZi / Five Elements Starter'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-primary font-medium mb-3">
                  {language === 'zh' ? '出生日期' : 'Birth Date'}
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full px-4 py-3 bg-[rgba(0,0,0,0.03)] border border-[rgba(160,148,136,0.3)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5ba4a4] text-primary"
                />
              </div>

              <div>
                <label className="block text-primary font-medium mb-3">
                  {language === 'zh' ? '出生时间（可选）' : 'Birth Time (Optional)'}
                </label>
                <input
                  type="time"
                  value={birthTime}
                  onChange={(e) => setBirthTime(e.target.value)}
                  className="w-full px-4 py-3 bg-[rgba(0,0,0,0.03)] border border-[rgba(160,148,136,0.3)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5ba4a4] text-primary"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-primary font-medium mb-3">
                  {language === 'zh' ? '性别（可选）' : 'Gender (Optional)'}
                </label>
                <div className="flex gap-4">
                  {[
                    { labelZh: '男', labelEn: 'Male', value: 'male' },
                    { labelZh: '女', labelEn: 'Female', value: 'female' },
                    { labelZh: '其他', labelEn: 'Other', value: 'other' },
                  ].map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setGender(item.value)}
                      className={`px-4 py-2 rounded-lg border ${gender === item.value ? 'bg-[#5ba4a4] text-primarylack border-[#5ba4a4]' : 'bg-[rgba(0,0,0,0.03)] text-light border-[rgba(160,148,136,0.3)]'}`}
                    >
                      {language === 'zh' ? item.labelZh : item.labelEn}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {error && <div className="mt-4 text-red-400">{error}</div>}

            <button
              onClick={handleCalculate}
              disabled={isCalculating}
              className="mt-8 w-full py-4 px-6 rounded-lg bg-gradient-to-r from-[#5ba4a4] to-[#c2704e] text-primarylack font-semibold hover:from-[#c2704e] hover:to-[#5ba4a4] transition-all"
            >
              {isCalculating
                ? language === 'zh'
                  ? '生成中...'
                  : 'Generating...'
                : language === 'zh'
                ? '生成免费结果'
                : 'Generate Free Result'}
            </button>

            {result && (
              <div className="mt-8 rounded-2xl border border-[rgba(160,148,136,0.25)] bg-[rgba(0,0,0,0.05)] p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-sm text-light">{language === 'zh' ? '主元素' : 'Main Element'}</p>
                    <p className="text-3xl text-[#5ba4a4] font-bold mt-1">{result.mainElement}</p>
                  </div>
                  <div className="text-sm text-light max-w-md">{result.summary}</div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {result.traits.map((item) => (
                    <div key={item} className="rounded-xl border border-[rgba(160,148,136,0.25)] bg-white/5 p-4 text-[#f0ebe4] text-sm">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-[#5ba4a4]/20 bg-[#5ba4a4]/5 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-primary font-medium">{result.upgradeTitle}</p>
                    <p className="text-sm text-light mt-1">
                      {language === 'zh'
                        ? '下一步可以升级到完整报告、年度运势或关系匹配。'
                        : 'If you would like more depth, you can continue with a fuller report, an annual reading, or a compatibility analysis.'}
                    </p>
                  </div>
                  <a href="/reports" className="btn-primary inline-block text-lightenter">
                    {language === 'zh' ? '查看报告' : 'View Reports'}
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            {[
              {
                title: language === 'zh' ? 'Free BaZi Chart' : 'Free BaZi Chart',
                desc: language === 'zh' ? '适合先从自己的命盘结构开始了解。' : 'A good place to begin if you want to start with your own chart.',
              },
              {
                title: language === 'zh' ? 'Five Elements Profile' : 'Five Elements Profile',
                desc: language === 'zh' ? '更轻量、更好理解，也更适合社媒传播。' : 'Lighter, easier to understand, and better for social sharing.',
              },
              {
                title: language === 'zh' ? 'Compatibility Checker' : 'Compatibility Checker',
                desc: language === 'zh' ? '适合从两个人的关系模式来切入。' : 'A good option when you want to explore relationship patterns between two people.',
              },
            ].map((tool) => (
              <div key={tool.title} className="organics">
                <h4 className="text-primary font-semibold text-lg">{tool.title}</h4>
                <p className="text-light mt-2 text-sm leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeFortune;
