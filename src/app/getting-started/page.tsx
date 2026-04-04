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
    text: 'Try the tools if you want a more hands-on introduction before choosing a deeper reading.',
    link: '/tools',
  },
  {
    title: 'Use reports when you want depth',
    text: 'Reports are often most useful after you already understand the basics and know what you want to explore.',
    link: '/reports',
  },
];

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">Getting Started</p>
          <h1 className="text-5xl font-serif font-bold mt-4">New Here? Start Here.</h1>
          <p className="text-[#7a6d60] text-lg mt-6 leading-relaxed">If you are new to Chinese metaphysics, there is no need to learn everything at once. Start with the foundations, understand what your birth data affects, and then continue into tools or reports when you feel ready.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {steps.map((step) => (
            <Link key={step.title} href={step.link} className="organics rounded-2xl block hover:border-[#5ba4a4]/30 transition-colors">
              <h2 className="text-2xl font-serif font-bold">{step.title}</h2>
              <p className="text-[#7a6d60] mt-4 leading-relaxed">{step.text}</p>
              <div className="mt-6 text-sm text-[#231a14]">Open →</div>
            </Link>
          ))}
        </div>
        <div className="organics rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-serif font-bold">What to expect from this site</h2>
          <div className="mt-6 space-y-4 text-[#504035] leading-relaxed">
            <p>• Clear explanations before technical overload</p>
            <p>• Tools that help you interact before you pay</p>
            <p>• Report products that go deeper than free outputs</p>
            <p>• No certainty-heavy promises about fate control or guaranteed predictions</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#504035]">
            <Link href="/learn/how-accurate-is-bazi" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4">How accurate is BaZi?</Link>
            <Link href="/learn/how-we-use-ai" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4">How we use AI</Link>
            <Link href="/learn/what-does-a-bazi-report-include" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4">What a report includes</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
