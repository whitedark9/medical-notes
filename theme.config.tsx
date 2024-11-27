import APP from "~/constants/configs/app";
import Head from "~/ui/theme-config-components/Head";
import Logo from "~/ui/theme-config-components/Logo";
import MDXComponents from "~/ui/theme-config-components/mdx-components";

export default {
  nextThemes: {
    defaultTheme: APP.defaultTheme,
    storageKey: APP.themeStorageKey,
  },
  // Currently I found hydration error on light mode reloading
  // TODO: Switch on later
  darkMode: false,
  head: Head,
  logo: Logo,
  components: MDXComponents,
  toc: {
    backToTop: true,
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
  docsRepositoryBase: APP.repository + "/tree/main/docs",
  feedback: { content: null },
};
