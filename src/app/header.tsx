import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "./logo";
import { Container } from "./_components/container";

const navigation = [
  { href: "https://medium.com/@jovanmedford", label: "Writing" },
  { href: "/resume", label: "Work" },
];

function NavigationLinks() {
  return navigation.map(({ href, label }) => (
    <Link key={href} href={href}>
      {label}
    </Link>
  ));
}

type HeaderProps = {
  className?: string;
};

export default function Header({ className = "" }: HeaderProps) {
  return (
    <header className={className}>
      <Container>
        <div className="flex items-center py-8 md:py-0">
          <Logo />

          <nav
            aria-label="Primary navigation"
            className="ml-12 hidden items-center gap-10 text-sm uppercase md:flex"
          >
            <NavigationLinks />
          </nav>

          <details className="relative ml-auto md:hidden">
            <summary
              aria-label="Toggle navigation menu"
              className="flex cursor-pointer list-none items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden"
            >
              <Menu aria-hidden="true" size={28} strokeWidth={2.5} />
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 z-10 mt-4 flex min-w-40 flex-col gap-4 border border-black/10 bg-light p-4 text-sm uppercase shadow-sm"
            >
              <NavigationLinks />
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
