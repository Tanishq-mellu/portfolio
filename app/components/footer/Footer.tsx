import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FooterLinks } from "./FooterLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Link
              href="/"
              className="font-mono text-lg font-semibold tracking-tight"
            >
              Tanishq<span className="text-[#65FF9A]">.</span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-foreground/60">
              Researching quantum cryptography, cybersecurity,
              secure systems, and open-source engineering.
            </p>
          </div>

          <FooterLinks />
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground/40">
            © {year} Tanishq Meshram. All rights reserved.
          </p>

          <Link
            href="#top"
            className="
              group
              flex
              w-fit
              items-center
              gap-2
              text-xs
              text-foreground/50
              transition-colors
              hover:text-[#65FF9A]
            "
          >
            Back to top

            <ArrowUp
              className="
                h-3.5
                w-3.5
                transition-transform
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}