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
      "
    >
      <HeroBadge />

      <HeroHeading />

      <HeroDescription />

      <HeroActions />

      <HeroMetrics />

      <ScrollIndicator />
    </section>
  );
}