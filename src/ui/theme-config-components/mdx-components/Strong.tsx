import { MDXProps } from "~/constants/types";

export default function Strong({ children }: MDXProps) {
  return (
    <strong className={`font-bold text-blue-700 dark:text-blue-800`}>
      {children}
    </strong>
  );
}
