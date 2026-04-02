import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Can BaZi Predict Career?',
  description: 'A practical guide to what BaZi can say about work, direction, tendencies, and career timing.',
  openGraph: {
    title: 'Can BaZi Predict Career? | LingXiao Metaphysics',
    description: 'Understand how BaZi may be used for career reflection without treating the chart as a rigid script.',
    type: 'article',
  },
};

export default function CanBaziPredictCareerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Career</p>
        <h1 className="text-5xl font-serif font-bold mt-4">Can BaZi Predict Career?</h1>
        <p className="text-gray-400 text-lg mt-6 leading-relaxed">Career is another major reason people seek out BaZi. In practice, BaZi is often used less as a literal job-title predictor and more as a framework for understanding tendencies, strengths, pressure patterns, resources, timing shifts, and directional fit.</p>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10 space-y-6 text-gray-300 leading-relaxed">
          <p>A responsible reading may look at chart structure, strength, output, authority, resource patterns, and broader timing cycles. These can support reflection on work style, growth conditions, risk patterns, and timing sensitivity.</p>
          <p>What BaZi should not do is promise a single predetermined profession or claim that one symbolic pattern guarantees success. Career reality is shaped by skill, environment, opportunity, education, and personal choice alongside any symbolic system.</p>
          <p>For a public website, career-oriented content is valuable because it addresses real user demand while also showing the system’s practical use cases.</p>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <Link href="/reports" className="rounded-xl border border-white/10 bg-white/5 p-4">Explore deeper reports</Link>
            <Link href="/learn/what-is-a-day-master" className="rounded-xl border border-white/10 bg-white/5 p-4">Read: What is a Day Master?</Link>
            <Link href="/tools" className="rounded-xl border border-white/10 bg-white/5 p-4">Try free tools</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
