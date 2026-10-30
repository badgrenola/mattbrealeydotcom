import { site } from "#lib/site.js";
import { articlesByDate } from "#lib/content.js";

export const prerender = true;

const escape = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export function GET() {
  const articles = articlesByDate();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(site.name)}: Articles</title>
    <link>${site.origin}/articles</link>
    <description>${escape(site.description)}</description>
    <language>en-gb</language>
    <atom:link href="${site.origin}/rss.xml" rel="self" type="application/rss+xml" />
${articles
  .map(
    (a) => `    <item>
      <title>${escape(a.title)}</title>
      <link>${site.origin}/articles/${a.slug}</link>
      <guid isPermaLink="true">${site.origin}/articles/${a.slug}</guid>
      <pubDate>${new Date(a.isoDate).toUTCString()}</pubDate>
      <description>${escape(a.desc)}</description>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>
`;

  return new Response(body, { headers: { "Content-Type": "application/rss+xml" } });
}
