import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tools',
  description: 'Explore free BaZi, Five Elements, and compatibility tools for learning and self-exploration.',
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
      desc: 'Generate a Four Pillars overview and understand the basic structure of your chart.',
      outputs: ['Four Pillars overview', 'Day Master starter insight', 'Beginner-friendly explanation'],
      cta: 'A strong place to begin if you are new to BaZi',
    },
    {
      title: 'Five Elements Profile',
      desc: 'A lighter, faster tool for beginners who want a simple explanation of elemental balance and personality tendency.',
      outputs: ['Dominant element', 'Balance snapshot', 'Beginner-friendly personality framing'],
      cta: 'Ideal for social sharing and low-friction entry',
    },
    {
      title: 'Compatibility Checker',
      desc: 'Compare two symbolic structures and explore strengths, tension points, and relationship patterns.',
      outputs: ['Match pattern summary', 'Strengths and friction points', 'Next-step reading suggestions'],
      cta: 'A good choice for relationship-focused questions',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Tools</p>
          <h1 className="text-5xl font-serif font-bold mt-4">Explore Free Tools</h1>
          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            These tools are designed to give you a practical starting point. Whether you want to explore your BaZi chart, look at Five Elements, or compare symbolic patterns, you can begin here.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 mb-10">
          <h2 className="text-3xl font-serif font-bold">Which tool should a new visitor start with?</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4"><span className="text-white">Choose Free BaZi Chart</span> if you want a fuller introduction to your own chart.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4"><span className="text-white">Choose Five Elements Profile</span> if you want a lighter and faster beginner starting point.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4"><span className="text-white">Choose Compatibility Checker</span> if your main question is about two people and their relationship patterns.</div>
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
                <p><span className="text-white">Output:</span> Instant symbolic summary with suggestions for what to explore next</p>
                <p><span className="text-white">Best for:</span> A first step into exploring your chart and symbolic patterns</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold">Before you try a tool</h2>
            <div className="mt-4 space-y-3 text-gray-300 leading-relaxed text-sm">
              <p>• Know which parts of your birth data matter most.</p>
              <p>• Understand what changes if birth time is missing.</p>
              <p>• Treat the tool as a starting point rather than a complete reading.</p>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold">Helpful pages to read with these tools</h2>
            <div className="mt-4 space-y-3 text-gray-300 leading-relaxed text-sm">
              <p>• <a href="/getting-started" className="text-white hover:text-[#7dd3fc]">Getting Started</a></p>
              <p>• <a href="/learn/unknown-birth-time" className="text-white hover:text-[#7dd3fc]">Unknown birth time</a></p>
              <p>• <a href="/learn/how-we-use-ai" className="text-white hover:text-[#7dd3fc]">How we use AI</a></p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-serif font-bold">What these tools are designed to do</h2>
          <p className="text-gray-400 mt-4 max-w-3xl leading-relaxed">
            A good tool should help you get oriented without making things feel overwhelming. It should give you something useful right away, while also leaving room to keep learning if you want to go deeper.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">They help turn unfamiliar concepts into something easier to explore.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">They give beginners a practical way to interact with the system.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">They can also help you decide whether you want a more detailed reading later on.</div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="/reports" className="btn-primary inline-block text-center">Explore reports</a>
            <a href="/learn" className="btn-secondary inline-block text-center">Read guides</a>
          </div>
        </div>
      </div>
    </main>
  );
}
