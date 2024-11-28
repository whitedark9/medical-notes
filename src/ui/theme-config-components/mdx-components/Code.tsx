import { MDXProps } from "~/constants/types";

export default function Code({ children }: MDXProps) {
  return (
    <code className="rounded-md bg-neutral-300 px-2 py-0.5 font-mono font-bold text-green-600 dark:bg-neutral-800 dark:text-green-700">
      {children}
    </code>
  );
}
