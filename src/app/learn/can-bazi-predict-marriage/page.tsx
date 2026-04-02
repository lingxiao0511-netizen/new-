import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Can BaZi Predict Marriage?',
  description: 'A balanced explanation of what BaZi can and cannot say about relationships and marriage.',
  openGraph: {
    title: 'Can BaZi Predict Marriage? | LingXiao Metaphysics',
    description: 'Learn how to think responsibly about relationship interpretation in BaZi without falling into certainty-based claims.',
    type: 'article',
  },
};

export default function CanBaziPredictMarriagePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Relationships</p>
        <h1 className="text-5xl font-serif font-bold mt-4">Can BaZi Predict Marriage?</h1>
        <p className="text-gray-400 text-lg mt-6 leading-relaxed">This is one of the most searched questions in relationship-focused metaphysics content. The honest answer is that BaZi can be used to discuss relationship tendencies, timing themes, emotional patterns, and compatibility signals, but it should not be framed as a guarantee machine for exact outcomes.</p>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10 space-y-6 text-gray-300 leading-relaxed">
          <p>Some traditions look at spouse-related stars, chart structure, timing cycles, and relationship dynamics to assess how partnership themes may show up in life. That can be meaningful for reflection, but it still remains symbolic interpretation.</p>
          <p>The main trust issue is overclaiming. A serious website should not present relationship reading as absolute certainty about whether, when, or how marriage must happen. That kind of language may sell curiosity, but it weakens credibility.</p>
          <p>A better approach is to explain what BaZi is suited for: identifying patterns, potential stress points, compatibility themes, and timing windows that users may want to reflect on more deeply.</p>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <Link href="/reports" className="rounded-xl border border-white/10 bg-white/5 p-4">See compatibility reports</Link>
            <Link href="/learn/how-accurate-is-bazi" className="rounded-xl border border-white/10 bg-white/5 p-4">Read: How accurate is BaZi?</Link>
            <Link href="/tools" className="rounded-xl border border-white/10 bg-white/5 p-4">Try a free tool</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
