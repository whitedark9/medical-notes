export interface MDXProps {
  children?: React.ReactNode;
}

export type CalloutType = "default" | "info" | "warning" | "error" | "question";

export interface SectionProps {
  show?: boolean;
  children?: React.ReactNode;
}
