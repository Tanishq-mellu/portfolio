import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  footerLinks,
  footerSocialLinks,
} from "./footer-data";

export function FooterLinks() {
  return (
    <div className="grid gap-10 sm:grid-cols-2">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/50">
          Navigate
        </h3>

        <nav className="mt-5 flex flex-col gap-3">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="
                w-fit
                text-sm
                text-foreground/60
                transition-colors
                hover:text-[#65FF9A]
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/50">
          Connect
        </h3>

        <nav className="mt-5 flex flex-col gap-3">
          {footerSocialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                w-fit
                items-center
                gap-2
                text-sm
                text-foreground/60
                transition-colors
                hover:text-[#65FF9A]
              "
            >
              {link.label}

              <ArrowUpRight
                className="
                  h-3.5
                  w-3.5
                  opacity-50
                  transition-opacity
                  group-hover:opacity-100
                "
              />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}