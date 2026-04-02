import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tools',
  description: 'Explore free BaZi, Five Elements, and compatibility tools designed to turn curiosity into meaningful engagement.',
  openGraph: {
    title: 'Tools | LingXiao Metaphysics',
    description: 'Explore the core free tools for BaZi, Five Elements, and compatibility.',
    type: 'website',
  },
};

export default function ToolsPage() {
  const tools = [
    {
      title: 'Free BaZi Chart',
      desc: 'Generate a structured Four Pillars entry point and understand the basic architecture of your chart.',
      outputs: ['Four Pillars overview', 'Day Master starter insight', 'Entry-level AI explanation'],
      cta: 'Use this as the main acquisition tool',
    },
    {
      title: 'Five Elements Profile',
      desc: 'A lighter, faster tool for beginners who want a simple explanation of elemental balance and personality tendency.',
      outputs: ['Dominant element', 'Balance snapshot', 'Beginner-friendly personality framing'],
      cta: 'Ideal for social sharing and low-friction entry',
    },
    {
      title: 'Compatibility Checker',
      desc: 'Compare two symbolic structures and surface strengths, tension points, and reasons to upgrade into a deeper report.',
      outputs: ['Match pattern summary', 'Strengths and friction points', 'Upgrade path to paid reading'],
      cta: 'Best for interaction, sharing, and paid conversion',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Tools</p>
          <h1 className="text-5xl font-serif font-bold mt-4">Start with Useful Free Tools</h1>
          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            The tools layer is where visitors first feel practical value. It turns abstract interest into interaction, trust, and eventually paid conversion.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 mb-10">
          <h2 className="text-3xl font-serif font-bold">Which tool should a new visitor start with?</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4"><span className="text-white">Choose Free BaZi Chart</span> if you want the strongest first-touch product and the clearest path into reports.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4"><span className="text-white">Choose Five Elements Profile</span> if you want a lighter and faster beginner entry point.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4"><span className="text-white">Choose Compatibility Checker</span> if you want higher interaction and stronger emotional conversion potential.</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tools.map((tool) => (
            <div key={tool.title} className="glass-card rounded-2xl">
              <h2 className="text-2xl font-serif font-bold">{tool.title}</h2>
              <p className="text-gray-400 mt-4 leading-relaxed">{tool.desc}</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {tool.outputs.map((item) => (
                  <li key={item} className="flex items-start"><span className="text-[#7dd3fc] mr-3">✦</span>{item}</li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-[#7dd3fc]/20 bg-[#7dd3fc]/5 px-4 py-3 text-sm text-gray-200">
                {tool.cta}
              </div>
              <div className="mt-6 space-y-2 text-sm text-gray-400">
                <p><span className="text-white">Input:</span> Birth date, optional time, optional gender</p>
                <p><span className="text-white">Output:</span> Instant symbolic summary with upgrade path</p>
                <p><span className="text-white">Best for:</span> Early trust, onboarding, and next-step conversion</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold">Before a user tries a tool</h2>
            <div className="mt-4 space-y-3 text-gray-300 leading-relaxed text-sm">
              <p>• Make sure the user understands what birth data matters.</p>
              <p>• Explain what happens if birth time is missing.</p>
              <p>• Keep the output useful, but not so exhaustive that reports lose their value.</p>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold">Good supporting pages for the tools layer</h2>
            <div className="mt-4 space-y-3 text-gray-300 leading-relaxed text-sm">
              <p>• <a href="/getting-started" className="text-white hover:text-[#7dd3fc]">Getting Started</a></p>
              <p>• <a href="/learn/unknown-birth-time" className="text-white hover:text-[#7dd3fc]">Unknown birth time</a></p>
              <p>• <a href="/learn/how-we-use-ai" className="text-white hover:text-[#7dd3fc]">How we use AI</a></p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-serif font-bold">Why the tools layer matters</h2>
          <p className="text-gray-400 mt-4 max-w-3xl leading-relaxed">
            Free tools should not give everything away. They should deliver enough value to feel useful, while naturally opening the path to deeper reports, email capture, and repeat engagement.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">A strong free tool lowers friction and gives users an immediate reason to trust the product.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Lightweight outputs are easier to share and are more suitable for early international acquisition.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">The best MVP tool is useful on its own, but naturally incomplete enough to support paid upgrades.</div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="/reports" className="btn-primary inline-block text-center">See upgrade paths</a>
            <a href="/learn" className="btn-secondary inline-block text-center">Read educational guides</a>
          </div>
        </div>
      </div>
    </main>
  );
}
