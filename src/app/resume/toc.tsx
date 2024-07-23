import Link from "next/link";
import toc from "./toc.json";

interface TocItem {
  text: string;
  href: string;
}

interface TocItemProps extends TocItem {
  isActive?: boolean;
}

let TocItem = ({ text, href, isActive }: TocItemProps) => (
  <li key={href} className="pb-4" style={{ fontWeight: isActive ? "bold" : "normal" }}>
    <Link href={`#${href}`}>{text}</Link>
  </li>
);

/**
 * Table of contents (left navigation)
 * @param activeItem - id of currently viewable section
 */
export default function Toc({ activeItem }: { activeItem: string }) {
  return (
    <ul className="border-r-2 opacity-100">
      {toc.map((item: TocItem) => (
        <TocItem
          text={item.text}
          href={item.href}
          isActive={activeItem === item.href}
        ></TocItem>
      ))}
    </ul>
  );
}
