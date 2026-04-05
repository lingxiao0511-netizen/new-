import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn what LingXiao Metaphysics is, who it is for, and how the platform approaches Chinese metaphysics with clarity and responsible boundaries.',
  openGraph: {
    title: 'About | LingXiao Metaphysics',
    description:
      'A clear introduction to LingXiao Metaphysics, its purpose, and the principles behind the platform.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">About</p>
          <h1 className="text-5xl font-serif font-bold mt-4">A clearer way to explore Chinese metaphysics</h1>
          <p className="text-[#7a6d60] text-lg mt-6 leading-relaxed">
            LingXiao Metaphysics is designed for readers who want to learn, explore tools, and request more structured readings without getting lost in vague mystical language.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="organics rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold">What this platform is</h2>
            <div className="mt-4 space-y-4 text-[#504035] leading-relaxed">
              <p>LingXiao Metaphysics is a Chinese metaphysics platform built around educational content, practical tools, and structured interpretive reports.</p>
              <p>It is not positioned as a “guaranteed fortune telling” website. The goal is to help people understand symbolic systems with more clarity and less confusion.</p>
            </div>
          </div>

          <div className="organics rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold">Who it is for</h2>
            <div className="mt-4 space-y-4 text-[#504035] leading-relaxed">
              <p>It is for international readers who are curious about BaZi, Five Elements, compatibility, and related traditions, but want a calmer and more structured starting point.</p>
              <p>It is also for readers who want to try tools first, learn at their own pace, and only go deeper when they are ready.</p>
            </div>
          </div>
        </div>

        <div className="organics rounded-2xl p-8 md:p-10 mb-16">
          <h2 className="text-3xl font-serif font-bold">What makes the approach different</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#504035]">
            <div className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4">Clarity before mystique</div>
            <div className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4">Learning before pressure to buy</div>
            <div className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4">Interpretation with boundaries, not certainty-heavy promises</div>
            <div className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4">Respect for tradition presented in a modern, readable way</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="organics rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold">Important boundaries</h2>
            <div className="mt-4 space-y-3 text-[#504035] leading-relaxed">
              <p>• No guaranteed prediction or 100% accuracy claims</p>
              <p>• No medical, legal, financial, or other professional advice</p>
              <p>• Birth data should be handled with clear expectations around use and privacy</p>
              <p>• Readings are framed as guidance, reflection, and interpretation</p>
            </div>
          </div>

          <div className="organics rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold">Best next steps</h2>
            <div className="mt-4 space-y-3 text-[#504035] leading-relaxed">
              <p>• Start with the beginner guide if you are new</p>
              <p>• Try the free tools if you want hands-on exploration</p>
              <p>• Read the methodology before choosing a report</p>
              <p>• Contact us if you want a more tailored next step</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/getting-started" className="btn-primary inline-block text-center">Start here</Link>
          <Link href="/tools" className="btn-secondary inline-block text-center">Explore free tools</Link>
          <Link href="/methodology" className="btn-secondary inline-block text-center">Read our approach</Link>
        </div>
      </div>
    </main>
  );
}
