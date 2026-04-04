import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Understanding Your Five Elements Profile: Wood, Fire, Earth, Metal, Water',
  description:
    'A practical guide to reading your personal Five Elements balance in a BaZi chart — what dominance or deficiency reveals about your energy, health, relationships, and career.',
  openGraph: {
    title: 'Your Five Elements Profile | LingXiao Metaphysics',
    description:
      'A practical guide to reading your Five Elements balance in a BaZi chart.',
    type: 'article',
  },
};

export default function FiveElementsProfile() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4">
        <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">April 4, 2026 · 12 min read</p>
        <h1 className="text-5xl font-serif font-bold mt-4">Understanding Your Five Elements Profile</h1>
        <p className="text-[#7a6d60] text-lg mt-6 leading-relaxed">
          The Five Elements are the vocabulary of BaZi. Your personal balance of Wood, Fire, Earth, Metal, and Water reveals patterns in how you think, work, relate to others, and respond to stress — and knowing those patterns is the first step toward using them productively.
        </p>

        <div className="organics rounded-2xl p-8 md:p-10 mt-10 space-y-6 text-[#504035] leading-relaxed">
          <p>
            If you have ever looked at a BaZi chart for the first time, the most striking thing is probably the colour-coding — green, red, brown, grey, blue — each representing one of the Five Elements. But those colours are not decoration. They are a condensed report of the elemental forces active at the moment you were born.
          </p>
          <p>
            The Five Elements (Wu Xing 五行) are not chemical substances. They are energetic patterns, more like verbs than nouns. Wood means "growing outward." Fire means "rising and expressing." Earth means "stabilizing and integrating." Metal means "contracting and refining." Water means "flowing inward."
          </p>
          <p>
            A typical BaZi chart contains between four and eight visible elements (not counting hidden branch elements). Some elements will appear more often than others. The question practitioners ask is never "which element are you?" but "what is the balance, where are the gaps, and what does that structure tell you about your natural tendencies?"
          </p>

          <h2 className="text-3xl font-serif font-bold pt-4">The five relationships</h2>
          <p>
            The Five Elements do not exist in isolation. They generate each other in a productive cycle and control each other in a regulating cycle.
          </p>
          <p>
            <strong className="text-[#231a14]">Productive cycle:</strong> Water nourishes Wood. Wood feeds Fire. Fire creates Earth (ash). Earth produces Metal. Metal enriches Water. This is the cycle of growth and support.
          </p>
          <p>
            <strong className="text-[#231a14]">Controlling cycle:</strong> Water extinguishes Fire. Fire melts Metal. Metal cuts Wood. Wood breaks Earth. Earth absorbs Water. This is not destructive — it is the cycle of boundaries, structure, and self-regulation.
          </p>
          <p>
            A good chart reading will identify which elements are dominant and which are weak, then map those patterns onto practical life advice: career environments that suit you, relationship dynamics to watch for, health areas that need attention, and timing for major decisions.
          </p>

          <h2 className="text-3xl font-serif font-bold pt-4">What dominance means</h2>
          <p>
            When a particular element appears three or more times in a chart, it is considered dominant. Here is what that typically looks like in practice:
          </p>
          <p>
            <strong className="text-[#231a14]">Excessive Wood</strong> — ambitious, growth-oriented, always planning the next step. Shadow: impatience, difficulty resting, tendency to overcommit.
          </p>
          <p>
            <strong className="text-[#231a14]">Excessive Fire</strong> — expressive, warm, natural leader. Shadow: burnout, emotional volatility, difficulty with follow-through.
          </p>
          <p>
            <strong className="text-[#231a14]">Excessive Earth</strong> — stable, reliable, excellent at building systems. Shadow: rigidity, resistance to change, over-caution.
          </p>
          <p>
            <strong className="text-[#231a14]">Excessive Metal</strong> — analytical, disciplined, strong sense of justice. Shadow: perfectionism, emotional distance, difficulty delegating.
          </p>
          <p>
            <strong className="text-[#231a14]">Excessive Water</strong> — adaptable, intuitive, excellent at reading people. Shadow: indecision, overthinking, difficulty setting boundaries.
          </p>
          <p>
            None of these are good or bad. They are structural observations. The most useful readings pair element analysis with practical guidance — not horoscope-style personality labels.
          </p>

          <h2 className="text-3xl font-serif font-bold pt-4">What deficiency means</h2>
          <p>
            When an element is missing or very weak, it often points to areas of life that feel less natural or require conscious effort to develop. A reader might suggest strategies for compensating — choosing environments, relationships, or routines that bring the missing energy into balance.
          </p>
          <p>
            For example, a chart with no Earth element might suggest someone who struggles with routine or stability. Rather than forcing themselves into rigid structures, they might benefit from building small, consistent habits that gradually strengthen their Earth foundation.
          </p>

          <h2 className="text-3xl font-serif font-bold pt-4">Practical next steps</h2>
          <p>
            Understanding your Five Elements profile is a starting point, not an endpoint. The most useful things you can do with that knowledge are:
          </p>
          <p>
            1. Identify career environments that align with your dominant element structure rather than fighting against it.
          </p>
          <p>
            2. Recognize relationship patterns — why you click with certain people and clash with others — in terms of elemental compatibility rather than personality judgments.
          </p>
          <p>
            3. Use timing guidance from your luck pillars to plan major moves during periods when the elemental climate supports your goals.
          </p>
          <p>
            4. Build daily routines that compensate for element deficiencies in a gentle, sustainable way.
          </p>
          <p>
            You can generate your own elemental profile using the free tools on this site, or explore a deeper personalized report that covers career, relationships, and timing in much more detail.
          </p>
        </div>

        <div className="organics rounded-2xl p-8 md:p-10 mt-10">
          <h2 className="text-2xl font-serif font-bold">Keep reading</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/blog/2026-04-04-what-makes-bazi-different-from-western-astrology" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">
              <p className="text-[#5ba4a4] text-xs uppercase tracking-wide">Blog</p>
              <p className="font-serif font-bold mt-1">BaZi vs Western Astrology</p>
            </a>
            <a href="/blog/2026-04-04-how-bazi-can-help-with-career-choices" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">
              <p className="text-[#5ba4a4] text-xs uppercase tracking-wide">Blog</p>
              <p className="font-serif font-bold mt-1">BaZi for Career Choices</p>
            </a>
            <a href="/learn/five-elements-explained" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">
              <p className="text-[#5ba4a4] text-xs uppercase tracking-wide">Learn</p>
              <p className="font-serif font-bold mt-1">Five Elements Explained</p>
            </a>
            <a href="/tools" className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4 hover:border-[#5ba4a4]/30 transition-colors">
              <p className="text-[#5ba4a4] text-xs uppercase tracking-wide">Tools</p>
              <p className="font-serif font-bold mt-1">Free BaZi Calculator</p>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
