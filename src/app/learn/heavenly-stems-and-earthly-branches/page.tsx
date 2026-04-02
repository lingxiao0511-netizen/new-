import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Heavenly Stems and Earthly Branches',
  description:
    'A simple introduction to the Heavenly Stems and Earthly Branches that underpin BaZi and other Chinese metaphysical systems.',
  openGraph: {
    title: 'Heavenly Stems and Earthly Branches | LingXiao Metaphysics',
    description: 'Learn the basic role of the Heavenly Stems and Earthly Branches in the Four Pillars system.',
    type: 'article',
  },
};

export default function HeavenlyStemsAndEarthlyBranchesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Foundations</p>
        <h1 className="text-5xl font-serif font-bold mt-4">What Are Heavenly Stems and Earthly Branches?</h1>
        <p className="text-gray-400 text-lg mt-6 leading-relaxed">
          If BaZi is built from four pillars, the Heavenly Stems and Earthly Branches are the building blocks inside those pillars. They come from traditional Chinese calendrical systems and form the structure used to mark years, months, days, and hours.
        </p>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10 space-y-6 text-gray-300 leading-relaxed">
          <p>
            A pillar contains two parts: one stem and one branch. In BaZi, there are four pillars in the chart, so the full chart contains eight characters. This is why BaZi is often translated as “eight characters.”
          </p>
          <p>
            The stems and branches are not just labels. They carry elemental qualities, yin-yang polarity, animal associations, seasonal implications, and relational meaning. Once they combine inside the chart, they create the technical structure that later interpretation depends on.
          </p>
          <h2 className="text-3xl font-serif font-bold text-white">Why beginners should care</h2>
          <p>
            Beginners do not need to memorize every combination at once. What matters first is understanding that BaZi is not based only on the zodiac animal of the birth year. The stems and branches create a much richer structure than year-sign astrology alone.
          </p>
          <h2 className="text-3xl font-serif font-bold text-white">Why this matters for trust</h2>
          <p>
            A website that explains stems and branches clearly immediately feels more serious. It helps users understand that the system has an internal grammar instead of random personality statements.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-8 md:p-10 mt-10">
          <h2 className="text-3xl font-serif font-bold">Where to go next</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <Link href="/learn/what-is-bazi" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#7dd3fc]/30 transition-colors">Read next: What is BaZi?</Link>
            <Link href="/learn/what-is-a-day-master" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#7dd3fc]/30 transition-colors">Read next: What is a Day Master?</Link>
            <Link href="/tools" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#7dd3fc]/30 transition-colors">Try free tools</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
