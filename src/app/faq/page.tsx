import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about LingXiao Metaphysics, how the platform works, what reports include, and how user data is handled.',
  openGraph: {
    title: 'FAQ | LingXiao Metaphysics',
    description:
      'Answers to common questions about tools, reports, AI use, privacy, and expectations.',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Is this a fortune telling website or a learning platform?',
    a: 'It is better understood as a Chinese metaphysics platform. The site combines educational content, practical tools, and deeper interpretive report options.',
  },
  {
    q: 'Does AI generate everything automatically?',
    a: 'The intended approach is not to let AI invent structure from nothing. A stronger workflow combines clear symbolic structure with AI-assisted explanation and presentation.',
  },
  {
    q: 'Are the reports guarantees or predictions?',
    a: 'No. Reports are presented as structured symbolic interpretation, reflection, and guidance. They are not guarantees and should not be treated as certainty-based predictions.',
  },
  {
    q: 'What is the best first step for a new visitor?',
    a: 'Most new visitors should begin with the getting-started guide or a free tool before choosing a paid report.',
  },
  {
    q: 'What if I do not know my birth time?',
    a: 'You can still start exploring, but some types of interpretation become less precise without a birth time. The site should explain that uncertainty clearly.',
  },
  {
    q: 'How is birth data handled?',
    a: 'Birth data should only be collected when necessary, explained clearly before submission, and handled according to the privacy policy and support workflow.',
  },
  {
    q: 'How are reports delivered?',
    a: 'The current site experience should state delivery clearly before purchase or inquiry. In the current version, users may be guided through a website flow or email-based follow-up.',
  },
  {
    q: 'Can users request revisions?',
    a: 'Revision expectations should be stated before purchase. If revisions are offered, the scope and limits should be made clear in advance.',
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">FAQ</p>
          <h1 className="text-5xl font-serif font-bold mt-4">Frequently Asked Questions</h1>
          <p className="text-[#7a6d60] text-lg mt-6 leading-relaxed">
            These answers are here to make the platform easier to understand before you try a tool, request a report, or share any personal information.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="organics rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold">{item.q}</h2>
              <p className="text-[#7a6d60] mt-4 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
