import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const dev = process.env.NODE_ENV === "development";

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    !dev && cssnano({ preset: "default" }),
  ].filter(Boolean),
};
