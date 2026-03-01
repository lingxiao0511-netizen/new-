'use client';

import Script from 'next/script';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  price?: number;
  currency?: string;
  providerName?: string;
  areaServed?: string;
}

/**
 * 服务结构化数据组件 (Schema.org Service)
 * 用于服务页面的 SEO 优化
 */
export function ServiceSchema({
  serviceName,
  description,
  price = 299,
  currency = 'CNY',
  providerName = '灵霄玄学',
  areaServed = '中国',
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: providerName,
    },
    areaServed: {
      '@type': 'Country',
      name: areaServed,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: currency,
      price: price.toString(),
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1580',
    },
  };

  return (
    <Script
      id={`service-schema-${serviceName}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}

/**
 * 文章结构化数据组件 (Schema.org Article)
 * 用于博客文章的 SEO 优化
 */
export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName = '灵霄玄学',
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: headline,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: '灵霄玄学',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.lingxiao-mysticism.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.lingxiao-mysticism.com/blog/' + headline.replace(/\s+/g, '-').toLowerCase(),
    },
  };

  return (
    <Script
      id={`article-schema-${headline.replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

interface FAQSchemaProps {
  questions: {
    question: string;
    answer: string;
  }[];
}

/**
 * FAQ 结构化数据组件 (Schema.org FAQPage)
 * 用于 FAQ 页面的 SEO 优化，可在搜索结果中显示富媒体摘要
 */
export function FAQSchema({ questions }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

interface BreadcrumbSchemaProps {
  items: {
    position: number;
    name: string;
    item: string;
  }[];
}

/**
 * 面包屑结构化数据组件 (Schema.org BreadcrumbList)
 * 用于显示面包屑导航，提升搜索结果展示
 */
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

interface LocalBusinessSchemaProps {
  name: string;
  address: string;
  telephone: string;
  openingHours?: string;
  priceRange?: string;
}

/**
 * 本地商家结构化数据组件 (Schema.org LocalBusiness)
 * 用于本地 SEO 优化，提升地图搜索排名
 */
export function LocalBusinessSchema({
  name,
  address,
  telephone,
  openingHours = 'Mo-Su 09:00-21:00',
  priceRange = '¥¥',
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.split(' ')[0] || '',
      addressLocality: '北京市',
      addressRegion: '北京市',
      postalCode: '100000',
      addressCountry: 'CN',
    },
    telephone: telephone,
    openingHours: openingHours,
    priceRange: priceRange,
    acceptsReservations: 'True',
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}
