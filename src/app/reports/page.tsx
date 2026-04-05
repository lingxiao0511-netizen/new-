import type { Metadata } from 'next';
import Link from 'next/link';

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
      actionLabel: 'Request Basic Report',
    },
    {
      title: 'Compatibility Report',
      price: '$29',
      audience: 'For people exploring relationship questions',
      desc: 'A natural next step when your main interest is compatibility, dynamics, and relationship patterns.',
      features: ['Two-chart comparison', 'Strength and friction mapping', 'Trend-oriented relationship guidance'],
      actionLabel: 'Request Compatibility Report',
    },
    {
      title: 'Deep Insight Reading',
      price: '$49–$79',
      audience: 'For readers seeking a fuller interpretation',
      desc: 'A deeper report focused on life direction, career, relationship, and timing across several areas of life.',
      features: ['Expanded chart reading', 'Career / relationship / timing focus', 'More complete recommendations'],
      actionLabel: 'Request Deep Reading',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">Reports</p>
          <h1 className="text-5xl font-serif font-bold mt-4">Explore Detailed Reports</h1>
          <p className="text-[#7a6d60] text-lg mt-6 leading-relaxed">
            If you want more than a quick overview, these reports are designed to offer a fuller and more structured reading experience.
          </p>
        </div>

        <div className="organics rounded-2xl p-8 md:p-10 mb-10">
          <h2 className="text-3xl font-serif font-bold">A simple way to choose your next step</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#504035]">
            <div className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4">Read a few guides first if you are still getting familiar with the subject.</div>
            <div className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4">Try a free tool first if you would like a lighter introduction before choosing a report.</div>
            <div className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4">Choose a report when you are looking for a fuller interpretation.</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reports.map((report) => (
            <div key={report.title} className="organics rounded-2xl">
              <h2 className="text-2xl font-serif font-bold">{report.title}</h2>
              <p className="text-4xl text-[#5ba4a4] font-bold mt-4">{report.price}</p>
              <p className="text-sm text-[#7a6d60] mt-2">{report.audience}</p>
              <p className="text-[#7a6d60] mt-4 leading-relaxed">{report.desc}</p>
              <ul className="mt-6 space-y-3 text-sm text-[#504035]">
                {report.features.map((item) => (
                  <li key={item} className="flex items-start"><span className="text-[#5ba4a4] mr-3">✦</span>{item}</li>
                ))}
              </ul>
              <div className="mt-8 space-y-3 text-sm text-[#7a6d60]">
                <p><span className="text-[#231a14]">Delivery:</span> Digital report delivered online or by email follow-up</p>
                <p><span className="text-[#231a14]">Turnaround:</span> The expected timeline should be confirmed before payment</p>
                <p><span className="text-[#231a14]">Best fit:</span> Readers who already know what they want to explore in more depth</p>
                <p><span className="text-[#231a14]">Helpful to read first:</span> What the report includes + our approach</p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <Link href="/contact" className="btn-primary inline-block text-center">{report.actionLabel}</Link>
                <Link href="/faq" className="btn-secondary inline-block text-center">Read before ordering</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="organics rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold">Helpful pages to read before choosing a report</h2>
            <div className="mt-4 space-y-3 text-[#504035] leading-relaxed text-sm">
              <p>• <a href="/learn/what-does-a-bazi-report-include" className="text-[#231a14] hover:text-[#5ba4a4]">What does a BaZi report include?</a></p>
              <p>• <a href="/methodology" className="text-[#231a14] hover:text-[#5ba4a4]">Our Approach</a></p>
              <p>• <a href="/editorial-policy" className="text-[#231a14] hover:text-[#5ba4a4]">Editorial Policy</a></p>
            </div>
          </div>
          <div className="organics rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold">What to check before you buy</h2>
            <div className="mt-4 space-y-3 text-[#504035] leading-relaxed text-sm">
              <p>• Check how delivery timing is explained.</p>
              <p>• Review the revision and refund policy.</p>
              <p>• Make sure you understand how the report differs from the free tools.</p>
            </div>
          </div>
        </div>

        <div className="organics rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-serif font-bold">How these reports differ</h2>
          <p className="text-[#7a6d60] mt-4 max-w-3xl leading-relaxed">
            Some reports are designed as lighter introductions, while others offer a broader and more detailed reading. The best choice depends on how much depth you want right now.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#504035]">
            <div className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4">A lighter report can be a good first step if you want a simple overview.</div>
            <div className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4">A compatibility report is useful when your question is centered on two people.</div>
            <div className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-4">A deeper reading is best if you want a fuller interpretation across several life areas.</div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#504035]">
            <div className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-5">
              <h3 className="text-[#231a14] font-semibold mb-2">What users should understand before buying</h3>
              <p>This is a symbolic interpretation product, not a guarantee-based prediction service. Expectations, delivery format, and boundaries should be stated clearly.</p>
            </div>
            <div className="rounded-xl border border-[rgba(160,148,136,0.3)] bg-[rgba(255,253,248,0.9)] p-5">
              <h3 className="text-[#231a14] font-semibold mb-2">Before you place an order</h3>
              <p>Make sure the delivery timeline, revision policy, and support scope are clear so you know what to expect.</p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-[#5ba4a4]/20 bg-[#5ba4a4]/5 p-6 text-sm text-[#504035]">
            <h3 className="text-[#231a14] font-semibold mb-3">Common report questions</h3>
            <div className="space-y-3">
              <p><span className="text-[#231a14]">How is the report delivered?</span> As a digital report, usually through a website workflow or email delivery.</p>
              <p><span className="text-[#231a14]">Is this a prediction guarantee?</span> No. It is a structured symbolic interpretation for reflection and guidance.</p>
              <p><span className="text-[#231a14]">Can the user ask for revisions?</span> Revision details should be stated clearly before purchase.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/tools" className="btn-secondary inline-block text-center">Try free tools first</Link>
            <Link href="/learn" className="btn-primary inline-block text-center">Read guides first</Link>
            <Link href="/contact" className="btn-primary inline-block text-center">Contact us to order</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
