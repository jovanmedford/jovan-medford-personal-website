import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block mb-20">
      <Image
        alt="The letters JM in an origami style."
        width={65}
        height={33}
        src="/light-logo.svg"
      ></Image>
    </Link>
  );
}
