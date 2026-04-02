import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Learn',
  description:
    'Explore structured introductions to BaZi, the Five Elements, Feng Shui, birth time questions, and the role of AI in modern Chinese metaphysics tools.',
  openGraph: {
    title: 'Learn | LingXiao Metaphysics',
    description:
      'Read clear, modern introductions to BaZi, the Five Elements, Feng Shui, and related Chinese metaphysics topics.',
    type: 'website',
  },
};

const startHere = [
  {
    title: 'What Is BaZi?',
    href: '/learn/what-is-bazi',
    description: 'Start here if you want a clean introduction to the Four Pillars system.',
  },
  {
    title: 'Five Elements Explained',
    href: '/learn/five-elements-explained',
    description: 'Learn the relationship model behind much of Chinese metaphysics vocabulary.',
  },
  {
    title: 'What If You Do Not Know Your Birth Time?',
    href: '/learn/unknown-birth-time',
    description: 'Read this before using tools or buying reports if your birth data is incomplete.',
  },
  {
    title: 'Getting Started',
    href: '/getting-started',
    description: 'Follow a simple path from first-time curiosity into tools and reports.',
  },
];

const sections = [
  {
    title: 'Foundations',
    description: 'Core concepts that help first-time readers understand how the system is built.',
    items: [
      { title: 'What Is BaZi?', href: '/learn/what-is-bazi' },
      { title: 'Five Elements Explained', href: '/learn/five-elements-explained' },
      { title: 'What Is a Day Master?', href: '/learn/what-is-a-day-master' },
      { title: 'Heavenly Stems and Earthly Branches', href: '/learn/heavenly-stems-and-earthly-branches' },
      { title: 'What Are the Ten Gods?', href: '/learn/what-are-the-ten-gods' },
    ],
  },
  {
    title: 'Common Questions',
    description: 'The questions skeptical or first-time users most often ask before they trust the subject.',
    items: [
      { title: 'How Accurate Is BaZi?', href: '/learn/how-accurate-is-bazi' },
      { title: 'Is BaZi a Religion?', href: '/learn/is-bazi-a-religion' },
      { title: 'Is Feng Shui Superstition?', href: '/learn/is-feng-shui-superstition' },
      { title: 'Can AI Read BaZi Correctly?', href: '/learn/can-ai-read-bazi' },
      { title: 'How We Use AI on This Site', href: '/learn/how-we-use-ai' },
    ],
  },
  {
    title: 'Life Topics',
    description: 'Higher-intent questions that often sit closer to tool usage and paid report interest.',
    items: [
      { title: 'Can BaZi Predict Marriage?', href: '/learn/can-bazi-predict-marriage' },
      { title: 'Can BaZi Predict Career?', href: '/learn/can-bazi-predict-career' },
      { title: 'What Does a BaZi Report Include?', href: '/learn/what-does-a-bazi-report-include' },
      { title: 'BaZi vs Western Astrology', href: '/learn/bazi-vs-western-astrology' },
    ],
  },
  {
    title: 'Related Systems & Context',
    description: 'Pages that help users place BaZi inside a broader cultural and metaphysical landscape.',
    items: [
      { title: 'Feng Shui Basics', href: '/learn/feng-shui-basics' },
      { title: 'Methodology', href: '/methodology' },
      { title: 'Editorial Policy', href: '/editorial-policy' },
      { title: 'Sources & References', href: '/sources' },
    ],
  },
];

const readingPaths = [
  {
    title: 'I am completely new to this',
    steps: ['What Is BaZi?', 'Five Elements Explained', 'Getting Started'],
    links: ['/learn/what-is-bazi', '/learn/five-elements-explained', '/getting-started'],
  },
  {
    title: 'I am interested, but skeptical',
    steps: ['How Accurate Is BaZi?', 'Is BaZi a Religion?', 'How We Use AI on This Site'],
    links: ['/learn/how-accurate-is-bazi', '/learn/is-bazi-a-religion', '/learn/how-we-use-ai'],
  },
  {
    title: 'I want to know if this is useful for me',
    steps: ['Can BaZi Predict Career?', 'Can BaZi Predict Marriage?', 'What Does a BaZi Report Include?'],
    links: ['/learn/can-bazi-predict-career', '/learn/can-bazi-predict-marriage', '/learn/what-does-a-bazi-report-include'],
  },
];

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Learn</p>
          <h1 className="text-5xl font-serif font-bold mt-4">Learn the Basics with Clarity</h1>
          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            This section brings together clear introductions, common questions, and practical explanations for readers who want to understand Chinese metaphysics step by step.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-serif font-bold">Start here</h2>
              <p className="text-gray-400 mt-4 leading-relaxed">
                If this is your first time exploring BaZi or Chinese metaphysics, begin with these pages before going deeper.
              </p>
            </div>
            <Link href="/getting-started" className="btn-primary inline-block text-center">Open beginner guide</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {startHere.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl border border-white/10 bg-white/5 p-6 block hover:border-[#7dd3fc]/30 transition-colors">
                <h3 className="text-2xl font-serif font-bold">{item.title}</h3>
                <p className="text-gray-400 mt-3 leading-relaxed">{item.description}</p>
                <div className="mt-5 text-sm text-white">Open →</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {readingPaths.map((path) => (
            <div key={path.title} className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold">{path.title}</h2>
              <div className="mt-6 space-y-4 text-gray-300">
                {path.steps.map((step, index) => (
                  <Link key={step} href={path.links[index]} className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:border-[#7dd3fc]/30 transition-colors">
                    <span className="text-[#7dd3fc] mr-2">{index + 1}.</span>
                    {step}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8 mb-16">
          {sections.map((section) => (
            <section key={section.title} className="glass-card rounded-2xl p-8 md:p-10">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-serif font-bold">{section.title}</h2>
                <p className="text-gray-400 mt-4 leading-relaxed">{section.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-sm text-gray-300">
                {section.items.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#7dd3fc]/30 transition-colors">
                    {item.title}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-serif font-bold">When you are ready to go further</h2>
          <p className="text-gray-400 mt-4 max-w-3xl leading-relaxed">
            Some readers want to keep learning, while others prefer to explore their own chart right away. When you feel ready, you can continue with a free tool or explore more detailed report options.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Read a guide that answers the question you care about most.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Try a free tool if you want a more hands-on starting point.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Explore reports if you want a more detailed reading.</div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="/tools" className="btn-primary inline-block text-center">Try tools</a>
            <a href="/reports" className="btn-secondary inline-block text-center">Explore reports</a>
          </div>
        </div>
      </div>
    </main>
  );
}
