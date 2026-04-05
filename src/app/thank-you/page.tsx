import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for contacting LingXiao Metaphysics.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="organics rounded-2xl p-10 text-center">
          <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">Thank You</p>
          <h1 className="text-5xl font-serif font-bold mt-4">Your message is on its way</h1>
          <p className="text-[#7a6d60] text-lg mt-6 leading-relaxed">
            Thank you for reaching out. If you contacted us by email, we will reply as soon as possible. In the meantime, you can continue exploring the beginner guides, tools, and report pages.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/getting-started" className="btn-primary inline-block text-center">Start here</Link>
            <Link href="/tools" className="btn-secondary inline-block text-center">Explore free tools</Link>
            <Link href="/reports" className="btn-secondary inline-block text-center">View reports</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
