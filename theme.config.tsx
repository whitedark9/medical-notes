import { type DocsThemeConfig } from "nextra-theme-docs";
import APP from "~/constants/app.config";
import Head from "~/ui/theme-config-components/Head";
import Logo from "~/ui/theme-config-components/Logo";
import MDXComponents from "~/ui/theme-config-components/MDXComponents";

const config: DocsThemeConfig = {
  nextThemes: {
    defaultTheme: APP.defaultTheme,
    storageKey: APP.themeStorageKey,
  },
  darkMode: true,
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
  },
  docsRepositoryBase: APP.repository + "/tree/main",
  feedback: { content: null },
};

export default config;
