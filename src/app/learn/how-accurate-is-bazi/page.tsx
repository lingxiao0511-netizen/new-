import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Accurate Is BaZi?',
  description:
    'A trust-focused article explaining how to think about accuracy, uncertainty, and responsible claims in BaZi.',
  openGraph: {
    title: 'How Accurate Is BaZi? | LingXiao Metaphysics',
    description: 'A transparent explanation of what accuracy can mean in BaZi and what responsible platforms should and should not claim.',
    type: 'article',
  },
};

export default function HowAccurateIsBaziPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Trust & Product</p>
        <h1 className="text-5xl font-serif font-bold mt-4">How Accurate Is BaZi?</h1>
        <p className="text-gray-400 text-lg mt-6 leading-relaxed">
          This is one of the first questions modern readers ask, especially when they are comparing websites. The problem is that “accuracy” can mean several different things. A platform that wants to feel trustworthy should answer this carefully instead of making inflated promises.
        </p>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10 space-y-6 text-gray-300 leading-relaxed">
          <h2 className="text-3xl font-serif font-bold text-white">Technical accuracy</h2>
          <p>
            Technical accuracy refers to whether the chart is calculated correctly. That includes birth data handling, time zones, calendar conversion, and how the system determines pillars and element relationships. This is where structured rules matter most.
          </p>
          <h2 className="text-3xl font-serif font-bold text-white">Interpretive accuracy</h2>
          <p>
            Interpretation is different. Even if the chart is calculated correctly, translating symbolic structure into meaningful language is still an interpretive act. Two skilled readers may agree on the chart structure while expressing the implications differently.
          </p>
          <h2 className="text-3xl font-serif font-bold text-white">Why certainty language is a red flag</h2>
          <p>
            Claims like “100 percent accurate destiny reading” usually reduce trust rather than build it. Responsible public content should explain that BaZi is a symbolic framework for pattern reading and reflection, not a guarantee machine.
          </p>
          <h2 className="text-3xl font-serif font-bold text-white">What a better promise sounds like</h2>
          <p>
            A better promise is clarity, structure, and honest explanation. Tell users the chart is calculated systematically, the interpretation is guided by defined relationships, and uncertainty is acknowledged where needed.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10">
          <h2 className="text-3xl font-serif font-bold">Where to go next</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <Link href="/learn/can-ai-read-bazi" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#7dd3fc]/30 transition-colors">Read next: Can AI read BaZi?</Link>
            <Link href="/tools" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#7dd3fc]/30 transition-colors">Try free tools</Link>
            <Link href="/reports" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#7dd3fc]/30 transition-colors">Explore report products</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
