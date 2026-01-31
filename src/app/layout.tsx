import './globals.css';
import { LanguageProvider } from './context/LanguageContext';

// SEO 元数据
export const metadata = {
  title: {
    default: '灵霄玄学 | 专业的八字风水与塔罗咨询',
    template: '%s | 灵霄玄学'
  },
  description: '提供专业的八字算命、风水布局、塔罗占卜服务，结合千年智慧与现代需求，助您趋吉避凶，掌控人生方向。',
  keywords: [
    '八字算命', '风水布局', '塔罗占卜', '命理咨询', '东方玄学',
    'feng shui', 'tarot reading', 'numerology', 'oriental mysticism', 'fortune telling'
  ],
  authors: [
    {
      name: '灵霄玄学',
      url: 'https://www.lingxiao-mysticism.com'
    }
  ],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#F8F4E8',
  icons: {
    icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%238B4513"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/%3E%3C/svg%3E',
    apple: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%238B4513"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/%3E%3C/svg%3E'
  },
  openGraph: {
    title: '灵霄玄学 | 专业的八字风水与塔罗咨询',
    description: '提供专业的八字算命、风水布局、塔罗占卜服务，结合千年智慧与现代需求，助您趋吉避凶，掌控人生方向。',
    type: 'website',
    url: 'https://www.lingxiao-mysticism.com',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=400&h=400',
        width: 1200,
        height: 630,
        alt: '灵霄玄学 Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '灵霄玄学 | 专业的八字风水与塔罗咨询',
    description: '提供专业的八字算命、风水布局、塔罗占卜服务，结合千年智慧与现代需求，助您趋吉避凶，掌控人生方向。',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=400&h=400'
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
