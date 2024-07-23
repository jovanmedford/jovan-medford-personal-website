import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="flex">
      <div className="mr-4">
        <Logo />
      </div>
      <nav className="flex gap-2">
        <a href="https://medium.com/@jovanmedford">Blog</a>
        <div>|</div>
        <Link href="resume">Resume</Link>
      </nav>
    </header>
  );
}
