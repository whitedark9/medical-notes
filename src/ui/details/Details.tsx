import { ReactNode } from "react";

export function Details({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <details>
      <summary>{title}</summary>
      {children}
    </details>
  );
}
