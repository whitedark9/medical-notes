import { MDXProps } from "~/constants/types";

export default function Del({ children }: MDXProps) {
  return (
    <del className="font-bold text-red-600 no-underline dark:text-red-700">
      {children}
    </del>
  );
}
