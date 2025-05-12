import APP from "~/constants/configs/app";
import Head from "~/ui/components/Head";
import Logo from "~/ui/components/Logo";
import MDXComponents from "~/ui/mdx-components";

export default {
  nextThemes: {
    defaultTheme: APP.defaultTheme,
    storageKey: APP.themeStorageKey,
  },
  darkMode: true,
  color: {
    hue: { light: 226, dark: 210 },
    saturation: 96,
    lightness: 39,
  },
  head: Head,
  logo: Logo,
  components: MDXComponents,
  toc: {
    backToTop: "Scroll to top",
    title: "Table of Contents",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    autoCollapse: true,
  },
  footer: {
    component: null,
  },
  project: {
    link: APP.repository,
    icon: null,
  },
  feedback: { content: null },
  editLink: { component: null },
};
