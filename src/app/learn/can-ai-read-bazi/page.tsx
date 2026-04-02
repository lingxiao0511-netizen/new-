import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Can AI Read BaZi Correctly?',
  description:
    'A transparent explanation of where rules-based calculation helps, where AI interpretation helps, and where product trust can break down.',
  openGraph: {
    title: 'Can AI Read BaZi Correctly? | LingXiao Metaphysics',
    description:
      'Understand how structured calculation and AI-assisted explanation can work together in a modern BaZi reading experience.',
    type: 'article',
  },
};

export default function CanAiReadBaziPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Trust & Clarity</p>
        <h1 className="text-5xl font-serif font-bold mt-4">Can AI Read BaZi Correctly?</h1>
        <p className="text-gray-400 text-lg mt-6 leading-relaxed">
          This is one of the most important questions for any modern metaphysics website. The honest answer is that AI can help, but only when it is used carefully. If a site relies on vague text generation alone, trust breaks quickly. If calculation is handled clearly first and explanation comes after, the experience becomes much stronger.
        </p>

        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10 space-y-6 text-gray-300 leading-relaxed">
          <h2 className="text-3xl font-serif font-bold text-white">What AI is good at</h2>
          <p>
            AI is good at making dense symbolic output readable. It can summarize chart structure, explain terminology in plain English, organize long-form interpretation, and tailor tone for beginners who would otherwise be overwhelmed.
          </p>

          <h2 className="text-3xl font-serif font-bold text-white">What AI is not good at on its own</h2>
          <p>
            AI is not reliable if it is asked to invent the chart logic from scratch. Without a clear calculation method behind it, the model may sound fluent while being inconsistent, overly general, or simply wrong about technical details.
          </p>

          <h2 className="text-3xl font-serif font-bold text-white">A more reliable way to do it</h2>
          <p>
            A trustworthy experience usually works in two steps. First, a clear calculation method determines the chart and organizes the technical signals. Second, AI helps translate those signals into readable guidance. This makes the reading easier to understand and more credible to users.
          </p>

          <h2 className="text-3xl font-serif font-bold text-white">Where human judgment still matters</h2>
          <p>
            Human review still matters for advanced readings, unusual charts, cultural nuance, and sensitive user questions. AI can support interpretation, but it should not automatically claim expert authority in every case.
          </p>

          <h2 className="text-3xl font-serif font-bold text-white">Why transparency matters</h2>
          <p>
            Many readers are already skeptical of low-quality “AI fortune telling” sites. A transparent article like this helps show the difference between a thoughtful reading experience and a gimmick. It gives readers a clearer sense of what the site is actually trying to do.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10">
          <h2 className="text-3xl font-serif font-bold">Where to go next</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <Link href="/learn/how-we-use-ai" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#7dd3fc]/30 transition-colors">Read next: How we use AI</Link>
            <Link href="/tools" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#7dd3fc]/30 transition-colors">Try free tools</Link>
            <Link href="/reports" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#7dd3fc]/30 transition-colors">Explore report products</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
