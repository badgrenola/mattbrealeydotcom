import { toISODate } from "./site.js";

const toList = (modules) =>
  Object.entries(modules).map(([path, { metadata }]) => ({ metadata, path }));

export const projects = toList(
  import.meta.glob("/src/routes/projects/*/+page.md", { eager: true })
);

export const articles = toList(
  import.meta.glob("/src/routes/articles/*/+page.md", { eager: true })
);

/** Articles newest first, with an ISO date added to each. */
export const articlesByDate = () =>
  articles
    .map(({ metadata }) => ({ ...metadata, isoDate: toISODate(metadata.date) }))
    .sort((a, b) => b.isoDate.localeCompare(a.isoDate));
