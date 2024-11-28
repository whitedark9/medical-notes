import Image from "next/image";

export default function QuestionMark({ size = 24 }) {
  return (
    <Image
      src={"/icons/question-mark.png"}
      alt={"book"}
      width={size}
      height={size}
    />
  );
}
