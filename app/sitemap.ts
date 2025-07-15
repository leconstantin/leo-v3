import { allPosts } from 'content-collections';
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteConfig.url}/blogs`,
    },
    {
      url: `${siteConfig.url}/projects`,
    },
    {
      url: `${siteConfig.url}/certificates`,
    },
    ...allPosts.map((post) => ({
      url: `${siteConfig.url}${post.slug}`,
      lastModified: post.date,
    })),
  ];
}
