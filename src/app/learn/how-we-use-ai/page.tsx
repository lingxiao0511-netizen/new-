import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How We Use AI',
  description: 'A transparent explanation of how AI is used on LingXiao Metaphysics and where its limits are.',
  openGraph: {
    title: 'How We Use AI | LingXiao Metaphysics',
    description: 'Learn how AI is used for explanation, structure, and readability rather than unchecked certainty.',
    type: 'article',
  },
};

export default function HowWeUseAiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Trust & Product</p>
        <h1 className="text-5xl font-serif font-bold mt-4">How We Use AI on This Site</h1>
        <p className="text-gray-400 text-lg mt-6 leading-relaxed">AI can be helpful in a modern metaphysics product, but users should understand where it helps and where it should be constrained. This page explains that clearly.</p>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10 space-y-6 text-gray-300 leading-relaxed">
          <p>We use AI primarily to make complex symbolic material more readable. That includes explanation, structuring outputs, simplifying terminology, and helping readers navigate a technical system more comfortably.</p>
          <p>We do not treat unconstrained text generation as a substitute for chart logic. The stronger model is rules first, explanation second. That means calculation and structure should come before natural-language interpretation.</p>
          <p>We also recognize that AI has limits. It can sound confident even when nuance is needed. For that reason, public trust depends on transparency rather than exaggerated claims.</p>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <Link href="/methodology" className="rounded-xl border border-white/10 bg-white/5 p-4">Read methodology</Link>
            <Link href="/learn/can-ai-read-bazi" className="rounded-xl border border-white/10 bg-white/5 p-4">Read: Can AI read BaZi?</Link>
            <Link href="/tools" className="rounded-xl border border-white/10 bg-white/5 p-4">Go to tools</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
