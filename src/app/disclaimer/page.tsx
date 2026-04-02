import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Important disclaimers about symbolic interpretation, personal judgment, and non-professional guidance.',
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Disclaimer</p>
        <h1 className="text-5xl font-serif font-bold mt-4">Disclaimer</h1>
        <div className="glass-card rounded-2xl mt-10 space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-3">1. Cultural and Reflective Use</h2>
            <p>This website provides educational content, symbolic interpretation, and reflective insight related to Chinese metaphysics. It is intended for personal exploration, cultural learning, and structured guidance.</p>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-3">2. No Guaranteed Outcomes</h2>
            <p>We do not guarantee future events, exact predictions, life outcomes, or 100% accuracy. Any interpretation should be understood as guidance rather than certainty.</p>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-3">3. No Professional Advice</h2>
            <p>Nothing on this website should be treated as medical, legal, tax, financial, mental health, or other licensed professional advice. Always seek appropriate professional support for high-stakes decisions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-3">4. Personal Responsibility</h2>
            <p>You remain responsible for your own decisions, actions, and judgments. Interpretations, tools, and reports should be used thoughtfully and in context.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
