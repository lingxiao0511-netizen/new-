import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Approach',
  description:
    'Learn how LingXiao Metaphysics presents Chinese metaphysics in a clear, respectful, and modern way for international readers.',
  openGraph: {
    title: 'Our Approach | LingXiao Metaphysics',
    description:
      'Understand how this site explains Chinese metaphysics with clarity, respect, and responsible boundaries.',
    type: 'website',
  },
};

const values = [
  {
    title: 'Clarity before mystique',
    body: 'This site is designed to make Chinese metaphysics easier to understand. The goal is not to overwhelm readers with jargon, but to explain unfamiliar ideas in a structured and readable way.',
  },
  {
    title: 'Respect for tradition',
    body: 'BaZi, Five Elements, and related systems come from long cultural traditions. We present them with respect for their history while also writing for modern international readers.',
  },
  {
    title: 'Responsible boundaries',
    body: 'Readings and educational content on this site are intended for reflection and interpretation. They are not presented as guarantees, fixed destiny, or substitutes for professional advice.',
  },
  {
    title: 'A better user experience',
    body: 'We believe people should be able to learn first, try tools second, and only go deeper when they actually want a more detailed reading.',
  },
];

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Our Approach</p>
          <h1 className="text-5xl font-serif font-bold mt-4">How We Present Chinese Metaphysics</h1>
          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            LingXiao Metaphysics is built for readers who want a calmer, clearer introduction to Chinese metaphysics. Instead of dramatic claims or vague mystical language, the site focuses on explanation, structure, and a more thoughtful user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {values.map((item) => (
            <div key={item.title} className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold">{item.title}</h2>
              <p className="text-gray-400 mt-4 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 mb-16">
          <h2 className="text-3xl font-serif font-bold">What you can expect here</h2>
          <div className="mt-6 space-y-4 text-gray-300 leading-relaxed">
            <p>• Beginner-friendly guides that explain terminology step by step</p>
            <p>• Practical tools that help readers explore charts and symbolic patterns</p>
            <p>• Deeper reports for people who want a more structured interpretation</p>
            <p>• Clear boundaries around what this site does and does not claim</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-serif font-bold">Why this matters</h2>
          <div className="mt-6 space-y-4 text-gray-300 leading-relaxed">
            <p>
              Many people discover Chinese metaphysics through fragmented social posts, overconfident promises, or oversimplified personality content. This site aims to offer a more grounded alternative: one that helps people learn, explore, and decide for themselves what feels meaningful.
            </p>
            <p>
              That means building trust through clarity, not trying to impress readers with secrecy or exaggerated certainty.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
