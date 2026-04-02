import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Getting Started',
  description: 'A simple starting guide for new readers exploring Chinese metaphysics on LingXiao Metaphysics.',
  openGraph: {
    title: 'Getting Started | LingXiao Metaphysics',
    description: 'Learn where to begin, what to read first, what data you need, and how to move from curiosity into tools and reports.',
    type: 'website',
  },
};

const steps = [
  {
    title: 'Start with the basics',
    text: 'Read the foundation articles first so the terminology feels less overwhelming.',
    link: '/learn/what-is-bazi',
  },
  {
    title: 'Understand what data matters',
    text: 'Know your birth date and, if possible, your birth time. If time is unknown, read the uncertainty guide first.',
    link: '/learn/unknown-birth-time',
  },
  {
    title: 'Try the free tools',
    text: 'Use the tools layer as an interactive entry point before considering a deeper report.',
    link: '/tools',
  },
  {
    title: 'Use reports when you want depth',
    text: 'Paid reports should feel like a structured upgrade, not the first step.',
    link: '/reports',
  },
];

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Getting Started</p>
          <h1 className="text-5xl font-serif font-bold mt-4">New Here? Start Here.</h1>
          <p className="text-gray-400 text-lg mt-6 leading-relaxed">If you are new to Chinese metaphysics, the goal is not to learn everything at once. Start with the foundations, understand what your birth data affects, and then move into tools or reports with the right expectations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {steps.map((step) => (
            <Link key={step.title} href={step.link} className="glass-card rounded-2xl block hover:border-[#7dd3fc]/30 transition-colors">
              <h2 className="text-2xl font-serif font-bold">{step.title}</h2>
              <p className="text-gray-400 mt-4 leading-relaxed">{step.text}</p>
              <div className="mt-6 text-sm text-white">Open →</div>
            </Link>
          ))}
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-serif font-bold">What to expect from this site</h2>
          <div className="mt-6 space-y-4 text-gray-300 leading-relaxed">
            <p>• Clear explanations before technical overload</p>
            <p>• Tools that help you interact before you pay</p>
            <p>• Report products that go deeper than free outputs</p>
            <p>• No certainty-heavy promises about fate control or guaranteed predictions</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <Link href="/learn/how-accurate-is-bazi" className="rounded-xl border border-white/10 bg-white/5 p-4">How accurate is BaZi?</Link>
            <Link href="/learn/how-we-use-ai" className="rounded-xl border border-white/10 bg-white/5 p-4">How we use AI</Link>
            <Link href="/learn/what-does-a-bazi-report-include" className="rounded-xl border border-white/10 bg-white/5 p-4">What a report includes</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
