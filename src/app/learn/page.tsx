import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learn',
  description: 'An educational content hub for Chinese metaphysics topics, beginner guides, and SEO-oriented explanations.',
  openGraph: {
    title: 'Learn | LingXiao Metaphysics',
    description: 'Read guides that explain BaZi, Five Elements, and related Chinese metaphysics topics clearly.',
    type: 'website',
  },
};

export default function LearnPage() {
  const posts = [
    {
      title: 'What is Bazi?',
      angle: 'Foundational explainer',
    },
    {
      title: 'What is Zi Wei Dou Shu?',
      angle: 'Broader system introduction',
    },
    {
      title: 'Bazi vs Western Astrology',
      angle: 'Comparison content for trust and curiosity',
    },
    {
      title: 'Five Elements Explained',
      angle: 'Beginner-friendly concept bridge',
    },
    {
      title: 'What Does Your Day Master Mean?',
      angle: 'Higher-intent educational search content',
    },
    {
      title: 'Can AI Read Bazi Correctly?',
      angle: 'Trust-building and conversion-support content',
    },
    {
      title: 'What if I do not know my birth time?',
      angle: 'High-friction FAQ content',
    },
    {
      title: 'Why Chinese astrology feels different from tarot',
      angle: 'Social and comparison-driven content',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Learn</p>
          <h1 className="text-5xl font-serif font-bold mt-4">Build Search Traffic Through Education</h1>
          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            The content layer should explain concepts clearly, answer objections, earn search traffic, and guide readers toward tools and reports without sounding mystical for the sake of mystique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {posts.map((post) => (
            <div key={post.title} className="glass-card rounded-2xl">
              <h2 className="text-2xl font-serif font-bold">{post.title}</h2>
              <p className="text-sm text-[#7dd3fc] mt-3 uppercase tracking-wide">{post.angle}</p>
              <p className="text-gray-400 mt-4 leading-relaxed">
                This article type is designed to strengthen SEO coverage and guide readers into the product funnel.
              </p>
              <div className="mt-6 text-sm text-gray-500">Status: MVP topic card</div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-serif font-bold">Editorial direction for international readers</h2>
          <p className="text-gray-400 mt-4 max-w-3xl leading-relaxed">
            The tone should be calm, structured, and culturally informed. Avoid sounding like literal translation copy or exaggerated certainty-based mysticism. The strongest voice is explanatory, modern, and trust-oriented.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="/tools" className="btn-primary inline-block text-center">Move readers into tools</a>
            <a href="/reports" className="btn-secondary inline-block text-center">Show report products</a>
          </div>
        </div>
      </div>
    </main>
  );
}
