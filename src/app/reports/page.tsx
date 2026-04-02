import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reports',
  description: 'Structured report products for validating monetization and building a repeatable revenue layer.',
  openGraph: {
    title: 'Reports | LingXiao Metaphysics',
    description: 'Explore report products designed to convert free users into paying customers.',
    type: 'website',
  },
};

export default function ReportsPage() {
  const reports = [
    {
      title: 'BaZi Basic Report',
      price: '$19',
      audience: 'For first-time paid users',
      desc: 'A light product that validates payment willingness without overwhelming the user with complexity.',
      features: ['Core chart summary', 'Five Elements interpretation', 'Introductory guidance'],
    },
    {
      title: 'Compatibility Report',
      price: '$29',
      audience: 'For pair-based and emotionally resonant use cases',
      desc: 'A natural upsell from interactive tools, especially strong for social and relationship-driven conversion.',
      features: ['Two-chart comparison', 'Strength and friction mapping', 'Trend-oriented relationship guidance'],
    },
    {
      title: 'Deep Insight Reading',
      price: '$49–$79',
      audience: 'For users seeking higher-value interpretation',
      desc: 'A deeper product focused on life direction, career, relationship, timing, and the strongest early profit layer.',
      features: ['Expanded chart reading', 'Career / relationship / timing focus', 'More complete recommendations'],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Reports</p>
          <h1 className="text-5xl font-serif font-bold mt-4">Paid Products for the First Revenue Layer</h1>
          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            The goal of phase one is not to launch every possible offer. It is to identify which report type gets the best clicks, purchases, and upgrade momentum.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 mb-10">
          <h2 className="text-3xl font-serif font-bold">How visitors should move into paid reports</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">1. Read enough educational content to understand the system and its limits.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">2. Try a free tool to confirm interest and reduce hesitation.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">3. Upgrade into a report when the user wants depth, not just curiosity-level output.</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reports.map((report) => (
            <div key={report.title} className="glass-card rounded-2xl">
              <h2 className="text-2xl font-serif font-bold">{report.title}</h2>
              <p className="text-4xl text-[#7dd3fc] font-bold mt-4">{report.price}</p>
              <p className="text-sm text-gray-500 mt-2">{report.audience}</p>
              <p className="text-gray-400 mt-4 leading-relaxed">{report.desc}</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {report.features.map((item) => (
                  <li key={item} className="flex items-start"><span className="text-[#7dd3fc] mr-3">✦</span>{item}</li>
                ))}
              </ul>
              <div className="mt-8 space-y-3 text-sm text-gray-400">
                <p><span className="text-white">Delivery:</span> Digital report delivered online</p>
                <p><span className="text-white">Turnaround:</span> To be finalized before public launch</p>
                <p><span className="text-white">Best fit:</span> Users who already explored a free tool</p>
                <p><span className="text-white">Good pre-read:</span> What the report includes + methodology</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold">Pages that support report conversion</h2>
            <div className="mt-4 space-y-3 text-gray-300 leading-relaxed text-sm">
              <p>• <a href="/learn/what-does-a-bazi-report-include" className="text-white hover:text-[#7dd3fc]">What does a BaZi report include?</a></p>
              <p>• <a href="/methodology" className="text-white hover:text-[#7dd3fc]">Methodology</a></p>
              <p>• <a href="/editorial-policy" className="text-white hover:text-[#7dd3fc]">Editorial Policy</a></p>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold">What should happen before launch</h2>
            <div className="mt-4 space-y-3 text-gray-300 leading-relaxed text-sm">
              <p>• Finalize turnaround and delivery language.</p>
              <p>• Decide revision and refund policy.</p>
              <p>• Make sure tool outputs and paid report scope do not overlap too much.</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-serif font-bold">Recommended phase-one pricing logic</h2>
          <p className="text-gray-400 mt-4 max-w-3xl leading-relaxed">
            Use one low-ticket product to reduce friction, one emotionally resonant upsell product to increase conversion, and one deeper product to test whether a stronger profit layer can form early.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Low-ticket products reduce hesitation and increase first purchase probability.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Emotion-led offers convert well when users already interacted with a free tool.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Deeper readings test whether the business can support a stronger profit layer.</div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-white font-semibold mb-2">What users should understand before buying</h3>
              <p>This is a symbolic interpretation product, not a guarantee-based prediction service. Expectations, delivery format, and boundaries should be stated clearly.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-white font-semibold mb-2">Launch checklist before accepting payments</h3>
              <p>Finalize refund language, delivery timing, support scope, and how revisions are handled for paid reports.</p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-[#7dd3fc]/20 bg-[#7dd3fc]/5 p-6 text-sm text-gray-300">
            <h3 className="text-white font-semibold mb-3">Suggested MVP report FAQ</h3>
            <div className="space-y-3">
              <p><span className="text-white">How is the report delivered?</span> As a digital report, usually through the website workflow or email delivery.</p>
              <p><span className="text-white">Is this a prediction guarantee?</span> No. It is a structured symbolic interpretation for reflection and guidance.</p>
              <p><span className="text-white">Can the user ask for revisions?</span> Revision policy should be defined before public launch.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="/tools" className="btn-secondary inline-block text-center">Start from free tools</a>
            <a href="/learn" className="btn-primary inline-block text-center">Build trust with content</a>
          </div>
        </div>
      </div>
    </main>
  );
}
