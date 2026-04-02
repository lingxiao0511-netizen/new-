import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from './context/LanguageContext';

export const metadata: Metadata = {
  title: {
    default: 'LingXiao Metaphysics | Chinese Metaphysics Platform',
    template: '%s | LingXiao Metaphysics',
  },
  description:
    'A global platform for learning and exploring Chinese metaphysics through educational content, structured tools, and AI-assisted personalized insights.',
  keywords: [
    'Chinese metaphysics',
    'Bazi',
    'Four Pillars',
    'Five Elements',
    'Chinese astrology',
    'compatibility reading',
    'Zi Wei Dou Shu',
    'I Ching',
  ],
  authors: [{ name: 'LingXiao Metaphysics', url: 'https://www.lingxiao-mysticism.com' }],
  metadataBase: new URL('https://www.lingxiao-mysticism.com'),
  alternates: {
    canonical: '/',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#0c0a1a',
  openGraph: {
    title: 'LingXiao Metaphysics | Chinese Metaphysics Platform',
    description:
      'Learn BaZi, Five Elements, and Chinese metaphysics through free tools, educational content, and personalized reports.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.lingxiao-mysticism.com',
    siteName: 'LingXiao Metaphysics',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'LingXiao Metaphysics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LingXiao Metaphysics | Chinese Metaphysics Platform',
    description:
      'Explore Chinese metaphysics with modern tools, educational content, and structured reports.',
    images: ['/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LingXiao Metaphysics',
  url: 'https://www.lingxiao-mysticism.com',
  description:
    'A global platform for learning and exploring Chinese metaphysics through content, tools, and AI-assisted personalized insights.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
