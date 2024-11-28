import { MDXProps } from "~/constants/types";

export default function Italic({ children }: MDXProps) {
  return (
    <i className={`font-sans text-yellow-600 underline dark:text-yellow-600`}>
      {children}
    </i>
  );
}
