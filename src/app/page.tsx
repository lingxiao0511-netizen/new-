import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FreeFortune from './components/FreeFortune';
import Services from './components/Services';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Chinese Metaphysics Platform | BaZi, Five Elements, Compatibility',
  description:
    'Explore Chinese metaphysics through modern tools, educational content, and AI-assisted personalized insights. Start with a free BaZi chart and Five Elements profile.',
  keywords: [
    'Chinese metaphysics',
    'Bazi calculator',
    'Four Pillars',
    'Five Elements',
    'Chinese astrology',
    'Bazi compatibility',
    'Zi Wei Dou Shu',
    'I Ching',
  ],
  openGraph: {
    title: 'Chinese Metaphysics Platform',
    description:
      'Learn BaZi, Five Elements, and Chinese astrology with free tools and structured insights.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.lingxiao-mysticism.com',
    images: [
      {
        url: 'https://www.lingxiao-mysticism.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Chinese Metaphysics Platform',
      },
    ],
  },
};

const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Chinese Metaphysics Platform',
  description:
    'A global platform for learning and exploring Chinese metaphysics through content, tools, and AI-assisted personalized insights.',
  url: 'https://www.lingxiao-mysticism.com',
  mainEntity: {
    '@type': 'Organization',
    name: 'LingXiao Metaphysics',
    url: 'https://www.lingxiao-mysticism.com',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema),
        }}
      />

      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        <Hero />
        <FreeFortune />
        <Services />
        <Pricing />
        <About />
        <FAQ />
        <Blog />
      </main>

      <Footer />
    </>
  );
}
