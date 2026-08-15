import Image from "next/image";

import { HeroMetrics } from "./HeroMetrics";
import { HeroActions } from "./HeroActions";
import { HeroBadge } from "./HeroBadge";
import { HeroDescription } from "./HeroDescription";
import { HeroHeading } from "./HeroHeading";
import { ScrollIndicator } from "./ScrollIndicator";

export function Hero() {
  return (
    <section
      className="
        container-page
        flex
        min-h-screen
        flex-col
        justify-center
        py-24
      "
    >
      <div className="grid items-center gap-16 lg:grid-cols-[1.35fr_0.65fr]">
        <div>
          <HeroBadge />

          <HeroHeading />

          <HeroDescription />

          <HeroActions />

          <HeroMetrics />
        </div>

        <div className="hidden lg:block">
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-sm
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-2
            "
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/profile.png"
                alt="Tanishq Meshram"
                fill
                priority
                sizes="(max-width: 1024px) 0px, 35vw"
                className="object-cover object-center grayscale"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08120F]/40 via-transparent to-transparent" />
            </div>

            <div className="flex items-center justify-between px-3 py-3">
              <span className="font-mono text-xs text-foreground/50">
                CYBERSECURITY • SYSTEMS • OPEN SOURCE
              </span>

              <span className="h-2 w-2 rounded-full bg-[#65FF9A]" />
            </div>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}