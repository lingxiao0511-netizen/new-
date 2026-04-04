import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sources & References',
  description:
    'A public note on the kinds of reference material used to inform educational content on LingXiao Metaphysics.',
  openGraph: {
    title: 'Sources & References | LingXiao Metaphysics',
    description:
      'Learn how educational content on this site is informed by public reference material and rewritten for clarity.',
    type: 'website',
  },
};

const sources = [
  'Public reference overviews on Four Pillars of Destiny / BaZi',
  'Public reference overviews on Wuxing / Five Elements',
  'Public reference overviews on Feng Shui and related historical context',
  'Traditional terminology and widely used English-language explanatory vocabulary',
  'Internal editorial rewriting for clarity, accessibility, and product trust',
];

export default function SourcesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">Sources</p>
          <h1 className="text-5xl font-serif font-bold mt-4">Sources & References</h1>
          <p className="text-[#7a6d60] text-lg mt-6 leading-relaxed">
            The educational content on this site is written as original explanatory copy. It is informed by publicly available reference material, historical overview sources, and broader Chinese metaphysics terminology used in common English-language discussion.
          </p>
        </div>

        <div className="organics rounded-2xl p-8 md:p-10 mb-16">
          <h2 className="text-3xl font-serif font-bold">Reference categories</h2>
          <div className="mt-6 space-y-4 text-[#504035] leading-relaxed">
            {sources.map((item) => (
              <p key={item}>• {item}</p>
            ))}
          </div>
        </div>

        <div className="organics rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-serif font-bold">Important note</h2>
          <div className="mt-6 space-y-4 text-[#504035] leading-relaxed">
            <p>
              This page is not intended as a full academic bibliography. It exists to make the site’s editorial posture more transparent: educational articles are not being presented as revealed truth or unexplained authority.
            </p>
            <p>
              Before broader public launch, this page can be expanded into a more formal reference index if the site develops a larger long-form content library.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
