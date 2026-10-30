import { fileURLToPath } from "node:url";
import remarkAbbr from "remark-abbr";
import rehypeSlug from "rehype-slug";
import rehypeFigure from "rehype-figure";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export const mdsvexConfig = {
  extensions: [".svelte.md", ".md", ".svx"],
  smartypants: {
    dashes: "oldschool",
  },
  remarkPlugins: [remarkAbbr],
  rehypePlugins: [
    rehypeSlug,
    rehypeFigure,
    [rehypeAutolinkHeadings, { behavior: "wrap" }],
  ],
  layout: {
    articles: fileURLToPath(new URL("./src/lib/ArticleLayout.svelte", import.meta.url)),
    projects: fileURLToPath(new URL("./src/lib/ProjectLayout.svelte", import.meta.url)),
  },
};
