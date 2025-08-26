const fs = require('fs');
const path = require('path');

// Basic list of routes - expand if you add more pages or generate dynamically
const routes = [
  '/',
  '/careers',
  '/about',
  '/resources',
  '/streams'
];

const baseUrl = process.env.SITE_URL || 'https://example.com';

const urls = routes.map((r) => {
  return `  <url>\n    <loc>${baseUrl}${r}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, sitemap, 'utf8');
console.log('Sitemap written to', outPath);
