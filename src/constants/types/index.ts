export interface MDXProps {
  children?: React.ReactNode;
}

export type CalloutType = "default" | "info" | "warning" | "error" | "question";

export interface SectionProps {
  show?: boolean;
  children?: React.ReactNode;
}

export interface MCQType {
  id: number;
  statement: string;
  choices: ChoiceType[];
}

export interface ChoiceType {
  index?: number;
  answer: string;
  answerKey: boolean;
  reason: string;
}

// export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
//   mode?: "contain" | "outline";
//   variant?: "warning" | "primary" | "error" | "success" | "neutral";
// }

// export interface ChoicesProps {
//   value: string;
//   index: number;
//   onClick: (status: boolean, index: number) => void;
//   showResult: boolean;
//   userAnswer: boolean;
//   answer: boolean;
// }
