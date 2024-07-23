import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block">
      <Image
        alt="The letters JM in an origami style."
        width={45}
        height={45}
        src="/logo.png"
      ></Image>
    </Link>
  );
}
