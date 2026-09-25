import Link from "next/link";
import { Copyright } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Container } from "./_components/container";

const navigation = [
  { href: "/blog", label: "Writing" },
  { href: "/resume", label: "Work" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/jovanmedford",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "https://github.com/jovanmedford",
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    href: "https://x.com/jovand3v",
    label: "X",
    Icon: FaXTwitter,
  },
];

export default function Footer() {
  return (
    <footer className="bg-light text-black">
      <Container className="pb-10 pt-16 md:pt-20">
        <div className="mx-auto max-w-3xl border-t border-black/30 pt-8 text-center">
          <nav
            aria-label="Footer navigation"
            className="flex items-center justify-center gap-8 text-sm uppercase"
          >
            {navigation.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex items-center justify-center gap-2">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-8 w-8 items-center justify-center transition-colors hover:text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500"
              >
                <Icon aria-hidden="true" className="h-8 w-8" />
              </a>
            ))}
          </div>

          <p className="mt-6 flex items-center justify-center gap-1 text-xs">
            <Copyright aria-hidden="true" size={12} strokeWidth={2} />
            <span>2021 - present Jovan Medford.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
