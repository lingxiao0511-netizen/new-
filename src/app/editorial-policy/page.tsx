import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description:
    'Learn how LingXiao Metaphysics approaches educational writing, public trust, cultural respect, and clarity for international readers.',
  openGraph: {
    title: 'Editorial Policy | LingXiao Metaphysics',
    description:
      'A public explanation of how this site writes, edits, and presents Chinese metaphysics content responsibly.',
    type: 'website',
  },
};

const principles = [
  'We prioritize clarity over mystique and avoid language that promises guaranteed outcomes.',
  'We present Chinese metaphysics as a cultural and interpretive framework, not as a substitute for professional, legal, financial, or medical advice.',
  'We write for international readers who may be encountering these systems for the first time.',
  'We aim to explain uncertainty directly, especially when birth data is incomplete or interpretation depends on tradition-specific choices.',
  'We prefer educational usefulness and trust-building over sensational claims designed only to drive clicks.',
];

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">Editorial Policy</p>
          <h1 className="text-5xl font-serif font-bold mt-4">How We Write and Review Content</h1>
          <p className="text-[#7a6d60] text-lg mt-6 leading-relaxed">
            Public trust depends on more than design. It depends on how a site explains what it is doing. This editorial policy outlines how LingXiao Metaphysics approaches educational content, public communication, and cultural responsibility.
          </p>
        </div>

        <div className="organics rounded-2xl p-8 md:p-10 mb-16">
          <h2 className="text-3xl font-serif font-bold">Core editorial principles</h2>
          <div className="mt-6 space-y-4 text-[#504035] leading-relaxed">
            {principles.map((item) => (
              <p key={item}>• {item}</p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="organics rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold">What we avoid</h2>
            <div className="mt-4 space-y-3 text-[#504035] leading-relaxed">
              <p>• Guaranteed prediction language</p>
              <p>• “100% accurate” style claims</p>
              <p>• Emotional manipulation designed to force urgency</p>
              <p>• Treating educational content as if it were absolute certainty</p>
            </div>
          </div>
          <div className="organics rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold">What we want content to do</h2>
            <div className="mt-4 space-y-3 text-[#504035] leading-relaxed">
              <p>• Help readers understand the system step by step</p>
              <p>• Lower confusion for first-time users</p>
              <p>• Build trust before asking for a purchase</p>
              <p>• Keep cultural framing respectful and modern</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
