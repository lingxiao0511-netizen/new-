import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What Does a BaZi Report Include?',
  description: 'A public-facing explanation of what users should expect from a structured BaZi report.',
  openGraph: {
    title: 'What Does a BaZi Report Include? | LingXiao Metaphysics',
    description: 'Understand what a modern BaZi report should contain and how it differs from free tool output.',
    type: 'article',
  },
};

export default function WhatDoesABaziReportIncludePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Buying Guide</p>
        <h1 className="text-5xl font-serif font-bold mt-4">What Does a BaZi Report Include?</h1>
        <p className="text-gray-400 text-lg mt-6 leading-relaxed">This is one of the most important pre-purchase questions. If a site wants users to trust a paid report, it should explain clearly what the user is buying and how that differs from a free tool output.</p>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10 space-y-6 text-gray-300 leading-relaxed">
          <p>A structured BaZi report usually goes beyond the instant summary shown in a free tool. It may include chart overview, elemental balance, Day Master framing, key relationship patterns, timing commentary, thematic interpretation, and a clearer narrative about the chart as a whole.</p>
          <p>The exact scope depends on the product tier. A lighter report may focus on orientation and core themes. A deeper report may include more timing discussion, relationship interpretation, work direction, and more detailed symbolic structure.</p>
          <p>Good public product pages should also explain what is not included. This avoids mismatch between user expectation and delivery.</p>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <Link href="/reports" className="rounded-xl border border-white/10 bg-white/5 p-4">See report options</Link>
            <Link href="/tools" className="rounded-xl border border-white/10 bg-white/5 p-4">Compare with free tools</Link>
            <Link href="/methodology" className="rounded-xl border border-white/10 bg-white/5 p-4">Read methodology</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
