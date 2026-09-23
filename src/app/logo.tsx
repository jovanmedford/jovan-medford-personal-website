import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block shrink-0" aria-label="Jovan Medford home">
      <Image
        alt="The letters JM in an origami style."
        width={58}
        height={31}
        src="/logo.png"
        className="h-auto w-[3.625rem] md:w-[2.8125rem]"
      />
    </Link>
  );
}
