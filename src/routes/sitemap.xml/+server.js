import { site } from "#lib/site.js";
import { projects, articlesByDate } from "#lib/content.js";

export const prerender = true;

export function GET() {
  const urls = [
    { path: "/" },
    { path: "/projects" },
    { path: "/articles" },
    ...projects.map(({ metadata }) => ({ path: `/projects/${metadata.slug}` })),
    ...articlesByDate().map((a) => ({ path: `/articles/${a.slug}`, lastmod: a.isoDate })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, lastmod }) =>
      `  <url><loc>${site.origin}${path === "/" ? "/" : path}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
