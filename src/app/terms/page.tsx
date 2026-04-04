import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing access to the website, use of tools, report purchases, and acceptable use.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5] text-[#231a14] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-[#5ba4a4] uppercase tracking-[0.3em] text-xs">Terms</p>
        <h1 className="text-5xl font-serif font-bold mt-4">Terms of Service</h1>
        <div className="organics rounded-2xl mt-10 space-y-8 text-[#504035] leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#231a14] mb-3">1. Acceptance of Terms</h2>
            <p>By using this website, you agree to these terms and to any additional policies referenced on the site.</p>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#231a14] mb-3">2. Permitted Use</h2>
            <p>You may use the website for lawful personal or business purposes related to learning, exploration, and purchasing available digital services. You may not misuse the site, attempt to disrupt its operation, or exploit its content unlawfully.</p>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#231a14] mb-3">3. Reports and Digital Products</h2>
            <p>Paid reports, readings, and digital deliverables may be offered through the site. Before full launch, refund policy, delivery timing, revision scope, and support expectations should be specified in final commercial terms.</p>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#231a14] mb-3">4. Intellectual Property</h2>
            <p>All website content, branding, visual assets, copy, and generated materials remain protected by applicable intellectual property laws unless otherwise stated.</p>
          </section>
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#231a14] mb-3">5. Limitation of Liability</h2>
            <p>To the fullest extent allowed by law, the site and its operators are not liable for decisions, losses, or consequences arising from use of the content, tools, or reports.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
