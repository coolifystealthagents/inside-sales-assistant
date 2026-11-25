import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { blogPosts, researchPosts } from '@/lib/content';
import { october12Blog } from '@/lib/october12-blog';
import { october12Research } from '@/lib/october12-research';
import { october13Blog } from '@/lib/october13-blog';
import { october13Research } from '@/lib/october13-research';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const generatedAt = new Date();
  const staticRoutes = ['', '/about', '/services', '/contact-us', '/blog', '/research', '/privacy', '/terms'];

  return [
    ...staticRoutes.map(path => ({ url: `${base}${path}`, lastModified: generatedAt })),
    ...site.services.map(service => ({ url: `${base}/services/${service.slug}`, lastModified: generatedAt })),
    ...[...october13Blog, ...october12Blog, ...blogPosts].map(post => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
    })),
    ...[...october13Research, ...october12Research, ...researchPosts].map(post => ({
      url: `${base}/research/${post.slug}`,
      lastModified: new Date(post.publishedAt),
    })),
  ];
}
