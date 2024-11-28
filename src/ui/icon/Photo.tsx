import Image from "next/image";

export default function Photo({ size = 24 }) {
  return (
    <Image src={"/icons/photo.png"} alt={"book"} width={size} height={size} />
  );
}
