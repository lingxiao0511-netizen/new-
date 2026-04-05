'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const initialState = {
  name: '',
  email: '',
  inquiryType: 'general',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'contact-page' }),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || 'Submission failed');
      }

      setForm(initialState);
      router.push('/thank-you');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm text-[#504035] mb-2">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-[rgba(160,148,136,0.3)] bg-white/80 px-4 py-3 outline-none focus:border-[#5ba4a4]"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-[#504035] mb-2">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-[rgba(160,148,136,0.3)] bg-white/80 px-4 py-3 outline-none focus:border-[#5ba4a4]"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="inquiryType" className="block text-sm text-[#504035] mb-2">Inquiry type</label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={form.inquiryType}
          onChange={handleChange}
          className="w-full rounded-xl border border-[rgba(160,148,136,0.3)] bg-white/80 px-4 py-3 outline-none focus:border-[#5ba4a4]"
        >
          <option value="general">General question</option>
          <option value="tool">Tool support</option>
          <option value="report">Report request</option>
          <option value="partnership">Partnership</option>
        </select>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm text-[#504035] mb-2">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-[rgba(160,148,136,0.3)] bg-white/80 px-4 py-3 outline-none focus:border-[#5ba4a4]"
          placeholder="What do you need help with?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-[#504035] mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full rounded-xl border border-[rgba(160,148,136,0.3)] bg-white/80 px-4 py-3 outline-none focus:border-[#5ba4a4]"
          placeholder="Describe your question, goal, or what you want to request."
        />
      </div>

      {error ? <p className="text-sm text-[#b14d3f]">{error}</p> : null}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary inline-block text-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Submitting...' : 'Send message'}
      </button>
    </form>
  );
}
