import { MDXProps } from "~/constants/types";

export default function Del({ children }: MDXProps) {
  return (
    <del className="text-red-700 no-underline dark:text-red-800">
      {children}
    </del>
  );
}
