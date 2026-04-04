import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Is Feng Shui Superstition?',
  description: 'A balanced public-facing answer to one of the most common questions international users ask about Feng Shui.',
  openGraph: {
    title: 'Is Feng Shui Superstition? | LingXiao Metaphysics',
    description: 'A respectful, non-sensational explanation of how to think about Feng Shui historically and culturally.',
    type: 'article',
  },
};

export default function IsFengShuiSuperstitionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">Culture & Context</p>
        <h1 className="text-5xl font-serif font-bold mt-4">Is Feng Shui Superstition?</h1>
        <p className="text-[#7a6d60] text-lg mt-6 leading-relaxed">This question comes up constantly because Feng Shui is often presented online in two extreme ways: either as magical certainty or as something to mock. A better public explanation is more nuanced.</p>
        <div className="organics rounded-2xl p-8 md:p-10 mt-10 space-y-6 text-[#504035] leading-relaxed">
          <p>Historically, Feng Shui developed within a traditional Chinese worldview concerned with orientation, environment, cosmology, and the relation between people and place. That gives it cultural depth beyond internet clichés.</p>
          <p>At the same time, modern scientific frameworks do not generally treat Feng Shui as an empirical science in the modern laboratory sense. This is why the topic is often debated, especially in international contexts.</p>
          <p>For a serious public website, the right move is neither mockery nor blind certainty. It is to explain what Feng Shui is, where it comes from, what claims are cultural or interpretive, and why overblown promises should be avoided.</p>
        </div>
        <div className="organics rounded-2xl p-8 md:p-10 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#504035]">
            <Link href="/learn/feng-shui-basics" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4">Read: Feng Shui basics</Link>
            <Link href="/methodology" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4">Read methodology</Link>
            <Link href="/learn/is-bazi-a-religion" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4">Read: Is BaZi a religion?</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
