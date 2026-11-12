import { fileURLToPath } from "node:url";
import remarkAbbr from "remark-abbr";
import rehypeSlug from "rehype-slug";
import rehypeFigure from "rehype-figure";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const SKIP_NODES = new Set(["code", "html", "yaml"]);

function countWords(node) {
  if (SKIP_NODES.has(node.type)) return 0;
  if (node.type === "text" || node.type === "inlineCode") {
    return node.value.split(/\s+/).filter(Boolean).length;
  }
  return (node.children || []).reduce((sum, child) => sum + countWords(child), 0);
}

const remarkReadingTime = () => (tree, file) => {
  const filename = (file.filename || file.path || "").replaceAll("\\", "/");
  if (filename && !filename.includes("/src/routes/articles/")) return;
  const words = countWords(tree);
  file.data.fm = {
    ...(file.data.fm || {}),
    timeToRead: Math.max(1, Math.ceil(words / 220)),
  };
};

export const mdsvexConfig = {
  extensions: [".svelte.md", ".md", ".svx"],
  smartypants: {
    dashes: "oldschool",
  },
  remarkPlugins: [remarkAbbr, remarkReadingTime],
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
