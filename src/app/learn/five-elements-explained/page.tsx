import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Five Elements Explained',
  description:
    'A practical guide to understanding Wood, Fire, Earth, Metal, and Water in Chinese metaphysics.',
  openGraph: {
    title: 'Five Elements Explained | LingXiao Metaphysics',
    description:
      'Learn how the Five Elements work as a model of process, relationship, and symbolic interaction in Chinese metaphysics.',
    type: 'article',
  },
};

export default function FiveElementsExplainedPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">Core Concepts</p>
        <h1 className="text-5xl font-serif font-bold mt-4">Five Elements Explained: How Wood, Fire, Earth, Metal, and Water Work</h1>
        <p className="text-[#7a6d60] text-lg mt-6 leading-relaxed">
          One of the first ideas people meet in Chinese metaphysics is the Five Elements: Wood, Fire, Earth, Metal, and Water. A better translation in many cases is Five Phases or Five Movements, because the system is really about interaction and change rather than static material substances.
        </p>

        <div className="organics rounded-2xl p-8 md:p-10 mt-10 space-y-6 text-[#504035] leading-relaxed">
          <p>
            This matters because beginners often imagine the Five Elements as a personality quiz. In practice, the model is more relational. Each element describes tendencies, qualities, and modes of movement. The framework appears across many traditional Chinese systems, including medicine, calendrical thought, cosmology, and metaphysics.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14] pt-4">The generative cycle</h2>
          <p>
            A common teaching sequence is the generating cycle: Wood feeds Fire, Fire creates Earth, Earth bears Metal, Metal gathers Water, and Water nourishes Wood. This cycle helps explain support, production, and resource flow between symbolic forces.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14] pt-4">The controlling cycle</h2>
          <p>
            The Five Elements also operate through a regulating cycle: Wood controls Earth, Earth controls Water, Water controls Fire, Fire controls Metal, and Metal controls Wood. This layer introduces balance, friction, and limits. Many readings rely on seeing how support and control work together rather than treating one element as simply good or bad.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14] pt-4">Why this matters in BaZi</h2>
          <p>
            In BaZi, the Five Elements are central because every stem and branch has elemental associations. Once a chart is calculated, the reader looks at seasonal strength, visible and hidden stems, productive relationships, controlling dynamics, and whether certain elements are excessive, weak, supported, or constrained.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14] pt-4">Why oversimplification causes problems</h2>
          <p>
            Online content often says things like “you are a Water type, so you are emotional” or “you need more Fire.” These phrases may be loosely inspired by real frameworks, but without context they can be misleading. Actual interpretation depends on the whole chart, not a single isolated label.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14] pt-4">A more useful beginner mindset</h2>
          <p>
            The Five Elements are best approached as a language of relationships. They describe growth, expression, grounding, structure, and flow. The value of the framework is not in reducing life to a slogan, but in showing how qualities interact over time.
          </p>
        </div>

        <div className="organics rounded-2xl p-8 md:p-10 mt-10">
          <h2 className="text-3xl font-serif font-bold">Where to go next</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#504035]">
            <Link href="/learn/what-is-bazi" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">Read next: What is BaZi?</Link>
            <Link href="/learn/what-is-a-day-master" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">Read next: What is a Day Master?</Link>
            <Link href="/tools" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">Try free tools</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
