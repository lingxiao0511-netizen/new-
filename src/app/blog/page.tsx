import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Chinese Metaphysics Insights',
  description:
    'Read practical articles on BaZi, the Five Elements, Day Master, and how Chinese metaphysics can guide career, relationships, and self-understanding.',
  openGraph: {
    title: 'Blog | LingXiao Metaphysics',
    description:
      'Practical, modern introductions to Chinese metaphysics for international readers.',
    type: 'website',
  },
};

const posts = [
  {
    slug: 'what-makes-bazi-different-from-western-astrology',
    title: 'What Makes BaZi Different from Western Astrology?',
    date: '2026-04-04',
    excerpt:
      'Both systems map the sky and use it as a mirror for human personality. But BaZi and Western astrology differ in structure, precision, and the way they interpret timing — and knowing these differences helps you choose which system fits your needs.',
    category: 'Comparison',
  },
  {
    slug: 'understanding-your-five-elements-profile',
    title: 'Understanding Your Five Elements Profile: Wood, Fire, Earth, Metal, Water',
    date: '2026-04-04',
    excerpt:
      'The Five Elements are the engine behind much of Chinese metaphysics. They are not static labels but a dynamic relationship model. Understanding your personal element balance can explain patterns in your energy, health, work, and relationships.',
    category: 'Foundations',
  },
  {
    slug: 'how-bazi-can-help-with-career-choices',
    title: 'How BaZi Can Help With Career Choices (And Where It Stops)',
    date: '2026-04-04',
    excerpt:
      'A responsible BaZi reading does not tell you "you must become a doctor." Instead, it reveals structural tendencies: when you work best, what environments drain you, and what kind of timing supports major career moves.',
    category: 'Practical',
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <article className="max-w-5xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">Blog</p>
          <h1 className="text-5xl font-serif font-bold mt-4">Articles on Chinese Metaphysics</h1>
          <p className="text-[#7a6d60] text-lg mt-6 leading-relaxed">
            Clear, practical writing on BaZi, the Five Elements, and related topics. Written for international readers who want depth without mystical exaggeration.
          </p>
        </div>

        <div className="space-y-10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="organics rounded-2xl block hover:border-[#5ba4a4]/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-[0.15em] text-[#5ba4a4] bg-[#5ba4a4]/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-[#7a6d60]">{post.date}</span>
              </div>
              <h2 className="text-3xl font-serif font-bold">{post.title}</h2>
              <p className="text-[#7a6d60] text-lg mt-4 leading-relaxed">{post.excerpt}</p>
              <div className="mt-6 text-[#5ba4a4] font-medium">Read more →</div>
            </Link>
          ))}
        </div>
      </article>
    </main>
  );
}
