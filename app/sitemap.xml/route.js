import { getAllBlogs } from '@/data/blogs';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://lumixcore.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Get all blog posts
  const blogs = getAllBlogs();
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: `${baseUrl}/blogs`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/privacy`,
      lastmod: '2025-12-14',
      changefreq: 'monthly',
      priority: '0.3'
    },
    {
      url: `${baseUrl}/tos`,
      lastmod: '2025-12-14',
      changefreq: 'monthly',
      priority: '0.3'
    }
  ];

  // Blog post pages
  const blogPages = blogs.map(blog => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastmod: blog.publishedAt,
    changefreq: 'monthly',
    priority: '0.7'
  }));

  // Combine all pages
  const allPages = [...staticPages, ...blogPages];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
