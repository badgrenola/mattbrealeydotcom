import { projects, articles } from "#lib/content.js";

export const prerender = true;
export const trailingSlash = "never";

export function load() {
  return { projects, articles };
}
