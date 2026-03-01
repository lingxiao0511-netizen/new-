import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Cases from './components/Cases';
import Blog from './components/Blog';
import Contact from './components/Contact';
import DailyFortune from './components/DailyFortune';
import Footer from './components/Footer';

// 页面级 SEO 元数据
export const metadata: Metadata = {
  title: '首页 - 专业八字算命与风水布局服务',
  description: '灵霄玄学提供专业八字算命、风水布局、塔罗占卜服务。20 年经验，准确率 95%+，已帮助 10000+ 客户趋吉避凶。立即预约享 8 折优惠！',
  keywords: [
    '八字算命',
    '风水布局',
    '塔罗占卜',
    '运势分析',
    '命理咨询',
    '北京算命大师',
    '专业风水师',
    '在线占卜',
  ],
  openGraph: {
    title: '灵霄玄学 - 首页',
    description: '专业八字算命、风水布局服务，20 年经验，准确率 95%+。',
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.lingxiao-mysticism.com',
    images: [
      {
        url: 'https://www.lingxiao-mysticism.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: '灵霄玄学首页',
      },
    ],
  },
};

// 页面级结构化数据
const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '灵霄玄学 - 首页',
  description: '提供专业八字算命、风水布局、塔罗占卜服务',
  url: 'https://www.lingxiao-mysticism.com',
  mainEntity: {
    '@type': 'Organization',
    name: '灵霄玄学',
    url: 'https://www.lingxiao-mysticism.com',
  },
};

export default function HomePage() {
  return (
    <>
      {/* 页面级结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema),
        }}
      />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        {/* Hero Section */}
        <Hero />
        
        {/* Services Section */}
        <Services />
        
        {/* Daily Fortune Section */}
        <DailyFortune />
        
        {/* About Section */}
        <About />
        
        {/* Cases Section */}
        <Cases />
        
        {/* Blog Section */}
        <Blog />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
