import { useConfig } from "nextra-theme-docs";
import APP from "~/constants/configs/app";

export default function Head() {
  const { title } = useConfig();

  return (
    <>
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="theme-color" content="#fff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="keyword" content={title} /> {/**TODO: Add keywords */}
      <meta name="description" content={APP.description} />
      <meta name="og:description" content={APP.description} />
      <meta
        name="og:title"
        content={title ? `${title} - ${APP.shortName}` : APP.shortName}
      />
      <meta name="apple-mobile-web-app-title" content={APP.shortName} />
      <link rel="icon" href="/favicon.png" type="image/png" />
      {/**favicon for dark mode of browser */}
      <link
        rel="icon"
        href="/favicon-dark.png"
        type="image/png"
        media="(prefers-color-scheme: dark)"
      />
      {/** favicon for light mode of browser */}
      <link
        rel="icon"
        href="/favicon.png"
        type="image/png"
        media="(prefers-color-scheme: light)"
      />
      <title>{title || APP.name}</title>
    </>
  );
}
