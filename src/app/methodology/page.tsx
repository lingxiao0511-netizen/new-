import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Methodology',
  description:
    'Understand how LingXiao Metaphysics approaches chart calculation, AI-assisted explanation, educational content, and interpretive boundaries.',
  openGraph: {
    title: 'Methodology | LingXiao Metaphysics',
    description:
      'Learn how this site approaches chart logic, AI assistance, educational content, and responsible interpretation.',
    type: 'website',
  },
};

const principles = [
  {
    title: 'Rules first, explanation second',
    body: 'The strongest product structure is to calculate the chart using explicit rules, then use AI or editorial language to make the output understandable. This reduces hallucination risk and improves consistency.',
  },
  {
    title: 'Education before monetization',
    body: 'The site should help readers understand the system before asking for a purchase. Good educational content builds trust more effectively than exaggerated claims.',
  },
  {
    title: 'Interpretation is not certainty',
    body: 'Chinese metaphysics is treated here as a symbolic and interpretive framework. The site does not position readings as guaranteed outcomes or fixed fate control.',
  },
  {
    title: 'Transparency about incomplete data',
    body: 'When users do not know their full birth details, the site should explain what remains interpretable and what becomes less certain.',
  },
];

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Methodology</p>
          <h1 className="text-5xl font-serif font-bold mt-4">How This Site Approaches Chinese Metaphysics</h1>
          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            A public-facing metaphysics site needs more than beautiful design. It needs a method users can understand. This page explains the working principles behind the educational content, tools, and report products presented on LingXiao Metaphysics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {principles.map((item) => (
            <div key={item.title} className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold">{item.title}</h2>
              <p className="text-gray-400 mt-4 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 mb-16">
          <h2 className="text-3xl font-serif font-bold">What the tools layer should do</h2>
          <div className="mt-6 space-y-4 text-gray-300 leading-relaxed">
            <p>• Help users convert birth data into a readable structure.</p>
            <p>• Explain technical concepts without pretending to replace all expert judgment.</p>
            <p>• Clearly distinguish educational output from premium interpretive products.</p>
            <p>• Avoid dramatic certainty language that undermines trust.</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-serif font-bold">Public source and editorial position</h2>
          <div className="mt-6 space-y-4 text-gray-300 leading-relaxed">
            <p>
              Educational articles on this site are original explanatory writing informed by publicly available historical and reference material. The goal is not to reproduce source texts, but to make the subject understandable for international readers.
            </p>
            <p>
              This site aims to present Chinese metaphysics respectfully, with attention to context, terminology, and the difference between symbolic interpretation and guarantee-based prediction.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
