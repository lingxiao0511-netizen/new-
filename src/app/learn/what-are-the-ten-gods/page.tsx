import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What Are the Ten Gods in BaZi?',
  description:
    'A beginner-oriented explanation of the Ten Gods in BaZi and how they relate to the Day Master.',
  openGraph: {
    title: 'What Are the Ten Gods in BaZi? | LingXiao Metaphysics',
    description: 'Understand the Ten Gods as relationship categories built from the Day Master and Five Element logic.',
    type: 'article',
  },
};

export default function WhatAreTheTenGodsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Intermediate Concepts</p>
        <h1 className="text-5xl font-serif font-bold mt-4">What Are the Ten Gods in BaZi?</h1>
        <p className="text-gray-400 text-lg mt-6 leading-relaxed">
          The Ten Gods are one of the most discussed parts of BaZi because they turn chart relationships into recognizable categories. For beginners, they can feel abstract at first, but the underlying idea is actually simple: each one describes how another element relates to the Day Master.
        </p>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10 space-y-6 text-gray-300 leading-relaxed">
          <p>
            The system combines two things: the Five Element relationship and yin-yang polarity. That creates ten relationship types. These categories are often used to discuss themes like support, authority, expression, resources, wealth, peers, and pressure.
          </p>
          <p>
            The important point is that the Ten Gods are not literal deities. They are labels for relationship dynamics inside the chart. When beginners hear names like Direct Wealth or Hurting Officer, the terms can sound dramatic, but they are technical categories rather than direct life verdicts.
          </p>
          <h2 className="text-3xl font-serif font-bold text-white">Why they matter</h2>
          <p>
            The Ten Gods help translate chart mechanics into interpretive language. They are one of the bridges between technical calculation and human-readable analysis.
          </p>
          <h2 className="text-3xl font-serif font-bold text-white">Why beginners should go slowly</h2>
          <p>
            It is easy to over-identify with one term and ignore context. Real reading depends on the whole chart, including strength, placement, timing, combinations, and interaction with branches.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10">
          <h2 className="text-3xl font-serif font-bold">Where to go next</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <Link href="/learn/what-is-a-day-master" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#7dd3fc]/30 transition-colors">Read next: What is a Day Master?</Link>
            <Link href="/learn/five-elements-explained" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#7dd3fc]/30 transition-colors">Read next: Five Elements explained</Link>
            <Link href="/reports" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#7dd3fc]/30 transition-colors">Explore report products</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
