import Image from "next/image";

export default function Stethoscope({ size = 24 }) {
  return (
    <Image
      src={"/icons/book_reading.png"}
      alt={"book"}
      width={size}
      height={size}
    />
  );
}
