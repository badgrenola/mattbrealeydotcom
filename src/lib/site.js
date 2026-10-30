export const site = {
  origin: "https://mattbrealey.com",
  name: "Matt Brealey",
  description: "The portfolio site of an ex-Apple developer and 3D data wrangler.",
  locale: "en_GB",
  themeColor: "#db2777", // Tailwind pink-600
  github: "https://github.com/badgrenola",
  linkedin: "https://www.linkedin.com/in/mattbrealey/",
  image: {
    path: "/social-default.jpg",
    alt: "Matt Brealey's head",
    width: 1200,
    height: 630,
  },
};

/**
 * Turn a frontmatter date such as "15th April 2020" into an ISO date (2020-04-15).
 * Returns undefined if it can't be parsed.
 */
export function toISODate(date) {
  const parsed = new Date(`${String(date).replace(/(\d+)(st|nd|rd|th)/, "$1")} UTC`);
  return isNaN(parsed) ? undefined : parsed.toISOString().slice(0, 10);
}
