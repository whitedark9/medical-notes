import React from "react";
import Alert from "../alert/Alert";

export const Bold = ({ children }: { children?: React.ReactNode }) => (
  <strong className={`text-primary font-bold`}>{children}</strong>
);

export const Italic = ({ children }: { children?: React.ReactNode }) => (
  <i className={`text-warning underline`}>{children}</i>
);

export const Strikethrough = ({ children }: { children?: React.ReactNode }) => (
  <del className="text-error font-bold no-underline">{children}</del>
);

export const Blockquote = ({ children }: { children?: React.ReactNode }) => (
  <Alert className="mt-3">{children}</Alert>
);

const MDXComponents = {
  strong: Bold,
  del: Strikethrough,
  blockquote: Blockquote,
  em: Italic,
};

export default MDXComponents;
