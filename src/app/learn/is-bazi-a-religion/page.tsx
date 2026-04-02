import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Is BaZi a Religion?',
  description: 'A concise explanation of how BaZi relates to tradition, culture, and interpretation rather than organized religion.',
  openGraph: {
    title: 'Is BaZi a Religion? | LingXiao Metaphysics',
    description: 'Understand how BaZi is typically positioned culturally and interpretively, and why this question matters for modern readers.',
    type: 'article',
  },
};

export default function IsBaziAReligionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Culture & Context</p>
        <h1 className="text-5xl font-serif font-bold mt-4">Is BaZi a Religion?</h1>
        <p className="text-gray-400 text-lg mt-6 leading-relaxed">Many international readers ask this because they want cultural context before engaging with the subject. In most modern usage, BaZi is better understood as a traditional metaphysical and interpretive system rather than an organized religion.</p>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10 space-y-6 text-gray-300 leading-relaxed">
          <p>BaZi emerged from broader Chinese cosmological thought, calendrical systems, yin-yang theory, and Five Element relationships. It may overlap historically with religious, philosophical, and ritual worlds, but it is not identical to joining a religion or following a single creed.</p>
          <p>This distinction matters for public websites. Many users are open to symbolic frameworks, but they do not want to feel that they are being pushed into belief language they did not consent to.</p>
          <p>A clear content strategy should present BaZi as a cultural and interpretive system, explain its roots respectfully, and avoid both sensational mysticism and dismissive oversimplification.</p>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <Link href="/methodology" className="rounded-xl border border-white/10 bg-white/5 p-4">Read methodology</Link>
            <Link href="/learn/what-is-bazi" className="rounded-xl border border-white/10 bg-white/5 p-4">Read: What is BaZi?</Link>
            <Link href="/learn/feng-shui-basics" className="rounded-xl border border-white/10 bg-white/5 p-4">Read: Feng Shui basics</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
