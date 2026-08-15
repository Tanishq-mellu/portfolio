import Link from "next/link";
import { NAV_LINKS } from "@/lib/navigation";

export function NavLinks() {
  return (
    <nav aria-label="Primary Navigation">
      <ul className="flex items-center gap-8">
        {NAV_LINKS.map((item) => (
          <li key={item.href}>
            <Link
  href={item.href}
  className="
    group
    relative
    text-sm
    font-medium
    text-foreground/70
    transition-colors
    duration-200
    hover:text-foreground
  "
>
  {item.label}

  <span
    className="
      absolute
      -bottom-1
      left-0
      h-px
      w-0
      bg-[#65FF9A]
      transition-all
      duration-200
      group-hover:w-full
    "
  />
</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}