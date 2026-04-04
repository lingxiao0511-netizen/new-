import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BaZi vs Western Astrology',
  description:
    'A comparison guide for readers deciding how BaZi differs from Western astrology in structure, symbolism, and reading style.',
  openGraph: {
    title: 'BaZi vs Western Astrology | LingXiao Metaphysics',
    description:
      'Compare BaZi and Western astrology clearly so new readers understand why the systems feel different.',
    type: 'article',
  },
};

export default function BaziVsWesternAstrologyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">Comparison</p>
        <h1 className="text-5xl font-serif font-bold mt-4">BaZi vs Western Astrology: What Is Actually Different?</h1>
        <p className="text-[#7a6d60] text-lg mt-6 leading-relaxed">
          Many first-time users arrive with a simple question: is BaZi just the Chinese version of astrology? The short answer is no. Both systems are symbolic and both use birth data, but the logic, structure, and interpretive style are different.
        </p>

        <div className="organics rounded-2xl p-8 md:p-10 mt-10 space-y-6 text-[#504035] leading-relaxed">
          <h2 className="text-3xl font-serif font-bold text-[#231a14]">Different chart logic</h2>
          <p>
            Western astrology is usually introduced through planets, signs, houses, and aspects. BaZi is built from time pillars, Heavenly Stems, Earthly Branches, yin-yang polarity, seasonal context, and Five Element relationships. Both are symbolic systems, but they organize meaning differently.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14]">Different emotional feel</h2>
          <p>
            BaZi often feels more structural and process-oriented. Instead of asking whether someone is “like” a certain sign, BaZi tends to ask what forces are present, what supports or controls the self, and how timing changes the chart’s expression.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14]">Different use of time</h2>
          <p>
            Time matters in both systems, but BaZi is especially rooted in traditional calendrical cycles. This makes seasonality and temporal sequence central to interpretation. Many readers experience it as a system of pattern timing as much as personality description.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14]">What they have in common</h2>
          <p>
            Both systems aim to create symbolic maps of life patterns. Both have traditional roots and modern online adaptations. And both can be oversimplified into content bait if the platform cares more about virality than clarity.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14]">Which is better?</h2>
          <p>
            That is usually the wrong question. A better question is which symbolic language helps the reader think more clearly. For this website, comparison content is valuable because it helps new users understand what kind of experience they are stepping into.
          </p>
        </div>

        <div className="organics rounded-2xl p-8 md:p-10 mt-10">
          <h2 className="text-3xl font-serif font-bold">Where to go next</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#504035]">
            <Link href="/learn/what-is-bazi" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">Read next: What is BaZi?</Link>
            <Link href="/learn/can-ai-read-bazi" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">Read next: Can AI read BaZi?</Link>
            <Link href="/tools" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">Try free tools</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
