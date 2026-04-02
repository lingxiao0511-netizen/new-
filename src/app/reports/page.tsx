import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reports',
  description: 'Structured reports for readers who want a fuller and more detailed BaZi interpretation.',
  openGraph: {
    title: 'Reports | LingXiao Metaphysics',
    description: 'Explore report options for readers who want more depth than the free tools provide.',
    type: 'website',
  },
};

export default function ReportsPage() {
  const reports = [
    {
      title: 'BaZi Basic Report',
      price: '$19',
      audience: 'For readers who want a simple first report',
      desc: 'A lighter report that offers more structure and detail without feeling overwhelming.',
      features: ['Core chart summary', 'Five Elements interpretation', 'Introductory guidance'],
    },
    {
      title: 'Compatibility Report',
      price: '$29',
      audience: 'For people exploring relationship questions',
      desc: 'A natural next step when your main interest is compatibility, dynamics, and relationship patterns.',
      features: ['Two-chart comparison', 'Strength and friction mapping', 'Trend-oriented relationship guidance'],
    },
    {
      title: 'Deep Insight Reading',
      price: '$49–$79',
      audience: 'For readers seeking a fuller interpretation',
      desc: 'A deeper report focused on life direction, career, relationship, and timing across several areas of life.',
      features: ['Expanded chart reading', 'Career / relationship / timing focus', 'More complete recommendations'],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[#7dd3fc] uppercase tracking-[0.3em] text-xs">Reports</p>
          <h1 className="text-5xl font-serif font-bold mt-4">Explore Detailed Reports</h1>
          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            If you want more than a quick overview, these reports are designed to offer a fuller and more structured reading experience.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10 mb-10">
          <h2 className="text-3xl font-serif font-bold">A simple way to choose your next step</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Read a few guides first if you are still getting familiar with the subject.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Try a free tool first if you would like a lighter introduction before choosing a report.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">Choose a report when you are looking for a fuller interpretation.</div>
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
                <p><span className="text-white">Turnaround:</span> Delivery details will be shown clearly before checkout</p>
                <p><span className="text-white">Best fit:</span> Readers who already know what they want to explore in more depth</p>
                <p><span className="text-white">Helpful to read first:</span> What the report includes + our approach</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold">Helpful pages to read before choosing a report</h2>
            <div className="mt-4 space-y-3 text-gray-300 leading-relaxed text-sm">
              <p>• <a href="/learn/what-does-a-bazi-report-include" className="text-white hover:text-[#7dd3fc]">What does a BaZi report include?</a></p>
              <p>• <a href="/methodology" className="text-white hover:text-[#7dd3fc]">Our Approach</a></p>
              <p>• <a href="/editorial-policy" className="text-white hover:text-[#7dd3fc]">Editorial Policy</a></p>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold">What to check before you buy</h2>
            <div className="mt-4 space-y-3 text-gray-300 leading-relaxed text-sm">
              <p>• Check how delivery timing is explained.</p>
              <p>• Review the revision and refund policy.</p>
              <p>• Make sure you understand how the report differs from the free tools.</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-serif font-bold">How these reports differ</h2>
          <p className="text-gray-400 mt-4 max-w-3xl leading-relaxed">
            Some reports are designed as lighter introductions, while others offer a broader and more detailed reading. The best choice depends on how much depth you want right now.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">A lighter report can be a good first step if you want a simple overview.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">A compatibility report is useful when your question is centered on two people.</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">A deeper reading is best if you want a fuller interpretation across several life areas.</div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-white font-semibold mb-2">What users should understand before buying</h3>
              <p>This is a symbolic interpretation product, not a guarantee-based prediction service. Expectations, delivery format, and boundaries should be stated clearly.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-white font-semibold mb-2">Before you place an order</h3>
              <p>Make sure the delivery timeline, revision policy, and support scope are clear so you know what to expect.</p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-[#7dd3fc]/20 bg-[#7dd3fc]/5 p-6 text-sm text-gray-300">
            <h3 className="text-white font-semibold mb-3">Common report questions</h3>
            <div className="space-y-3">
              <p><span className="text-white">How is the report delivered?</span> As a digital report, usually through the website workflow or email delivery.</p>
              <p><span className="text-white">Is this a prediction guarantee?</span> No. It is a structured symbolic interpretation for reflection and guidance.</p>
              <p><span className="text-white">Can the user ask for revisions?</span> Revision details should be stated clearly before checkout.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="/tools" className="btn-secondary inline-block text-center">Try free tools first</a>
            <a href="/learn" className="btn-primary inline-block text-center">Read guides first</a>
          </div>
        </div>
      </div>
    </main>
  );
}
