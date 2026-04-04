import type { Metadata } from 'next';
import Hero from './components/Hero';
import FreeFortune from './components/FreeFortune';
import Services from './components/Services';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import About from './components/About';
import Blog from './components/Blog';

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

      <main className="min-h-screen bg-gradient-to-br from-\[var(--bg)\] via-\[var(--bg-warm)\] to-\[var(--bg)\]">
        <Hero />

        <section className="px-4 pb-8">
          <div className="max-w-6xl mx-auto organics text-primary">
            <div className="max-w-3xl">
              <p className="text-primary uppercase tracking-[0.3em] text-xs">Start here</p>
              <h2 className="text-primaryxl font-serif font-bold mt-4">Choose the path that fits you best</h2>
              <p className="text-light mt-4 text-lg leading-relaxed">
                Whether you are completely new, curious to explore, or ready for a deeper reading, this site is designed to help you start in a way that feels simple and clear.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-sm text-light">
              <a href="/getting-started" className="rounded-2xl border border-[rgba(160,148,136,0.25)] bg-[rgba(255,253,248,0.9)] p-6 hover:border-[#5ba4a4]/20 transition-colors">
                <h3 className="text-primary text-xl font-serif font-bold">I am new</h3>
                <p className="mt-3 leading-relaxed">Start with the beginner guide and foundational explanations before using tools.</p>
              </a>
              <a href="/tools" className="rounded-2xl border border-[rgba(160,148,136,0.25)] bg-[rgba(255,253,248,0.9)] p-6 hover:border-[#5ba4a4]/20 transition-colors">
                <h3 className="text-primary text-xl font-serif font-bold">I want to try something</h3>
                <p className="mt-3 leading-relaxed">Use a free tool if you want practical interaction and a low-friction first experience.</p>
              </a>
              <a href="/reports" className="rounded-2xl border border-[rgba(160,148,136,0.25)] bg-[rgba(255,253,248,0.9)] p-6 hover:border-[#5ba4a4]/20 transition-colors">
                <h3 className="text-primary text-xl font-serif font-bold">I want depth</h3>
                <p className="mt-3 leading-relaxed">Explore reports if you already understand the basics and want a deeper reading.</p>
              </a>
            </div>
          </div>
        </section>

        <FreeFortune />
        <Services />
        <Pricing />
        <About />
        <FAQ />
        <Blog />
      </main>
    </>
  );
}
