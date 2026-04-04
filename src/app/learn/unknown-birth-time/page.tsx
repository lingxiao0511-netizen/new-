import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What If You Do Not Know Your Birth Time?',
  description:
    'Learn what changes in a BaZi reading when the hour of birth is unknown, and what can still be interpreted responsibly.',
  openGraph: {
    title: 'What If You Do Not Know Your Birth Time? | LingXiao Metaphysics',
    description:
      'A practical guide to uncertainty, missing birth time, and how modern metaphysics tools should handle incomplete information.',
    type: 'article',
  },
};

export default function UnknownBirthTimePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">Beginner FAQ</p>
        <h1 className="text-5xl font-serif font-bold mt-4">What If You Do Not Know Your Birth Time?</h1>
        <p className="text-[#7a6d60] text-lg mt-6 leading-relaxed">
          This is one of the most common beginner questions, and it matters for good reason. In BaZi, the hour pillar is one of the four pillars in the chart. If the birth time is unknown, part of the chart is missing. That does not make interpretation impossible, but it does change what can be said responsibly.
        </p>

        <div className="organics rounded-2xl p-8 md:p-10 mt-10 space-y-6 text-[#504035] leading-relaxed">
          <h2 className="text-3xl font-serif font-bold text-[#231a14]">What can still be read?</h2>
          <p>
            The year, month, and day pillars still provide substantial structure. A reader can still discuss broad chart themes, elemental tendencies, seasonal conditions, and many parts of the person’s symbolic framework. For some users, that is enough for an introductory experience.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14]">What becomes less certain?</h2>
          <p>
            Without the hour pillar, some detail is necessarily missing. Depending on the interpretive tradition, this can affect later-life themes, children-related symbolism, inner motivations, hidden dynamics, and parts of timing analysis. It can also affect how confidently a reader judges chart balance.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14]">How should modern tools handle this?</h2>
          <p>
            A trustworthy tool should not pretend the missing hour does not matter. It should clearly explain the limitation, offer partial interpretation where appropriate, and invite the user to update the chart later if more precise data becomes available.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14]">What is the best user experience?</h2>
          <p>
            The best experience is honest and clear. If you know the time, the tool can offer a fuller chart. If you do not, it can still provide an educational overview, explain what remains stable, and show where uncertainty enters the reading.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14]">A good principle to keep in mind</h2>
          <p>
            A trustworthy site should treat incomplete birth data as an opportunity for honesty. Instead of forcing false precision, explain the trade-off clearly. That helps readers understand both the value and the limits of the reading.
          </p>
        </div>

        <div className="organics rounded-2xl p-8 md:p-10 mt-10">
          <h2 className="text-3xl font-serif font-bold">Where to go next</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#504035]">
            <Link href="/learn/what-is-bazi" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">Read next: What is BaZi?</Link>
            <Link href="/getting-started" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">Open getting started guide</Link>
            <Link href="/tools" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">Try free tools</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
