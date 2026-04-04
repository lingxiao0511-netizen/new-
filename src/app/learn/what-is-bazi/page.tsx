import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What Is BaZi?',
  description:
    'A beginner-friendly introduction to BaZi, also known as the Four Pillars of Destiny, for international readers exploring Chinese metaphysics.',
  openGraph: {
    title: 'What Is BaZi? | LingXiao Metaphysics',
    description:
      'Learn what BaZi means, what the Four Pillars represent, and how to understand the system without relying on exaggerated mystical claims.',
    type: 'article',
  },
};

export default function WhatIsBaziPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">Foundations</p>
        <h1 className="text-5xl font-serif font-bold mt-4">What Is BaZi? A Beginner-Friendly Introduction to the Four Pillars</h1>
        <p className="text-[#7a6d60] text-lg mt-6 leading-relaxed">
          BaZi, often translated as the Four Pillars of Destiny, is one of the best-known systems in Chinese metaphysics. It uses the date and time of birth to build a chart made of four paired markers: year, month, day, and hour. Each pillar contains a Heavenly Stem and an Earthly Branch, so together they form the eight characters that give BaZi its name.
        </p>

        <div className="organics rounded-2xl p-8 md:p-10 mt-10 space-y-6 text-[#504035] leading-relaxed">
          <p>
            For a modern international reader, the most useful way to think about BaZi is not as a shortcut to magical certainty. It is better understood as a symbolic timing system built from traditional Chinese calendrical logic, Five Element relationships, yin-yang polarity, and pattern interpretation.
          </p>
          <p>
            Historically, the system developed from older Chinese methods of tracking time through the Heavenly Stems, Earthly Branches, and sexagenary cycle. Over time, those calendrical markers became part of a larger framework for describing tendencies, personal structure, timing, and interaction patterns.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14] pt-4">What do the four pillars represent?</h2>
          <p>
            In simplified teaching, the four pillars are usually introduced like this: the year pillar is often associated with ancestry or social context, the month pillar with upbringing and early conditioning, the day pillar with the self and close relationships, and the hour pillar with later development, private motivations, or legacy themes. Different traditions emphasize these layers in slightly different ways.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14] pt-4">Why do people focus on the Day Master?</h2>
          <p>
            In many BaZi frameworks, the Day Stem is treated as the anchor of the chart because it represents the person being interpreted. Readers will often hear the phrase Day Master. This is why beginner content frequently starts by asking whether someone is a Wood, Fire, Earth, Metal, or Water Day Master. That can be helpful as an entry point, but real chart reading goes beyond this single label.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14] pt-4">Is BaZi the same as zodiac sign content?</h2>
          <p>
            Not really. Popular zodiac content often simplifies personality into a single symbol. BaZi charts are more structural. They combine time markers, seasonal context, element balance, and relationship logic. Two people born in the same Gregorian year can still have very different charts because the full analysis depends on much more than the year alone.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14] pt-4">What BaZi can and cannot do</h2>
          <p>
            A responsible introduction should also be honest about limits. BaZi is an interpretive system, not a laboratory instrument. It can provide frameworks for reflection, timing awareness, and symbolic pattern reading. It should not be marketed as guaranteed prediction, absolute fate control, or certainty about future events.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14] pt-4">Why BaZi still matters online</h2>
          <p>
            BaZi remains relevant because it gives people a structured language for identity, timing, work, relationships, and life cycles. Online tools can help calculate the chart and explain the basics, while deeper reports can offer more detailed interpretation. The best modern reading experiences calculate the chart clearly first and then use plain language or guided explanation to make the output understandable.
          </p>
        </div>

        <div className="organics rounded-2xl p-8 md:p-10 mt-10">
          <h2 className="text-3xl font-serif font-bold">Where to go next</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#504035]">
            <Link href="/learn/five-elements-explained" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">Read next: Five Elements explained</Link>
            <Link href="/tools" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">Try free tools</Link>
            <Link href="/reports" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">Explore personalized reports</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
