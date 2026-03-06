import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FreeFortune from './components/FreeFortune';
import Services from './components/Services';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import About from './components/About';
import Cases from './components/Cases';
import Blog from './components/Blog';
import Contact from './components/Contact';
import DailyFortune from './components/DailyFortune';
import Footer from './components/Footer';

// 页面级 SEO 元数据
export const metadata: Metadata = {
  title: '灵霄玄学 - 紫薇斗数付费咨询 | 风水布局 | 命理分析',
  description: '灵霄玄学提供专业紫薇斗数咨询、风水布局、命理分析服务。20 年经验大师，10000+ 成功案例。免费测算入口开放中！首次咨询享 5 折优惠。',
  keywords: [
    '紫薇斗数',
    '紫薇命盘',
    '风水布局',
    '命理分析',
    '八字算命',
    '爱情合盘',
    '流年运势',
    '大师咨询',
    '付费咨询',
    '在线算命',
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
        
        {/* Free Fortune Section */}
        <FreeFortune />
        
        {/* Services Section */}
        <Services />
        
        {/* Pricing Section */}
        <Pricing />
        
        {/* Daily Fortune Section */}
        <DailyFortune />
        
        {/* About Section */}
        <About />
        
        {/* Cases Section */}
        <Cases />
        
        {/* FAQ Section */}
        <FAQ />
        
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
