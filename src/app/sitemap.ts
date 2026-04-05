export default function sitemap() {
  const baseUrl = 'https://www.lingxiao-mysticism.com';
  const lastModified = new Date();

  const staticPages = [
    { url: `${baseUrl}/`, changeFrequency: 'daily' as const, priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/getting-started`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/tools`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/reports`, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${baseUrl}/learn`, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/methodology`, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${baseUrl}/editorial-policy`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/sources`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/faq`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/terms`, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/disclaimer`, changeFrequency: 'monthly' as const, priority: 0.5 },
  ].map((page) => ({ ...page, lastModified }));

  const learnPages = [
    'what-is-bazi',
    'five-elements-explained',
    'can-ai-read-bazi',
    'unknown-birth-time',
    'how-we-use-ai',
    'how-accurate-is-bazi',
    'what-does-a-bazi-report-include',
    'what-is-a-day-master',
    'what-are-the-ten-gods',
    'heavenly-stems-and-earthly-branches',
    'bazi-vs-western-astrology',
    'feng-shui-basics',
    'can-bazi-predict-career',
    'can-bazi-predict-marriage',
    'is-bazi-a-religion',
    'is-feng-shui-superstition',
  ].map((slug) => ({
    url: `${baseUrl}/learn/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  const blogPages = [
    '2026-04-04-what-makes-bazi-different-from-western-astrology',
    '2026-04-04-understanding-five-elements',
    '2026-04-04-how-bazi-can-help-with-career-choices',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...learnPages, ...blogPages];
}
