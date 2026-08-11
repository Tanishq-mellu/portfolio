import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contactInfo, contactLinks } from "./contact-data";

export function ContactLinks() {
  return (
    <div className="space-y-4">
      <a
        href={`mailto:${contactInfo.email}`}
        className="
          group
          flex
          items-center
          justify-between
          border-b
          border-white/10
          py-4
          transition-colors
          hover:border-[#65FF9A]/40
        "
      >
        <span className="text-foreground/70">
          {contactInfo.email}
        </span>

        <ArrowUpRight
          className="
            h-4
            w-4
            text-foreground/40
            transition-colors
            group-hover:text-[#65FF9A]
          "
        />
      </a>

      {contactLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            flex
            items-center
            justify-between
            border-b
            border-white/10
            py-4
            transition-colors
            hover:border-[#65FF9A]/40
          "
        >
          <span className="text-foreground/70">
            {link.label}
          </span>

          <ArrowUpRight
            className="
              h-4
              w-4
              text-foreground/40
              transition-colors
              group-hover:text-[#65FF9A]
            "
          />
        </Link>
      ))}
    </div>
  );
}