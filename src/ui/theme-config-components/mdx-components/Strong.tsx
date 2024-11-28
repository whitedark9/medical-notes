import { MDXProps } from "~/constants/types";

export default function Strong({ children }: MDXProps) {
  return (
    <strong className={`font-serif font-bold text-blue-600 dark:text-blue-700`}>
      {children}
    </strong>
  );
}
