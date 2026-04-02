import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What Is a Day Master?',
  description:
    'Learn what a Day Master means in BaZi and why it matters, without reducing the whole chart to a single label.',
  openGraph: {
    title: 'What Is a Day Master? | LingXiao Metaphysics',
    description: 'A practical explanation of the Day Master in BaZi, what it represents, and how beginners should think about it.',
    type: 'article',
  },
};

export default function WhatIsADayMasterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Core Concepts</p>
        <h1 className="text-5xl font-serif font-bold mt-4">What Is a Day Master in BaZi?</h1>
        <p className="text-gray-400 text-lg mt-6 leading-relaxed">
          If you spend even a little time around BaZi content, you will quickly see people talking about the Day Master. This is one of the most common entry points for beginners because it gives the chart a clear reference point. But it is also one of the most misunderstood ideas.
        </p>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10 space-y-6 text-gray-300 leading-relaxed">
          <p>
            In many BaZi traditions, the Day Master is the Heavenly Stem of the Day Pillar. It is treated as the symbolic representation of the person being read. In other words, when the chart asks how other forces support, control, produce, or challenge something, the “something” is often the Day Master.
          </p>
          <p>
            This is why many beginner explanations say things like “you are a Wood Day Master” or “you are a Metal Day Master.” That shorthand can be useful, but it can also become misleading if people stop there.
          </p>
          <h2 className="text-3xl font-serif font-bold text-white">Why it matters</h2>
          <p>
            The Day Master matters because it sets the interpretive center of the chart. The Five Element relationship between the Day Master and the rest of the chart helps shape many later ideas: resources, output, authority, wealth, peers, and chart balance.
          </p>
          <h2 className="text-3xl font-serif font-bold text-white">Why it is not the whole chart</h2>
          <p>
            A common online mistake is treating the Day Master like a zodiac sign. Real BaZi interpretation also depends on season, surrounding stems and branches, hidden elements, polarity, strength, and timing cycles. The Day Master is central, but it is not enough by itself.
          </p>
          <h2 className="text-3xl font-serif font-bold text-white">Best beginner mindset</h2>
          <p>
            Treat the Day Master as the anchor of the reading, not the conclusion. It tells you where interpretation begins, not where it ends.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10">
          <h2 className="text-3xl font-serif font-bold">Where to go next</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <Link href="/learn/what-is-bazi" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#7dd3fc]/30 transition-colors">Read next: What is BaZi?</Link>
            <Link href="/learn/five-elements-explained" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#7dd3fc]/30 transition-colors">Read next: Five Elements explained</Link>
            <Link href="/tools" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#7dd3fc]/30 transition-colors">Try free tools</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
