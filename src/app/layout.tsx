import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from './context/LanguageContext';

// SEO 元数据 - 优化版
export const metadata: Metadata = {
  // 基础信息
  title: {
    default: '灵霄玄学 | 专业的八字风水与塔罗咨询',
    template: '%s | 灵霄玄学'
  },
  description: '提供专业八字算命、风水布局、塔罗占卜服务，20 年经验，准确率 95%+。结合千年智慧与现代需求，助您趋吉避凶，掌控人生方向。立即预约享 8 折优惠！',
  keywords: [
    // 核心关键词
    '八字算命',
    '风水布局',
    '塔罗占卜',
    '命理咨询',
    '东方玄学',
    '算命大师',
    '风水大师',
    '运势分析',
    '生肖运势',
    '八字合婚',
    // 长尾关键词
    '北京八字算命哪里准',
    '专业风水布局师',
    '在线塔罗牌测试',
    '2026 年运势详解',
    '家居风水图解',
    // 英文关键词
    'feng shui',
    'tarot reading',
    'numerology',
    'oriental mysticism',
    'fortune telling',
    'chinese astrology',
    'bazi reading'
  ],
  
  // 作者和网站信息
  authors: [
    {
      name: '灵霄玄学',
      url: 'https://www.lingxiao-mysticism.com'
    }
  ],
  
  // 网站规范链接
  metadataBase: new URL('https://www.lingxiao-mysticism.com'),
  alternates: {
    canonical: '/',
  },
  
  // 视口和主题色
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#F8F4E8',
  
  // 网站图标
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  
  // 验证标签 (根据实际平台添加)
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  //   bing: 'your-bing-verification-code',
  // },
  
  // Open Graph 社交分享优化
  openGraph: {
    title: '灵霄玄学 | 专业的八字风水与塔罗咨询',
    description: '提供专业八字算命、风水布局、塔罗占卜服务，20 年经验，准确率 95%+。结合千年智慧与现代需求，助您趋吉避凶，掌控人生方向。',
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.lingxiao-mysticism.com',
    siteName: '灵霄玄学',
    images: [
      {
        url: 'https://www.lingxiao-mysticism.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '灵霄玄学 - 专业的八字风水与塔罗咨询服务',
        type: 'image/jpeg',
      },
    ],
  },
  
  // Twitter Card 优化
  twitter: {
    card: 'summary_large_image',
    title: '灵霄玄学 | 专业的八字风水与塔罗咨询',
    description: '提供专业八字算命、风水布局、塔罗占卜服务，20 年经验，准确率 95%+。',
    images: [
      {
        url: 'https://www.lingxiao-mysticism.com/twitter-image.jpg',
        width: 1200,
        height: 630,
        alt: '灵霄玄学 Logo',
      },
    ],
    creator: '@lingxiaomysticism',
    site: '@lingxiaomysticism',
  },
  
  // 分类和标签
  category: 'lifestyle',
  classification: '命理咨询',
  
  // 机器人索引规则
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // 其他搜索引擎优化
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '灵霄玄学',
  },
  
  // 格式检测
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// 结构化数据 - JSON-LD
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '灵霄玄学',
  url: 'https://www.lingxiao-mysticism.com',
  logo: 'https://www.lingxiao-mysticism.com/logo.png',
  description: '提供专业的八字算命、风水布局、塔罗占卜服务，结合千年智慧与现代需求，助您趋吉避凶，掌控人生方向。',
  foundingDate: '2006',
  founder: {
    '@type': 'Person',
    name: '灵霄老师',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CN',
    addressRegion: '北京市',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['Chinese', 'English'],
  },
  sameAs: [
    'https://www.facebook.com/lingxiaomysticism',
    'https://www.instagram.com/lingxiaomysticism',
    'https://www.tiktok.com/@lingxiaomysticism',
    'https://weibo.com/lingxiaomysticism',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '1580',
    bestRating: '5',
    worstRating: '1',
  },
  priceRange: '¥¥',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 结构化数据 - 组织信息 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Baidu 站长验证 (替换为实际代码) */}
        {/* <meta name="baidu-site-verification" content="your-baidu-code" /> */}
        
        {/* Google 站长验证 (替换为实际代码) */}
        {/* <meta name="google-site-verification" content="your-google-code" /> */}
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
