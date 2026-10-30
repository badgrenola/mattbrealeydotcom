export const prerender = true;

const toList = (modules) =>
  Object.entries(modules).map(([path, { metadata }]) => ({ metadata, path }));

export function load() {
  return {
    projects: toList(
      import.meta.glob("./projects/*/+page.md", { eager: true })
    ),
    articles: toList(
      import.meta.glob("./articles/*/+page.md", { eager: true })
    ),
  };
}
