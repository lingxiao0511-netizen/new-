import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact LingXiao Metaphysics for questions, report requests, collaborations, or support related to tools and readings.',
  openGraph: {
    title: 'Contact | LingXiao Metaphysics',
    description:
      'Get in touch about reports, support, and general questions.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">Contact</p>
          <h1 className="text-5xl font-serif font-bold mt-4">Get in touch</h1>
          <p className="text-[#7a6d60] text-lg mt-6 leading-relaxed">
            If you have questions about the tools, want to request a report, or need support before placing an order, send a message here and we will follow up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="organics rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold">Contact form</h2>
            <p className="text-[#7a6d60] mt-4 leading-relaxed">
              Tell us what you want to explore, and include only the information needed for a first reply.
            </p>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="organics rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold">What to include</h2>
              <div className="mt-4 space-y-3 text-[#504035] leading-relaxed">
                <p>• Which tool or report you are asking about</p>
                <p>• Your main question or goal</p>
                <p>• Whether this is a first-time inquiry or follow-up</p>
                <p>• Any timing expectations you already have</p>
              </div>
            </div>

            <div className="organics rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold">Current contact status</h2>
              <p className="text-[#7a6d60] mt-4 leading-relaxed">The website contact form is being stabilized for production deployment. If submission is temporarily unavailable, please retry shortly after email delivery is configured.</p>
            </div>

            <div className="organics rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold">Privacy note</h2>
              <p className="text-[#7a6d60] mt-4 leading-relaxed">Please avoid sending unnecessary sensitive information in your first message. Start with only the details needed to understand your request.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
