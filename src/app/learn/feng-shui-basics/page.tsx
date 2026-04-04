import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Feng Shui Basics',
  description:
    'A beginner-friendly introduction to Feng Shui, its historical roots, and its relationship to Chinese cosmology and space.',
  openGraph: {
    title: 'Feng Shui Basics | LingXiao Metaphysics',
    description:
      'Learn what Feng Shui means historically, how it relates to orientation and environment, and why modern internet clichés miss the point.',
    type: 'article',
  },
};

export default function FengShuiBasicsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">Related Systems</p>
        <h1 className="text-5xl font-serif font-bold mt-4">Feng Shui Basics for Beginners</h1>
        <p className="text-[#7a6d60] text-lg mt-6 leading-relaxed">
          Feng Shui is often simplified online into décor tips, lucky objects, or instant wealth hacks. Historically, it is much broader than that. At its root, Feng Shui is a traditional Chinese system for understanding how environment, orientation, landscape, and built space relate to human life.
        </p>

        <div className="organics rounded-2xl p-8 md:p-10 mt-10 space-y-6 text-[#504035] leading-relaxed">
          <p>
            The phrase Feng Shui literally means “wind-water.” Traditional explanations connect it to the flow of qi through landforms, water, structures, and orientation. Historically, the practice was linked not only to homes but also to graves, city planning, architecture, and the broader logic of cosmological alignment.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14] pt-4">Why Feng Shui is not just interior design</h2>
          <p>
            Modern pop culture often reduces Feng Shui to placing objects in corners. That is only a fragment of the story. Older traditions paid close attention to terrain, directional logic, astronomical orientation, and the relationship between structures and surrounding forms.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14] pt-4">How it connects to Chinese metaphysics</h2>
          <p>
            Feng Shui belongs to the same wider cultural and cosmological world as yin-yang theory, the Five Elements, calendrical systems, and other Chinese metaphysical arts. That does not mean every school uses exactly the same logic, but they often share a language of correspondence, timing, and environmental relationship.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14] pt-4">Why beginners get confused</h2>
          <p>
            Beginners often encounter contradictory advice because “Feng Shui” is an umbrella term covering different schools, lineages, and levels of seriousness. Public launch content should make this explicit instead of pretending there is one single universal rulebook.
          </p>

          <h2 className="text-3xl font-serif font-bold text-[#231a14] pt-4">A responsible modern framing</h2>
          <p>
            If a modern site includes Feng Shui content, it should present the topic carefully: explain historical roots, avoid exaggerated outcome claims, and make clear where the content is educational, interpretive, or service-based.
          </p>
        </div>

        <div className="organics rounded-2xl p-8 md:p-10 mt-10">
          <h2 className="text-3xl font-serif font-bold">Explore related topics</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#504035]">
            <Link href="/learn/five-elements-explained" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">Read: Five Elements explained</Link>
            <Link href="/learn/what-is-bazi" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">Read: What is BaZi?</Link>
            <Link href="/reports" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">Explore reports</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
