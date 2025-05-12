import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./theme.config.tsx"],
  theme: {},
  plugins: [],
  important: true,
  darkMode: "class",
};

export default config;
