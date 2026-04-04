import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How LingXiao Metaphysics collects, uses, stores, and protects personal data.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">Privacy</p>
        <h1 className="text-5xl font-serif font-bold mt-4">Privacy Policy</h1>
        <div className="organics rounded-2xl mt-10 space-y-8 text-[#504035] leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#231a14] mb-3">1. Information We Collect</h2>
            <p>We may collect personal information you provide directly, including your name, email address, birth-related information, and any details submitted through forms, tools, or report requests.</p>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#231a14] mb-3">2. How We Use Information</h2>
            <p>We use submitted information to operate the website, generate symbolic charts and interpretations, deliver reports, respond to inquiries, improve the product experience, and communicate important updates.</p>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#231a14] mb-3">3. Birth Data and Sensitive Inputs</h2>
            <p>Birth date, birth time, and related information may be used to generate Chinese metaphysics outputs such as BaZi charts, Five Elements summaries, and compatibility interpretations. You should explain clearly before full launch whether such data is stored, for how long, and how deletion requests are handled.</p>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#231a14] mb-3">4. Data Retention</h2>
            <p>We recommend retaining personal data only for as long as necessary to provide the requested service, comply with legal obligations, and maintain service quality. Before commercial launch, define a concrete retention period and deletion workflow.</p>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#231a14] mb-3">5. Third-Party Services</h2>
            <p>The site may use third-party providers such as hosting, analytics, payment, database, email, or authentication services. Those providers may process data according to their own privacy terms.</p>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#231a14] mb-3">6. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have rights to request access, correction, deletion, or restriction of your personal data. Before broad launch, add a dedicated contact method for privacy requests.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
