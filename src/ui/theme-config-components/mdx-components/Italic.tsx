import { MDXProps } from "~/constants/types";

export default function Italic({ children }: MDXProps) {
  return (
    <i className={`text-yellow-500 underline dark:text-yellow-600`}>
      {children}
    </i>
  );
}
