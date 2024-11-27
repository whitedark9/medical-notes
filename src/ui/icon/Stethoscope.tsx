import Image from "next/image";

export default function Stethoscope({ size = 24 }) {
  return (
    <Image
      src={"/icons/stethoscope.png"}
      alt={"stethoscope"}
      width={size}
      height={size}
    />
  );
}
